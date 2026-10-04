import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useProfile } from "../context/profileContext";
import CustomerServiceModal from "../components/CustomerServiceModal";
import NotificationBell from "../components/NotificationBell";

import logo from "../assets/images/header/logo.svg";

import vip1 from "../assets/images/vip/vip1.png";
import vip2 from "../assets/images/vip/vip2.png";
import vip3 from "../assets/images/vip/vip3.png";
import vip4 from "../assets/images/vip/vip4.png";

import avatarIcon from "../assets/images/profile/avatar.png";
import depositIcon from "../assets/images/profile/deposit.png";
import withdrawIcon from "../assets/images/profile/withdraw.png";
import personalIcon from "../assets/images/profile/personal.png";
import walletIcon from "../assets/images/profile/wallet.png";
import contactIcon from "../assets/images/profile/contact.png";
import notifIcon from "../assets/images/profile/notif.png";

import homeIcon from "../assets/images/tabBar/homeh.png";
import startingIcon from "../assets/images/tabBar/icon30.png";
import recordsIcon from "../assets/images/tabBar/records.png";

/* visual-only imports */
import backIcon from "../assets/images/download-1.png";
import copyIcon from "../assets/images/download-2.png";

const API_URL = "https://stacks-admin.onrender.com";

const START_DARK = "#333333";
const CREDIT_PURPLE = "#3d075c";

/* Updated styling with bigger wallet card and larger VIP badge, increased spacing */
const profileStyles = `
  html, body, #root { margin: 0; min-height:100%; padding:0; }

  .profile-page {
    min-height: 100vh;
    padding-bottom: 50px;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  .profile-page *, .profile-page *::before, .profile-page *::after { box-sizing: border-box; }
  .profile-page button { font-family: inherit; }

  .profile-header {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 64px;
    padding: 12px 16px;
    background: #fff;
    border-bottom: 1px solid #d6d6d6;
  }

  .profile-logo {
    width: 170px;
    height: 36px;
    object-fit: contain;
    filter: brightness(0) saturate(100%);
  }

  .profile-header-actions {
    display:flex;
    align-items:center;
    gap:12px;
  }

  .profile-contact {
    min-width: 96px;
    height: 38px;
    padding: 0 20px;
    border: 0;
    border-radius: 999px;
    color: #fff;
    background: #000;
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
  }

  .profile-body {
    width: min(calc(100% - 24px), 560px);
    margin: 0 auto;
    padding: 16px 12px 24px;
  }

  .profile-title-row {
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: 48px;
    margin-bottom: 28px;
  }

  .profile-back {
    position: absolute;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    border:0;
    padding:8px;
    background: transparent;
    cursor:pointer;
    width:40px;
    height:40px;
  }

  .profile-title {
    margin:0;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #111;
  }

  .profile-summary {
    display:grid;
    grid-template-columns: 130px 1fr;
    gap: 24px;
    align-items:flex-start;
    margin-bottom: 32px;
  }

  .profile-avatar-area {
    position: relative;
    width: 130px;
    text-align:center;
    padding-bottom: 50px;
  }

  .profile-avatar {
    display:block;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 3px solid #d5d5d5;
    border-radius: 50%;
    background: #f0c897;
    margin: 0 auto;
  }

  .profile-vip-badge {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    width: 42px;
    height: 42px;
    object-fit: contain;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    background: #fff;
    border: 3px solid #fff;
    border-radius: 50%;
    padding: 4px;
  }

  .profile-vip-label {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    margin:0;
    font-size: 0.75rem;
    color:#555;
    text-align:center;
    font-weight: 700;
    letter-spacing: 0.06em;
    white-space: nowrap;
  }

  .profile-summary-details {
    padding-top: 6px;
  }

  .profile-username {
    margin: 0 0 12px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: #161616;
    letter-spacing: -0.04em;
  }

  .profile-referral {
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom: 14px;
    font-size: 0.98rem;
    color: #333;
    font-weight: 500;
  }

  .profile-referral strong {
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .profile-copy {
    border:0;
    background:transparent;
    cursor:pointer;
    padding:3px 6px;
    border-radius:6px;
  }

  .profile-copy img {
    width:18px;
    height:18px;
    display:block;
    opacity: 0.9;
  }

  .profile-credit {
    display:flex;
    align-items:center;
    gap:12px;
    font-size: 0.95rem;
    color:#333;
  }

  .profile-credit-label {
    white-space:nowrap;
    font-weight:700;
    color:#222;
    min-width:85px;
    font-size: 1rem;
  }

  .profile-credit-track {
    flex:1;
    height: 12px;
    border-radius: 999px;
    background: #d1d1d1;
    overflow:hidden;
  }

  .profile-credit-fill {
    height:100%;
    background: ${CREDIT_PURPLE};
    border-radius:inherit;
    transition: width 0.3s ease;
  }

  .profile-credit-value {
    min-width: 48px;
    text-align:right;
    font-weight:700;
    color:#222;
    font-size:1rem;
  }

  .wallet-card {
    margin: 24px 0 28px;
    padding: 18px 18px 16px;
    border-radius: 14px;
    background: #d7d7d7;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .wallet-title {
    margin:0 0 16px;
    font-size: 1.12rem;
    font-weight:700;
    color:#111;
  }

  .wallet-row {
    margin-bottom: 14px;
  }

  .wallet-row:last-child { margin-bottom:0; }

  .wallet-label {
    margin: 0 0 8px;
    font-size: 0.98rem;
    font-weight:600;
    color:#212121;
    padding-left: 4px;
  }

  .wallet-value {
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:12px;
    min-height: 48px;
    padding: 10px 16px;
    border-radius: 14px;
    color:#fff;
    background:#000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }

  .wallet-currency {
    font-size: 0.85rem;
    opacity:0.95;
    margin-right:auto;
    color:#fff;
    font-weight:600;
  }

  .wallet-number {
    font-size: 1.18rem;
    font-weight:700;
    color:#fff;
    letter-spacing: -0.02em;
  }

  .profile-section {
    margin-bottom: 16px;
  }

  .profile-section-title {
    margin: 0 0 12px;
    font-size: 1rem;
    font-weight:700;
    color:#111;
  }

  .profile-section-items {
    display:flex;
    flex-direction:column;
    gap:10px;
  }

  .profile-item {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 56px;
    padding: 0 16px;
    background:#f3f3f3;
    border-radius: 10px;
    font-size: 1.05rem;
    font-weight: 500;
    cursor:pointer;
    color:#000;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
    border: 0;
    transition: background 0.15s;
  }

  .profile-item:active {
    background: #e8e8e8;
  }

  .profile-item-left {
    display:flex;
    align-items:center;
    gap:14px;
  }

  .profile-item-icon {
    width:20px;
    height:20px;
    object-fit:contain;
    filter: brightness(0) saturate(100%);
    opacity:0.85;
  }

  .profile-item-arrow {
    color:#999;
    font-size:1.3rem;
    font-weight: 300;
  }

  .profile-loading {
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    background:#e5e5e5;
  }

  @media (max-width:600px) {
    .profile-body { width: calc(100% - 20px); padding: 12px 10px 20px; }
    .profile-title-row { margin-bottom: 20px; }
    .profile-summary { grid-template-columns: 110px 1fr; gap:18px; margin-bottom:24px; }
    .profile-avatar-area { padding-bottom: 45px; }
    .profile-avatar { width:95px; height:95px; border-width: 2px; }
    .profile-vip-badge { width:38px; height:38px; bottom:18px; border-width: 2px; }
    .profile-username { font-size: 2rem; margin-bottom: 10px; }
    .profile-referral { font-size:0.92rem; margin-bottom: 12px; }
    .profile-credit { font-size:0.9rem; }
    .profile-credit-track { height: 11px; }
    .wallet-card { margin: 18px 0 22px; padding: 14px 14px 12px; border-radius: 12px; }
    .wallet-title { margin-bottom: 12px; font-size: 1.05rem; }
    .wallet-row { margin-bottom: 11px; }
    .wallet-label { font-size: 0.94rem; margin-bottom: 6px; }
    .wallet-value { min-height: 44px; padding:8px 14px; font-size: 0.95rem; }
    .wallet-currency { font-size: 0.8rem; }
    .wallet-number { font-size: 1.1rem; }
    .profile-section { margin-bottom: 12px; }
    .profile-section-title { font-size: 0.96rem; margin-bottom: 10px; }
    .profile-section-items { gap:8px; }
    .profile-item { min-height: 52px; padding:0 14px; font-size: 1rem; }
    .profile-item-left { gap:12px; }
    .profile-item-icon { width:19px; height:19px; }
  }
`;

function GreyFadeSpinner() {
  return (
    <div className="profile-loading">
      <style>{profileStyles}</style>
      <div
        style={{
          width: "2.2rem",
          height: "2.2rem",
          border: "4px solid #d0d0d0",
          borderTop: `4px solid ${START_DARK}`,
          borderRadius: "50%",
          animation: "profile-spin 1s linear infinite",
        }}
      />
      <style>{`@keyframes profile-spin { from {transform:rotate(0deg)} to {transform:rotate(360deg)} }`}</style>
    </div>
  );
}

function GreyFadeMessage({ message, duration = 600, onDone }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => { if (onDone) onDone(); }, duration);
    return () => clearTimeout(t);
  }, [message, duration, onDone]);
  if (!message) return null;
  return (
    <div style={{ position: "fixed", zIndex: 20000, inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
      <div style={{ padding: "0.7rem 1.4rem", borderRadius: 10, background: "#e6e6e6", fontWeight: 700, fontSize: "0.95rem" }}>{message}</div>
    </div>
  );
}

function LogoutModal({ open, onClose, onLogout }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,.28)" }} onClick={onClose}>
      <div style={{ width: "min(340px, calc(100% - 32px))", padding: "1.2rem 1rem", borderRadius: 10, background: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Logout</div>
          <div style={{ color: "#666", fontSize: 13 }}>Are you sure you want to logout?</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, padding: 9, borderRadius: 999, border: 0, background: "#f2f2f2" }} onClick={onClose}>Cancel</button>
          <button style={{ flex: 1, padding: 9, borderRadius: 999, border: 0, background: START_DARK, color: "#fff" }} onClick={onLogout}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

function WithdrawPasswordModalProfile({ open, onClose, onSubmit, withdrawPassword, setWithdrawPassword, errorMsg, submitting }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,.45)" }} onClick={onClose}>
      <div style={{ width: "min(360px, calc(100% - 32px))", padding: "1.2rem 1rem", borderRadius: 10, background: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.08)" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Withdrawal Password</div>
          <button onClick={onClose} style={{ border: 0, background: "#f2f2f2", padding: 6, borderRadius: 8 }}>×</button>
        </div>
        <input type="password" placeholder="Withdrawal Password" value={withdrawPassword} onChange={(e) => setWithdrawPassword(e.target.value)} disabled={submitting} autoFocus style={{ width: "100%", padding: 8, borderRadius: 8, border: "1px solid #e6e6e6", marginBottom: 8, background: "#f6f7fb" }} />
        {errorMsg && <div style={{ color: "red", marginBottom: 8 }}>{errorMsg}</div>}
        <button onClick={onSubmit} disabled={submitting} style={{ width: "100%", padding: 9, borderRadius: 999, border: 0, background: START_DARK, color: "#fff" }}>{submitting ? "Verifying..." : "Submit"}</button>
      </div>
    </div>
  );
}

function getVipBadgeInfo(vipLevelRaw) {
  if (vipLevelRaw === undefined || vipLevelRaw === null) return { level: null, badge: null };
  let lvlNum = null;
  if (typeof vipLevelRaw === "number") lvlNum = vipLevelRaw;
  else if (typeof vipLevelRaw === "string") {
    const m = vipLevelRaw.match(/\d+/);
    lvlNum = m ? Number(m[0]) : NaN;
  } else {
    lvlNum = Number(vipLevelRaw);
  }
  if (!Number.isFinite(lvlNum)) return { level: null, badge: null };
  const level = Math.max(1, Math.min(4, Math.floor(lvlNum)));
  const map = { 1: vip1, 2: vip2, 3: vip3, 4: vip4 };
  return { level, badge: map[level] || null };
}

function ProfileHeader({ navigate, setShowContactModal }) {
  return (
    <header className="profile-header">
      <img src={logo} alt="Instrument" className="profile-logo" />
      <div className="profile-header-actions">
        <button type="button" className="profile-contact" onClick={() => setShowContactModal(true)}>Contact</button>
      </div>
    </header>
  );
}

/* Footer component kept in file but intentionally not rendered */
function ProfileFooter({ navigate }) {
  return null;
}

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, fetchProfile, setProfile } = useProfile();

  const [showModal, setShowModal] = useState(false);
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [destination, setDestination] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [fadeMsg, setFadeMsg] = useState("");

  const [copyMessage, setCopyMessage] = useState("");

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      setShowLoading(true);
      try { await fetchProfile(); } catch (e) {}
      finally { if (!mounted) return; setTimeout(() => { if (mounted) setShowLoading(false); }, 180); }
    };
    run();

    const onAuthLogin = async () => { setShowLoading(true); try { await fetchProfile(); } catch (e) {} setShowLoading(false); };
    const onProfileRefresh = async () => { try { await fetchProfile(); } catch (e) {} };
    const onBalanceChanged = async () => { try { await fetchProfile(); } catch (e) {} };
    const onAuthLogout = () => {
      try { localStorage.removeItem("authToken"); localStorage.removeItem("token"); localStorage.removeItem("currentUser"); localStorage.removeItem("userProfile"); } catch (e) {}
      try { setProfile(null); } catch (e) {}
      navigate("/login");
    };

    window.addEventListener("auth:login", onAuthLogin);
    window.addEventListener("profile:refresh", onProfileRefresh);
    window.addEventListener("balance:changed", onBalanceChanged);
    window.addEventListener("auth:logout", onAuthLogout);

    return () => {
      mounted = false;
      window.removeEventListener("auth:login", onAuthLogin);
      window.removeEventListener("profile:refresh", onProfileRefresh);
      window.removeEventListener("balance:changed", onBalanceChanged);
      window.removeEventListener("auth:logout", onAuthLogout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    let mounted = true;
    const id = setInterval(async () => {
      if (!mounted) return;
      try { await fetchProfile(); } catch (e) {}
    }, 10000);
    return () => { mounted = false; clearInterval(id); };
  }, [fetchProfile]);

  const handleProtectedRoute = (targetPath) => {
    setDestination(targetPath);
    setWithdrawPassword("");
    setErrorMsg("");
    setShowModal(true);
  };

  const handleSubmitPassword = async () => {
    setErrorMsg("");
    setSubmitting(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API_URL}/api/verify-withdraw-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth-Token": token },
        body: JSON.stringify({ password: withdrawPassword }),
      });
      const data = await res.json();
      setSubmitting(false);
      if (data.success) {
        setShowModal(false);
        setShowLoading(true);
        try { await fetchProfile(); } catch (e) {}
        setShowLoading(false);
        navigate(destination);
      } else {
        setErrorMsg(data.message || "Incorrect withdrawal password.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    setFadeMsg("Logout Success");
    setTimeout(() => {
      setFadeMsg("");
      try { localStorage.removeItem("currentUser"); localStorage.removeItem("user"); localStorage.removeItem("authToken"); localStorage.removeItem("userProfile"); } catch (e) {}
      try { setProfile(null); } catch (e) {}
      navigate("/login");
    }, 600);
  };

  const handleCopyReferral = () => {
    try { navigator.clipboard.writeText(profile.inviteCode || ""); setCopyMessage("Copied"); setTimeout(() => setCopyMessage(""), 700); }
    catch (e) { setCopyMessage("Copy failed"); setTimeout(() => setCopyMessage(""), 700); }
  };

  if (showLoading) return <GreyFadeSpinner />;
  if (!profile) return <div style={{ padding: 12 }}>No profile found.</div>;

  const vipInfo = getVipBadgeInfo(profile.vipLevel);
  const creditValueRaw = typeof profile.creditScore !== "undefined" ? Number(profile.creditScore) : 100;
  const creditScore = Number.isFinite(creditValueRaw) ? Math.max(0, Math.min(100, Math.round(creditValueRaw))) : 100;
  const creditWidth = `${creditScore}%`;

  return (
    <>
      <style>{profileStyles}</style>
      <div className="profile-page">
        <ProfileHeader navigate={navigate} setShowContactModal={setShowContactModal} />

        {copyMessage && <GreyFadeMessage message={copyMessage} duration={700} onDone={() => setCopyMessage("")} />}

        <main className="profile-body">
          <section className="profile-title-row">
            <button type="button" className="profile-back" onClick={() => navigate(-1)} aria-label="Back">
              <img src={backIcon} alt="Back" style={{ width: 20, height: 20, objectFit: "contain" }} />
            </button>
            <h1 className="profile-title">My Profile</h1>
          </section>

          <section className="profile-summary">
            <div className="profile-avatar-area">
              <img src={avatarIcon} alt="Avatar" className="profile-avatar" />
              {vipInfo.badge && <img src={vipInfo.badge} alt={`VIP-${vipInfo.level}`} className="profile-vip-badge" />}
              <div className="profile-vip-label">VIP{vipInfo.level || ""}</div>
            </div>

            <div className="profile-summary-details">
              <h2 className="profile-username">{profile.username}</h2>

              <div className="profile-referral">
                <span>My Referral Code: <strong>{profile.inviteCode || "N/A"}</strong></span>
                <button type="button" className="profile-copy" onClick={handleCopyReferral} aria-label="Copy referral code" title="Copy referral code">
                  <img src={copyIcon} alt="Copy" />
                </button>
              </div>

              <div className="profile-credit">
                <span className="profile-credit-label">Credit Score:</span>
                <div className="profile-credit-track"><div className="profile-credit-fill" style={{ width: creditWidth }} /></div>
                <span className="profile-credit-value">{creditScore}%</span>
              </div>
            </div>
          </section>

          <section className="wallet-card">
            <div className="wallet-title">My Wallet</div>

            <div className="wallet-row">
              <div className="wallet-label">Today's Profit</div>
              <div className="wallet-value">
                <div className="wallet-currency">USD</div>
                <div className="wallet-number">{Number(profile.commissionToday || 0).toFixed(2)}</div>
              </div>
            </div>

            <div className="wallet-row">
              <div className="wallet-label">Total Balance</div>
              <div className="wallet-value">
                <div className="wallet-currency">USD</div>
                <div className="wallet-number">{Number(profile.balance || 0).toFixed(2)}</div>
              </div>
            </div>
          </section>

          <ProfileSection title="My Profile">
            <ProfileItem label="Account Info" icon={personalIcon} onClick={() => handleProtectedRoute("/personal-info")} />
            <ProfileItem label="Add Wallet" icon={walletIcon} onClick={() => handleProtectedRoute("/bind-wallet")} />
          </ProfileSection>

          <ProfileSection title="My Financial">
            <ProfileItem label="Deposit" icon={depositIcon} onClick={() => navigate("/deposit")} />
            <ProfileItem label="Withdraw" icon={withdrawIcon} onClick={() => handleProtectedRoute("/withdraw")} />
          </ProfileSection>

          <ProfileSection title="Other">
            <ProfileItem label="Contact Us" icon={contactIcon} onClick={() => setShowContactModal(true)} />
            <ProfileItem label="Notifications" icon={notifIcon} onClick={() => navigate("/notifications")} />
            <ProfileItem label="Change Language" icon={walletIcon} onClick={() => {}} />
            <ProfileItem label="Logout" onClick={() => setShowLogoutModal(true)} />
          </ProfileSection>
        </main>

        <LogoutModal open={showLogoutModal} onClose={() => setShowLogoutModal(false)} onLogout={handleLogout} />

        <WithdrawPasswordModalProfile
          open={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitPassword}
          withdrawPassword={withdrawPassword}
          setWithdrawPassword={setWithdrawPassword}
          errorMsg={errorMsg}
          submitting={submitting}
        />

        {fadeMsg && <GreyFadeMessage message={fadeMsg} duration={600} onDone={() => setFadeMsg("")} />}

        <CustomerServiceModal open={showContactModal} onClose={() => setShowContactModal(false)} />
      </div>
    </>
  );
}

/* Small helper components */
function ProfileSection({ title, children }) {
  return (
    <section className="profile-section">
      <h2 className="profile-section-title">{title}</h2>
      <div className="profile-section-items">{children}</div>
    </section>
  );
}

function ProfileItem({ label, icon, onClick }) {
  return (
    <button type="button" className="profile-item" onClick={onClick}>
      <span className="profile-item-left">
        {icon && <img src={icon} alt="" className="profile-item-icon" />}
        <span>{label}</span>
      </span>
      <span className="profile-item-arrow">›</span>
    </button>
  );
}