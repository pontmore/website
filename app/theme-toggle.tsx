"use client";

import { useSyncExternalStore } from "react";

const key = "pontmore-theme";
const changeEvent = "pontmore-theme-change";

function applyTheme(theme: string) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event(changeEvent));
}

function subscribe(notify: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(key);
    } catch {
      /* System preference still works without storage. */
    }
    if (saved !== "dark" && saved !== "light")
      applyTheme(media.matches ? "dark" : "light");
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === key || event.key === null) {
      applyTheme(
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : media.matches
            ? "dark"
            : "light",
      );
    }
  };
  window.addEventListener(changeEvent, notify);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener(changeEvent, notify);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", onSystemChange);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const label = `Switch to ${dark ? "light" : "dark"} mode`;
  return (
    <button
      className="theme-toggle"
      aria-label={label}
      title={label}
      aria-pressed={dark}
      onClick={() => {
        const theme = dark ? "light" : "dark";
        try {
          localStorage.setItem(key, theme);
        } catch {
          /* Keep the control usable if storage is blocked. */
        }
        applyTheme(theme);
      }}
    >
      <svg
        className="theme-sun"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg
        className="theme-moon"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 14a8.5 8.5 0 0 1-10.5-10.5A8.5 8.5 0 1 0 20.5 14Z" />
      </svg>
    </button>
  );
}
