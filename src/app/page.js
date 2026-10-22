"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
const VideoScrub = dynamic(() => import("../components/VideoScrub"), { ssr: false });
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import WhyMe from "../components/WhyMe";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SeoContent from "../components/SeoContent";

export default function Home() {
  const blurWrapRef = useRef(null);
  const footerRef   = useRef(null);

  useEffect(() => {
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (touchDevice) return; // Native touch scrolling is smoother on phones/tablets.

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
      if (blurWrapRef.current && footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const vh = window.innerHeight;
        const opacity = footerTop >= vh ? 1 : Math.max(0, footerTop / vh);
        blurWrapRef.current.style.opacity = opacity;
      }
    });

    const tick = (time) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <main>
      <SeoContent />
      <div className="grain-overlay" />
      <Cursor />
      <VideoScrub />
      <Navbar />
      <div ref={blurWrapRef} className="bottom-blur" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <WhyMe />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
        <div ref={footerRef}><Footer /></div>
      </div>
    </main>
  );
}
