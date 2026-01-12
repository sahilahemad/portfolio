
"use client";

import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { pageTransition } from "../components/motion";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="show"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer/>
    </motion.main>
  );
}




// import Navbar from "@/components/Navbar";
// import About from "@/sections/About";
// import Contact from "@/sections/Contact";
// import Education from "@/sections/Education";
// import Hero from "@/sections/Hero";
// import Projects from "@/sections/Projects";
// import Skills from "@/sections/Skills";


// export default function Home() {
//   return (
//     <>
//       <Navbar />
      
//       <Hero />
//       <div className="h-24 bg-gradient-to-b from-transparent to-black/40" />

//       <About />
//       <div className="h-24 bg-gradient-to-b from-transparent to-black/40" />

//       <Skills />
//       <div className="h-24 bg-gradient-to-b from-transparent to-black/40" />

//       <Projects />
//       <div className="h-24 bg-gradient-to-b from-transparent to-black/40" />

//       <Education />
//       <div className="h-24 bg-gradient-to-b from-transparent to-black/40" />

//       <Contact />
//     </>
//   );
// }
