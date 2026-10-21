"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    q: "How long does a project take?",
    a: "A landing page or portfolio site: 3–7 days. A full web application with backend, auth, and CMS: 2–4 weeks. A React Native mobile app: 3–6 weeks. These timelines assume you're available for daily feedback — delays on your end extend the timeline proportionally.",
  },
  {
    q: "How much do you charge?",
    a: "Every project is different, so pricing is always decided through discussion. Once I understand what you're building, the scope, and your timeline — we'll land on a number that works for both of us. Reach out and let's talk.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. I work with clients across India, UAE, UK, USA, and anywhere else. Payment via international transfer, Wise, or Razorpay. Pricing is in INR for India-based clients and USD for international.",
  },
  {
    q: "What do you need from me to start?",
    a: "A clear brief — what you're building, who it's for, any reference sites you like, your logo/brand assets if you have them, and your deadline. That's enough to start. I'll ask follow-up questions as we go.",
  },
  {
    q: "Do you also do design, or just development?",
    a: "Both. I design in Figma and build in code. You don't need a separate designer. I handle the full stack — UI design, frontend, backend, mobile, and deployment.",
  },
  {
    q: "Can you maintain or update my existing site?",
    a: "Yes, if it's built on a stack I work with (React, Next.js, Vue, Node.js, Supabase, Appwrite). Send me the repo and I'll review it. Maintenance is billed monthly or per-task depending on scope.",
  },
  {
    q: "What happens if I'm not happy with the result?",
    a: "We iterate until it's right. I don't mark a project complete until you're satisfied. The design phase exists specifically to align before code is written — if we agree on the design first, there are rarely surprises in the build.",
  },
  {
    q: "Do you build mobile apps?",
    a: "Yes. React Native + Expo for cross-platform iOS and Android apps. I've built apps with Supabase auth, real-time data, push notifications, and custom UI systems. Zephyra (Vedic astrology app) is one example of my mobile work.",
  },
  {
    q: "Can you integrate AI into my product?",
    a: "Yes. I've integrated Groq, NVIDIA NIM, and Microsoft Trellis APIs into production products. If you have an AI feature in mind — chat, image processing, content generation, 3D modelling — I can build it.",
  },
  {
    q: "How do I get started?",
    a: "Hit the Contact page, fill in the form or message me on WhatsApp. Tell me what you're building and your deadline. I'll reply within a few hours.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        scrollTrigger: { trigger: ".faq-header", start: "top 88%" },
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section ref={ref} className="relative w-full px-5 sm:px-10 md:px-20 py-20 md:py-32 lg:py-40">
      <div className="max-w-3xl w-full">

        <p className="faq-header text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
          Common Questions
        </p>
        <h2
          className="faq-header font-black tracking-tighter text-white leading-none mb-16"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          FAQ.
        </h2>

        <div className="flex flex-col">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="border-b border-white/8 hover:border-white/20 transition-colors duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-300 leading-snug">
                  {item.q}
                </span>
                <span
                  className="shrink-0 w-5 h-5 flex items-center justify-center text-white/30 group-hover:text-[#ff6b1a] transition-all duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease, color 0.3s ease" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "400px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <p className="text-sm text-white/45 font-light leading-relaxed pb-6 pr-8">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
