import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  .update-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-password-page button {
    font-family: inherit;
  }

  .update-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .update-password-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-password-contact {
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

  .update-password-contact:hover {
    background: #222222;
  }

  .update-password-menu {
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

  .update-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .update-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .update-password-back {
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

  .update-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .update-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .update-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: #ffffff;
    border-radius: 14px;
    padding: clamp(20px, 3vw, 24px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-group {
    margin-bottom: clamp(16px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 100%;
    padding: clamp(12px, 2vw, 14px) clamp(12px, 2vw, 16px);
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #000000;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #000000;
    background: #ffffff;
  }

  .form-input::placeholder {
    color: #999999;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 8px;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
    border: none;
    border-radius: 100px;
    background: #666666;
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: #555555;
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .fade-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .fade-message-content {
    background: rgba(60, 60, 60, 0.94);
    color: #fff;
    border-radius: 16px;
    padding: clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 600;
    font-size: clamp(0.95rem, 1.6vw, 1.19rem);
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    opacity: 0.97;
    text-align: center;
    min-width: 140px;
    max-width: 80vw;
    letter-spacing: 0.01em;
    animation: fade-in-out 1s linear;
  }

  @keyframes fade-in-out {
    0% { opacity: 0; transform: scale(0.98); }
    10% { opacity: 1; transform: scale(1); }
    90% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.98); }
  }

  @media (max-width: 720px) {
    .update-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-password-header-actions {
      gap: 9px;
    }

    .update-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-password-menu span {
      height: 2px;
    }

    .update-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;

function FadeMessage({ message }) {
  return (
    <div className="fade-message">
      <div className="fade-message-content">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default function UpdatePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeMsg, setFadeMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const BASE_URL = "https://stacks-admin.onrender.com";
      const res = await fetch(`${BASE_URL}/api/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setFadeMsg("Password updated successfully!");
        setTimeout(() => {
          localStorage.removeItem("currentUser");
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
          navigate("/login");
        }, 1000);
      } else {
        setErrorMsg(data.message || "Password update failed.");
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="update-password-page">
        {/* Header */}
        <header className="update-password-header">
          <img src={logo} alt="Instrument" className="update-password-logo" />

          <div className="update-password-header-actions">
            <button
              type="button"
              className="update-password-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="update-password-menu"
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
        <div className="update-password-title-bar">
          <button
            type="button"
            className="update-password-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Security</h1>
        </div>

        {/* Content */}
        <main className="update-password-content">
          <div className="section-title">Login Password</div>

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {/* Old Password */}
              <div className="form-group">
                <label className="form-label">Old Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    aria-label="Toggle password visibility"
                  >
                    👁️
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="form-group">
                <label className="form-label">New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    aria-label="Toggle password visibility"
                  >
                    👁️
                  </button>
                </div>
              </div>

              {/* Confirm New Password */}
              <div className="form-group">
                <label className="form-label">Confirm New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-input"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="eye-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle password visibility"
                  >
                    👁️
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && <div className="error-message">{errorMsg}</div>}

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </main>

        {/* Fade Message */}
        {fadeMsg && <FadeMessage message={fadeMsg} />}

        {/* Customer Service Modal */}
        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}