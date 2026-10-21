"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    num: "01",
    title: "Full Product, Solo",
    body: "Design, frontend, backend, mobile, AI — I do all of it myself. You get one person who owns the entire product, not a fragmented agency chain where the designer never talks to the developer.",
  },
  {
    num: "02",
    title: "Shipped from Constraints",
    body: "I build everything from Android via Termux — no MacBook, no office setup. That constraint has made me brutally efficient, resourceful, and immune to excuses. If I can ship production apps from a phone, I can ship anything for you.",
  },
  {
    num: "03",
    title: "Design That Converts",
    body: "I don't just make things look good. Every UI decision is intentional — typography, spacing, motion, hierarchy. Your site will feel premium because every pixel was placed with a reason.",
  },
  {
    num: "04",
    title: "Real Products, Not Templates",
    body: "Everything I've built is a real, deployed product — Knockout Gym runs on Supabase with live member data, MIRA handles real AI conversations. I don't do mock projects.",
  },
  {
    num: "05",
    title: "Indian Market Pricing, World-Class Quality",
    body: "You get agency-level work at freelancer pricing. I understand the Indian business landscape, your users, and your budget. No timezone headaches, no language barriers, no inflated quotes.",
  },
  {
    num: "06",
    title: "Fast & Transparent",
    body: "I communicate daily, push code regularly, and never go silent mid-project. You see progress in real time. No surprises at the end, no feature creep, no ghosting.",
  },
];

export default function WhyMe() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".whyme-item").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i % 2 === 0 ? 0 : 0.1,
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
          Why Work With Me
        </p>
        <h2
          className="font-black tracking-tighter text-white leading-none mb-20"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Why <span className="ghost">Rajat.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="whyme-item group relative py-10 md:py-12 pr-8 border-b border-white/8 md:odd:border-r md:odd:border-white/8 hover:border-white/20 transition-colors duration-500"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="pl-3">
                <span className="font-mono text-[10px] text-[#ff6b1a]/50 tracking-widest mb-3 block">
                  {r.num}
                </span>
                <h3 className="text-base md:text-lg font-black text-white tracking-tight mb-3 group-hover:text-[#ff6b1a] transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
