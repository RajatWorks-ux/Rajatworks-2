"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    phase: "Discovery",
    title: "Understand Your Goal",
    duration: "Day 1–2",
    body: "We start with a call or chat. I ask what you're building, who it's for, what you've tried, and what success looks like. No templated forms — a real conversation. I take notes, ask follow-ups, and come back with a plan.",
  },
  {
    num: "02",
    phase: "Design",
    title: "Structure & Visual Direction",
    duration: "Day 2–4",
    body: "I map out the architecture and design direction in Figma. You see the layout, color system, typography, and key screens before a single line of code is written. We align here, not at the end.",
  },
  {
    num: "03",
    phase: "Build",
    title: "Ship in Iterations",
    duration: "Day 4 onwards",
    body: "I build in deployable chunks — not one big reveal. You get a staging URL early and see real progress daily. Each iteration is functional, not a placeholder. Feedback is incorporated the same day.",
  },
  {
    num: "04",
    phase: "Polish",
    title: "Animations, Performance & SEO",
    duration: "Final days",
    body: "Once core features are solid, I layer in GSAP animations, performance optimisations, and on-page SEO. This is where the site stops feeling like a build and starts feeling like a product.",
  },
  {
    num: "05",
    phase: "Launch",
    title: "Deploy & Hand Over",
    duration: "Launch day",
    body: "Deploy to Vercel, connect your domain, set up environment variables, and run final checks. I give you a full handover — what runs where, how to update content, and how to reach me if something breaks.",
  },
  {
    num: "06",
    phase: "Support",
    title: "Post-Launch Support",
    duration: "After launch",
    body: "I don't disappear after deployment. Small fixes, content updates, and questions are handled fast. If you want to grow the product further, I'm already familiar with every part of it.",
  },
];

export default function Process() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".process-step").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative w-full px-5 sm:px-10 md:px-20 py-20 md:py-32 lg:py-40">
      <div className="max-w-5xl w-full">

        <p className="text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
          How I Work
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-20"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          The <span className="ghost">Process.</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px bg-white/8" />

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="process-step group relative flex gap-8 md:gap-12 pb-14 md:pb-16"
              >
                {/* Circle on timeline */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full border border-white/15 bg-[#080808] flex items-center justify-center z-10 group-hover:border-[#ff6b1a] group-hover:bg-[#ff6b1a]/10 transition-all duration-400">
                    <span className="font-mono text-[9px] text-white/30 group-hover:text-[#ff6b1a] tracking-wider transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[9px] text-[#ff6b1a]/60 tracking-[0.4em] uppercase font-medium">
                      {step.phase}
                    </span>
                    <span className="text-[9px] text-white/20 tracking-widest uppercase">
                      — {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 font-light leading-relaxed max-w-xl group-hover:text-white/60 transition-colors duration-300">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
