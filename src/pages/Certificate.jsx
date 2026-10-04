import React from "react";
import { useNavigate } from "react-router-dom";
import CustomerServiceModal from "../components/CustomerServiceModal";

import logo from "../assets/images/header/logo.svg";
import backButton from "../assets/images/download-1.png";
import certificate from "../assets/images/certificates/certificate1.jpg";

const styles = `
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .cert-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #ffffff;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .cert-page button {
    font-family: inherit;
  }

  .cert-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .cert-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .cert-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .cert-contact {
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

  .cert-menu {
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

  .cert-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .cert-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #ebebeb;
    border-bottom: 1px solid #d9d9d9;
  }

  .cert-back {
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

  .cert-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .cert-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .cert-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 40px) 0;
  }

  .cert-image-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: clamp(8px, 1.5vw, 12px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .cert-image-wrapper img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    .cert-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .cert-logo {
      width: 180px;
      height: 34px;
    }

    .cert-header-actions {
      gap: 9px;
    }

    .cert-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .cert-menu {
      width: 28px;
      height: 24px;
    }

    .cert-menu span {
      height: 2px;
    }

    .cert-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .cert-back {
      width: 34px;
      height: 34px;
      left: 14px;
    }

    .cert-back img {
      width: 20px;
      height: 20px;
    }

    .cert-title-bar h1 {
      font-size: 1.5rem;
    }

    .cert-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .cert-image-wrapper {
      border-radius: 8px;
    }
  }
`;

export default function Certificate() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = React.useState(false);

  return (
    <>
      <style>{styles}</style>

      <div className="cert-page">
        <header className="cert-header">
          <img src={logo} alt="Instrument" className="cert-logo" />

          <div className="cert-header-actions">
            <button
              type="button"
              className="cert-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="cert-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <div className="cert-title-bar">
          <button
            type="button"
            className="cert-back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <img src={backButton} alt="Back" />
          </button>

          <h1>Certificate</h1>
        </div>

        <main className="cert-content">
          <div className="cert-image-wrapper">
            <img src={certificate} alt="Certificate" />
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