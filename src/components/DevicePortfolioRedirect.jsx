"use client";

import { useEffect } from "react";

const DESKTOP_PORTFOLIO_URL = "https://rajatworks1.vercel.app/";

function isPhoneOrTablet() {
  if (typeof window === "undefined") return true;
  const ua = navigator.userAgent || "";
  const mobileUA = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  // iPadOS may identify as Macintosh; touch points plus a coarse pointer catches it.
  const touchTablet = navigator.maxTouchPoints > 1 &&
    (window.matchMedia("(pointer: coarse)").matches || /Macintosh/i.test(ua));
  return mobileUA || touchTablet;
}

export default function DevicePortfolioRedirect() {
  useEffect(() => {
    // If this mobile URL is opened on a laptop/desktop, switch to the desktop portfolio.
    // Do not use viewport width: narrow laptop windows should still use desktop.
    if (!isPhoneOrTablet()) window.location.replace(DESKTOP_PORTFOLIO_URL);
  }, []);
  return null;
}
