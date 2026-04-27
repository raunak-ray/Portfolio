"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function ProjectCard({ project, onClick }: any) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card
        onClick={() => onClick(project)}
        className="group cursor-pointer overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 hover:shadow-xl transition-all"
      >
        {/* IMAGE */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain
             transition duration-500 group-hover:scale-105"
          />
        </div>

        <CardContent className="p-5 space-y-3">
          {/* TITLE */}
          <h3 className="text-lg font-semibold">{project.title}</h3>

          {/* TAGLINE */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.tagline}
          </p>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.slice(0, 3).map((t: string) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 text-sm text-blue-600 font-medium opacity-80 group-hover:opacity-100 transition">
            View Project →
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
