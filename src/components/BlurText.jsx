"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

const BlurText = ({
  text = "",
  delay = 55,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px 0px -5% 0px",
  onAnimationComplete,
  stepDuration = 0.28,
  animateOnMount = false,
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();

  const elements = useMemo(() => {
    if (animateBy !== "words") {
      return text.split("").map((char) => ({ word: char, punctuation: "", isItalic: false }));
    }

    let inItalic = false;
    return text.split(" ").map((word) => {
      let currentItalic = inItalic;
      let cleanWord = word;
      let punctuation = "";

      if (cleanWord.startsWith("*")) {
        cleanWord = cleanWord.slice(1);
        inItalic = true;
        currentItalic = true;
      }

      const trailingMatch = cleanWord.match(/^(.*?)\*([.,/#!$%^&*;:{}=\-_`~()]*)$/);
      if (trailingMatch) {
        cleanWord = trailingMatch[1];
        punctuation = trailingMatch[2];
        inItalic = false;
      }

      return { word: cleanWord, punctuation, isItalic: currentItalic };
    });
  }, [text, animateBy]);

  useEffect(() => {
    if (animateOnMount) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animateOnMount, threshold, rootMargin]);

  // Avoid filter: blur() entirely. Animating CSS filters across many words is
  // expensive on mobile GPUs and can leave text looking blurred on interrupted frames.
  const hiddenY = direction === "top" ? -10 : 10;

  return (
    <p ref={ref} className={className}>
      {elements.map((segment, index) => (
        <motion.span
          key={`${index}-${segment.word}`}
          initial={false}
          animate={reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: hiddenY }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: stepDuration, ease: "easeOut", delay: (index * delay) / 1000 },
                  y: { duration: stepDuration, ease: "easeOut", delay: (index * delay) / 1000 },
                }
          }
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          style={{ display: "inline-block", opacity: reduceMotion ? 1 : undefined, willChange: inView ? "auto" : "opacity, transform" }}
        >
          {segment.isItalic ? (
            <span className="font-serif italic text-white/90">{segment.word}</span>
          ) : (
            segment.word
          )}
          {segment.punctuation}&nbsp;
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
