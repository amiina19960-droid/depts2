import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerServiceModal from "../components/CustomerServiceModal";

import logo from "../assets/images/header/logo.svg";
import backButton from "../assets/images/download-1.png";

import vip1Badge from "../assets/images/vip/vip1.png";
import vip2Badge from "../assets/images/vip/vip2.png";
import vip3Badge from "../assets/images/vip/vip3.png";
import vip4Badge from "../assets/images/vip/vip4.png";
import vip5Badge from "../assets/images/vip/vip5.png";

const styles = `
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .vip-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .vip-page button {
    font-family: inherit;
  }

  .vip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(
        110deg,
        rgba(4, 25, 52, 0.99) 0%,
        rgba(3, 19, 42, 0.99) 55%,
        rgba(12, 20, 58, 0.99) 100%
      );
  }

  .vip-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .vip-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .vip-contact {
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

  .vip-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .vip-menu {
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

  .vip-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 58%,
      #7048df 100%
    );
  }

  .vip-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .vip-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 18px 0 16px;
  }

  .vip-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .vip-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .vip-title {
    margin: 0;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.05em;
    text-align: center;
    color: #f4f8ff;
    line-height: 1;
  }

  .vip-section {
    padding-bottom: 16px;
    margin-bottom: 14px;
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .vip-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .vip-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    margin-bottom: 8px;
  }

  .vip-row-main {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    flex: 1;
    min-width: 0;
  }

  .vip-badge {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .vip-badge img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .vip-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .vip-label {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    color: #f4f8ff;
    line-height: 1.1;
  }

  .vip-amount {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(244, 248, 255, 0.88);
    line-height: 1.15;
  }

  .vip-current-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    background: rgba(0, 191, 243, 0.16);
    border: 1px solid rgba(0, 191, 243, 0.45);
    color: #00bff3;
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .vip-features {
    margin-left: 84px;
    margin-top: 4px;
  }

  .vip-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .vip-features li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 4px;
    font-size: 0.9rem;
    line-height: 1.35;
    letter-spacing: -0.02em;
    color: rgba(244, 248, 255, 0.88);
    font-weight: 400;
  }

  .vip-features li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: #00bff3;
    font-size: 0.85em;
  }

  @media (max-width: 720px) {
    .vip-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .vip-logo {
      width: 180px;
      height: 34px;
    }

    .vip-header-actions {
      gap: 9px;
    }

    .vip-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .vip-menu {
      width: 28px;
      height: 24px;
    }

    .vip-menu span {
      height: 2px;
    }

    .vip-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .vip-title-row {
      min-height: 46px;
      margin: 10px 0 14px;
    }

    .vip-back {
      width: 32px;
      height: 32px;
    }

    .vip-back img {
      width: 20px;
      height: 20px;
    }

    .vip-title {
      font-size: 1.8rem;
    }

    .vip-row {
      gap: 10px;
      margin-bottom: 6px;
    }

    .vip-row-main {
      gap: 10px;
    }

    .vip-badge {
      width: 56px;
      height: 56px;
    }

    .vip-label {
      font-size: 1.15rem;
    }

    .vip-amount {
      font-size: 0.8rem;
    }

    .vip-current-pill {
      min-width: 78px;
      height: 28px;
      font-size: 0.75rem;
      padding: 0 12px;
    }

    .vip-features {
      margin-left: 66px;
      margin-top: 3px;
    }

    .vip-features li {
      font-size: 0.8rem;
      margin-bottom: 3px;
      padding-left: 10px;
    }
  }
`;

export default function VIP() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  const vipLevels = [
    {
      level: 1,
      amount: "USD 100.00–499.00",
      badge: vip1Badge,
      current: true,
      features: [
        "Suitable for most data capture scenarios involving light to medium usage",
        "Profit of 0.5% per product data",
        "40 product data per set",
        "Up to 80 data submissions per day",
        "Can complete 2 sets of data submissions per day",
        "No access to other Premium features",
      ],
    },
    {
      level: 2,
      amount: "USD 500.00–1,599.00",
      badge: vip2Badge,
      current: false,
      features: [
        "Premium user have limited access to all features of the platform",
        "Deposit according to our events",
        "Profit of 1.0% per product data",
        "45 product data per set",
        "Up to 90 product data per day",
        "Can complete 2 sets of data submissions per day",
        "Better profit and permission",
        "Full access to all other premium features",
      ],
    },
    {
      level: 3,
      amount: "USD 1,600.00–5,499.00",
      badge: vip3Badge,
      current: false,
      features: [
        "Premium user have limited access to all features of the platform",
        "Deposit according to our events",
        "Profit of 1.5% per product data",
        "50 product data per set",
        "Up to 100 product data per day",
        "Can complete 2 sets of data submissions per day",
        "Better profit and permission",
        "Full access to all other premium features",
      ],
    },
    {
      level: 4,
      amount: "USD 5,500.00–9,999.00",
      badge: vip4Badge,
      current: false,
      features: [
        "Premium user have limited access to all features of the platform",
        "Deposit according to our events",
        "Profit of 2.0% per product data",
        "55 product data per set",
        "Can complete 2 sets of product submissions per day",
        "Better profit and permission",
        "Up to 110 product submissions per day",
        "Full access to all other premium features",
      ],
    },
    {
      level: 5,
      amount: "USD 10,000.00 OR ABOVE",
      badge: vip5Badge,
      current: false,
      features: [
        "Supreme user gets unlimited access to all features of the platform",
        "Deposits according to our events",
        "Profit of 2.5% per product data",
        "60 product data per set",
        "Up to 120 product data per day",
        "Can complete 2 set of data submissions per day",
        "Better profits and permissions",
        "Full access to all other premium features",
      ],
    },
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="vip-page">
        <header className="vip-header">
          <img src={logo} alt="Stacks" className="vip-logo" />

          <div className="vip-header-actions">
            <button
              type="button"
              className="vip-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="vip-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <main className="vip-content">
          <div className="vip-title-row">
            <button
              type="button"
              className="vip-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <img src={backButton} alt="Back" />
            </button>

            <h1 className="vip-title">Vip Levels</h1>
          </div>

          {vipLevels.map((vip) => (
            <section key={vip.level} className="vip-section">
              <div className="vip-row">
                <div className="vip-row-main">
                  <div className="vip-badge">
                    <img src={vip.badge} alt={`VIP ${vip.level}`} />
                  </div>

                  <div className="vip-info">
                    <div className="vip-label">VIP{vip.level}</div>
                    <div className="vip-amount">{vip.amount}</div>
                  </div>
                </div>

                {vip.current && (
                  <div className="vip-current-pill">Current</div>
                )}
              </div>

              <div className="vip-features">
                <ul>
                  {vip.features.map((feature, index) => (
                    <li key={`${vip.level}-${index}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </main>

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}