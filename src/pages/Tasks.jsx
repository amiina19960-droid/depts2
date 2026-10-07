import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskRecords } from "../context/TaskRecordsContext";
import { useBalance } from "../context/balanceContext";
import { useToast } from "../context/ToastContext";
import "./Tasks.css";

import logo from "../assets/images/header/logo.svg";
import CustomerServiceModal from "../components/CustomerServiceModal";

import avatar from "../assets/images/profile/avatar.png";
import vip1 from "../assets/images/vip/vip1.png";
import vip2 from "../assets/images/vip/vip2.png";
import vip3 from "../assets/images/vip/vip3.png";
import vip4 from "../assets/images/vip/vip4.png";
import homeIcon from "../assets/images/tabBar/homeh.png";
import startingIcon from "../assets/images/tabBar/icon30.png";
import recordsIcon from "../assets/images/tabBar/records.png";

import { useSettings } from "../context/SettingsContext";

const DEFAULT_PRODUCT_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#f6f7fb"/><rect x="20" y="20" width="360" height="360" rx="36" fill="#fff" stroke="#eee" stroke-width="6"/></svg>');

function Spinner({ size = 36, color = "#bbb", style = {} }) {
  return (
    <div
      style={{
        border: `3px solid #ececec`,
        borderTop: `3px solid ${color}`,
        borderRadius: "50%",
        width: size,
        height: size,
        animation: "spin 0.9s linear infinite",
        ...style,
      }}
    />
  );
}

function JumpingBars({ color = "#1fb6fc" }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "6px", height: "50px" }}>
      <style>{`
        @keyframes jump {
          0%, 100% { height: 8px; }
          50% { height: 28px; }
        }
        .jumping-bar {
          width: 5px;
          border-radius: 3px;
          animation: jump 0.6s ease-in-out infinite;
        }
        .bar1 { animation-delay: 0s; }
        .bar2 { animation-delay: 0.2s; }
        .bar3 { animation-delay: 0.4s; }
      `}</style>
      <div className="jumping-bar bar1" style={{ background: color }} />
      <div className="jumping-bar bar2" style={{ background: color }} />
      <div className="jumping-bar bar3" style={{ background: color }} />
    </div>
  );
}

function FadeOverlay({ show, children }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 11000,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "all",
      }}
    >
      {children}
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function validateImageUrl(url, timeout = 2500) {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    const img = new Image();
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      img.onload = img.onerror = null;
      resolve(ok);
    };
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;
    setTimeout(() => finish(false), timeout);
  });
}

async function filterValidImages(urls, timeout = 2500) {
  const checks = urls.map((url) =>
    validateImageUrl(url, timeout).then((ok) => (ok ? url : null))
  );
  const results = await Promise.all(checks);
  return results.filter(Boolean);
}

function GreyToast({ show, message }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "18%",
        transform: "translateX(-50%)",
        background: "#eee",
        color: "#333",
        borderRadius: 10,
        padding: "10px 22px",
        fontWeight: 600,
        boxShadow: "0 6px 22px rgba(0,0,0,0.18)",
        zIndex: 2000,
      }}
    >
      {message}
    </div>
  );
}

const arraysEqual = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};

const vipConfig = { 1: { taskLimit: 40 }, 2: { taskLimit: 45 }, 3: { taskLimit: 50 }, 4: { taskLimit: 55 } };
const START_BLUE = "#1fb6fc";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array;
}

function makeLocalProductList(start = 100, end = 200) {
  const base = "/depts2/assets/images/products/";
  const list = [];
  for (let i = start; i <= end; i++) {
    list.push(`${base}product1(${i}).png`);
  }
  return list;
}

const Tasks = () => {
  const [productGrid, setProductGrid] = useState(() => {
    try {
      const cached = JSON.parse(localStorage.getItem("productGridCache") || "null");
      if (Array.isArray(cached) && cached.length) {
        const firstNine = cached.slice(0, 9);
        while (firstNine.length < 9) firstNine.push(DEFAULT_PRODUCT_IMAGE);
        return firstNine;
      }
    } catch (e) {}
    const base = "/depts2/assets/images/products/";
    return Array.from({ length: 9 }, (_, i) => `${base}product1(${100 + i}).png`);
  });

  const [productGridCandidates, setProductGridCandidates] = useState([]);
  const [cloudinaryPool, setCloudinaryPool] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [showOptimizingToast, setShowOptimizingToast] = useState(false);
  const [submitState, setSubmitState] = useState("");
  const [fadeSpinner, setFadeSpinner] = useState(false);
  const [greyToast, setGreyToast] = useState({ show: false, message: "" });
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [loadingBars, setLoadingBars] = useState(false);

  const navigate = useNavigate();
  const {
    addTaskRecord,
    submitTaskRecord,
    hasPendingTask,
    hasPendingComboTask,
    records,
    fetchTaskRecords,
    setRecords,
  } = useTaskRecords();

  const {
    balance,
    setBalance,
    commissionToday,
    setCommissionToday,
    username,
    vipLevel,
    refreshProfile,
    userProfile
  } = useBalance();

  const { currency } = useSettings();

  const productGridRef = useRef(productGrid);
  useEffect(() => { productGridRef.current = productGrid; }, [productGrid]);
  const validationRunIdRef = useRef(0);

  const [displayUser, setDisplayUser] = useState({
    username: username || "",
    balance: balance != null ? balance : 0,
    commissionToday: commissionToday != null ? commissionToday : 0,
  });

  const fetchProfileDirect = async () => {
    try {
      const token =
        localStorage.getItem("x-auth-token") ||
        localStorage.getItem("authToken") ||
        localStorage.getItem("token") ||
        localStorage.getItem("X-Auth-Token") ||
        null;

      if (!token) return null;

      const resp = await fetch("https://stacks-admin.onrender.com/api/user-profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          "x-auth-token": token
        },
        credentials: "include",
      });

      if (!resp.ok) return null;
      const body = await resp.json();
      const profile = body && (body.data || body.user || body);
      if (!profile) return null;

      const newDisplay = {
        username: profile.username || profile.name || username || "",
        balance: profile.balance ?? profile.walletBalance ?? balance ?? 0,
        commissionToday: profile.commissionToday ?? profile.commission ?? commissionToday ?? 0,
      };
      setDisplayUser(newDisplay);

      if (typeof setBalance === "function" && newDisplay.balance !== undefined) {
        setBalance(prev => (Number(newDisplay.balance) || Number(prev) || 0));
      }
      if (typeof setCommissionToday === "function" && newDisplay.commissionToday !== undefined) {
        setCommissionToday(prev => (Number(newDisplay.commissionToday) || Number(prev) || 0));
      }

      return profile;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    setDisplayUser({
      username: username || (userProfile && userProfile.username) || "",
      balance: balance != null ? balance : (userProfile && userProfile.balance) || 0,
      commissionToday:
        commissionToday != null
          ? commissionToday
          : (userProfile && (userProfile.commissionToday ?? userProfile.commission)) || 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, balance, commissionToday, userProfile]);

  useEffect(() => {
    (async () => {
      try {
        const refreshed = await refreshProfile();
        if (refreshed && typeof refreshed === "object") {
          setDisplayUser({
            username: refreshed.username || refreshed.name || username || "",
            balance: refreshed.balance ?? refreshed.walletBalance ?? balance ?? 0,
            commissionToday: refreshed.commissionToday ?? refreshed.commission ?? commissionToday ?? 0,
          });
        } else {
          await fetchProfileDirect();
        }
      } catch (e) {
        await fetchProfileDirect();
      }
    })();

    if (typeof fetchTaskRecords === "function") fetchTaskRecords().catch(() => {});

    const onAuthLogin = () => {
      (async () => {
        try {
          const refreshed = await refreshProfile();
          if (refreshed && typeof refreshed === "object") {
            setDisplayUser({
              username: refreshed.username || refreshed.name || username || "",
              balance: refreshed.balance ?? refreshed.walletBalance ?? balance ?? 0,
              commissionToday: refreshed.commissionToday ?? refreshed.commission ?? commissionToday ?? 0,
            });
          } else {
            await fetchProfileDirect();
          }
          if (typeof fetchTaskRecords === "function") await fetchTaskRecords();
        } catch (e) {
          await fetchProfileDirect();
          if (typeof fetchTaskRecords === "function") fetchTaskRecords().catch(() => {});
        }
      })();
    };
    window.addEventListener("auth:login", onAuthLogin);

    const onProfileRefresh = () => {
      (async () => {
        try {
          const refreshed = await refreshProfile();
          if (refreshed && typeof refreshed === "object") {
            setDisplayUser({
              username: refreshed.username || refreshed.name || username || "",
              balance: refreshed.balance ?? refreshed.walletBalance ?? balance ?? 0,
              commissionToday: refreshed.commissionToday ?? refreshed.commission ?? commissionToday ?? 0,
            });
          } else {
            await fetchProfileDirect();
          }
        } catch (e) {
          await fetchProfileDirect();
        }
      })();
    };
    window.addEventListener("profile:refresh", onProfileRefresh);

    return () => {
      window.removeEventListener("auth:login", onAuthLogin);
      window.removeEventListener("profile:refresh", onProfileRefresh);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadPool() {
      try {
        const localList = makeLocalProductList(100, 200);
        if (cancelled) return;
        const shuffledLocal = shuffle([...localList]);
        setCloudinaryPool(shuffledLocal);
        setProductGridCandidates(shuffledLocal);
        try { localStorage.setItem("productGridCache", JSON.stringify(shuffledLocal)); } catch (e) {}
      } catch (err) {
        console.warn("Product pool load failed:", err);
      }
    }

    loadPool();

    return () => { cancelled = true; };
  }, []);

  const loadValidatedProductGrid = async (count = 9) => {
    const runId = ++validationRunIdRef.current;
    const pool = cloudinaryPool.length ? cloudinaryPool : productGridCandidates;
    setProductGridCandidates(pool);
    const candidates = pool.slice(0, Math.min(pool.length, 200));
    const valid = await filterValidImages(candidates, 3000);
    const shuffledValid = shuffle([...valid]);
    let final = shuffledValid.slice(0, count);

    if (final.length < count) {
      const fill = [];
      for (let i = 0; i < count - final.length; i++) {
        if (valid.length > 0) {
          fill.push(valid[i % valid.length]);
        } else {
          fill.push(DEFAULT_PRODUCT_IMAGE);
        }
      }
      final = final.concat(fill);
    }

    if (runId === validationRunIdRef.current) {
      if (!arraysEqual(final, productGridRef.current)) setProductGrid(final);
    }
  };

  useEffect(() => {
    loadValidatedProductGrid(9);
    const interval = setInterval(() => {
      loadValidatedProductGrid(9);
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudinaryPool]);

  useEffect(() => {
    if (!Array.isArray(productGrid) || productGrid.length !== 9) {
      const out = Array.isArray(productGrid) ? productGrid.slice(0, 9) : [];
      while (out.length < 9) out.push(DEFAULT_PRODUCT_IMAGE);
      setProductGrid(out);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getCurrentTaskCountThisSet() {
    if (!records || !userProfile) return 0;
    const currentSet = userProfile.currentSet ?? 1;
    let comboTaskCodes = new Set();
    let count = 0;

    records.forEach(r => {
      if (r.status === "Completed" && (r.set === currentSet || r.set === undefined)) {
        if (r.isCombo) {
          if (r.taskCode && !comboTaskCodes.has(r.taskCode)) {
            count += 1;
            comboTaskCodes.add(r.taskCode);
          }
        } else {
          count += 1;
        }
      }
    });

    let pendingComboCodes = new Set();
    let hasPendingCombo = false;
    records.forEach(r => {
      if (r.status === "Pending" && (r.set === currentSet || r.set === undefined)) {
        if (r.isCombo) {
          if (r.taskCode && !pendingComboCodes.has(r.taskCode)) {
            hasPendingCombo = true;
            pendingComboCodes.add(r.taskCode);
          }
        } else {
          count += 1;
        }
      }
    });

    if (hasPendingCombo) count += 1;
    return count;
  }

  const maxTasks =
    (userProfile && userProfile.maxTasks) ||
    vipConfig[Number(vipLevel)]?.taskLimit ||
    40;

  const todaysTasks = getCurrentTaskCountThisSet();

  const showGreyToast = (message, duration = 1600) => {
    setGreyToast({ show: true, message });
    setTimeout(() => setGreyToast({ show: false, message: "" }), duration);
  };

  const handleStartTask = async () => {
    if (hasPendingTask() || hasPendingComboTask()) {
      showGreyToast("Please submit the previous rating before you proceed.");
      return;
    }

    if (todaysTasks >= maxTasks) {
      showGreyToast("Task set complete. Please contact customer service for reset.");
      return;
    }

    // Show loading bars immediately
    setLoadingBars(true);
    setOptimizing(true);

    const imageForTask = productGridRef.current && productGridRef.current.length
      ? productGridRef.current[Math.floor(productGridRef.current.length / 2)] || DEFAULT_PRODUCT_IMAGE
      : DEFAULT_PRODUCT_IMAGE;

    try {
      const result = await addTaskRecord({ image: imageForTask });
      setLoadingBars(false);
      setOptimizing(false);

      if (result && result.isCombo) {
        showGreyToast("Please submit the previous rating before you proceed.", 1800);
        setTimeout(() => navigate("/deposit"), 1800);
        return;
      }

      if (result && result.task) {
        const backendTask = result.task;
        if (!backendTask.product?.image) {
          backendTask.product = backendTask.product || {};
          backendTask.product.image = imageForTask;
        }
        setCurrentTask(backendTask);
        setShowModal(true);
        setSubmitState("");
        if (typeof backendTask.product?.price === "number") {
          setBalance(prev => Number(prev) - Number(backendTask.product.price));
        }

        (async () => {
          try { await refreshProfile(); } catch (e) {}
          try { if (typeof fetchTaskRecords === "function") await fetchTaskRecords(); } catch (e) {}
          try { window.dispatchEvent(new Event("profile:refresh")); } catch (e) {}
          try { window.dispatchEvent(new Event("balance:changed")); } catch (e) {}
        })();
      } else {
        showGreyToast("Failed to start task. Please try again later.");
      }
    } catch (err) {
      setLoadingBars(false);
      setOptimizing(false);
      showGreyToast("API error: " + (err.message || err));
    }
  };

  const handleSubmitTask = async () => {
    if (!currentTask) return;
    setSubmitState("submitting");

    try {
      const result = await submitTaskRecord(currentTask.taskCode);

      if (result && result.success) {
        setSubmitState("submitted");
        if (result.task) {
          const refund = Number(result.task.product?.price) || 0;
          const commission = Number(result.task.product?.commission) || 0;
          setCommissionToday(prev => commission + (Number(prev) || 0));
          setBalance(prev => Number(prev) + refund + commission);
          setRecords(prevRecords => {
            return prevRecords.map(r =>
              r.taskCode === result.task.taskCode
                ? { ...r, ...result.task }
                : r
            );
          });
        }

        (async () => {
          try { await refreshProfile(); } catch (e) {}
          try { if (typeof fetchTaskRecords === "function") await fetchTaskRecords(); } catch (e) {}
          try { window.dispatchEvent(new Event("profile:refresh")); } catch (e) {}
          try { window.dispatchEvent(new Event("balance:changed")); } catch (e) {}
        })();

        setTimeout(() => {
          setShowModal(false);
          setCurrentTask(null);
          setSubmitState("");
          setFadeSpinner(true);
          setTimeout(() => setFadeSpinner(false), 250);
        }, 250);
      } else {
        setSubmitState("");
        showGreyToast(result && result.message ? result.message : "Failed to submit task");
      }
    } catch (err) {
      setSubmitState("");
      showGreyToast("API error: " + (err.message || err));
    }
  };

  const handleGridImgError = (e, index) => {
    const el = e.currentTarget;
    el.onerror = null;
    const pool = productGridRef.current && productGridRef.current.length ? productGridRef.current : productGridCandidates;
    let replacement = DEFAULT_PRODUCT_IMAGE;
    if (pool && pool.length) {
      for (let offset = 0; offset < pool.length; offset++) {
        const idx = (index + offset) % pool.length;
        const candidate = pool[idx];
        if (candidate && candidate !== el.src) {
          replacement = candidate;
          break;
        }
      }
    }
    el.src = replacement;
  };

  const [centerIndex, setCenterIndex] = useState(0);
  const rotationCountRef = useRef(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!productGrid.length) return;
    setCenterIndex(Math.floor(productGrid.length / 2));
  }, [productGrid.length]);

  useEffect(() => {
    if (!productGrid.length) return;
    autoplayRef.current = setInterval(() => {
      rotationCountRef.current += 1;
      setCenterIndex(prev => (prev + 1) % productGrid.length);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [productGrid.length]);

  const pauseAutoplay = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  const resumeAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      rotationCountRef.current += 1;
      setCenterIndex(prev => (prev + 1) % productGrid.length);
    }, 4000);
  };

  const renderCarousel = () => {
    if (!productGrid.length) return null;
    const len = productGrid.length;
    const bigSideIsLeft = rotationCountRef.current % 2 === 0;

    const leftIndex = (centerIndex - 1 + len) % len;
    const rightIndex = (centerIndex + 1) % len;

    return (
      <div className="tasks-carousel-wrap" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay} onTouchStart={pauseAutoplay} onTouchEnd={resumeAutoplay}>
        <div className="tasks-carousel" aria-roledescription="carousel" aria-label="Product carousel">
          <div
            key={`left-${leftIndex}`}
            className={
              `carousel-item side ${bigSideIsLeft ? "left-large" : ""}`
            }
            onClick={() => setCenterIndex(leftIndex)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setCenterIndex(leftIndex); }}
            aria-label={`Show product ${leftIndex + 1}`}
          >
            <div className="carousel-card-inner">
              <img
                src={productGrid[leftIndex] || DEFAULT_PRODUCT_IMAGE}
                alt={`product-${leftIndex}`}
                onError={(e) => handleGridImgError(e, leftIndex)}
              />
            </div>
          </div>

          <div
            key={`center-${centerIndex}`}
            className="carousel-item center"
            onClick={() => {}}
            aria-label={`Current product ${centerIndex + 1}`}
          >
            <div className="carousel-card-inner">
              <img
                src={productGrid[centerIndex] || DEFAULT_PRODUCT_IMAGE}
                alt={`product-${centerIndex}`}
                onError={(e) => handleGridImgError(e, centerIndex)}
              />
            </div>
          </div>

          <div
            key={`right-${rightIndex}`}
            className={
              `carousel-item side ${!bigSideIsLeft ? "right-large" : ""}`
            }
            onClick={() => setCenterIndex(rightIndex)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setCenterIndex(rightIndex); }}
            aria-label={`Show product ${rightIndex + 1}`}
          >
            <div className="carousel-card-inner">
              <img
                src={productGrid[rightIndex] || DEFAULT_PRODUCT_IMAGE}
                alt={`product-${rightIndex}`}
                onError={(e) => handleGridImgError(e, rightIndex)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const vipInfo = (() => {
    const raw = vipLevel ?? userProfile?.vipLevel;
    if (raw === undefined || raw === null) return { level: null, badge: null };
    let lvlNum = null;
    if (typeof raw === "number") lvlNum = raw;
    else if (typeof raw === "string") {
      const m = raw.match(/\d+/);
      lvlNum = m ? Number(m[0]) : NaN;
    } else {
      lvlNum = Number(raw);
    }
    if (!Number.isFinite(lvlNum)) return { level: null, badge: null };
    const level = Math.max(1, Math.min(4, Math.floor(lvlNum)));
    const map = { 1: vip1, 2: vip2, 3: vip3, 4: vip4 };
    const badge = map[level] || null;
    return { level, badge };
  })();

  function renderTaskModal() {
    if (!currentTask) return null;
    const product = currentTask.product || {};
    const displayPrice = (() => {
      const candidate =
        product.price !== undefined && product.price !== null && product.price !== ""
          ? product.price
          : (currentTask?.product?.price ?? currentTask?.totalAmount ?? "");
      if (candidate === "" || candidate === null || candidate === undefined) return "";
      const num = Number(candidate);
      return !isNaN(num) ? num.toFixed(2) : String(candidate);
    })();

    const displayCommission = (() => {
      const c = product.commission ?? "";
      if (c === "" || c === null || c === undefined) return "";
      const num = Number(c);
      return !isNaN(num) ? num.toFixed(2) : String(c);
    })();

    const truncateText = (text, maxLength = 60) => {
      if (!text) return "";
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    };

    return (
      <div className="fixed inset-0 z-50" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(2, 10, 29, 0.78)", padding: 16 }}>
        <div style={{ width: "100%", maxWidth: 420, borderRadius: 18, background: "linear-gradient(145deg, #0b2852 0%, #071b3b 58%, #111d50 100%)", padding: 0, boxShadow: "0 20px 60px rgba(0,0,0,0.48)", border: "1px solid rgba(0, 200, 240, 0.55)", overflow: "hidden" }}>
          {/* Progress counter at top */}
          <div style={{ padding: "16px 18px 8px 18px", color: "#e4f1ff", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            {todaysTasks} / {maxTasks}
          </div>

          {/* Product image - compact */}
          <div style={{ padding: "8px 18px 14px 18px" }}>
            <img 
              src={product.image || DEFAULT_PRODUCT_IMAGE} 
              alt="product" 
              style={{ 
                width: "100%", 
                height: 200, 
                borderRadius: 12, 
                objectFit: "cover", 
                border: "2px solid #00c8f0",
                display: "block"
              }} 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = DEFAULT_PRODUCT_IMAGE; }} 
            />
          </div>

          {/* Product name, rating, and price section */}
          <div style={{ padding: "0 18px 14px 18px" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#e4f1ff", lineHeight: 1.3, marginBottom: 8 }}>
              "{truncateText(product.name, 65)}"
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(20, 55, 105, 0.9)", border: "1px solid rgba(0,200,240,0.28)", padding: "5px 10px", borderRadius: 18 }}>
                <span style={{ color: "#e4f1ff", fontSize: 13, fontWeight: 500 }}>☆</span>
                <span style={{ color: "#e4f1ff", fontSize: 13, fontWeight: 600 }}>9.9</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ color: "#e4f1ff", fontSize: 13, fontWeight: 600 }}>{currency || "USD"}</span>
              <span style={{ color: "#e4f1ff", fontSize: 24, fontWeight: 800 }}>{displayPrice}</span>
            </div>
          </div>

          {/* Grid: Total Amount / Profit */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(0,200,240,0.28)", borderBottom: "1px solid rgba(0,200,240,0.28)" }}>
            <div style={{ padding: "14px 12px", textAlign: "center", borderRight: "1px solid rgba(0,200,240,0.22)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#e4f1ff", marginBottom: 6, letterSpacing: 0.4 }}>TOTAL AMOUNT</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#e4f1ff", marginBottom: 4 }}>{currency || "USD"}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e4f1ff" }}>{displayPrice}</div>
            </div>
            <div style={{ padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#e4f1ff", marginBottom: 6, letterSpacing: 0.4 }}>PROFIT</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#e4f1ff", marginBottom: 4 }}>{currency || "USD"}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e4f1ff" }}>{displayCommission}</div>
            </div>
          </div>

          {/* Created / Order Code */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(0,200,240,0.28)" }}>
            <div style={{ padding: "12px", borderRight: "1px solid rgba(0,200,240,0.22)" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#e4f1ff", marginBottom: 4 }}>Created</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#e4f1ff" }}>{formatDate(product.createdAt || currentTask.createdAt)}</div>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#e4f1ff", marginBottom: 4 }}>Order Code</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#e4f1ff", wordBreak: "break-all" }}>{currentTask.taskCode}</div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ padding: "14px 18px" }}>
            <button 
              onClick={submitState === "" ? handleSubmitTask : undefined} 
              disabled={submitState !== ""} 
              style={{ 
                width: "100%", 
                background: submitState !== "" ? "#31547d" : "linear-gradient(110deg, #00c8f0 0%, #087bda 55%, #7138e8 100%)", 
                color: "#ffffff", 
                border: 0, 
                padding: "14px 10px", 
                borderRadius: 50, 
                fontWeight: 800, 
                fontSize: 15,
                letterSpacing: 0.4,
                cursor: submitState !== "" ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                textTransform: "uppercase"
              }}
              onMouseEnter={(e) => {
                if (submitState === "") {
                  e.currentTarget.style.filter = "brightness(1.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (submitState === "") {
                  e.currentTarget.style.filter = "none";
                }
              }}
            >
              {submitState === "submitting" ? "Submitting..." : submitState === "submitted" ? "Submitted!" : "Press Here to Submit"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const fmtNum = (v) => {
    const n = Number(v || 0);
    if (!Number.isFinite(n)) return "0.00";
    return n.toFixed(2);
  };

  return (
    <div className="tasks-page">
      <header
        className="dashboard-header"
        style={{
          background: "linear-gradient(90deg, #00c8f0 0%, #087bda 55%, #7138e8 100%) bottom / 100% 2px no-repeat, #0b2d63",
          borderBottom: "0",
          boxSizing: "border-box",
        }}
      >
        <img
          src={logo}
          alt="Instrument"
          className="dashboard-logo"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <div className="dashboard-header-actions">
          <button
            type="button"
            className="dashboard-contact"
            onClick={() => setShowServiceModal(true)}
            style={{
              color: "#e4f1ff",
              background: "rgba(8, 38, 83, 0.45)",
              border: "1.5px solid #087bda",
              boxShadow: "inset 0 0 0 1px rgba(0,200,240,0.08)",
            }}
          >
            Contact
          </button>

          <button
            type="button"
            className="dashboard-menu"
            onClick={() => navigate("/profile")}
            aria-label="Open menu"
          >
            <span style={{ background: "#ffffff" }} />
            <span style={{ background: "#ffffff" }} />
            <span style={{ background: "#ffffff" }} />
          </button>
        </div>
      </header>

      <div className="tasks-content">
        <section className="tasks-hero">
          <div className="tasks-user-row">
            <div className="user-left">
              <img src={avatar} alt="Avatar" className="avatar" />
              <div className="user-greeting">
                <small style={{ color: "#ffffff" }}>Hello,</small>
                <div className="user-name" style={{ color: "#ffffff" }}>{displayUser.username || "Champ"}</div>
              </div>
            </div>

            <div className="user-vip">
              <span style={{ color: "#ffffff" }}>VIP{vipInfo.level || 1}</span>
              <div className="vip-badge">
                {vipInfo.badge ? (
                  <img src={vipInfo.badge} alt="VIP" />
                ) : (
                  <img src={vip2} alt="VIP" />
                )}
              </div>
            </div>
          </div>

          <div className="tasks-progress" style={{ color: "#ffffff" }}>{todaysTasks} / {maxTasks}</div>

          {renderCarousel()}

          <div className="tasks-product-title" style={{ color: "#ffffff" }}>
            Complete assigned tasks and earn commissions.
          </div>

          {loadingBars && (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <JumpingBars color={START_BLUE} />
            </div>
          )}

          <div className="tasks-cta-wrap">
            <button
              type="button"
              className="tasks-cta"
              onClick={handleStartTask}
              disabled={optimizing}
            >
              PRESS HERE TO GET STARTED
            </button>
          </div>
        </section>

        <section className="tasks-panel">
          <div className="tasks-panel-header" style={{ color: "#ffffff" }}>TODAY'S COMMISSION</div>

          <div className="tasks-panel-main" style={{ color: "#ffffff" }}>
            <span className="currency" style={{ color: "#ffffff" }}>{currency || "USD"}</span>
            <span>{fmtNum(displayUser.commissionToday)}</span>
          </div>

          <p className="tasks-panel-note" style={{ color: "#cccccc" }}>The displayed amount reflects today's earned commissions.</p>

          <div className="tasks-panel-grid">
            <div className="task-info-box" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}>
              <div className="label" style={{ color: "#ffffff" }}>Balance</div>
              <div className="value">
                <span className="currency" style={{ color: "#ffffff" }}>{currency || "USD"}</span>
                <strong style={{ color: "#ffffff" }}>{fmtNum(displayUser.balance)}</strong>
              </div>
              <div className="muted" style={{ color: "#cccccc" }}>The total balance reflects both the deposited amount and earned commissions.</div>
            </div>

            <div className="task-info-box" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}>
              <div className="label" style={{ color: "#ffffff" }}>Hold Amount</div>
              <div className="value">
                <span className="currency" style={{ color: "#ffffff" }}>{currency || "USD"}</span>
                <strong style={{ color: "#ffffff" }}>0.00</strong>
              </div>
              <div className="muted" style={{ color: "#cccccc" }}>Contact Support for inquiries.</div>
            </div>
          </div>

          <div className="tasks-panel-bottom" style={{ color: "#ffffff", borderTopColor: "rgba(255,255,255,0.2)" }}>
            <div style={{ color: "#ffffff" }}>Fusion Campaign Reward</div>
            <div className="reward-value">
              <span className="currency" style={{ color: "#ffffff" }}>{currency || "USD"}</span>
              <strong style={{ color: "#ffffff" }}>0.00</strong>
            </div>
          </div>
        </section>

        <div className="tasks-notice" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
          <div className="tasks-notice-title" style={{ color: "#ffffff" }}>Important Notice</div>
          <div className="tasks-notice-body" style={{ color: "#cccccc" }}>
            Online Support Hours 10:00 AM - 11:00 PM<br />
            Please contact online support for your assistance
          </div>
        </div>
      </div>

      {showModal && renderTaskModal()}

      {loadingBars && (
        <FadeOverlay show={true}>
          <JumpingBars color={START_BLUE} />
        </FadeOverlay>
      )}

      <FadeOverlay show={fadeSpinner}>
        <Spinner size={54} color={START_BLUE} />
      </FadeOverlay>

      <GreyToast show={greyToast.show} message={greyToast.message} />

      <nav className="bottom-navigation">
        <button className="bottom-item" type="button" onClick={() => navigate("/dashboard")}>
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </button>

        <button className="bottom-item starting" type="button" onClick={() => navigate("/tasks")}>
          <img src={startingIcon} alt="Starting" />
          <span>Starting</span>
        </button>

        <button className="bottom-item" type="button" onClick={() => navigate("/records")}>
          <img src={recordsIcon} alt="Records" />
          <span>Records</span>
        </button>
      </nav>

      <CustomerServiceModal open={showServiceModal} onClose={() => setShowServiceModal(false)} />
    </div>
  );
};

function formatDate(dateValue) {
  if (!dateValue) return "";
  try {
    const date = typeof dateValue === "string" || typeof dateValue === "number" ? new Date(dateValue) : dateValue;
    if (isNaN(date.getTime())) return "";
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch (e) {
    return "";
  }
}

export default Tasks;
