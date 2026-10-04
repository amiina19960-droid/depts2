import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";
import logo from "../assets/images/header/logo.svg";
import CustomerServiceModal from "../components/CustomerServiceModal";
import "./Register.css";

const API_URL = "https://stacks-admin.onrender.com";

const countryNames = new Intl.DisplayNames(["en"], {
  type: "region",
});

const getFlag = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (character) =>
      String.fromCodePoint(127397 + character.charCodeAt(0))
    );

function getCountryName(countryCode) {
  try {
    return countryNames.of(countryCode) || countryCode;
  } catch {
    return countryCode;
  }
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z" />
      <circle cx="12" cy="12" r="3.1" />
    </svg>
  );
}

function FadeMessage({ message }) {
  return (
    <div className="register-message-overlay">
      <div className="register-message">{message}</div>
    </div>
  );
}

function SpinnerOverlay() {
  return (
    <div className="register-spinner-overlay">
      <div className="register-spinner" />
    </div>
  );
}

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    withdrawalPassword: "",
    password: "",
    confirmPassword: "",
    gender: "Male",
    inviteCode: "",
    agreed: true,
  });

  const [selectedCountry, setSelectedCountry] = useState("UG");
  const [countrySearch, setCountrySearch] = useState("");
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [fadeMsg, setFadeMsg] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const [showPassword, setShowPassword] = useState({
    withdrawalPassword: false,
    password: false,
    confirmPassword: false,
  });

  const countries = useMemo(() => {
    return getCountries()
      .map((code) => ({
        code,
        name: getCountryName(code),
        flag: getFlag(code),
        dialCode: `+${getCountryCallingCode(code)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const visibleCountries = useMemo(() => {
    const search = countrySearch.trim().toLowerCase();

    if (!search) return countries;

    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(search) ||
        country.code.toLowerCase().includes(search) ||
        country.dialCode.includes(search)
    );
  }, [countries, countrySearch]);

  const currentCountry =
    countries.find((country) => country.code === selectedCountry) ||
    countries.find((country) => country.code === "UG") ||
    countries[0];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePassword = (field) => {
    setShowPassword((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  const chooseCountry = (country) => {
    setSelectedCountry(country.code);
    setCountryMenuOpen(false);
    setCountrySearch("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!formData.agreed) {
      setFadeMsg("Please agree to the Terms and Conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFadeMsg("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          country: currentCountry.code,
          dialCode: currentCountry.dialCode,
          loginPassword: formData.password,
          withdrawalPassword: formData.withdrawalPassword,
          gender: formData.gender,
          inviteCode: formData.inviteCode,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (data.user) {
          localStorage.setItem("currentUser", JSON.stringify(data.user));
          localStorage.setItem("user", data.user.username || "");

          if (data.user.token) {
            localStorage.setItem("authToken", data.user.token);
          }
        }

        setFadeMsg("Register Success");
      } else {
        setFadeMsg(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setFadeMsg("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (!fadeMsg) return undefined;

    const timer = setTimeout(() => {
      if (fadeMsg === "Register Success") {
        setFadeMsg("");
        setShowSpinner(true);
      } else {
        setFadeMsg("");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [fadeMsg]);

  useEffect(() => {
    if (!showSpinner) return undefined;

    const timer = setTimeout(() => {
      setShowSpinner(false);
      navigate("/dashboard");
    }, 500);

    return () => clearTimeout(timer);
  }, [showSpinner, navigate]);

  useEffect(() => {
    if (!countryMenuOpen) return undefined;

    const closeMenu = (event) => {
      if (!event.target.closest(".country-picker")) {
        setCountryMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [countryMenuOpen]);

  return (
    <div className="register-page">
      {fadeMsg && <FadeMessage message={fadeMsg} />}
      {showSpinner && <SpinnerOverlay />}

      <main className="register-container">
        <img src={logo} alt="Instrument" className="register-logo" />

        <h1 className="register-welcome">WELCOME TO</h1>

        <h2 className="register-heading">REGISTER TO JOIN US</h2>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="register-field">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>

          <div className="register-field">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="register-field phone-field">
            <div className="country-picker">
              <button
                type="button"
                className="country-picker-button"
                onClick={() => setCountryMenuOpen((open) => !open)}
                aria-expanded={countryMenuOpen}
                aria-label="Select country"
              >
                <span className="country-flag">{currentCountry?.flag}</span>
                <span className="country-chevron" />
              </button>

              {countryMenuOpen && (
                <div className="country-menu">
                  <div className="country-search-wrapper">
                    <input
                      type="search"
                      value={countrySearch}
                      onChange={(event) => setCountrySearch(event.target.value)}
                      placeholder="Search country"
                      className="country-search"
                      autoFocus
                    />
                  </div>

                  <div className="country-options">
                    {visibleCountries.map((country) => (
                      <button
                        type="button"
                        className={`country-option ${
                          country.code === selectedCountry ? "selected" : ""
                        }`}
                        key={`${country.code}-${country.dialCode}`}
                        onClick={() => chooseCountry(country)}
                      >
                        <span className="country-option-flag">{country.flag}</span>
                        <span className="country-option-name">{country.name}</span>
                        <span className="country-option-code">{country.dialCode}</span>
                      </button>
                    ))}

                    {visibleCountries.length === 0 && (
                      <div className="country-empty">No countries found</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="Enter a phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>

          <div className="register-field password-field">
            <input
              name="withdrawalPassword"
              type={showPassword.withdrawalPassword ? "text" : "password"}
              placeholder="Transaction Password"
              value={formData.withdrawalPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => togglePassword("withdrawalPassword")}
              aria-label="Toggle transaction password visibility"
            >
              <EyeIcon />
            </button>
          </div>

          <div className="register-field password-field">
            <input
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Login Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => togglePassword("password")}
              aria-label="Toggle login password visibility"
            >
              <EyeIcon />
            </button>
          </div>

          <div className="register-field password-field">
            <input
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm Login Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => togglePassword("confirmPassword")}
              aria-label="Toggle confirmation password visibility"
            >
              <EyeIcon />
            </button>
          </div>

          <div className="register-field gender-field">
            <span className="gender-title">Gender</span>

            <div className="gender-options">
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                <span className="gender-radio" />
                <span>Male</span>
              </label>

              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                <span className="gender-radio" />
                <span>Female</span>
              </label>
            </div>
          </div>

          <div className="register-field">
            <input
              name="inviteCode"
              type="text"
              placeholder="Invite Code"
              value={formData.inviteCode}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <label className="terms-row">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />
            <span className="terms-checkbox" />
            <span>Accept ours</span>
            <Link to="/terms" className="terms-link">
              Terms and Conditions
            </Link>
          </label>

          <button type="submit" className="register-submit">
            Submit
          </button>
        </form>

        <p className="register-agreement">
          By signing up, you agree to our <Link to="/terms">Terms and Conditions</Link>
        </p>

        <p className="register-login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>

      <button
        type="button"
        className="register-support-button"
        onClick={() => setShowCustomerModal(true)}
        aria-label="Open customer support"
      >
        ?
      </button>

      <CustomerServiceModal
        open={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
      />
    </div>
  );
}