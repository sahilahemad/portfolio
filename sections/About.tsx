"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I am a <span className="text-white font-medium">Full-Stack Developer </span> 
            Recently Graduated from <span className="text-white font-medium">
            Master of Computer Applications (MCA)</span>. I enjoy building
            real-world applications that solve practical problems using
            clean, scalable, and efficient code.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My academic background and hands-on projects have given me
            strong experience in <span className="text-white font-medium">
            backend development</span>, database design, and modern
            frontend technologies. I focus on writing maintainable code
            and creating user-friendly interfaces.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am continuously learning new technologies, improving my
            problem-solving skills, and looking for opportunities where
            I can contribute, grow, and build impactful software.
          </p>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6">
            What I Bring
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>✔ Strong foundation in Data Structures & OOP</li>
            <li>✔ Experience with real academic & production-like projects</li>
            <li>✔ Backend-focused with full-stack capability</li>
            <li>✔ Clean database design & optimized queries</li>
            <li>✔ Comfortable with team collaboration & independent work</li>
          </ul>

          <div className="mt-8">
            <p className="text-sm text-gray-400">
              Tech I work with:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Java",
                "PHP",
                "HTML/CSS",
                "React",
                "Node.js",
                "MySQL",
                "Android Development",
                "Firebase",
                "JavaScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full
                             bg-white/10 border border-white/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
