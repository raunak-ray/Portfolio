"use client";

import { summary, skills } from "@/constants/info";
import { motion } from "framer-motion";
import SkillBlock from "./SkillBlock";

function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10">
      
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            {summary.text}
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend" items={skills.backend} />
          <SkillBlock title="Database" items={skills.databases} />
          <SkillBlock title="Languages" items={skills.languages} />
          <SkillBlock title="Tools" items={skills.tools} />
          <SkillBlock title="ORM" items={skills.orm} />
        </div>

      </div>
    </section>
  );
}

export default About;