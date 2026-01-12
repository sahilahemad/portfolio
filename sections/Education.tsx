"use client";

import { motion } from "framer-motion";
import EducationItem from "../components/EducationItem";
import { staggerContainer } from "../components/motion";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-32">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight
                     text-center mb-20"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <EducationItem key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
