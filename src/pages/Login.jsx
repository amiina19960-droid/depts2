import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CustomerServiceModal from "../components/CustomerServiceModal";
import logo from "../assets/images/header/logo.svg";
import "./Login.css";
import { useProfile } from "../context/profileContext";

function FadeMessage({ message, onDone, duration = 1000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onDone) onDone();
    }, duration);

    return () => clearTimeout(timer);
  }, [onDone, duration]);

  return (
    <div className="login-message-overlay">
      <div className="login-message">{message}</div>
    </div>
  );
}

function SpinnerOverlay({ duration = 500, onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onDone) onDone();
    }, duration);

    return () => clearTimeout(timer);
  }, [onDone, duration]);

  return (
    <div className="login-spinner-overlay">
      <div className="login-spinner" />
    </div>
  );
}

const API_URL = "https://dept-admin.onrender.com";

export default function Login({ refreshRecords }) {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [fadeMsg, setFadeMsg] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const navigate = useNavigate();
  const { fetchProfile } = useProfile();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: input.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();

      if (data.success) {
        const token =
          data.token ||
          (data.user && (data.user.token || data.user?.token)) ||
          null;

        if (token) {
          try {
            localStorage.setItem("authToken", token);
          } catch (e) {}

          try {
            localStorage.setItem("token", token);
          } catch (e) {}
        }

        if (data.user) {
          try {
            localStorage.setItem("currentUser", JSON.stringify(data.user));
          } catch (e) {}

          try {
            localStorage.setItem("user", data.user.username || "");
          } catch (e) {}
        }

        try {
          if (typeof fetchProfile === "function") {
            await fetchProfile();
          }
        } catch (err) {
          console.warn("Post-login fetchProfile failed:", err);
        }

        try {
          window.dispatchEvent(new Event("auth:login"));
        } catch (e) {}

        try {
          window.dispatchEvent(new Event("profile:refresh"));
        } catch (e) {}

        if (typeof refreshRecords === "function") {
          try {
            await refreshRecords();
          } catch (err) {
            // Ignore refresh errors.
          }
        }

        setFadeMsg("Login Success");
      } else {
        setFadeMsg(data.message || "Login failed!");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setFadeMsg("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (fadeMsg === "Login Success") {
      const timer = setTimeout(() => {
        setFadeMsg("");
        setShowSpinner(true);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (fadeMsg && fadeMsg !== "Login Success") {
      const timer = setTimeout(() => setFadeMsg(""), 1000);

      return () => clearTimeout(timer);
    }
  }, [fadeMsg]);

  useEffect(() => {
    if (showSpinner) {
      const timer = setTimeout(() => {
        setShowSpinner(false);
        navigate("/dashboard");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showSpinner, navigate]);

  return (
    <div className="login-page">
      {fadeMsg && <FadeMessage message={fadeMsg} />}
      {showSpinner && <SpinnerOverlay />}

      <main className="login-container">
        <div className="login-logo-wrapper">
          <img src={logo} alt="DEPT" className="login-logo" />
        </div>

        <h1 className="login-welcome">WELCOME TO</h1>
        <h2 className="login-heading">LOGIN TO CONTINUE</h2>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-field">
            <input
              name="username"
              type="text"
              placeholder="Username/Phone"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="login-field login-password-field">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z" />
                <circle cx="12" cy="12" r="3.1" />
              </svg>
            </button>
          </div>

          <div className="login-options">
            <label className="remember-password">
              <input type="checkbox" />
              <span className="custom-checkbox" />
              <span>Remember Password</span>
            </label>

            <Link to="/forgot-password" className="forgot-password">
              Forgot your password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don&apos;t have an account yet?{" "}
          <Link to="/register">Sign Up</Link>
        </p>

        <p className="support-text">
          Can&apos;t sign in?{" "}
          <button
            type="button"
            onClick={() => setShowCustomerModal(true)}
          >
            Contact our user support
          </button>
        </p>
      </main>

      <CustomerServiceModal
        open={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
      />
    </div>
  );
}
