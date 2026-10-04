import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerServiceModal from "../components/CustomerServiceModal";
import logo from "../assets/images/header/logo.svg";
import bannerVideo from "../assets/images/INSTRUMENT clicp.mp4";
import backButton from "../assets/images/download-1.png";

const styles = `
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .about-page {
    min-height: 100vh;
    padding-bottom: 30px;
    overflow-x: hidden;
    background: radial-gradient(
      circle at 50% 35%,
      rgba(0, 102, 190, 0.13),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      #03152d 0%,
      #021b38 48%,
      #031a34 100%
    );
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .about-page *,
  .about-page *::before,
  .about-page *::after {
    box-sizing: border-box;
  }

  .about-page button {
    font-family: inherit;
  }

  .about-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(
      110deg,
      rgba(4, 25, 52, 0.99) 0%,
      rgba(3, 19, 42, 0.99) 55%,
      rgba(12, 20, 58, 0.99) 100%
    );
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 191, 243, 0.06);
  }

  .about-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .about-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .about-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid rgba(0, 191, 243, 0.8);
    border-radius: 40px;
    color: #f4f8ff;
    background: linear-gradient(
      135deg,
      rgba(7, 42, 79, 0.98),
      rgba(7, 31, 65, 0.98)
    );
    box-shadow: 0 0 12px rgba(0, 191, 243, 0.08), inset 0 0 12px rgba(0, 191, 243, 0.03);
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
    font-weight: 500;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .about-contact:hover {
    border-color: #7048df;
    box-shadow: 0 0 16px rgba(112, 72, 223, 0.22), inset 0 0 12px rgba(0, 191, 243, 0.04);
    transform: translateY(-1px);
  }

  .about-menu {
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

  .about-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 55%,
      #7048df 100%
    );
    box-shadow: 0 0 8px rgba(0, 191, 243, 0.12);
  }

  .about-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
  }

  .about-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 30px 0 40px;
  }

  .about-back {
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
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .about-back:hover {
    opacity: 0.8;
    transform: translateX(-2px);
  }

  .about-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .about-title-row h1 {
    margin: 0;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    text-align: center;
    color: #f3f7ff;
    text-shadow: 0 0 16px rgba(0, 191, 243, 0.08);
  }

  .about-intro {
    margin: 0 0 40px;
    font-size: clamp(1.3rem, 2.2vw, 2rem);
    line-height: 1.5;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #e6f3ff;
  }

  .about-video-wrap {
    width: 100%;
    margin: 0 0 50px;
    border-radius: 12px;
    overflow: hidden;
    background: #02152d;
    border: 1px solid rgba(0, 143, 212, 0.45);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32), 0 0 18px rgba(0, 102, 190, 0.08);
  }

  .about-video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #02152d;
  }

  .about-cta {
    margin: 0 0 30px;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: 400;
    color: #eaf4ff;
    text-shadow: 0 0 14px rgba(0, 191, 243, 0.07);
  }

  .about-copy {
    margin: 0;
    font-size: clamp(1.15rem, 2.1vw, 1.8rem);
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: #c8ddf5;
  }

  .about-copy strong {
    font-weight: 700;
    color: #f3f7ff;
  }

  @media (max-width: 700px) {
    .about-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .about-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .about-header-actions {
      gap: 9px;
    }

    .about-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .about-menu {
      width: 28px;
      height: 24px;
    }

    .about-menu span {
      height: 2px;
    }

    .about-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .about-title-row {
      min-height: 46px;
      margin: 20px 0 24px;
    }

    .about-back {
      left: 0;
      width: 34px;
      height: 34px;
    }

    .about-back img {
      width: 20px;
      height: 20px;
    }

    .about-title-row h1 {
      font-size: 2rem;
    }

    .about-intro {
      font-size: 1.2rem;
      margin-bottom: 24px;
    }

    .about-video-wrap {
      margin-bottom: 30px;
      border-radius: 8px;
    }

    .about-cta {
      margin-bottom: 20px;
      font-size: 1.8rem;
      line-height: 1.3;
    }

    .about-copy {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;

export default function About() {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="about-page">
        <header className="about-header">
          <img src={logo} alt="Instrument" className="about-logo" />
          <div className="about-header-actions">
            <button
              type="button"
              className="about-contact"
              onClick={() => setShowContactModal(true)}
            >
              Contact
            </button>
            <button
              type="button"
              className="about-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open profile menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <main className="about-body">
          <div className="about-title-row">
            <button
              type="button"
              className="about-back"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <img src={backButton} alt="Back" />
            </button>
            <h1>About Us</h1>
          </div>

          <p className="about-intro">
            We're a company committed to shaping better futures. We put people
            first — our clients, our employees, and the users we serve. We
            pursue excellence — with our unwavering commitment to make work that
            goes above and beyond. We embrace growth — continually scaling in
            size, capabilities, and cultural intelligence. We own truth in
            action — using our powers for good to leave a lasting impact on the
            world.
          </p>

          <div className="about-video-wrap">
            <video
              className="about-video"
              src={bannerVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <h2 className="about-cta">
            Meet our talented team of creators and technologists.
          </h2>

          <p className="about-copy">
            We're a diverse group of designers, strategists, engineers, and
            wordsmiths who make things people love to use. Over the last 20
            years, we've helped the world's most progressive brands solve
            problems, seize opportunities, and create lasting growth for their
            business. Together, we shape a better future.
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
