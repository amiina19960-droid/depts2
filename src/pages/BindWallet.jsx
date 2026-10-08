import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/profileContext";
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

  .bind-wallet-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .bind-wallet-page button {
    font-family: inherit;
  }

  .bind-wallet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .bind-wallet-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .bind-wallet-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .bind-wallet-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: linear-gradient(110deg, rgba(7, 39, 76, 0.96), rgba(14, 34, 72, 0.96));
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .bind-wallet-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .bind-wallet-menu {
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

  .bind-wallet-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(110deg, rgba(7, 39, 76, 0.96), rgba(14, 34, 72, 0.96));
  }

  .bind-wallet-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .bind-wallet-back {
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

  .bind-wallet-back img {
    filter: brightness(0) invert(1);
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .bind-wallet-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .bind-wallet-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .form-card {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 14px;
    padding: clamp(20px, 3vw, 28px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-section {
    margin-bottom: clamp(18px, 2.5vw, 24px);
    position: relative;
  }

  .form-section:last-of-type {
    margin-bottom: clamp(20px, 3vw, 28px);
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 8px;
    border: 1px solid #176db1;
    cursor: pointer;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    transition: background 0.2s;
  }

  .section-header:hover {
    background: rgba(0, 191, 243, 0.06);
  }

  .section-header-title {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .dropdown-arrow {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #9ec8e8;
    line-height: 1;
    transition: transform 0.2s;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  .section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .section-content.open {
    max-height: 400px;
  }

  .section-inner {
    padding: clamp(12px, 1.8vw, 16px);
    background: #061f42;
    border: 1px solid #205c94;
    border-top: none;
    border-radius: 0 0 8px 8px;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(10px, 1.5vw, 12px) 0;
    border-bottom: 1px solid #205c94;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #f4f8ff;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: left;
    transition: background 0.2s;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
  }

  .dropdown-item.selected {
    font-weight: 600;
  }

  .dropdown-checkmark {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #168b38;
  }

  .form-group {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .form-input {
    width: 100%;
    padding: clamp(10px, 1.5vw, 12px) clamp(12px, 1.8vw, 14px);
    border-radius: 7px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #f4f8ff;
    letter-spacing: 0.01em;
  }

  .form-input:focus {
    outline: none;
    border-color: #f4f8ff;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 8px;
    border: 1px solid #176db1;
  }

  .toggle-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .toggle-switch {
    position: relative;
    width: 50px;
    height: 28px;
    background: #205c94;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: background 0.2s;
  }

  .toggle-switch.active {
    background: #168fe4;
  }

  .toggle-switch::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: left 0.2s;
  }

  .toggle-switch.active::after {
    left: 24px;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    border: none;
    border-radius: 100px;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: linear-gradient(110deg, #168fe4 0%, #7048df 100%);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    position: fixed;
    bottom: clamp(20px, 4vw, 30px);
    left: 50%;
    transform: translateX(-50%);
    background: #168b38;
    color: #ffffff;
    padding: clamp(12px, 2vw, 16px) clamp(16px, 2vw, 20px);
    border-radius: 8px;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slide-up 0.3s ease;
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media (max-width: 720px) {
    .bind-wallet-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .bind-wallet-logo {
      width: 180px;
      height: 34px;
    }

    .bind-wallet-header-actions {
      gap: 9px;
    }

    .bind-wallet-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .bind-wallet-menu {
      width: 28px;
      height: 24px;
    }

    .bind-wallet-menu span {
      height: 2px;
    }

    .bind-wallet-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .bind-wallet-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .bind-wallet-back img {
      width: 20px;
      height: 20px;
    }

    .bind-wallet-title-bar h1 {
      font-size: 1.5rem;
    }

    .bind-wallet-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-card {
      padding: 16px;
    }
  }
`;

const BACKEND_API = "https://dept-admin.onrender.com/api";

export default function BindWallet() {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [walletType, setWalletType] = useState("BTC");
  const [isDefault, setIsDefault] = useState(false);
  const [accountHolderName, setAccountHolderName] = useState("");
  const [walletName, setWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const walletTypes = ["BTC", "ETH", "ERC-USDT", "TRC-USDT"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!walletAddress.trim()) {
      alert("Please enter a wallet address.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${BACKEND_API}/bind-wallet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        body: JSON.stringify({
          walletType,
          isDefault,
          accountHolderName,
          walletName,
          walletAddress,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/personal-info");
        }, 2000);
      } else {
        alert(data.message || "Failed to bind wallet.");
      }
    } catch (err) {
      setLoading(false);
      alert("Network error. Please try again.");
    }
  };

  const toggleWithdrawalDropdown = () => {
    setExpandedSection(expandedSection === "withdrawal" ? null : "withdrawal");
  };

  return (
    <>
      <style>{styles}</style>

      <div className="bind-wallet-page">
        {/* Header */}
        <header className="bind-wallet-header">
          <img src={logo} alt="Instrument" className="bind-wallet-logo" />

          <div className="bind-wallet-header-actions">
            <button
              type="button"
              className="bind-wallet-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="bind-wallet-menu"
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
        <div className="bind-wallet-title-bar">
          <button
            type="button"
            className="bind-wallet-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Payment Methods</h1>
        </div>

        {/* Content */}
        <main className="bind-wallet-content">
          <form onSubmit={handleSubmit} className="form-card">
            {/* Withdrawal Type - Only this one has dropdown */}
            <div className="form-section">
              <button
                type="button"
                className="section-header"
                onClick={toggleWithdrawalDropdown}
              >
                <span className="section-header-title">Withdrawal Type</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="section-header-title">{walletType}</span>
                </div>
              </button>

              <div className={`section-content ${expandedSection === "withdrawal" ? "open" : ""}`}>
                <div className="section-inner">
                  {walletTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`dropdown-item ${walletType === type ? "selected" : ""}`}
                      onClick={() => {
                        setWalletType(type);
                        setExpandedSection(null);
                      }}
                    >
                      <span>{type}</span>
                      {walletType === type && <span className="dropdown-checkmark">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Default Toggle */}
            <div className="form-section">
              <div className="toggle-container">
                <span className="toggle-label">Default</span>
                <button
                  type="button"
                  className={`toggle-switch ${isDefault ? "active" : ""}`}
                  onClick={() => setIsDefault(!isDefault)}
                  aria-label="Toggle default wallet"
                />
              </div>
            </div>

            {/* Account Holder Name - No dropdown arrow */}
            <div className="form-section">
              <div
                className="section-header"
                style={{ cursor: "default", background: "linear-gradient(145deg, #072952 0%, #061f42 100%)" }}
              >
                <span className="section-header-title">Account Holder Name</span>
              </div>
              <div
                style={{
                  padding: "clamp(12px, 1.8vw, 16px)",
                  background: "#f9f9f9",
                  borderRadius: "0 0 8px 8px",
                  border: "1px solid #e8e8e8",
                  borderTop: "none",
                }}
              >
                <input
                  type="text"
                  className="form-input"
                  placeholder="Account Holder Name"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
              </div>
            </div>

            {/* Wallet Name - No dropdown arrow */}
            <div className="form-section">
              <div
                className="section-header"
                style={{ cursor: "default", background: "linear-gradient(145deg, #072952 0%, #061f42 100%)" }}
              >
                <span className="section-header-title">Wallet Name</span>
              </div>
              <div
                style={{
                  padding: "clamp(12px, 1.8vw, 16px)",
                  background: "#f9f9f9",
                  borderRadius: "0 0 8px 8px",
                  border: "1px solid #e8e8e8",
                  borderTop: "none",
                }}
              >
                <input
                  type="text"
                  className="form-input"
                  placeholder="Wallet Name"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                />
              </div>
            </div>

            {/* Wallet Address - No dropdown arrow */}
            <div className="form-section">
              <div
                className="section-header"
                style={{ cursor: "default", background: "linear-gradient(145deg, #072952 0%, #061f42 100%)" }}
              >
                <span className="section-header-title">Wallet Address</span>
              </div>
              <div
                style={{
                  padding: "clamp(12px, 1.8vw, 16px)",
                  background: "#f9f9f9",
                  borderRadius: "0 0 8px 8px",
                  border: "1px solid #e8e8e8",
                  borderTop: "none",
                }}
              >
                <input
                  type="text"
                  className="form-input"
                  placeholder="Wallet Address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </main>

        {/* Success Message */}
        {showSuccess && (
          <div className="success-message">
            ✅ Wallet bound successfully!
          </div>
        )}

        {/* Customer Service Modal */}
        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}
