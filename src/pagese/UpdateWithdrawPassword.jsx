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

  .update-withdraw-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-withdraw-password-page button {
    font-family: inherit;
  }

  .update-withdraw-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .update-withdraw-password-logo {
    filter: brightness(0) invert(1); width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-withdraw-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-withdraw-password-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .update-withdraw-password-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .update-withdraw-password-menu {
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

  .update-withdraw-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(90deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
  }

  .update-withdraw-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .update-withdraw-password-back {
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

  .update-withdraw-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block; filter: brightness(0) invert(1);
  }

  .update-withdraw-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .update-withdraw-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #f4f8ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
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

  .form-group:last-of-type {
    margin-bottom: clamp(16px, 2vw, 20px);
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
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
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #f4f8ff;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #f4f8ff;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #9ec8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 0;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
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
    text-align: center;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .success-text {
    color: #168b38;
    font-weight: 600;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .success-subtext {
    color: #b0b0b0;
    font-weight: 400;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    letter-spacing: -0.02em;
  }

  @media (max-width: 720px) {
    .update-withdraw-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-withdraw-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-withdraw-password-header-actions {
      gap: 9px;
    }

    .update-withdraw-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-withdraw-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-withdraw-password-menu span {
      height: 2px;
    }

    .update-withdraw-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-withdraw-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-withdraw-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-withdraw-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-withdraw-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;

export default function UpdateWithdrawPassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
      const res = await fetch(`${BASE_URL}/api/change-withdraw-password`, {
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
        setShowSuccess(true);
        setTimeout(() => {
          navigate("/personal-info");
        }, 2000);
      } else {
        setErrorMsg(data.message || "Withdrawal password update failed.");
      }
    } catch (err) {
      setLoading(false);
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="update-withdraw-password-page">
        {/* Header */}
        <header className="update-withdraw-password-header">
          <img src={logo} alt="Instrument" className="update-withdraw-password-logo" />

          <div className="update-withdraw-password-header-actions">
            <button
              type="button"
              className="update-withdraw-password-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="update-withdraw-password-menu"
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
        <div className="update-withdraw-password-title-bar">
          <button
            type="button"
            className="update-withdraw-password-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Security</h1>
        </div>

        {/* Content */}
        <main className="update-withdraw-password-content">
          <div className="section-title">Security Pin</div>

          <div className="form-container">
            {showSuccess ? (
              <div className="success-message">
                <div className="success-text">
                  Withdrawal password updated successfully!
                </div>
                <div className="success-subtext">
                  Redirecting to account info...
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Old Password */}
                <div className="form-group">
                  <label className="form-label">Old Security Pin</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Old Security Pin"
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
                  <label className="form-label">New Security Pin</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="New Security Pin"
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
                  <label className="form-label">Confirm New Security Pin</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-input"
                      placeholder="Confirm New Security Pin"
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
            )}
          </div>
        </main>

        {/* Customer Service Modal */}
        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}