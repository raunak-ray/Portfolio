"use client";

import { education } from "@/constants/info";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 md:px-10 bg-gradient-to-b from-white to-blue-50/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <Badge className="mb-4 px-4 py-1 text-sm rounded-full">
            Academic Background
          </Badge>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            My <span className="text-blue-600">Education</span>
          </h2>

          <p className="text-muted-foreground mt-5 leading-relaxed">
            A strong academic foundation shaping my technical expertise,
            problem-solving ability, and software engineering journey.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-border -translate-x-1/2" />

          <div className="space-y-16">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* TIMELINE ICON */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    <GraduationCap size={20} />
                  </div>

                  {/* CARD */}
                  <div
                    className={`w-full md:w-[45%] ml-14 md:ml-0 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl backdrop-blur-sm bg-white/90">
                      <CardContent className="p-6 space-y-5">
                        {/* TOP */}
                        <div className="flex items-start gap-4">
                          <img
                            src={item.icon}
                            alt={item.institution}
                            className="w-14 h-14 rounded-xl object-cover border"
                          />

                          <div className="space-y-1">
                            <h3 className="text-xl font-semibold leading-tight">
                              {item.degree}
                            </h3>

                            <p className="text-muted-foreground font-medium">
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        {/* META */}
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{item.duration}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* SCORE */}
                        <div>
                          <Badge
                            variant="secondary"
                            className="text-sm px-3 py-1 rounded-full"
                          >
                            {item.score}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;