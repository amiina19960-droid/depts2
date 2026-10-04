import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Vite uses import.meta.env instead of process.env.
const API_URL =
  import.meta.env.VITE_API_URL || "https://stacks-admin.onrender.com";

const SettingsContext = createContext({
  settings: null,
  loading: true,
  refresh: async () => {},
  currency: "",
  formatAmount: (value) => String(value),
});

export const useSettings = () => useContext(SettingsContext);

/**
 * SettingsProvider
 *
 * Fetches settings from GET /api/settings on mount.
 *
 * Exposes:
 * - settings
 * - loading
 * - refresh()
 * - currency
 * - formatAmount()
 *
 * formatAmount returns the numeric value to 2 decimals followed by
 * a space and the raw currency string.
 *
 * Examples:
 * - 0.00 USDT
 * - 12.34 GBP
 */
export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  const parseResponseToSettings = (json) => {
    // Supported response shapes:
    //
    // 1. { success: true, settings: {...} }
    // 2. { settings: {...} }
    // 3. Direct settings object:
    //    { currency: "USDT", ... }

    if (!json) {
      return null;
    }

    if (json.success && json.settings) {
      return json.settings;
    }

    if (json.settings) {
      return json.settings;
    }

    // Fallback: identify a direct settings object.
    if (
      typeof json === "object" &&
      (json.currency || json.siteName || json.defaultVip)
    ) {
      return json;
    }

    return null;
  };

  const fetchSettings = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/settings`);

      if (!response.ok) {
        // Keep previous settings if the API returns an error.
        console.warn(
          "Failed to fetch settings. HTTP status:",
          response.status
        );

        return;
      }

      const json = await response.json();
      const parsedSettings = parseResponseToSettings(json);

      setSettings(parsedSettings);
    } catch (error) {
      // Do not crash the application if the API is unavailable.
      console.error("Settings fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();

    // You can add a WebSocket or event listener here later
    // if settings need to update automatically.
  }, []);

  const currency = settings?.currency ?? "";

  const formatAmount = (value, options = {}) => {
    const decimals = Number.isInteger(options.decimals)
      ? options.decimals
      : 2;

    const amount = Number(value || 0);
    const formattedNumber = amount.toFixed(decimals);

    if (!currency) {
      return formattedNumber;
    }

    return `${formattedNumber} ${currency}`;
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loading,
        refresh: fetchSettings,
        currency,
        formatAmount,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};