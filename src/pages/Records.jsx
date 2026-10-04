import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskRecords } from "../context/TaskRecordsContext";
import { useBalance } from "../context/balanceContext";
import "./Records.css";

// settings (currency)
import { useSettings } from "../context/SettingsContext";

import CustomerServiceModal from "../components/CustomerServiceModal";

import logo from "../assets/images/header/logo.svg";

import homeIcon from "../assets/images/tabBar/homeh.png";
import startingIcon from "../assets/images/tabBar/icon30.png";
import recordsIcon from "../assets/images/tabBar/records.png";

/* Imported icons requested */
import dateIcon from "../assets/images/download.png";
import backIcon from "../assets/images/download-1.png";

const tabs = ["All", "Pending", "Completed"];

/* Replaced blue with dark grey (kept naming for compatibility) */
const START_BLUE = "#333333";
const BLACK_BG = "#181c23";

const headerStyles = `
  .records-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .records-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .records-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .records-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
  }

  .records-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .records-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .record-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    .records-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .records-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .records-header-actions {
      gap: 9px;
    }

    .records-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .records-menu {
      width: 28px;
      height: 24px;
    }

    .records-menu span {
      height: 2px;
    }
  }
`;

function SpinnerOverlay({ show }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 11000,
        background: "rgba(245,247,251,0.38)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          border: "6px solid #ddd",
          borderTop: `6px solid ${START_BLUE}`,
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function GreyToast({ show, message }) {
  if (!show) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "22%",
        transform: "translateX(-50%)",
        background: "#eee",
        color: "#666",
        borderRadius: 10,
        padding: "10px 28px",
        fontWeight: 500,
        fontSize: 15.5,
        boxShadow: "0 2px 12px #0001",
        zIndex: 99999,
        minWidth: 210,
        maxWidth: "80vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          border: "3px solid #e0e0e0",
          borderTop: "3px solid #bbb",
          borderRadius: "50%",
          marginRight: 13,
          display: "inline-block",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <span>{message}</span>
      <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function RecordsHeader({ onContactClick }) {
  const navigate = useNavigate();
  return (
    <header className="records-header">
      <img src={logo} alt="Instrument" className="records-logo" />
      <div className="records-header-actions">
        <button type="button" className="records-contact" onClick={onContactClick}>Contact</button>
        <button
          type="button"
          className="records-menu"
          onClick={() => navigate("/profile")}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

const Records = () => {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();
  const { records, submitTaskRecord, refreshRecords } = useTaskRecords();
  const { balance, commissionToday, refreshProfile } = useBalance();
  const [submitting, setSubmitting] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [greyToast, setGreyToast] = useState({ show: false, message: "" });
  const [showContactModal, setShowContactModal] = useState(false);

  const [showSpinner, setShowSpinner] = useState(true);

  // settings (currency)
  const { currency } = useSettings();

  // On mount: refresh records
  useEffect(() => {
    setShowSpinner(true);
    if (refreshRecords) {
      let didFinish = false;
      const finish = () => {
        if (!didFinish) {
          didFinish = true;
          setShowSpinner(false);
        }
      };
      const p = refreshRecords();
      if (p && typeof p.finally === "function") {
        p.finally(finish);
      } else {
        setTimeout(finish, 800);
      }
    } else {
      const timer = setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (showSpinner) return;
    const interval = setInterval(() => {
      refreshRecords && refreshRecords();
    }, 1000);
    return () => clearInterval(interval);
  }, [showSpinner, refreshRecords]);

  function getPendingComboGroups(records) {
    const groups = {};
    for (const rec of records) {
      if (rec.status === "Pending" && rec.comboGroupId) {
        if (!groups[rec.comboGroupId]) groups[rec.comboGroupId] = [];
        groups[rec.comboGroupId].push(rec);
      }
    }
    Object.values(groups).forEach((arr) =>
      arr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    );
    return groups;
  }

  function getLastPendingComboTaskCode(comboRecords) {
    if (!comboRecords || comboRecords.length === 0) return null;
    return comboRecords[comboRecords.length - 1].taskCode;
  }

  const getRecordKey = (record, i) => {
    if (record.isCombo && typeof record.comboIndex !== "undefined") {
      return `${record.taskCode || record._id || "noid"}-combo-${record.comboIndex}`;
    }
    return record.taskCode || record._id || `idx-${i}`;
  };

  const showGrey = (message, duration = 1600) => {
    setGreyToast({ show: true, message });
    setTimeout(() => setGreyToast({ show: false, message: "" }), duration);
  };

  const handleSubmit = async (task) => {
    if (task.isCombo && task.canSubmit && balance < 0) {
      showGrey("Insufficient Balance.");
      setTimeout(() => {
        navigate("/deposit");
      }, 1600);
      return;
    }
    setSubmitting((prev) => ({ ...prev, [task.taskCode]: true }));
    setSubmitted((prev) => ({ ...prev, [task.taskCode]: false }));
    setTimeout(async () => {
      const result = await submitTaskRecord(task.taskCode);
      setSubmitting((prev) => ({ ...prev, [task.taskCode]: false }));
      if (!result.success && result.mustDeposit) {
        showGrey("Insufficient Balance.");
        setTimeout(() => {
          navigate("/deposit");
        }, 1600);
        return;
      }
      if (!result.success) {
        alert(result.message || "Failed to submit task.");
      } else {
        setSubmitted((prev) => ({ ...prev, [task.taskCode]: true }));
        await refreshProfile();
        refreshRecords && refreshRecords();
        setTimeout(() => {
          setSubmitted((prev) => ({ ...prev, [task.taskCode]: false }));
        }, 1500);
      }
    }, 3000);
  };

  const filteredRecords = records.filter(
    (record) =>
      activeTab === "All" ||
      (record.status && record.status.toLowerCase() === activeTab.toLowerCase())
  );

  const pendingComboGroups = getPendingComboGroups(filteredRecords);
  const lastPendingComboTaskCodes = Object.values(pendingComboGroups).map(getLastPendingComboTaskCode);

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (
      a.comboGroupId &&
      b.comboGroupId &&
      a.comboGroupId === b.comboGroupId &&
      a.status === "Pending" &&
      b.status === "Pending"
    ) {
      return (b.canSubmit ? 1 : 0) - (a.canSubmit ? 1 : 0);
    }
    return new Date(b.startedAt || b.createdAt) - new Date(a.startedAt || a.createdAt);
  });

  const getRecordImage = (product) => {
    if (
      product &&
      typeof product.image === "string" &&
      product.image.trim() !== "" &&
      product.image !== "null"
    ) {
      return product.image;
    }
    return "/assets/images/products/default.png";
  };

  const fmtNum = (v) => {
    const n = Number(v || 0);
    if (!Number.isFinite(n)) return "";
    return n.toFixed(2);
  };

  const renderProductRecord = (record, i) => {
    return (
      <div key={getRecordKey(record, i)} className="record-card">
        <div className="record-top">
          <div className="record-time">
            <img src={dateIcon} alt="date" className="cal-icon" />
            <span>
              {record.completedAt
                ? new Date(record.completedAt).toLocaleString()
                : record.startedAt
                ? new Date(record.startedAt).toLocaleString()
                : record.createdAt
                ? new Date(record.createdAt).toLocaleString()
                : ""}
            </span>
          </div>

          <span className="badge" data-i18n={record.status || ""}>
            {record.status}
          </span>
        </div>

        <div className="record-content">
          <img
            src={getRecordImage(record.product)}
            alt={record.product?.name || "Product"}
            className="record-img"
          />

          <div className="record-info">
            <div className="record-title" title={record.product?.name}>
              {record.product?.name}
            </div>

            <div className="record-meta">
              <div>
                <span className="price-currency">{currency || ""}</span>{" "}
                <span className="price-value">{fmtNum(record.product?.price)}</span>
                <span style={{ marginLeft: 8, color: "#666", fontWeight: 600 }}>x1</span>
              </div>
            </div>

            <div className="record-stars" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>

        <div className="record-footer">
          <div className="footer-col">
            <div className="footer-label">Total Amount</div>
            <div className="footer-value">
              {currency || ""} {fmtNum(record.product?.price)}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-label">Profit</div>
            <div className="footer-value">
              {currency || ""} {fmtNum(record.product?.commission)}
            </div>
          </div>
        </div>

        {(
          ((record.status === "Pending" && (!record.isCombo || record.canSubmit)) ||
            (submitted[record.taskCode] && record.status === "Completed"))
        ) &&
          (!record.comboGroupId ||
            lastPendingComboTaskCodes.includes(record.taskCode) ||
            record.canSubmit) && (
            <button
              className="submit-btn"
              onClick={() => handleSubmit(record)}
              disabled={submitting[record.taskCode] || submitted[record.taskCode]}
              style={{ width: "100%" }}
            >
              {submitting[record.taskCode]
                ? "Submitting..."
                : submitted[record.taskCode]
                ? "Submitted"
                : "Submit"}
            </button>
          )}
      </div>
    );
  };

  return (
    <div className="records-container">
      <style>{headerStyles}</style>
      <RecordsHeader onContactClick={() => setShowContactModal(true)} />

      {/* Hero with back arrow + centered title */}
      <div className="records-hero">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <img src={backIcon} alt="back" />
        </button>
        <h1>Records</h1>
        <div style={{ width: 48 }} /> {/* spacer to keep title centered */}
      </div>

      <SpinnerOverlay show={showSpinner} />
      <GreyToast show={greyToast.show} message={greyToast.message} />

      <div className="tabs" role="tablist" aria-label="Records filter tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
            data-i18n={tab}
          >
            {tab}
          </div>
        ))}
      </div>

      <div style={{ height: 8 }} />

      <div className="record-list">
        {showSpinner ? (
          <div style={{ height: "120px" }} />
        ) : sortedRecords.length === 0 ? (
          <p className="no-records">No records in this category.</p>
        ) : (
          sortedRecords.map((record, i) => renderProductRecord(record, i))
        )}
      </div>

      {/* Footer/navigation - identical HTML/classes to Dashboard,
          but styling is scoped in Records.css to avoid affecting other pages */}
      <nav className="bottom-navigation" role="navigation" aria-label="Footer navigation">
        <button className="bottom-item" type="button" onClick={() => navigate("/dashboard")}>
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </button>

        <button className="bottom-item starting" type="button" onClick={() => navigate("/tasks")}>
          <img src={startingIcon} alt="Starting" />
          <span style={{ fontWeight: 700 }}>Starting</span>
        </button>

        <button className="bottom-item" type="button" onClick={() => navigate("/records")}>
          <img src={recordsIcon} alt="Records" />
          <span>Records</span>
        </button>
      </nav>

      <CustomerServiceModal open={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default Records;
