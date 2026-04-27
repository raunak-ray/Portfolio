"use client";

import { projects } from "@/constants/info";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Projects() {
  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: any) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">Projects</h2>
          <p className="text-gray-600 mt-3">A selection of my recent work</p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleOpen}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle></DialogTitle>
        <DialogContent className="h-[80vh] sm:max-w-lg md:max-w-2xl w-full p-2 overflow-y-auto bg-white/90 backdrop-blur-xl border border-white/30">
          {selected && (
            <div className="flex flex-col">
              {/* IMAGE TOP */}
              <div className="w-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto max-h-[420px] object-contain rounded-lg"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8 space-y-6">
                {/* TITLE */}
                <div>
                  <h3 className="text-2xl font-semibold">{selected.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {selected.tagline}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed">
                  {selected.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t: string) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* FEATURES */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>

                  <ul className="space-y-2 text-sm text-gray-600">
                    {selected.highlights.map((h: string, i: number) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-4">
                  {selected.liveUrl && (
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a href={selected.liveUrl} target="_blank">
                        Visit Website
                      </a>
                    </Button>
                  )}

                  {selected.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={selected.githubUrl} target="_blank">
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Projects;
