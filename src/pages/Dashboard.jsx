import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/header/logo.svg";
import bannerVideo from "../assets/images/INSTRUMENT clicp.mp4";

import notificationIcon from "../assets/images/home/download.png";

import eventIcon from "../assets/images/home/Event-06ac9e70.png";
import termsIcon from "../assets/images/home/TC-43047a64.png";
import certificateIcon from "../assets/images/home/Certificate-764a13af.png";
import faqIcon from "../assets/images/home/FAQs-93891c56.png";
import aboutIcon from "../assets/images/home/About-453ef9ca.png";
import vipIcon from "../assets/images/vip/Vip-5ce36f29.png";

import specialRewardImage from "../assets/images/home/special-reward.png";

import alphsenseImage from "../assets/images/dashboard/alphasense.jpg";
import feeledImage from "../assets/images/dashboard/feeled.jpg";
import ouraImage from "../assets/images/dashboard/oura.jpg";
import perfectedImage from "../assets/images/dashboard/perfected.jpg";
import serviceImage1 from "../assets/images/dashboard/service-1.jpg";
import serviceImage2 from "../assets/images/dashboard/service-2.jpg";
import serviceImage3 from "../assets/images/dashboard/service-3.jpg";
import serviceImage4 from "../assets/images/dashboard/service-4.jpg";
import serviceImage5 from "../assets/images/dashboard/service-5.jpg";
import serviceImage6 from "../assets/images/dashboard/service-6.jpg";

import homeIcon from "../assets/images/tabBar/homeh.png";
import startingIcon from "../assets/images/tabBar/icon30.png";
import recordsIcon from "../assets/images/tabBar/records.png";

import CustomerServiceModal from "../components/CustomerServiceModal";

const API_URL = "https://stacks-admin.onrender.com";

const styles = `
  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .dashboard-page {
    min-height: 100vh;
    padding-bottom: 92px;
    overflow-x: hidden;
    background: #ffffff;
    color: #000000;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
  }

  .dashboard-page *,
  .dashboard-page *::before,
  .dashboard-page *::after {
    box-sizing: border-box;
  }

  .dashboard-page button {
    font-family: inherit;
  }

  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .dashboard-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .dashboard-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .dashboard-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
  }

  .dashboard-menu {
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

  .dashboard-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .dashboard-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
  }

  .dashboard-notice {
    position: relative;
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-height: clamp(58px, 8vw, 102px);
    overflow: hidden;
    border-bottom: 1px solid #dddddd;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    white-space: nowrap;
  }

  .dashboard-notice-icon {
    position: relative;
    z-index: 2;
    width: clamp(22px, 3.2vw, 42px);
    height: clamp(22px, 3.2vw, 42px);
    flex: 0 0 auto;
    object-fit: contain;
    display: block;
    background: #ffffff;
  }

  .dashboard-notice-track {
    min-width: max-content;
    display: inline-block;
    padding-left: 100%;
    animation: dashboard-notice-scroll 18s linear infinite;
  }

  @keyframes dashboard-notice-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  .dashboard-banner {
    width: 100%;
    height: clamp(250px, 51.6vw, 516px);
    margin-top: clamp(20px, 3.4vw, 34px);
    overflow: hidden;
    border-radius: clamp(12px, 1.8vw, 18px);
    background: #edf249;
  }

  .dashboard-banner video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dashboard-intro {
    margin: clamp(22px, 3.4vw, 34px) 0 clamp(18px, 2.8vw, 28px);
    font-size: clamp(1.25rem, 3.2vw, 3rem);
    line-height: 1.32;
    letter-spacing: -0.065em;
  }

  .dashboard-black-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-width: clamp(180px, 29.6vw, 296px);
    height: clamp(42px, 6.4vw, 64px);
    padding: 0 clamp(18px, 2.6vw, 26px);
    border: 0;
    border-radius: 36px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.3vw, 1.3rem);
    cursor: pointer;
  }

  .dashboard-black-button .arrow {
    font-size: clamp(1.4rem, 2.2vw, 2.2rem);
    line-height: 0;
  }

  .dashboard-divider {
    width: 100%;
    height: clamp(1px, 0.2vw, 2px);
    margin: clamp(24px, 4.2vw, 42px) 0 clamp(20px, 3.4vw, 34px);
    background: #000000;
  }

  .dashboard-section-title {
    margin: 0 0 clamp(18px, 3.4vw, 34px);
    font-size: clamp(1rem, 1.9vw, 1.9rem);
    font-weight: 400;
    letter-spacing: -0.065em;
  }

  .quick-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(12px, 3.2vw, 32px);
  }

  .quick-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(150px, 30.2vw, 302px);
    padding: clamp(20px, 3.8vw, 38px)
      clamp(10px, 2vw, 20px)
      clamp(16px, 2.8vw, 28px);
    border: 0;
    border-radius: clamp(12px, 2.5vw, 25px);
    color: #000000;
    font-size: clamp(1rem, 2vw, 2rem);
    letter-spacing: -0.06em;
    cursor: pointer;
  }

  .quick-link img {
    width: clamp(70px, 12.6vw, 126px);
    height: clamp(70px, 12.6vw, 126px);
    object-fit: contain;
  }

  .quick-link.event {
    background: #edf8e9;
  }

  .quick-link.vip,
  .quick-link.faq {
    background: #beb4ad;
  }

  .quick-link.terms {
    background: #f5ff7b;
  }

  .quick-link.certificate {
    background: #c9cdf5;
  }

  .quick-link.about {
    background: #8d8e9b;
  }

  .recent-section {
    margin-top: clamp(30px, 5.6vw, 56px);
  }

  .recent-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(24px, 5.4vw, 54px) clamp(14px, 3.2vw, 32px);
  }

  .recent-card {
    min-width: 0;
  }

  .recent-image {
    width: 100%;
    aspect-ratio: 1.05;
    overflow: hidden;
    border-radius: clamp(12px, 2vw, 20px);
    background: #dddddd;
  }

  .recent-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recent-card h3 {
    margin: clamp(10px, 1.8vw, 18px) 0 clamp(6px, 1vw, 10px);
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    letter-spacing: -0.07em;
  }

  .recent-card small {
    color: #999999;
    font-size: clamp(0.7rem, 1.35vw, 1.35rem);
    letter-spacing: -0.04em;
  }

  .services {
    margin-top: clamp(30px, 5.6vw, 56px);
    padding: clamp(30px, 6.2vw, 62px)
      clamp(20px, 4.2vw, 42px)
      clamp(70px, 7.4vw, 100px);
    background: #e5eb45;
  }

  .services-label {
    display: block;
    margin-bottom: clamp(42px, 9vw, 90px);
    font-size: clamp(0.85rem, 1.15vw, 1.15rem);
  }

  .services h2 {
    max-width: 800px;
    margin: 0 0 clamp(40px, 9vw, 90px);
    font-size: clamp(1.8rem, 4.5vw, 4.4rem);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.07em;
  }

  .services p {
    max-width: 950px;
    margin: 0 0 clamp(32px, 6.8vw, 68px);
    font-size: clamp(0.95rem, 2.4vw, 2.25rem);
    line-height: 1.45;
    letter-spacing: -0.06em;
  }

  .services-image-slider {
    width: 100%;
    overflow: hidden;
    margin-top: clamp(32px, 7.4vw, 74px);
    border-radius: clamp(12px, 2vw, 20px);
  }

  .services-image-track {
    display: flex;
    width: 600%;
    transition: transform 700ms ease-in-out;
  }

  .services-slide {
    flex: 0 0 16.666666%;
    width: 16.666666%;
  }

  .services-slide img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.05;
    object-fit: cover;
  }

  .services-slider-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  .services-slider-dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .services-slider-dot.active {
    background: #000000;
  }

  .dashboard-footer {
    width: 100%;
    min-height: clamp(110px, 18vw, 220px);
    padding: clamp(24px, 4vw, 42px) 0 clamp(80px, 10vw, 120px);
    background: #ffffff;
  }

  .dashboard-footer-divider {
    width: calc(100% - clamp(36px, 8.4vw, 84px));
    height: clamp(1px, 0.2vw, 2px);
    margin: 0 auto;
    background: #000000;
  }

  .dashboard-footer-icon {
    display: block;
    width: clamp(72px, 11vw, 120px);
    height: clamp(72px, 11vw, 120px);
    margin: clamp(24px, 4vw, 42px) auto 0;
    object-fit: contain;
  }

  .bottom-navigation {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: clamp(82px, 11.6vw, 116px);
    padding: clamp(8px, 1.2vw, 12px) clamp(22px, 3.2vw, 32px);
    background: #000000;
  }

  .bottom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-width: clamp(80px, 15vw, 150px);
    border: 0;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.75rem, 1.3vw, 1.3rem);
    cursor: pointer;
  }

  .bottom-item img {
    width: clamp(30px, 4.3vw, 43px);
    height: clamp(30px, 4.3vw, 43px);
    margin-bottom: clamp(4px, 0.8vw, 8px);
    object-fit: contain;
  }

  .bottom-item.starting {
    transform: translateY(clamp(-30px, -3vw, -24px));
  }

  .bottom-item.starting img {
    width: clamp(76px, 12.4vw, 124px);
    height: clamp(76px, 12.4vw, 124px);
    margin-bottom: clamp(-13px, -1.3vw, -8px);
  }

  .reward-overlay,
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.7);
  }

  .reward-modal {
    position: relative;
    width: min(900px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    background: #ffffff;
  }

  .reward-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .reward-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.4);
    font-size: 2.1rem;
    line-height: 1;
    cursor: pointer;
  }

  .reward-cancel {
    display: block;
    width: calc(100% - 48px);
    height: 60px;
    margin: 18px 24px 24px;
    border: 0;
    border-radius: 34px;
    color: #ffffff;
    background: #000000;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .withdraw-modal {
    width: min(390px, calc(100% - 32px));
    padding: 24px;
    border-radius: 18px;
    background: #ffffff;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .withdraw-header h2 {
    margin: 0;
    font-size: 1.1rem;
  }

  .withdraw-header button {
    border: 0;
    background: transparent;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .withdraw-modal input {
    width: 100%;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #dddddd;
    outline: none;
    background: #f6f7fb;
    font: inherit;
  }

  .withdraw-modal form > button {
    width: 100%;
    height: 48px;
    margin-top: 14px;
    border: 0;
    border-radius: 28px;
    color: #ffffff;
    background: #000000;
    font: inherit;
    cursor: pointer;
  }

  .withdraw-error {
    margin: 8px 0 0;
    color: #d00000;
    font-size: 0.82rem;
  }

  .dashboard-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 700px) {
    .dashboard-page {
      padding-bottom: 76px;
    }

    .dashboard-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .dashboard-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .dashboard-header-actions {
      gap: 9px;
    }

    .dashboard-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .dashboard-menu {
      width: 28px;
      height: 24px;
    }

    .dashboard-menu span {
      height: 2px;
    }

    .dashboard-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .dashboard-notice {
      min-height: 58px;
      gap: 8px;
      font-size: 0.78rem;
    }

    .dashboard-notice-icon {
      width: 22px;
      height: 22px;
    }

    .dashboard-banner {
      height: 250px;
      margin-top: 20px;
      border-radius: 14px;
    }

    .dashboard-intro {
      margin: 24px 0 18px;
      font-size: 1.35rem;
      line-height: 1.35;
    }

    .dashboard-black-button {
      min-width: 190px;
      height: 44px;
      font-size: 0.85rem;
    }

    .dashboard-divider {
      margin: 26px 0 20px;
    }

    .dashboard-section-title {
      margin-bottom: 18px;
      font-size: 1rem;
    }

    .quick-links {
      gap: 12px;
    }

    .quick-link {
      min-height: 150px;
      padding: 20px 10px 16px;
      border-radius: 12px;
      font-size: 1rem;
    }

    .quick-link img {
      width: 72px;
      height: 72px;
    }

    .recent-section {
      margin-top: 30px;
    }

    .recent-grid {
      gap: 26px 12px;
    }

    .recent-card h3 {
      margin-top: 10px;
      font-size: 1rem;
    }

    .recent-card small {
      font-size: 0.7rem;
    }

    .services {
      margin-left: calc((100vw - 100%) / -2);
      margin-right: calc((100vw - 100%) / -2);
      margin-top: 30px;
      padding: 34px 20px 90px;
    }

    .services-label {
      margin-bottom: 42px;
      font-size: 0.85rem;
    }

    .services h2 {
      margin-bottom: 42px;
      font-size: 1.8rem;
    }

    .services p {
      margin-bottom: 32px;
      font-size: 0.95rem;
    }

    .services-image-slider {
      margin-top: 36px;
      border-radius: 12px;
    }

    .dashboard-footer {
      min-height: 90px;
      padding: 20px 0 90px;
    }

    .dashboard-footer-divider {
      width: calc(100% - 1px);
    }

    .dashboard-footer-icon {
      width: 76px;
      height: 76px;
      margin-top: 24px;
    }

    .bottom-navigation {
      height: 92px;
      padding: 28px 16px;
    }

    .bottom-item {
      min-width: 80px;
      font-size: 0.75rem;
    }

    .bottom-item img {
      width: 30px;
      height: 30px;
    }

    .bottom-item.starting {
      transform: translateY(-24px);
    }

    .bottom-item.starting img {
      width: 76px;
      height: 76px;
    }

    .reward-overlay {
      padding: 12px;
    }

    .reward-close {
      top: 8px;
      right: 8px;
      width: 36px;
      height: 36px;
      font-size: 1.6rem;
    }

    .reward-cancel {
      width: calc(100% - 24px);
      height: 50px;
      margin: 12px;
      font-size: 1rem;
    }
  }
`;

function RewardModal({ onClose }) {
  return (
    <div className="reward-overlay" role="dialog" aria-modal="true">
      <div className="reward-modal">
        <button
          type="button"
          className="reward-close"
          onClick={onClose}
          aria-label="Close special reward announcement"
        >
          ×
        </button>

        <img
          src={specialRewardImage}
          alt="Instrument special reward announcement"
          className="reward-image"
        />

        <button
          type="button"
          className="reward-cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function WithdrawModal({
  open,
  onClose,
  onSubmit,
  password,
  setPassword,
  error,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="withdraw-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="withdraw-header">
          <h2>Withdrawal Password</h2>

          <button type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Withdrawal Password"
            autoFocus
            disabled={loading}
          />

          {error && <p className="withdraw-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

function BottomNavigation({ navigate }) {
  return (
    <nav className="bottom-navigation">
      <button
        type="button"
        className="bottom-item"
        onClick={() => navigate("/dashboard")}
      >
        <img src={homeIcon} alt="" />
        <span>Home</span>
      </button>

      <button
        type="button"
        className="bottom-item starting"
        onClick={() => navigate("/tasks")}
      >
        <img src={startingIcon} alt="" />
        <span>Starting</span>
      </button>

      <button
        type="button"
        className="bottom-item"
        onClick={() => navigate("/records")}
      >
        <img src={recordsIcon} alt="" />
        <span>Records</span>
      </button>
    </nav>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [vipLevel, setVipLevel] = useState(0);

  const [showReward, setShowReward] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawLoading, setWithdrawLoading] = useState(false);

  const serviceImages = [
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage4,
    serviceImage5,
    serviceImage6,
  ];
  const [serviceSlide, setServiceSlide] = useState(0);

  const quickLinks = [
    {
      label: "Event",
      icon: eventIcon,
      path: "/events",
      className: "event",
    },
    {
      label: "VIP Level",
      icon: vipIcon,
      path: "/vip",
      className: "vip",
    },
    {
      label: "FAQs",
      icon: faqIcon,
      path: "/faq",
      className: "faq",
    },
    {
      label: "T&C's",
      icon: termsIcon,
      path: "/terms",
      className: "terms",
    },
    {
      label: "Certificate",
      icon: certificateIcon,
      path: "/certificate",
      className: "certificate",
    },
    {
      label: "About Us",
      icon: aboutIcon,
      path: "/about",
      className: "about",
    },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    let parsedUser;

    try {
      parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setBalance(parsedUser.balance || 0);
      setVipLevel(parsedUser.vipLevel || 0);
    } catch {
      localStorage.removeItem("currentUser");
      navigate("/login");
      return;
    }

    const token =
      localStorage.getItem("authToken") ||
      localStorage.getItem("token") ||
      parsedUser.token;

    if (!token) return;

    fetch(`${API_URL}/api/user-profile`, {
      headers: {
        "x-auth-token": token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load profile");
        }

        return response.json();
      })
      .then((data) => {
        if (!data?.user) return;

        const updatedUser = {
          ...parsedUser,
          ...data.user,
        };

        setUser(updatedUser);
        setBalance(data.user.balance || 0);
        setVipLevel(data.user.vipLevel || 0);

        localStorage.setItem(
          "currentUser",
          JSON.stringify(updatedUser)
        );
      })
      .catch(() => {
        // Preserve locally cached user data if the API is unavailable.
      });
  }, [navigate]);

  useEffect(() => {
    const rewardShown = sessionStorage.getItem(
      "instrument-special-reward-shown"
    );

    if (!rewardShown) {
      setShowReward(true);

      sessionStorage.setItem(
        "instrument-special-reward-shown",
        "true"
      );
    }
  }, []);

  useEffect(() => {
    const serviceInterval = window.setInterval(() => {
      setServiceSlide((currentSlide) => {
        return (currentSlide + 1) % serviceImages.length;
      });
    }, 3000);

    return () => {
      window.clearInterval(serviceInterval);
    };
  }, [serviceImages.length]);

  const handleWithdrawClick = () => {
    setWithdrawPassword("");
    setWithdrawError("");
    setShowWithdrawModal(true);
  };

  const submitWithdrawPassword = async (event) => {
    event.preventDefault();

    setWithdrawError("");
    setWithdrawLoading(true);

    try {
      const token =
        localStorage.getItem("authToken") ||
        localStorage.getItem("token") ||
        user?.token;

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `${API_URL}/api/verify-withdraw-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: withdrawPassword,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setShowWithdrawModal(false);
        setWithdrawPassword("");
        navigate("/withdraw");
      } else {
        setWithdrawError(
          data.message || "Incorrect withdrawal password."
        );
      }
    } catch {
      setWithdrawError(
        "Could not verify withdrawal password. Try again."
      );
    } finally {
      setWithdrawLoading(false);
    }
  };

  if (!user) {
    return (
      <>
        <style>{styles}</style>
        <div className="dashboard-loading">Loading...</div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>

      <div className="dashboard-page">
        {showReward && (
          <RewardModal onClose={() => setShowReward(false)} />
        )}

        <header className="dashboard-header">
          <img
            src={logo}
            alt="Instrument"
            className="dashboard-logo"
          />

          <div className="dashboard-header-actions">
            <button
              type="button"
              className="dashboard-contact"
              onClick={() => setShowServiceModal(true)}
            >
              Contact
            </button>

            <button
              type="button"
              className="dashboard-menu"
              onClick={() => navigate("/profile")}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <main className="dashboard-content">
          <div className="dashboard-notice">
            <img
              src={notificationIcon}
              alt=""
              className="dashboard-notice-icon"
            />

            <div className="dashboard-notice-track">
              Thank you for your support in Instrument Platform. Kindly
              read Rules &amp; regulations. Thank you.
            </div>
          </div>

          <section className="dashboard-banner">
            <video
              src={bannerVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </section>

          <p className="dashboard-intro">
            We are a digitally native design agency evolving brands
            through creative vision &amp; technology.
          </p>

          <button
            type="button"
            className="dashboard-black-button"
            onClick={() => navigate("/about")}
          >
            View All Work
            <span className="arrow">→</span>
          </button>

          <div className="dashboard-divider" />

          <section>
            <h2 className="dashboard-section-title">
              QUICK CLICKS
            </h2>

            <div className="quick-links">
              {quickLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`quick-link ${item.className}`}
                  onClick={() => navigate(item.path)}
                >
                  <span>{item.label}</span>
                  <img src={item.icon} alt="" />
                </button>
              ))}
            </div>
          </section>

          <section className="recent-section">
            <div className="dashboard-divider" />

            <h2 className="dashboard-section-title">
              RECENT WORK
            </h2>

            <div className="recent-grid">
              <article className="recent-card">
                <div className="recent-image">
                  <img src={feeledImage} alt="Feeled project" />
                </div>

                <h3>Feeled</h3>
                <small>#PRODUCT</small>
              </article>

              <article className="recent-card">
                <div className="recent-image">
                  <img src={ouraImage} alt="ŌURA project" />
                </div>

                <h3>ŌURA</h3>
                <small>#MARKETING</small>
              </article>

              <article className="recent-card">
                <div className="recent-image">
                  <img
                    src={alphsenseImage}
                    alt="AlphaSense project"
                  />
                </div>

                <h3>AlphaSense</h3>
                <small>#PRODUCT</small>
              </article>

              <article className="recent-card">
                <div className="recent-image">
                  <img
                    src={perfectedImage}
                    alt="Perfected project"
                  />
                </div>

                <h3>Perfected</h3>
                <small>#BRAND #MARKETING</small>
              </article>
            </div>
          </section>

          <section className="services">
            <span className="services-label">SERVICES</span>

            <h2>
              Expressive and enduring digital experiences.
            </h2>

            <p>
              We help our clients accelerate progress, shape outcomes,
              and envision the future. Through collaboration with
              companies across industries, we build scalable brand
              systems and products that leverage emerging behaviors
              and technologies, and ultimately unlock potential. Learn
              more about what we can do for you.
            </p>

            <button
              type="button"
              className="dashboard-black-button"
              onClick={() => setShowServiceModal(true)}
            >
              See our offerings
              <span className="arrow">→</span>
            </button>

            <div className="services-image-slider">
              <div
                className="services-image-track"
                style={{
                  transform: `translateX(-${serviceSlide * 16.666666}%)`,
                }}
              >
                {serviceImages.map((image, index) => (
                  <div className="services-slide" key={`${image}-${index}`}>
                    <img src={image} alt={`Instrument service ${index + 1}`} />
                  </div>
                ))}
              </div>

              <div className="services-slider-dots">
                {serviceImages.map((image, index) => (
                  <button
                    key={`${image}-${index}-dot`}
                    type="button"
                    className={`services-slider-dot ${
                      serviceSlide === index ? "active" : ""
                    }`}
                    onClick={() => setServiceSlide(index)}
                    aria-label={`Show service image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="dashboard-footer">
            <div className="dashboard-footer-divider" />
          </section>
        </main>

        <WithdrawModal
          open={showWithdrawModal}
          onClose={() => setShowWithdrawModal(false)}
          onSubmit={submitWithdrawPassword}
          password={withdrawPassword}
          setPassword={setWithdrawPassword}
          error={withdrawError}
          loading={withdrawLoading}
        />

        <CustomerServiceModal
          open={showServiceModal}
          onClose={() => setShowServiceModal(false)}
        />

        <BottomNavigation navigate={navigate} />
      </div>
    </>
  );
}
