"use client";

import { motion } from "framer-motion";

export default function SkillChip({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      className="px-4 py-2 rounded-full text-sm font-medium
                 bg-white/10 border border-white/20
                 cursor-default"
    >
      {name}
    </motion.span>
  );
}
