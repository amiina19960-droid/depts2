import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../context/balanceContext";
import { useTransactions } from "../context/transactionContext";
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

  .deposit-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #f5f5f5;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .deposit-page button {
    font-family: inherit;
  }

  .deposit-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .deposit-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .deposit-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .deposit-contact {
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
  }

  .deposit-menu {
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

  .deposit-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .deposit-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e8e8e8;
    border-bottom: 1px solid #d9d9d9;
  }

  .deposit-back {
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

  .deposit-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .deposit-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .deposit-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .deposit-wallet-section {
    background: #e8e8e8;
    border-radius: 16px;
    padding: clamp(20px, 3vw, 32px);
    margin-bottom: 20px;
  }

  .deposit-wallet-title {
    font-size: clamp(1.1rem, 1.8vw, 1.6rem);
    font-weight: 600;
    color: #000000;
    margin-bottom: 12px;
  }

  .deposit-label {
    font-size: clamp(0.95rem, 1.5vw, 1.4rem);
    font-weight: 500;
    color: #666666;
    text-align: center;
    margin-bottom: 12px;
  }

  .deposit-amount-box {
    background: #000000;
    color: #ffffff;
    border-radius: 12px;
    padding: clamp(14px, 2vw, 20px);
    text-align: center;
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 2.5vw, 2.2rem);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .deposit-button {
    background: #000000;
    color: #ffffff;
    border: 0;
    border-radius: 12px;
    padding: clamp(12px, 2vw, 16px);
    font-size: clamp(1rem, 1.6vw, 1.5rem);
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
  }

  .deposit-button:hover {
    background: #222222;
  }

  .deposit-filter-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    background: #ffffff;
    padding: clamp(10px, 2vw, 16px);
    border-radius: 12px;
    flex-wrap: wrap;
  }

  .deposit-filter-tab {
    padding: clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 18px);
    border: 0;
    border-radius: 8px;
    background: #e0e0e0;
    color: #666666;
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .deposit-filter-tab.active {
    background: #000000;
    color: #ffffff;
  }

  .deposit-activity-item {
    background: #ffffff;
    border-radius: 12px;
    padding: clamp(14px, 2vw, 18px);
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .deposit-activity-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .deposit-activity-amount {
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 700;
    color: #000000;
  }

  .deposit-activity-date {
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    color: #888888;
  }

  .deposit-activity-status {
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    font-weight: 600;
    color: #666666;
    text-transform: capitalize;
    padding: 6px 12px;
    background: #f0f0f0;
    border-radius: 6px;
  }

  .deposit-activity-status.completed {
    background: #d4edda;
    color: #155724;
  }

  .deposit-activity-status.pending {
    background: #fff3cd;
    color: #856404;
  }

  .deposit-activity-status.reviewing {
    background: #e2e3e5;
    color: #383d41;
  }

  .deposit-empty {
    text-align: center;
    color: #888888;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  .deposit-loading {
    text-align: center;
    color: #666666;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  @media (max-width: 720px) {
    .deposit-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .deposit-logo {
      width: 180px;
      height: 34px;
    }

    .deposit-header-actions {
      gap: 9px;
    }

    .deposit-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .deposit-menu {
      width: 28px;
      height: 24px;
    }

    .deposit-menu span {
      height: 2px;
    }

    .deposit-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .deposit-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .deposit-back img {
      width: 20px;
      height: 20px;
    }

    .deposit-title-bar h1 {
      font-size: 1.5rem;
    }

    .deposit-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .deposit-filter-tabs {
      gap: 6px;
      padding: 8px;
    }

    .deposit-filter-tab {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }
`;

export default function Deposit() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Context hooks for balance, transactions, and settings
  const { balance, totalBalance } = useBalance();
  const { deposits, loading } = useTransactions();
  const { currency, formatAmount } = useSettings();

  // Filter deposits to show only deposit-type transactions
  const allDeposits = deposits.filter(
    (deposit) =>
      deposit.type === "deposit" ||
      deposit.type === "admin_add_balance" ||
      deposit.type === "admin_add_funds" ||
      deposit.type === "add_balance_admin" ||
      !deposit.type // fallback: if type is missing, assume user deposit
  );

  const getFilteredDeposits = () => {
    if (activeFilter === "all") {
      return allDeposits;
    }
    return allDeposits.filter(
      (deposit) =>
        (deposit.status || "pending").toLowerCase() === activeFilter.toLowerCase()
    );
  };

  const filteredDeposits = getFilteredDeposits();
  const statuses = ["all", "reviewing", "completed", "pending"];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const getStatusClass = (status) => {
    if (!status) return "pending";
    return status.toLowerCase();
  };

  return (
    <>
      <style>{styles}</style>

      <div className="deposit-page">
        <header className="deposit-header">
          <img src={logo} alt="Instrument" className="deposit-logo" />

          <div className="deposit-header-actions">
            <button
              type="button"
              className="deposit-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="deposit-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <div className="deposit-title-bar">
          <button
            type="button"
            className="deposit-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Deposit</h1>
        </div>

        <main className="deposit-content">
          {/* My Wallet Section */}
          <div className="deposit-wallet-section">
            <h2 className="deposit-wallet-title">My Wallet</h2>

            {/* Available Balance */}
            <div style={{ marginBottom: "24px" }}>
              <div className="deposit-label">Available Balance</div>
              <div className="deposit-amount-box">
                {formatAmount ? formatAmount(balance || 0) : `${currency || ""} ${Number(balance || 0).toFixed(2)}`}
              </div>
            </div>

            {/* Deposit Button */}
            <button
              type="button"
              className="deposit-button"
              onClick={() => setShowContactModal(true)}
            >
              Deposit
            </button>
          </div>

          {/* Total Balance */}
          <div className="deposit-wallet-section">
            <div className="deposit-label">Total Balance</div>
            <div className="deposit-amount-box">
              {formatAmount ? formatAmount(totalBalance || 0) : `${currency || ""} ${Number(totalBalance || 0).toFixed(2)}`}
            </div>
          </div>

          {/* Transaction History Title */}
          <h2 className="deposit-wallet-title" style={{ marginTop: "28px", marginBottom: "16px" }}>
            Transaction History
          </h2>

          {/* Filter Tabs */}
          <div className="deposit-filter-tabs">
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                className={`deposit-filter-tab ${activeFilter === status ? "active" : ""}`}
                onClick={() => setActiveFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {/* Transaction List */}
          {loading ? (
            <div className="deposit-loading">Loading transaction history...</div>
          ) : filteredDeposits.length === 0 ? (
            <div className="deposit-empty">No more data</div>
          ) : (
            filteredDeposits
              .slice()
              .reverse()
              .map((deposit, index) => {
                const amt = Number(deposit.amount || 0).toFixed(2);
                // show amount with currency exactly as stored in settings
                const displayAmount = currency ? `+${amt} ${currency}` : `+${amt}`;
                return (
                  <div key={index} className="deposit-activity-item">
                    <div className="deposit-activity-left">
                      <div className="deposit-activity-amount">
                        {displayAmount}
                      </div>
                      <div className="deposit-activity-date">
                        {formatDate(deposit.createdAt || deposit.date)}
                      </div>
                    </div>
                    <div
                      className={`deposit-activity-status ${getStatusClass(
                        deposit.status
                      )}`}
                    >
                      {deposit.status || "Pending"}
                    </div>
                  </div>
                );
              })
          )}
        </main>

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}