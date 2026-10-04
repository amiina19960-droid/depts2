import React, { useEffect, useState } from "react";

export default function CustomerServiceModal({ open, onClose }) {
  const [links, setLinks] = useState({
    telegram1: "",
    telegram2: "",
    customerService: "",
  });

  useEffect(() => {
    if (!open) return;
    fetch("https://stacks-admin.onrender.com/service-links.json?ts=" + Date.now())
      .then((res) => res.json())
      .then((data) => {
        setLinks({
          telegram1: data.telegram1 || "",
          telegram2: data.telegram2 || "",
          Signal: data.whatsapp || "",
        });
      })
      .catch(() => {
        setLinks({ telegram1: "", telegram2: "", Signal: "" });
      });
  }, [open]);

  if (!open) return null;

  const arrowIcon = (
    <svg width="20" height="20" viewBox="0 0 18 18" style={{ marginLeft: "auto" }} aria-hidden>
      <path
        d="M6 4l4 5-4 5"
        stroke="#D9D9D9"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  const avatar = (
    <img
      src="/assets/images/Cs.jpg"
      alt="service"
      data-i18n-alt="service"
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        marginRight: 14,
        objectFit: "cover",
        background: "transparent",
        border: "2px solid #D9D9D9",
        boxShadow: "0 2px 8px rgba(217, 217, 217, 0.12)",
      }}
    />
  );

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1199,
          background: "rgba(0, 0, 0, 0.42)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          backdropFilter: "blur(2px)",
        }}
        onClick={onClose}
        role="presentation"
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
          style={{
            background: "#1E1E1E",
            borderRadius: 22,
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.35)",
            minWidth: 360,
            maxWidth: 520,
            width: "100%",
            padding: 0,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid rgba(217, 217, 217, 0.22)",
            color: "#F2F2F2",
            overflow: "hidden",
            pointerEvents: "auto",
            animation: "slideUp 0.25s ease-out",
          }}
        >
          <style>{`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(16px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          <div
            style={{
              background: "#D9D9D9",
              padding: "24px 22px 16px 22px",
              color: "#111111",
              borderBottom: "1px solid rgba(17, 17, 17, 0.18)",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 0.2 }}>
              Contact Us
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, marginTop: 4, opacity: 0.8 }}>
              Connect with our support team
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, padding: "0" }}>
            <button
              onClick={() => {
                const username = localStorage.getItem("user");

                if (!username) {
                  alert("Username not found — user must be logged in.");
                  return;
                }

                const chatUrl = `https://signal.me/#eu/Nk_pk-Q1NGoyv4O8omidgk9Th-h57poEijqVtFuylog3mXaCcpRNnLSQx4j3byKc/?user=${encodeURIComponent(username)}`;
                window.open(chatUrl, "_blank");
                onClose();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "#1E1E1E",
                border: "none",
                padding: "16px 22px",
                cursor: "pointer",
                opacity: 1,
                fontSize: 15,
                fontWeight: 600,
                color: "#F2F2F2",
                outline: "none",
                textAlign: "left",
                transition: "all 0.2s ease",
                borderBottom: "1px solid rgba(217, 217, 217, 0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#262626";
                e.currentTarget.style.paddingLeft = "26px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1E1E1E";
                e.currentTarget.style.paddingLeft = "22px";
              }}
            >
              {avatar}
              <span style={{ flex: "0 1 auto" }} data-i18n="Signal">Signal</span>
              {arrowIcon}
            </button>

            <button
              onClick={() => {
                if (links.telegram1) {
                  window.open(links.telegram1, "_blank");
                  onClose();
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "#1E1E1E",
                border: "none",
                padding: "16px 22px",
                cursor: links.telegram1 ? "pointer" : "not-allowed",
                opacity: links.telegram1 ? 1 : 0.45,
                fontSize: 15,
                fontWeight: 600,
                color: "#F2F2F2",
                borderBottom: "1px solid rgba(217, 217, 217, 0.12)",
                outline: "none",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (links.telegram1) {
                  e.currentTarget.style.background = "#262626";
                  e.currentTarget.style.paddingLeft = "26px";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1E1E1E";
                e.currentTarget.style.paddingLeft = "22px";
              }}
              disabled={!links.telegram1}
            >
              {avatar}
              <span style={{ flex: "0 1 auto" }} data-i18n="Whatsapp">Whatsapp</span>
              {arrowIcon}
            </button>

            <button
              onClick={() => {
                if (links.telegram2) {
                  window.open(links.telegram2, "_blank");
                  onClose();
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "#1E1E1E",
                border: "none",
                padding: "16px 22px",
                cursor: links.telegram2 ? "pointer" : "not-allowed",
                opacity: links.telegram2 ? 1 : 0.45,
                fontSize: 15,
                fontWeight: 600,
                color: "#F2F2F2",
                outline: "none",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (links.telegram2) {
                  e.currentTarget.style.background = "#262626";
                  e.currentTarget.style.paddingLeft = "26px";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1E1E1E";
                e.currentTarget.style.paddingLeft = "22px";
              }}
              disabled={!links.telegram2}
            >
              {avatar}
              <span style={{ flex: "0 1 auto" }} data-i18n="Telegram">Telegram</span>
              {arrowIcon}
            </button>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "18px 22px 20px 22px",
              borderTop: "1px solid rgba(217, 217, 217, 0.12)",
              background: "#181818",
            }}
          >
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "1px solid #D9D9D9",
                color: "#D9D9D9",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.4,
                outline: "none",
                transition: "all 0.2s ease",
                padding: "10px 26px",
                borderRadius: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(217, 217, 217, 0.08)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(217, 217, 217, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span data-i18n="Cancel">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}