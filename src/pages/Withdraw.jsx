import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../context/balanceContext";
import { useTransactions } from "../context/transactionContext";
import { useProfile } from "../context/profileContext";
// settings context
import { useSettings } from "../context/SettingsContext";
import CustomerServiceModal from "../components/CustomerServiceModal";

import logo from "../assets/images/header/logo.svg";
import backButton from "../assets/images/download-1.png";

const styles = `
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .withdraw-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .withdraw-page button {
    font-family: inherit;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .withdraw-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .withdraw-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .withdraw-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .withdraw-contact:hover {
    background: #222222;
  }

  .withdraw-menu {
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

  .withdraw-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .withdraw-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .withdraw-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .withdraw-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .withdraw-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .withdraw-tabs {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
    margin-bottom: 0;
    font-size: 0;
  }

  .withdraw-tab-button {
    flex: 1;
    padding: 20px 0 10px 0;
    font-weight: 600;
    font-size: 20px;
    color: #888;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  .withdraw-tab-button.active {
    color: #222;
    border-bottom: 3px solid #000000;
  }

  .withdraw-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .withdraw-wallet-section {
    background: #cfcfcf;
    border-radius: 20px;
    margin: 28px auto 18px auto;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.07);
    padding: 0;
    overflow: hidden;
    min-height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .withdraw-wallet-content {
    padding: 22px;
    width: 100%;
  }

  .withdraw-wallet-title {
    font-weight: 700;
    color: #000000;
    font-size: 18px;
    margin-bottom: 2px;
  }

  .withdraw-amount-display {
    display: flex;
    align-items: flex-end;
    gap: 6px;
  }

  .withdraw-amount-value {
    font-size: 38px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 1px;
  }

  .withdraw-amount-currency {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    padding-bottom: 5px;
  }

  .withdraw-message-text {
    color: #333333;
    font-size: 14px;
    margin-top: 7px;
  }

  .withdraw-form {
    margin: 0 auto;
    margin-bottom: 0;
    max-width: 100%;
    width: 100%;
    border-radius: 13px;
    background: transparent;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .withdraw-input-group {
    width: 100%;
  }

  .withdraw-input-label {
    display: block;
    color: #000000;
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 16px;
  }

  .withdraw-input {
    width: 100%;
    padding: 14px 16px;
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: 18px;
    color: #000000;
    margin-bottom: 0;
  }

  .withdraw-input:focus {
    outline: none;
    background: #ffffff;
    border-color: #000000;
  }

  .withdraw-submit-button {
    width: 100%;
    background: #2d003f;
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
    border-radius: 100px;
    border: none;
    padding: 13px 0;
    margin-top: 8px;
    transition: background 0.2s;
    cursor: pointer;
  }

  .withdraw-submit-button:hover {
    background: #41005a;
  }

  .withdraw-message {
    text-align: center;
    margin-top: 6px;
    font-size: 15px;
    color: #c62828;
  }

  .withdraw-message.success {
    color: #168b38;
  }

  .withdraw-history-container {
    margin-top: 30px;
    width: 100%;
  }

  .withdraw-history-tabs {
    display: flex;
    border: 2px solid #999999;
    border-radius: 25px;
    margin-bottom: 25px;
    overflow: hidden;
    background: #ffffff;
  }

  .withdraw-history-tab-button {
    flex: 1;
    padding: 13px 0;
    font-weight: 600;
    font-size: 18px;
    background: #ffffff;
    color: #666666;
    outline: none;
    border: none;
    border-right: 1px solid #999999;
    transition: all 0.2s;
    cursor: pointer;
  }

  .withdraw-history-tab-button:last-child {
    border-right: none;
  }

  .withdraw-history-tab-button.active {
    background: #000000;
    color: #ffffff;
    border-right-color: #000000;
  }

  .withdraw-loading {
    text-align: center;
    font-size: 16px;
    color: #888;
    margin-top: 30px;
  }

  .withdraw-empty {
    text-align: center;
    font-size: 16px;
    color: #888;
    margin-top: 30px;
  }

  .withdraw-activity-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .withdraw-activity-item {
    background: #ffffff;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.07);
    border-radius: 8px;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .withdraw-activity-left {
    flex: 1;
  }

  .withdraw-activity-amount {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    margin-bottom: 2px;
  }

  .withdraw-activity-date {
    font-size: 14px;
    color: #777777;
    margin-top: 2px;
  }

  .withdraw-activity-status {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
  }

  .withdraw-activity-status.success {
    color: #168b38;
  }

  .withdraw-activity-status.reject {
    color: #c62828;
  }

  .withdraw-activity-status.reviewing {
    color: #777777;
  }

  @media (max-width: 720px) {
    .withdraw-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .withdraw-logo {
      width: 180px;
      height: 34px;
    }

    .withdraw-header-actions {
      gap: 9px;
    }

    .withdraw-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .withdraw-menu {
      width: 28px;
      height: 24px;
    }

    .withdraw-menu span {
      height: 2px;
    }

    .withdraw-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .withdraw-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .withdraw-back img {
      width: 20px;
      height: 20px;
    }

    .withdraw-title-bar h1 {
      font-size: 1.5rem;
    }

    .withdraw-tab-button {
      font-size: 16px;
      padding: 16px 0 8px 0;
    }

    .withdraw-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`;

// Change: Remove "Approved" from 'success', so only "Completed" or "Success" are shown as "completed"
const WITHDRAW_STATUSES = {
  reviewing: ["Pending", "Reviewing", "In Review"],
  success: ["Completed", "Success"], // Removed "Approved"
  reject: ["Rejected", "Reject", "Failed"],
};

function normalizeStatus(status) {
  if (!status) return "reviewing";
  if (WITHDRAW_STATUSES.reviewing.some(s => status.toLowerCase().includes(s.toLowerCase()))) return "reviewing";
  if (WITHDRAW_STATUSES.success.some(s => status.toLowerCase().includes(s.toLowerCase()))) return "success";
  if (WITHDRAW_STATUSES.reject.some(s => status.toLowerCase().includes(s.toLowerCase()))) return "reject";
  // Handle "Approved" as a special case, display as "Completed"
  if (status.toLowerCase().includes("approved")) return "success";
  return "reviewing";
}

const START_BLUE = "#1fb6fc";
const BLACK_BG = "#181c23";

export default function Withdraw() {
  const [tab, setTab] = useState("withdraw");
  const [historyTab, setHistoryTab] = useState("reviewing");
  const [amount, setAmount] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();

  const { balance, refreshProfile } = useBalance();
  const { withdrawals, loading, refresh } = useTransactions();
  const { profile } = useProfile();

  // settings: currency string and format helper
  const { currency, formatAmount } = useSettings();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!amount || Number(amount) <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }
    if (!withdrawPassword) {
      setMessage("Please enter your withdrawal password.");
      return;
    }
    const token = localStorage.getItem("authToken");
    const BASE_URL = "https://stacks-admin.onrender.com";
    try {
      const res = await fetch(`${BASE_URL}/api/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        body: JSON.stringify({ amount, withdrawPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Withdrawal request submitted and is under review.");
        setAmount("");
        setWithdrawPassword("");
        refresh();
        refreshProfile();
      } else {
        setMessage(data.message || "Failed to withdraw.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const maxCardWidth = 600;

  // Filter withdrawals by normalized status for history tabs
  const filteredWithdrawals = (withdrawals || []).filter(
    w => normalizeStatus(w.status) === historyTab
  );

  // helper to format numeric amounts while keeping currency styling separate
  const fmtNum = (v) => {
    const n = Number(v || 0);
    if (!Number.isFinite(n)) return "";
    return n.toFixed(2);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="withdraw-page">
        {/* Header matching Deposit page */}
        <header className="withdraw-header">
          <img src={logo} alt="Instrument" className="withdraw-logo" />

          <div className="withdraw-header-actions">
            <button
              type="button"
              className="withdraw-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="withdraw-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        {/* Title Bar */}
        <div className="withdraw-title-bar">
          <button
            type="button"
            className="withdraw-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Withdrawal</h1>
        </div>

        {/* Tabs */}
        <div className="withdraw-tabs">
          <button
            className={`withdraw-tab-button ${tab === "withdraw" ? "active" : ""}`}
            onClick={() => setTab("withdraw")}
          >
            <span data-i18n="Withdraw">Withdraw</span>
          </button>
          <button
            className={`withdraw-tab-button ${tab === "history" ? "active" : ""}`}
            onClick={() => setTab("history")}
          >
            <span data-i18n="History">History</span>
          </button>
        </div>

        {/* Withdraw Tab */}
        {tab === "withdraw" ? (
          <div className="withdraw-content">
            {/* Card */}
            <div className="withdraw-wallet-section">
              <div className="withdraw-wallet-content">
                <div className="withdraw-wallet-title" data-i18n="Account Amount">
                  Account Amount
                </div>
                <div className="withdraw-amount-display">
                  <span className="withdraw-amount-value">
                    {fmtNum(balance)}
                  </span>
                  <span className="withdraw-amount-currency" data-i18n="GBP">{currency || ""}</span>
                </div>
                <div className="withdraw-message-text" data-i18n="You will receive your withdrawal within an hour">
                  You will receive your withdrawal within an hour
                </div>
              </div>
            </div>

            {/* Withdraw Form */}
            <form onSubmit={handleWithdraw} autoComplete="off" className="withdraw-form">
              <div className="withdraw-input-group">
                <label className="withdraw-input-label" data-i18n="Withdraw Amount">
                  Withdraw Amount
                </label>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="withdraw-input"
                  placeholder="Withdraw Amount"
                  data-i18n-placeholder="Withdraw Amount"
                  required
                />
              </div>
              <div className="withdraw-input-group">
                <label className="withdraw-input-label" data-i18n="Withdrawal Password">
                  Withdrawal Password
                </label>
                <input
                  type="password"
                  value={withdrawPassword}
                  onChange={(e) => setWithdrawPassword(e.target.value)}
                  className="withdraw-input"
                  placeholder="Withdrawal Password"
                  data-i18n-placeholder="Withdrawal Password"
                  required
                />
              </div>
              <button type="submit" className="withdraw-submit-button">
                <span data-i18n="Withdraw">Withdraw</span>
              </button>
              {message && (
                <div className="withdraw-message">{message}</div>
              )}
            </form>
          </div>
        ) : (
          // History Tab
          <div className="withdraw-content">
            <div className="withdraw-history-container">
              {/* History Subtabs */}
              <div className="withdraw-history-tabs">
                {["reviewing", "success", "reject"].map((type) => (
                  <button
                    key={type}
                    className={`withdraw-history-tab-button ${historyTab === type ? "active" : ""}`}
                    onClick={() => setHistoryTab(type)}
                  >
                    {type === "reviewing" ? (
                      <span data-i18n="Reviewing">Reviewing</span>
                    ) : type === "success" ? (
                      <span data-i18n="Completed">Completed</span>
                    ) : (
                      <span data-i18n="Reject">Reject</span>
                    )}
                  </button>
                ))}
              </div>
              {/* Filtered Withdrawals */}
              {loading ? (
                <p className="withdraw-loading" data-i18n="Loading...">
                  Loading...
                </p>
              ) : filteredWithdrawals.length === 0 ? (
                <p className="withdraw-empty" data-i18n="No more data...">
                  No more data...
                </p>
              ) : (
                <div className="withdraw-activity-list">
                  {filteredWithdrawals
                    .slice()
                    .reverse()
                    .map((item, index) => {
                      const amt = fmtNum(item.amount);
                      return (
                        <div key={index} className="withdraw-activity-item">
                          <div className="withdraw-activity-left">
                            <div className="withdraw-activity-amount">
                              <span style={{ color: BLACK_BG, fontWeight: 700 }}>
                                {currency || ""}
                              </span>{" "}
                              <span style={{ color: START_BLUE }}>{amt}</span>
                            </div>
                            <div className="withdraw-activity-date">
                              {item.createdAt
                                ? new Date(item.createdAt).toLocaleString()
                                : item.date || ""}
                            </div>
                          </div>
                          <div
                            className={`withdraw-activity-status ${normalizeStatus(
                              item.status
                            )}`}
                          >
                            {/* Show "Completed" instead of "Approved" */}
                            {normalizeStatus(item.status) === "success" ? (
                              <span data-i18n="Completed">Completed</span>
                            ) : item.status ? (
                              <span>{item.status}</span>
                            ) : (
                              <span data-i18n="Reviewing">Reviewing</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        )}

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}