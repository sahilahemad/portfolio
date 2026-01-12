"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeUpOnScroll = (el: string) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};

export const pinSection = (section: string) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "+=120%",
    pin: true,
    pinSpacing: true,
  });
};
