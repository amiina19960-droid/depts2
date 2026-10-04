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

  .tc-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .tc-page *,
  .tc-page *::before,
  .tc-page *::after {
    box-sizing: border-box;
  }

  .tc-page button {
    font-family: inherit;
  }

  .tc-header {
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

  .tc-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .tc-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .tc-contact {
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

  .tc-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .tc-menu {
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

  .tc-menu span {
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

  .tc-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .tc-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .tc-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tc-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .tc-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #f4f8ff;
  }

  .tc-intro {
    margin: 0 0 28px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .tc-section {
    margin-top: 16px;
  }

  .tc-section h2 {
    margin: 0 0 14px;
    font-size: clamp(1.2rem, 1.9vw, 2.1rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #00bff3;
  }

  .tc-section p {
    margin: 0 0 14px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .tc-section p strong {
    color: #ffffff;
    font-weight: 600;
  }

  .tc-section ul {
    margin: 0 0 14px 28px;
    padding: 0;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    color: #f4f8ff;
  }

  .tc-section ul li {
    margin-bottom: 8px;
  }

  .tc-final {
    margin-top: 24px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #00bff3;
    font-weight: 600;
    text-align: right;
  }

  @media (max-width: 700px) {
    .tc-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .tc-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .tc-header-actions {
      gap: 9px;
    }

    .tc-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .tc-menu {
      width: 28px;
      height: 24px;
    }

    .tc-menu span {
      height: 2px;
    }

    .tc-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .tc-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .tc-back {
      width: 34px;
      height: 34px;
    }

    .tc-back img {
      width: 20px;
      height: 20px;
    }

    .tc-title-row h1 {
      font-size: 2rem;
    }

    .tc-intro {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 22px;
    }

    .tc-section h2 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    .tc-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .tc-final {
      font-size: 1.05rem;
      margin-top: 18px;
    }
  }
`;

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <style>{styles}</style>

      <div className="tc-page">
        <header className="tc-header">
          <img src={logo} alt="Instrument" className="tc-logo" />

          <div className="tc-header-actions">
            <button
              type="button"
              className="tc-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="tc-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <main className="tc-body">
          <div className="tc-title-row">
            <button
              type="button"
              className="tc-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <img src={backButton} alt="Back" />
            </button>

            <h1>T&Cs</h1>
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.4rem)', fontWeight: '600', letterSpacing: '-0.06em', marginBottom: '18px', color: '#f4f8ff' }}>
            Terms & Conditions
          </h2>

          <p className="tc-intro">
            These Terms and Conditions are governed by the following terminology and principles of interpretation. All users are required to adhere to the terms outlined by the platform. Any violations will result in corrective actions and penalties imposed by the platform. The User Agreement, which is part of these Terms and Conditions, is subject to the platform's final interpretation.
          </p>

          <section className="tc-section">
            <h2>1. Start to Submit Product Data</h2>

            <p>
              <strong>1.1</strong> A minimum account balance of 50 USD is required to initiate
              the first set of 40 product submissions.
            </p>

            <p>
              <strong>1.2</strong> A minimum deposit of 100 USD is required to reset and begin
              the new daily product submission process.
            </p>

            <p>
              <strong>1.3</strong> Users must complete the current dataset before requesting a
              reset for the next set of submissions.
            </p>
          </section>

          <section className="tc-section">
            <h2>2. Withdrawal</h2>

            <p>
              <strong>2.1</strong> Withdrawal amount is based on the VIP level of the account,
              if withdrawals exceeding the amount require an upgrade to the appropriate membership
              level, as each level is subject to different withdrawal limits.
            </p>

            <p>
              <strong>2.2</strong> Users are required to complete two sets of product submissions
              per day in order to submit a withdrawal request. Additionally, users must request
              the withdrawal of their full account balance.
            </p>

            <p>
              <strong>2.3</strong> Users who abandon or quit during the product submission
              process are ineligible to apply for a withdrawal or refund.
            </p>

            <p>
              <strong>2.4</strong> If a withdrawal request has not been formally submitted by the
              user, the platform cannot process any withdrawal on the user's behalf.
            </p>

            <p>
              <strong>2.5</strong> All members apply for withdrawal of more than 20,000 USD for
              the first time need to contact online customer service to process it to ensure the
              safety of all members' transfer funds.
            </p>
          </section>

          <section className="tc-section">
            <h2>3. Funds</h2>

            <p>
              <strong>3.1</strong> All user funds will be securely stored in their account and may
              be withdrawn in full once all product submissions are completed.
            </p>

            <p>
              <strong>3.2</strong> To avoid any loss of funds, all data processing will be handled
              by the system, not manually.
            </p>

            <p>
              <strong>3.3</strong> In case of accidental loss of funds, the platform will assume
              full responsibility.
            </p>
          </section>

          <section className="tc-section">
            <h2>4. Account Security</h2>

            <p>
              <strong>4.1</strong> Users must not share their login passwords or security PIN with
              others. If this results in a loss, the platform will not be responsible.
            </p>

            <p>
              <strong>4.2</strong> It is not recommended to set easily identifiable information,
              such as birthdates, ID card numbers, or phone numbers, as security codes or login
              passwords.
            </p>

            <p>
              <strong>4.3</strong> If users forget their login or withdrawal passwords, they should
              contact customer service to reset them.
            </p>
          </section>

          <section className="tc-section">
            <h2>5. Normal Product</h2>

            <p>
              <strong>5.1</strong> VIP 1 users can complete 2 sets of product submissions per day
              with a 0.5% commission for each normal product data.
            </p>

            <p>
              <strong>5.2</strong> VIP 2 users can complete 2 sets of product submissions per day
              with a 1.0% commission for each normal product data.
            </p>

            <p>
              <strong>5.3</strong> VIP 3 users can complete 2 sets of product submissions per day
              with a 1.5% commission for each normal product data.
            </p>

            <p>
              <strong>5.4</strong> VIP 4 users can complete 2 sets of product submissions per day
              with a 2.0% commission for each normal product data.
            </p>

            <p>
              <strong>5.5</strong> VIP 5 users can complete 2 sets of product submissions per day
              with a 2.5% commission for each normal product data.
            </p>

            <p>
              <strong>5.6</strong> Upon successful submission of product data, the commission will
              be automatically credited to the user's account balance.
            </p>

            <p>
              <strong>5.7</strong> The system will randomly assign product data to the user's
              account based on their account balance.
            </p>

            <p>
              <strong>5.8</strong> Once the data is assigned to the user's account, it cannot be
              canceled, skipped, or exchanged.
            </p>
          </section>

          <section className="tc-section">
            <h2>6. Merged Product</h2>

            <p>
              <strong>6.1</strong> Merged product consists of 2 to 3 product data sets. Users may
              not necessarily receive 3 product data sets; the system will randomly assign product
              data within the merged product, with a higher likelihood of receiving 1 product data
              set.
            </p>

            <p>
              <strong>6.2</strong> Users will earn ten times the commission for each product in
              the merged product compared to normal product data.
            </p>

            <p>
              <strong>6.3</strong> Upon receiving merged product, all funds will be placed on hold
              until the submission of each pending merged product is completed. These funds will be
              returned to the user's account after the submissions are finalized.
            </p>

            <p>
              <strong>6.4</strong> The system will randomly assign merged product to the user's
              account based on the total balance in the user's account.
            </p>

            <p>
              <strong>6.5</strong> Once merged product is assigned to the user's account, it
              cannot be canceled, skipped, or exchanged.
            </p>

            <p>
              <strong>6.6</strong> A user can receive a maximum of 3 merged product sets per set
              of product submission.
            </p>
          </section>

          <section className="tc-section">
            <h2>7. Advance Payments</h2>

            <p>
              <strong>7.1</strong> The amount for advance payment is determined by the user. The
              platform does not set specific amounts for the user, but recommends users make
              advance payments based on their financial capacity or after becoming familiar with
              the platform.
            </p>

            <p>
              <strong>7.2</strong> If a user needs to make an advance payment upon receiving merged
              product, it is advised that the user pays according to the negative balance indicated
              in their account.
            </p>

            <p>
              <strong>7.3</strong> Before making an advance payment, users must contact customer
              service to request advance payment details and confirm the merchant's wallet address.
            </p>

            <p>
              <strong>7.4</strong> The platform will not assume responsibility for any loss
              resulting from payments made to incorrect wallet addresses.
            </p>
          </section>

          <section className="tc-section">
            <h2>8. Merchant Cooperation</h2>

            <p>
              <strong>8.1</strong> Data availability on the platform fluctuates. If product is not
              processed in a timely manner, merchants may be unable to offload it, affecting their
              progress. Users are encouraged to complete their submissions and apply for withdrawals
              promptly to avoid hindering merchant progress. Users must complete all submissions
              within 24 hours to avoid complaints from merchants and order freezes.
            </p>

            <p>
              <strong>8.2</strong> Merchants will provide users with wallet addresses to facilitate
              advance payments.
            </p>
          </section>

          <section className="tc-section">
            <h2>9. Invitation</h2>

            <p>
              <strong>9.1</strong> Users may invite other users to the platform using the invitation
              code linked to their account.
            </p>

            <p>
              <strong>9.2</strong> Referral invitations are limited to once per user per month.
            </p>

            <p>
              <strong>9.3</strong> To be eligible to use an invitation code to invite referrals, a
              user must first complete 15 days of work after registration.
            </p>

            <p>
              <strong>9.4</strong> Referrers will receive 20% of the referee's daily earnings as a
              commission.
            </p>
          </section>

          <section className="tc-section">
            <h2>10. Credit Score</h2>

            <p>
              <strong>10.1</strong> Users must complete all sets of product data submissions to
              maintain a 100% credit score.
            </p>

            <p>
              <strong>10.2</strong> Failure to complete the submissions will result in a decrease
              in the user's credit score.
            </p>

            <p>
              <strong>10.3</strong> The credit score is determined by the number of incomplete
              orders and the timeliness of their completion.
            </p>

            <p>
              <strong>10.4</strong> A decrease in credit score may affect a user's ability to
              request withdrawals.
            </p>
          </section>

          <section className="tc-section">
            <h2>11. Operating Hours</h2>

            <p>
              <strong>11.1</strong> The platform operates from 10:00 - 23:00 (EST).
            </p>

            <p>
              <strong>11.2</strong> Customer service is available from 10:00 - 23:00 (EST).
            </p>

            <p>
              <strong>11.3</strong> Platform withdrawal hours are from 10:00 - 23:00 (EST).
            </p>
          </section>

          <p className="tc-final">
            The final right of interpretation belongs to Instrument.
          </p>
        </main>

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}