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

  .personal-info-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .personal-info-page button {
    font-family: inherit;
  }

  .personal-info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .personal-info-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .personal-info-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .personal-info-contact {
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

  .personal-info-contact:hover {
    background: #222222;
  }

  .personal-info-menu {
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

  .personal-info-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .personal-info-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .personal-info-back {
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

  .personal-info-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .personal-info-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .personal-info-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-card {
    background: #cfcfcf;
    border-radius: 14px;
    margin-bottom: 24px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #b8b8b8;
    background: transparent;
  }

  .info-row:last-child {
    border-bottom: none;
  }

  .info-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .info-value {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 500;
    color: #000000;
    text-align: right;
    letter-spacing: -0.02em;
  }

  .security-section {
    margin-top: clamp(24px, 3vw, 32px);
  }

  .security-title {
    margin: 0 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .security-card {
    background: #cfcfcf;
    border-radius: 14px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .security-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #b8b8b8;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: background 0.15s;
  }

  .security-row:hover {
    background: rgba(0,0,0,0.05);
  }

  .security-row:last-child {
    border-bottom: none;
  }

  .security-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .chevron {
    font-size: clamp(1.2rem, 1.8vw, 1.4rem);
    color: #666666;
    line-height: 1;
    font-weight: 300;
  }

  @media (max-width: 720px) {
    .personal-info-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .personal-info-logo {
      width: 180px;
      height: 34px;
    }

    .personal-info-header-actions {
      gap: 9px;
    }

    .personal-info-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .personal-info-menu {
      width: 28px;
      height: 24px;
    }

    .personal-info-menu span {
      height: 2px;
    }

    .personal-info-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .personal-info-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .personal-info-back img {
      width: 20px;
      height: 20px;
    }

    .personal-info-title-bar h1 {
      font-size: 1.5rem;
    }

    .personal-info-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`;

export default function PersonalInfo() {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const [showContactModal, setShowContactModal] = useState(false);

  if (!profile) {
    return <div style={{ padding: 12 }}>No profile found.</div>;
  }

  const username = profile?.username || "N/A";
  const phone = profile?.phone || "N/A";
  const gender = profile?.gender || "N/A";

  return (
    <>
      <style>{styles}</style>

      <div className="personal-info-page">
        {/* Header matching Deposit and Withdraw pages */}
        <header className="personal-info-header">
          <img src={logo} alt="Instrument" className="personal-info-logo" />

          <div className="personal-info-header-actions">
            <button
              type="button"
              className="personal-info-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="personal-info-menu"
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
        <div className="personal-info-title-bar">
          <button
            type="button"
            className="personal-info-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Account Info</h1>
        </div>

        {/* Content */}
        <main className="personal-info-content">
          {/* My Profile Section */}
          <div className="section-title">My Profile</div>

          <div className="profile-card">
            <div className="info-row">
              <div className="info-label">Username</div>
              <div className="info-value">{username}</div>
            </div>

            <div className="info-row">
              <div className="info-label">Mobile Number</div>
              <div className="info-value">{phone}</div>
            </div>

            <div className="info-row">
              <div className="info-label">Gender</div>
              <div className="info-value">{gender}</div>
            </div>
          </div>

          {/* Security Section */}
          <div className="security-section">
            <div className="security-title">Security</div>

            <div className="security-card">
              <button
                type="button"
                className="security-row"
                onClick={() => navigate("/update-password")}
              >
                <span className="security-label">Login Password</span>
                <span className="chevron">⌄</span>
              </button>

              <button
                type="button"
                className="security-row"
                onClick={() => navigate("/update-withdraw-password")}
              >
                <span className="security-label">Transaction Password</span>
                <span className="chevron">⌄</span>
              </button>
            </div>
          </div>
        </main>

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}