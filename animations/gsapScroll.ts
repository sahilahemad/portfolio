import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInOnScroll = (element: string) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
  });
};
