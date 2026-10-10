
import React, { useEffect, useState } from "react";

export default function CustomerServiceModal({ open, onClose }) {
  const [links, setLinks] = useState({
    telegram1: "",
    telegram2: "",
  });

  useEffect(() => {
    if (!open) return;

    fetch(
      "https://stacks-admin.onrender.com/service-links.json?ts=" +
        Date.now()
    )
      .then((res) => res.json())
      .then((data) => {
        setLinks({
          telegram1: data.telegram1 || "",
          telegram2: data.telegram2 || "",
        });
      })
      .catch(() => {
        setLinks({ telegram1: "", telegram2: "" });
      });
  }, [open]);

  if (!open) return null;

  const colors = {
    background: "#031D39",
    modal: "#062447",
    header: "#09284D",
    border: "#087FC1",
    cyan: "#00C8F5",
    text: "#E5F2FF",
    muted: "#BBD6F2",
    hover: "#0B3159",
  };

  const arrowIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      style={{ marginLeft: "auto", flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M6 4l4 5-4 5"
        stroke={colors.cyan}
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const avatar = (
    <img
      src="/assets/images/Cs.jpg"
      alt="Customer service"
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        marginRight: 14,
        objectFit: "cover",
        border: `2px solid ${colors.border}`,
        boxShadow: "0 2px 10px rgba(0, 200, 245, 0.12)",
        flexShrink: 0,
      }}
    />
  );

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    background: colors.modal,
    border: "none",
    padding: "16px 22px",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 600,
    color: colors.text,
    textAlign: "left",
    transition: "background 0.2s ease, padding 0.2s ease",
    borderBottom: `1px solid rgba(8, 127, 193, 0.25)`,
  };

  const openLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleSignal = () => {
    const username = localStorage.getItem("user");

    if (!username) {
      alert("Username not found — user must be logged in.");
      return;
    }

    const chatUrl =
      "https://signal.me/#eu/Nk_pk-Q1NGoyv4O8omidgk9Th-h57poEijqVtFuylog3mXaCcpRNnLSQx4j3byKc/?user=" +
      encodeURIComponent(username);

    openLink(chatUrl);
  };

  const ServiceButton = ({
    label,
    onClick,
    disabled = false,
    last = false,
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = colors.hover;
          e.currentTarget.style.paddingLeft = "26px";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = colors.modal;
        e.currentTarget.style.paddingLeft = "22px";
      }}
      style={{
        ...itemStyle,
        borderBottom: last
          ? "none"
          : `1px solid rgba(8, 127, 193, 0.25)`,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {avatar}
      <span>{label}</span>
      {arrowIcon}
    </button>
  );

  return (
    <>
      <div
        onClick={onClose}
        role="presentation"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1199,
          background: "rgba(0, 10, 25, 0.76)",
          backdropFilter: "blur(5px)",
        }}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          pointerEvents: "none",
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cs-modal-title"
          style={{
            background: colors.background,
            border: `1px solid ${colors.border}`,
            borderRadius: 20,
            boxShadow:
              "0 18px 55px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 200, 245, 0.08)",
            width: "100%",
            maxWidth: 460,
            minWidth: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            color: colors.text,
            overflow: "hidden",
            pointerEvents: "auto",
            animation: "csSlideUp 0.25s ease-out",
            fontFamily: "inherit",
          }}
        >
          <style>{`
            @keyframes csSlideUp {
              from {
                opacity: 0;
                transform: translateY(14px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          {/* Header */}
          <div
            style={{
              background: colors.header,
              padding: "24px 22px 20px",
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                width: 42,
                height: 3,
                borderRadius: 4,
                background: colors.cyan,
                marginBottom: 18,
              }}
            />

            <div
              id="cs-modal-title"
              style={{
                fontSize: 22,
                fontWeight: 750,
                letterSpacing: "-0.4px",
                color: colors.text,
              }}
            >
              Contact Us
            </div>

            <div
              style={{
                fontSize: 13,
                fontWeight: 400,
                marginTop: 6,
                color: colors.muted,
                lineHeight: 1.5,
              }}
            >
              Connect with our support team
            </div>
          </div>

          {/* Contact options */}
          <div
            style={{
              background: colors.modal,
              padding: "5px 0",
            }}
          >
            <ServiceButton
              label="Signal"
              onClick={handleSignal}
            />

            <ServiceButton
              label="WhatsApp"
              onClick={() => openLink(links.telegram1)}
              disabled={!links.telegram1}
            />

            <ServiceButton
              label="Telegram"
              onClick={() => openLink(links.telegram2)}
              disabled={!links.telegram2}
              last
            />
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center",
              padding: "18px 22px 20px",
              borderTop: `1px solid ${colors.border}`,
              background: colors.background,
            }}
          >
            <button
              type="button"
              onClick={onClose}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(0, 200, 245, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              style={{
                background: "transparent",
                border: `1px solid ${colors.border}`,
                color: colors.text,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.4,
                padding: "11px 30px",
                minWidth: 120,
                borderRadius: 8,
                transition: "background 0.2s ease",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
