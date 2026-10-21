"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ProfileCard from "@/components/ProfileCard";
import { SECTION, HEADING, BIO, TECH, CREATIVE, EXPERIENCE } from "@/app/about/content";

const renderParsedText = (text) => {
  if (!text) return "";
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="font-serif italic text-white/90">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function AboutPage() {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ap-label", { y: 20, opacity: 0, duration: 0.5, delay: 0.3 });
      gsap.from(".ap-h", { y: 55, opacity: 0, duration: 0.8, ease: "power4.out", delay: 0.5 });
      gsap.from(".ap-bio", { y: 25, opacity: 0, duration: 0.6, delay: 0.7 });
      gsap.from(".ap-skill", { x: -10, opacity: 0, stagger: 0.04, duration: 0.4, delay: 0.9 });
      gsap.from(".ap-card", { scale: 0.95, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="about-page relative w-full min-h-dvh overflow-y-auto">

      {/* The portrait already contains its typography; avoid duplicating its name/title overlay. */}

      {/* ── MOBILE LAYOUT ── */}
      <div className="flex flex-col px-5 pt-28 pb-10 relative z-10 md:hidden min-h-dvh">
        <p className="ap-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
          {SECTION.label}
        </p>
        <h1 className="ap-h font-black text-3xl tracking-tighter leading-none mb-6">
          <span className="block text-white">{HEADING.line1}</span>
          <span className="block text-white">{HEADING.line2}</span>
          <span className="block ghost">{HEADING.line3}</span>
        </h1>

        <div className="ap-card flex justify-center my-6">
          <ProfileCard
            name="Rajat Kumar Dua"
            title="Full-Stack Developer & UI/UX Designer"
            handle="rajat"
            avatarUrl="/photo/Rajat.jpg"
            miniAvatarUrl="/photo/Rajat.jpg"
            showUserInfo={true}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={() => router.push("/contact")}
          />
        </div>

        {BIO.map((text, i) => (
          <p key={i} className="ap-bio text-[13px] text-white/50 mb-3 font-light leading-relaxed">
            {renderParsedText(text)}
          </p>
        ))}


        {/* Skills horizontal scroll */}
        <div className="space-y-4">
          <div>
            <p className="ap-bio text-[9px] tracking-[0.4em] uppercase mb-3 text-white/45">Tech I Work With</p>
            <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
              {TECH.map((s) => (
                <span key={s.name} className="ap-skill flex-shrink-0 px-3 py-1 flex items-center gap-1 bg-white/95 rounded-full text-[8px] text-black tracking-wider uppercase font-medium">
                  <s.icon className="w-2.5 h-2.5" />{s.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="ap-bio text-[9px] tracking-[0.4em] uppercase mb-3 text-white/45">Creative Tools</p>
            <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
              {CREATIVE.map((s) => (
                <span key={s.name} className="ap-skill flex-shrink-0 px-3 py-1 flex items-center gap-1 bg-white/10 rounded-full text-[8px] text-white tracking-wider uppercase">
                  <s.icon className="w-2.5 h-2.5 text-[#ff6b1a]" />{s.name}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-2">
            <p className="ap-bio text-[9px] tracking-[0.4em] uppercase mb-3 text-white/45">Experience</p>
            <div className="space-y-2">
              {EXPERIENCE.map((s) => (
                <div key={s.role} className="ap-skill border-l border-[#ff6b1a]/30 pl-3 py-0.5">
                  <h4 className="text-[10px] text-white font-medium tracking-wide uppercase">{s.role}</h4>
                  <p className="text-[8px] text-white/45 uppercase tracking-widest">{s.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex flex-col max-w-[1250px] mx-auto px-14 lg:px-16 pt-[12vh] pb-24 relative z-10 gap-16">
        
        {/* Top: Card and Bio Grid */}
        <div className="grid grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left: Interactive Studio Card (Sticky) */}
          <div className="ap-card flex justify-center items-start sticky top-[15vh]">
            <ProfileCard
              name="Rajat Kumar Dua"
              title="Full-Stack Developer & UI/UX Designer"
              handle="rajat"
              avatarUrl="/photo/Rajat.jpg"
              miniAvatarUrl="/photo/Rajat.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => router.push("/contact")}
            />
          </div>

          {/* Right: Text Info */}
          <div className="flex flex-col items-start text-left">
            <p className="ap-label text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">
              {SECTION.label}
            </p>
            <h1 className="ap-h font-black tracking-tighter leading-[0.88] mb-8" style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)" }}>
              <span className="block text-white">{HEADING.line1}</span>
              <span className="block text-white">{HEADING.line2}</span>
              <span className="block ghost">{HEADING.line3}</span>
            </h1>
            <div className="space-y-5 text-sm text-white/50 font-light leading-relaxed mb-8 pr-4">
              {BIO.map((text, i) => (
                <p key={i}>
                  {renderParsedText(text)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Skills & Experience Grid */}
        <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#ff6b1a]/80 font-medium">Tech I Work With</p>
            <div className="flex gap-2 flex-wrap">
              {TECH.map((s) => (
                <span key={s.name} className="ap-skill px-3 py-1 flex items-center gap-1.5 bg-white/90 rounded-full text-[9px] text-black tracking-wider uppercase font-medium">
                  <s.icon className="w-2.5 h-2.5" />{s.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#ff6b1a]/80 font-medium">Creative Tools</p>
            <div className="flex gap-2 flex-wrap">
              {CREATIVE.map((s) => (
                <span key={s.name} className="ap-skill px-3 py-1 flex items-center gap-1.5 bg-white/10 rounded-full text-[9px] text-white tracking-wider uppercase font-medium border border-white/10">
                  <s.icon className="w-2.5 h-2.5 text-[#ff6b1a]" />{s.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#ff6b1a]/80 font-medium">Experience</p>
            <div className="flex flex-col gap-3">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="ap-skill border-l-2 border-[#ff6b1a]/30 pl-4 py-1">
                  <p className="text-white/80 text-[12px] font-semibold tracking-wide uppercase">{exp.role}</p>
                  <p className="text-white/40 text-[9px] tracking-widest uppercase mt-0.5">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
