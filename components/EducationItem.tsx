"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "./motion";

export default function EducationItem({
  item,
}: {
  item: {
    degree: string;
    institute: string;
    year: string;
    description: string;
  };
}) {
  return (
    <motion.div
      variants={fadeUpItem}
      className="relative pl-10 pb-16"
    >
      {/* Dot */}
      <span
        className="absolute left-0 top-2 w-4 h-4 rounded-full
                   bg-purple-500"
      />

      {/* Line */}
      <span
        className="absolute left-1.75 top-6 bottom-0 w-0.5
                   bg-white/20"
      />

      <h3 className="text-xl font-semibold tracking-tight">
        {item.degree}
      </h3>

      <p className="text-sm text-gray-400 mt-1">
        {item.institute}
      </p>

      <span className="inline-block mt-2 text-xs uppercase tracking-widest text-gray-500">
        {item.year}
      </span>

      <p className="text-gray-300 mt-4 max-w-xl leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
