"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: any;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="glass rounded-2xl p-6 cursor-pointer
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                 transition"
    >
      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      {/* PERIOD */}
      <p className="text-sm text-gray-400 mb-4">
        {project.period}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full
                       bg-white/10 border border-white/15"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* HIGHLIGHTS */}
      <ul className="text-sm text-gray-300 space-y-1">
        {project.highlights?.map((point: string) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  );
}
