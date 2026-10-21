"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: "Arjun Mehta",
    role: "Founder, LegalEdge",
    quote:
      "Rajat took our rough idea for an AI legal marketplace and turned it into something I'm genuinely proud to show investors. Fast, communicative, and the design quality is on a level I didn't expect from a freelancer.",
    stars: 5,
    tag: "Vakilr — AI Legal Platform",
  },
  {
    name: "Priya Nair",
    role: "Owner, FitCore Gym",
    quote:
      "We needed a full website plus an admin panel to manage memberships. Rajat delivered both in under two weeks. The CMS is so simple my staff uses it daily without any training. Worth every rupee.",
    stars: 5,
    tag: "Knockout Gym — Full Stack",
  },
  {
    name: "Siddharth Rao",
    role: "Product Lead, TechVentures",
    quote:
      "I was skeptical about hiring someone so early in their career for a complex e-commerce build. That skepticism disappeared after the first week. Clean code, solid architecture, zero hand-holding needed.",
    stars: 5,
    tag: "Phone Shop — E-commerce",
  },
  {
    name: "Aditya Sharma",
    role: "Co-Founder, AnonApp",
    quote:
      "Real-time anonymous chat is genuinely hard to build well. Rajat nailed the backend logic, kept the UI smooth, and flagged edge cases I hadn't even thought of. Exactly what a technical co-founder would do.",
    stars: 5,
    tag: "ANON — Full Stack",
  },
  {
    name: "Meera Krishnan",
    role: "Startup Advisor",
    quote:
      "I've worked with dev teams three times his size that shipped slower. Rajat codes, designs, and deploys — the full loop. Rare to find that combination at this level of quality.",
    stars: 5,
    tag: "MIRA — AI Chat Agent",
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="#ff6b1a">
          <path d="M5.5 0L6.73 3.82H10.8L7.54 6.18 8.76 10 5.5 7.64 2.24 10 3.46 6.18.2 3.82H4.27L5.5 0Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rv-header", {
        scrollTrigger: { trigger: ".rv-header", start: "top 88%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils.toArray(".rv-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 90%" },
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full px-5 sm:px-10 md:px-20 py-24 md:py-36"
    >
      {/* Header */}
      <div className="max-w-4xl mb-12 md:mb-16">
        <p className="rv-header text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
          Client Feedback
        </p>
        <h2
          className="rv-header font-black tracking-tighter text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          What clients say.
        </h2>
      </div>

      {/* Review grid — 1 col → 2 col → 3 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {REVIEWS.map((r, i) => (
          <div
            key={i}
            className={`rv-card group relative flex flex-col gap-5 p-6 md:p-8 border border-white/8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-500 ${
              // Span last card on desktop to fill the row when 5 items in 3-col grid
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Quote mark */}
            <span
              className="absolute top-5 right-6 text-[4rem] leading-none text-white/5 font-serif select-none pointer-events-none"
              aria-hidden
            >
              &ldquo;
            </span>

            <StarRow count={r.stars} />

            <p className="text-sm md:text-[15px] text-white/65 font-light leading-relaxed flex-1">
              &ldquo;{r.quote}&rdquo;
            </p>

            <div className="pt-4 border-t border-white/8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white tracking-tight">{r.name}</p>
                <p className="text-[10px] text-white/35 uppercase tracking-widest mt-0.5">{r.role}</p>
              </div>
              <span className="shrink-0 px-2.5 py-1 rounded-full border border-[#ff6b1a]/25 text-[8px] text-[#ff6b1a]/70 tracking-widest uppercase">
                {r.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
