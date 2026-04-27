"use client";

import { personalInfo } from "@/constants/info";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="mt-24 md:mt-0 min-h-screen flex items-center justify-center px-6 md:px-10"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-4 text-center md:text-left"
        >
          <p className="text-sm text-gray-500">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            {personalInfo.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600">
            {personalInfo.title}
          </h2>

          <p className="text-gray-500 max-w-lg">{personalInfo.tagline}</p>

          {/* CTA */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            {/* PRIMARY BUTTON */}
            <a
              href="#projects"
              className="px-4 py-3 rounded-full bg-gray-900 text-white text-md 
              hover:bg-gray-700 transition shadow-md hover:shadow-lg"
            >
              View Projects
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#contact"
              className="px-4 py-3 rounded-full border border-blue-200 text-md 
              bg-white/80 text-black hover:bg-gray-600 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Accent Glow */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400/30 blur-2xl" />

            <img
              src="/image.jpeg"
              alt="profile"
              className="relative w-full h-full object-cover rounded-full shadow-xl border border-white/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
