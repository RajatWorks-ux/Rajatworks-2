"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BlurText from "./BlurText";
import { SECTION, HEADING, BIO, TECH, CREATIVE, EXPERIENCE } from "@/app/about/content";

gsap.registerPlugin(ScrollTrigger);

export default function About({ standalone = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (standalone) {
        gsap.from(".about-label", { y: 25, opacity: 0, duration: 0.6, delay: 0.4 });
        gsap.from(".about-h", { y: 70, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.6 });
        gsap.from(".about-p", { y: 40, opacity: 0, duration: 0.7, delay: 0.8 });
        gsap.from(".about-skill", { x: -20, opacity: 0, stagger: 0.08, duration: 0.5, delay: 1.0 });
        gsap.from(".about-img", { scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.8 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".about-label", { y: 14, opacity: 0, duration: 0.3, ease: "power3.out" })
        .from(".about-h", { y: 35, opacity: 0, duration: 0.4, ease: "power4.out" }, 0.05)
        .from(".about-p", { y: 20, opacity: 0, duration: 0.35, ease: "power3.out" }, 0.15)
        .from(".about-skill", { x: -10, opacity: 0, stagger: 0.03, duration: 0.25, ease: "power2.out" }, 0.22);

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 15%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -45,
      });

      setTimeout(() => ScrollTrigger.refresh(), 300);
    }, ref);
    return () => ctx.revert();
  }, [standalone]);

  return (
    <section
      id="about-section"
      ref={ref}
      className={`relative w-full min-h-screen px-5 sm:px-10 md:px-20 ${standalone ? "" : "z-20"}`}
    >
      {standalone && (
        <div className="about-img absolute inset-0 z-0">
          <Image
            src="/photo/Rajat.jpg"
            alt="Rajat Kumar Dua"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-[#080808]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        </div>
      )}

      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 py-20 md:py-32">

        {/* Skills & Experience — LEFT on home, RIGHT on standalone */}
        <div className={`w-full md:w-[40%] max-w-md mt-6 md:mt-0 flex flex-col ${standalone ? "ml-auto md:items-start md:text-left order-2" : "mr-auto items-start text-left order-2 md:order-1"}`}>
          <div className="about-p w-12 h-px bg-white/15 mb-8 lg:mb-10" />

          <div className="flex flex-col gap-10 w-full">
            <div className="w-full">
              <p className="about-p text-[10px] tracking-[0.4em] uppercase mb-6 text-left">
                <span className="border-b border-white/30 pb-2 inline-block text-white/50">Tech I Work With</span>
              </p>
              <div className="flex gap-2 flex-wrap justify-start">
                {TECH.map((s) => (
                  <span key={s.name} className="group about-skill px-4 py-2 flex items-center gap-2 border border-white/12 rounded-full text-[10px] text-white/35 tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-[#ff6b1a] hover:border-white cursor-default">
                    <s.icon className="w-3 h-3 transition-all duration-300 fill-transparent stroke-current stroke-[1.5px] group-hover:fill-current group-hover:stroke-transparent" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full">
              <p className="about-p text-[10px] tracking-[0.4em] uppercase mb-6 text-left">
                <span className="border-b border-white/30 pb-2 inline-block text-white/50">Creative Tools</span>
              </p>
              <div className="flex gap-2 flex-wrap justify-start">
                {CREATIVE.map((s) => (
                  <span key={s.name} className="group about-skill px-4 py-2 flex items-center gap-2 border border-white/12 rounded-full text-[10px] text-white/35 tracking-widest uppercase transition-colors duration-300 hover:bg-white hover:text-[#ff6b1a] hover:border-white cursor-default">
                    <s.icon className="w-3 h-3 transition-all duration-300 fill-transparent stroke-current stroke-[1.5px] group-hover:fill-current group-hover:stroke-transparent" />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full">
              <p className="about-p text-[10px] tracking-[0.4em] uppercase mb-6 text-left">
                <span className="border-b border-white/30 pb-2 inline-block text-white/50">Experience</span>
              </p>
              <div className="flex flex-col gap-4 mt-2 items-start">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="about-skill">
                    <p className="text-white/80 text-sm font-medium">{exp.role}</p>
                    <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio — RIGHT on home, LEFT on standalone */}
        <div className={`w-full md:w-[55%] max-w-2xl flex flex-col ${standalone ? "mr-auto md:pl-10 text-left items-start order-1" : "ml-auto text-left md:text-right items-start md:items-end order-1 md:order-2"}`}>
          <p className="about-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-6 font-medium">
            {SECTION.label}
          </p>

          <h2
            className="about-h font-black tracking-tighter leading-[0.88] mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            <span className="block text-white">{HEADING.line1}</span>
            <span className="block text-white">{HEADING.line2}</span>
            <span className="block ghost">{HEADING.line3}</span>
          </h2>

          {BIO.map((text, i) => (
            <BlurText
              key={i}
              text={text}
              delay={25}
              animateBy="words"
              direction="bottom"
              stepDuration={0.22}
              className={`about-p text-sm md:text-base text-white/50 max-w-lg ${i < BIO.length - 1 ? "mb-6" : "mb-4"} font-light leading-relaxed ${standalone ? "text-left" : "text-left md:text-right"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
