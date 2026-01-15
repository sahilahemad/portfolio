"use client";

import { motion } from "framer-motion";
import { fadeUpItem, staggerContainer } from "../components/motion";
import SkillChip from "../components/SkillChip";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 flex justify-center">
      <motion.div
        className="max-w-5xl w-full text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-20"
        >
          Skills
        </motion.h2>

        {/* FRONTEND */}
        <motion.div variants={fadeUpItem} className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.frontend.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div variants={fadeUpItem} className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Backend</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.backend.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </motion.div>

        {/* DATABASE */}
        <motion.div variants={fadeUpItem} className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Database</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.database.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </motion.div>

        {/* TOOLS */}
        <motion.div variants={fadeUpItem}>
          <h3 className="text-xl font-semibold mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
