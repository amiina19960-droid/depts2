import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/header/logo.svg";
import backButton from "../assets/images/download-1.png";

const BACKEND_URL = "https://stacks-admin.onrender.com";
const START_BLUE = "#00bff3";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/notifications`, {
      headers: {
        "X-Auth-Token": localStorage.getItem("authToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNotifications(data.notifications);
          // Mark all as read: store latest ID
          if (data.notifications.length > 0) {
            localStorage.setItem(
              "lastReadNotificationId",
              data.notifications[0].id
            );
          }
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen pb-20"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%)",
        color: "#f4f8ff",
        minHeight: "100vh",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "72px",
          padding: "12px 14px",
          background:
            "linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%)",
          borderBottom: "1px solid rgba(0, 191, 243, 0.32)",
        }}
      >
        {/* Back Button */}
        <button
          aria-label="Back"
          data-i18n-aria="Back"
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
            lineHeight: 1,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
        >
          <img
            src={backButton}
            alt="Back"
            style={{
              width: "24px",
              height: "24px",
              objectFit: "contain",
              display: "block",
              filter: "brightness(0) invert(1)",
            }}
          />
        </button>

        {/* Centered Logo */}
        <img
          src={logo}
          alt="Instrument"
          style={{
            width: "180px",
            height: "34px",
            objectFit: "contain",
            display: "block",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>

      {/* Title Bar */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "48px",
          padding: "10px 14px",
          background:
            "radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%)",
          borderBottom: "1px solid rgba(0, 191, 243, 0.32)",
        }}
      >
        <span
          data-i18n="Notifications"
          style={{
            color: START_BLUE,
            fontSize: "0.95rem",
            fontWeight: 600,
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}
        >
          Notifications
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          width: "min(calc(100% - 28px), 1046px)",
          margin: "0 auto",
          padding: "24px 0",
        }}
      >
        {loading ? (
          <div
            className="text-center"
            data-i18n="Loading..."
            style={{
              color: "#b0b0b0",
              padding: "20px 0",
            }}
          >
            Loading...
          </div>
        ) : notifications.length === 0 ? (
          <div
            className="text-center"
            data-i18n="No notifications at the moment."
            style={{
              color: "#b0b0b0",
              padding: "8px 0",
              fontSize: "1rem",
            }}
          >
            No notifications at the moment.
          </div>
        ) : (
          <ul
            className="space-y-4"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {notifications.map((n) => (
              <li
                key={n.id}
                className="border rounded p-4 shadow-sm"
                style={{
                  background:
                    "linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%)",
                  border: "1px solid rgba(0, 191, 243, 0.32)",
                  borderRadius: "14px",
                  padding: "16px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  color: "#f4f8ff",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    color: START_BLUE,
                    fontWeight: 600,
                  }}
                >
                  {n.title}
                </div>

                <div
                  className="mt-1"
                  style={{
                    color: "#f4f8ff",
                    marginTop: "6px",
                    lineHeight: 1.5,
                  }}
                >
                  {n.message}
                </div>

                <div
                  className="mt-2 text-xs"
                  style={{
                    color: "#b0b0b0",
                    marginTop: "8px",
                    fontSize: "0.75rem",
                  }}
                >
                  {n.createdAt && !isNaN(new Date(n.createdAt).getTime())
                    ? new Date(n.createdAt).toLocaleString()
                    : ""}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}