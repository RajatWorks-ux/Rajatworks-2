"use client";

import { useEffect, useState } from "react";
import "./DevicePortfolioRedirect.css";

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
  const [showHandoff, setShowHandoff] = useState(false);

  useEffect(() => {
    // A desktop visit to the mobile URL gets a branded handoff before redirecting.
    if (isPhoneOrTablet()) return;
    setShowHandoff(true);
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(DESKTOP_PORTFOLIO_URL);
    }, 700);
    return () => window.clearTimeout(redirectTimer);
  }, []);

  if (!showHandoff) return null;

  return (
    <main className="rw-device-handoff" aria-live="polite" role="status">
      <header className="rw-handoff-header">
        <span className="rw-handoff-mark">RW</span>
        <span className="rw-handoff-name">RAJATWORKS</span>
        <span className="rw-handoff-index">02 / DEVICE ROUTING</span>
      </header>
      <section className="rw-handoff-content">
        <p className="rw-handoff-kicker">YOUR DESKTOP EXPERIENCE</p>
        <h1>More room<br /><em>to make things.</em></h1>
        <p className="rw-handoff-copy">Opening the RajatWorks laptop portfolio, built for a larger screen and the full interactive experience.</p>
        <div className="rw-handoff-progress" aria-hidden="true"><span /></div>
        <p className="rw-handoff-status">PREPARING YOUR EXPERIENCE <span>02</span></p>
      </section>
      <footer className="rw-handoff-footer"><span>RAJAT KUMAR DUA</span><span>DESIGN · ENGINEERING · EXPERIENCE</span></footer>
    </main>
  );
}
