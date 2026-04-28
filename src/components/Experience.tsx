"use client";

import { experience } from "@/constants/info";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            My <span className="text-blue-600">Experience</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            My professional journey focused on building scalable products,
            improving user experience, and solving real-world problems.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-8 space-y-16">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* TIMELINE DOT */}
              <div className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-md" />

              {/* CARD */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition p-6">
                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.icon}
                      alt={item.company}
                      className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.role}
                      </h3>
                      <p className="text-gray-600">{item.company}</p>
                    </div>
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    {item.duration || "Freelance / Contract"}
                  </span>
                </div>

                {/* HIGHLIGHTS */}
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;