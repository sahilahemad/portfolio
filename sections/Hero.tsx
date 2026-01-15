"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {/* STATUS BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6
                        rounded-full glass text-sm text-white/80">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Opportunities
        </div>

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Sahil Ahmed
        </h1>

        {/* ROLE */}
        <p className="mt-4 text-2xl font-medium text-white/90">
          Software/Web Developer
        </p>

        {/* SUMMARY */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I build modern, scalable web applications with a strong focus on
          clean architecture, performance, and user experience.
          Experienced in full-stack development using Java, PHP, React,
          Node.js, and modern databases.
        </p>

        {/* TECH STACK PILLS */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Java",
            "PHP",
            "HTML/CSS",
            "React",
            "Node.js",
            "MySQL",
            "Firebase",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm
                         bg-white/10 border border-white/15
                         backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* SCROLL HINT */}
        <div className="mt-16 flex flex-col items-center text-sm text-gray-400">
          <span>Scroll to explore</span>
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
            className="mt-2 text-xl"
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
