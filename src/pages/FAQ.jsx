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

  .faq-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .faq-page *,
  .faq-page *::before,
  .faq-page *::after {
    box-sizing: border-box;
  }

  .faq-page button {
    font-family: inherit;
  }

  .faq-header {
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

  .faq-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .faq-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .faq-contact {
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

  .faq-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .faq-menu {
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

  .faq-menu span {
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

  .faq-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .faq-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .faq-back {
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

  .faq-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .faq-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #f4f8ff;
  }

  .faq-section {
    margin-top: 10px;
  }

  .faq-section h2 {
    margin: 0 0 18px;
    font-size: clamp(1.3rem, 2vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #00bff3;
  }

  .faq-section p {
    margin: 0 0 18px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .faq-section p strong {
    font-weight: 600;
    color: #ffffff;
  }

  @media (max-width: 700px) {
    .faq-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .faq-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .faq-header-actions {
      gap: 9px;
    }

    .faq-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .faq-menu {
      width: 28px;
      height: 24px;
    }

    .faq-menu span {
      height: 2px;
    }

    .faq-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .faq-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .faq-back {
      width: 34px;
      height: 34px;
    }

    .faq-back img {
      width: 20px;
      height: 20px;
    }

    .faq-title-row h1 {
      font-size: 2rem;
    }

    .faq-section h2 {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }

    .faq-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 16px;
    }
  }
`;

export default function FAQ() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <style>{styles}</style>

      <div className="faq-page">
        <header className="faq-header">
          <img src={logo} alt="Instrument" className="faq-logo" />

          <div className="faq-header-actions">
            <button
              type="button"
              className="faq-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="faq-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <main className="faq-body">
          <div className="faq-title-row">
            <button
              type="button"
              className="faq-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <img src={backButton} alt="Back" />
            </button>

            <h1>FAQs</h1>
          </div>

          <section className="faq-section">
            <h2>I. Start Submission</h2>

            <p>
              <strong>1.1</strong> A minimum account balance of 50 USD is required to initiate
              the first set of 40 products submission.
            </p>

            <p>
              <strong>1.2</strong> A minimum deposit of 100 USD is required to reset and begin
              the new daily products submission process.
            </p>
          </section>

          <section className="faq-section">
            <h2>II. Withdrawal</h2>

            <p>
              <strong>2.1</strong> Withdrawal amount is based on the VIP level of the account,
              if withdrawals exceeding the amount require an upgrade to the appropriate membership
              level, as each level is subject to different withdrawal limits.
            </p>

            <p>
              <strong>2.2</strong> All users must complete three sets of products submissions per
              day in order to be eligible to request a withdrawal. Furthermore, users are required
              to apply for the withdrawal of their entire account balance; partial withdrawals are
              not permitted.
            </p>

            <p>
              <strong>2.3</strong> Users who choose to abandon or exit the products submission
              process will forfeit their eligibility to apply for a withdrawal or request a refund.
            </p>

            <p>
              <strong>2.4</strong> If a withdrawal request has not been formally submitted by the
              user, Instrument is unable to process any withdrawal on their behalf.
            </p>
          </section>

          <section className="faq-section">
            <h2>III. Funds</h2>

            <p>
              <strong>3.1</strong> All funds are securely held within the user's account and may
              be withdrawn in full upon successful completion of all required products submission.
            </p>

            <p>
              <strong>3.2</strong> To ensure the security and integrity of user funds, all data
              processing is conducted automatically by the system; manual processing is not permitted.
            </p>

            <p>
              <strong>3.3</strong> The platform assumes full responsibility for any accidental loss
              of funds resulting from system errors or platform-related issues.
            </p>
          </section>

          <section className="faq-section">
            <h2>IV. Account Security</h2>

            <p>
              <strong>4.1</strong> Users are strictly advised not to disclose their login passwords
              or security codes to any third party. The platform shall not be held liable for any
              loss or damage resulting from unauthorized access due to such disclosure.
            </p>

            <p>
              <strong>4.2</strong> For security purposes, it is strongly recommended that users do
              not use easily identifiable information such as birthdates, identification numbers, or
              mobile phone numbers as their login passwords or security codes.
            </p>

            <p>
              <strong>4.3</strong> In the event that a user forgets their login password or security
              PIN, they must contact the platform's online customer service for assistance in resetting
              the credentials.
            </p>
          </section>

          <section className="faq-section">
            <h2>V. Normal Products</h2>

            <p>
              <strong>5.1</strong> Platform earnings are categorized into normal earnings and
              "ten-times revenue" earnings. Under normal circumstances, users will typically receive
              1 to 3 merged product sets per submission set, with the possibility of obtaining a
              maximum of 3 merged data sets from a single set.
            </p>

            <p>
              <strong>5.2</strong> VIP 1 members will earn 0.5% of the profit for each normal
              product submission.
            </p>

            <p>
              <strong>5.3</strong> VIP 1 members will earn 5.0% of the profit for each merged
              product submission.
            </p>

            <p>
              <strong>5.4</strong> Funds and earnings from completed product submissions will be
              credited back to the user's account upon successful completion of each product set.
            </p>

            <p>
              <strong>5.5</strong> The system will randomly distribute product to the user's account
              based on the total balance in the user's account.
            </p>

            <p>
              <strong>5.6</strong> Once product has been distributed to the user's account, it
              cannot be canceled, skipped, or modified.
            </p>
          </section>

          <section className="faq-section">
            <h2>VI. Merged Product</h2>

            <p>
              <strong>6.1</strong> Merged Product consist of 1 to 3 product data sets. Users may
              not necessarily receive 3 merged data sets; the system will randomly assign normal
              product data, with users having a higher likelihood of receiving either 1 or 3 product
              data sets within the merged product.
            </p>

            <p>
              <strong>6.2</strong> Users will receive ten times the commission for each product set
              in the merged product compared to the commission for normal product data.
            </p>

            <p>
              <strong>6.3</strong> Once the user is matched with merged product, all associated funds
              will be on-hold until the completion of each products submission. The funds will be
              refunded to the user's account upon successful completion of the required submissions.
            </p>

            <p>
              <strong>6.4</strong> The system will randomly assign merged product to the user's
              account based on the total balance within the user's account.
            </p>

            <p>
              <strong>6.5</strong> Once merged products have been distributed to the user's
              account, they cannot be canceled, skipped, or modified.
            </p>
          </section>

          <section className="faq-section">
            <h2>VII. Deposit</h2>

            <p>
              <strong>7.1</strong> The deposit amount is determined by the user, and the platform
              does not impose any specific deposit requirements. It is recommended that users make
              advance payments based on their financial capacity.
            </p>

            <p>
              <strong>7.2</strong> If a deposit is required when receiving a merged product, users
              are advised to make an advance payment to cover the insufficient amount indicated in
              their account.
            </p>

            <p>
              <strong>7.3</strong> Before proceeding with an advance payment, users must contact
              user support to request the payment details and confirm the specific deposit information.
            </p>

            <p>
              <strong>7.4</strong> The platform will not be held liable for any errors in depositing
              funds to an incorrect account.
            </p>
          </section>

          <section className="faq-section">
            <h2>VIII. Merchants' Cooperation</h2>

            <p>
              <strong>8.1</strong> The availability of product on the platform fluctuates, and if
              product submissions are delayed for an extended period, merchants may be unable to
              offload the data, which could negatively impact their progress. It is strongly
              recommended that users complete all required submissions and apply for withdrawals
              promptly to avoid hindering the merchants' progress.
            </p>

            <p>
              <strong>8.2</strong> Merchants will provide users with deposit details to facilitate
              the deposit process.
            </p>

            <p>
              <strong>8.3</strong> Delays in completing product submissions will have a detrimental
              effect on merchants and the overall process.
            </p>
          </section>

          <section className="faq-section">
            <h2>IX. Invitation</h2>

            <p>
              <strong>9.1</strong> Users may invite other users to the platform using the invitation
              code linked to their account.
            </p>

            <p>
              <strong>9.2</strong> Users must complete all product submissions in their account
              before they can invite other users.
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

          <section className="faq-section">
            <h2>X. User Authentication</h2>

            <p>
              <strong>10.</strong> All users must undergo authentication before being eligible to
              apply for any withdrawal of funds from the platform. This measure is implemented to
              ensure the security of all users' funds and to prevent any potential loss of assets
              for active users on our platform.
            </p>
          </section>

          <section className="faq-section">
            <h2>XI. Operating Hours</h2>

            <p>
              <strong>11.1</strong> The platform operates from 10:00 - 23:00 (EST).
            </p>

            <p>
              <strong>11.2</strong> Online customer service is available from 10:00 - 23:00 (EST).
            </p>

            <p>
              <strong>11.3</strong> Withdrawal operations are processed between 10:00 - 23:00 (EST).
            </p>
          </section>
        </main>

        <CustomerServiceModal
          open={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      </div>
    </>
  );
}