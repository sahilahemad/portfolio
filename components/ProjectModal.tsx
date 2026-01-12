"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl p-8 max-w-2xl w-[90%]
                     mx-auto mt-32"
        >
          {/* TITLE */}
          <h3 className="text-2xl font-bold mb-2">
            {project?.title ?? "Project"}
          </h3>

          {/* PERIOD */}
          <p className="text-sm text-gray-400 mb-6">
            {project?.period ?? ""}
          </p>

          {/* TECH STACK */}
          <h4 className="font-semibold mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tech?.length > 0 ? (
              project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full
                             bg-white/10 border border-white/15"
                >
                  {tech}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                Technologies not specified.
              </p>
            )}
          </div>

          {/* DETAILS */}
          <h4 className="font-semibold mb-3">Project Details</h4>

          {project?.details?.length > 0 ? (
            <ul className="space-y-2 text-gray-300">
              {project.details.map((point: string) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">
              Detailed description will be added soon.
            </p>
          )}

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="mt-8 px-6 py-2 rounded-full
                       bg-white text-black font-semibold"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
