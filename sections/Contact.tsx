"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer } from "../components/motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black/40">
      <motion.div
        className="container text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-10"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          variants={fadeUpItem}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          I’m open to full-time roles, internships, and freelance opportunities.
          If you like my work, let’s talk.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUpItem}
          className="mt-14 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="mailto:sahilahemad05@gmail.com"
            className="px-8 py-4 bg-purple-600 rounded-full font-semibold
                       hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sahilahemad"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-full
                       hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sahil-ahemad-90s67"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-full
                       hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
