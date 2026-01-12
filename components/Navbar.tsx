"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* =======================
     Hide navbar on scroll
  ======================= */
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      if (window.scrollY > lastY && window.scrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =======================
     Scroll spy + accent color
  ======================= */
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const colors: Record<string, string> = {
      home: "139 92 246",
      about: "236 72 153",
      skills: "99 102 241",
      projects: "59 130 246",
      education: "167 139 250",
      contact: "16 185 129",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const current = navItems.find(
              (item) => item.href === `#${id}`
            );

            if (current) setActive(current.label);

            if (id && colors[id]) {
              document.documentElement.style.setProperty(
                "--accent",
                colors[id]
              );
            }
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =======================
         DESKTOP NAVBAR
      ======================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                   w-[94%] max-w-6xl hidden md:block
                   glass gradient-border rounded-full"
      >
        <div className="grid grid-cols-3 items-center px-6 py-3">

          {/* BRAND */}
          <div className="font-bold text-lg tracking-tight">
            Sahil<span className="text-purple-400">.</span>
          </div>

          {/* CENTER NAV */}
          <nav className="relative flex justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() =>
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative px-4 py-2 text-sm font-medium
                           text-white/70 rounded-full
                           backdrop-blur-md
                           transition-all duration-300
                           hover:text-white
                           hover:bg-white/10
                           hover:scale-105
                           hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
              >
                {active === item.label && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full accent-bg -z-10
                               shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex justify-end">
            <a
              href="/Sahil_Resume.pdf"
              download
              className="px-5 py-2 rounded-full
                         bg-white text-black text-sm font-semibold
                         hover:scale-105 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.header>

      {/* =======================
         MOBILE BUTTON
      ======================= */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 md:hidden
                   glass w-12 h-12 rounded-full
                   flex items-center justify-center"
      >
        ☰
      </button>

      {/* =======================
         MOBILE MENU
      ======================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-24 left-1/2 -translate-x-1/2
                         glass gradient-border
                         w-[85%] max-w-sm rounded-2xl p-6"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setOpen(false);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block w-full text-left px-4 py-3
                             rounded-lg text-white/80
                             hover:text-white hover:bg-white/10
                             transition"
                >
                  {item.label}
                </button>
              ))}

              <a
                href="/Sahil-Ahemad-Resume.pdf"
                download
                className="block mt-6 text-center px-4 py-3 rounded-lg
                           bg-white text-black font-semibold"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
