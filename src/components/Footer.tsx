"use client";

import {
  Home,
  User,
  Briefcase,
  Compass,
  School,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Experience", icon: Compass, id: "experience" },
  { name: "Education", icon: School, id: "education" },
  { name: "Contact", icon: Mail, id: "contact" },
];

function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 md:px-10 border-t rounded-t-4xl bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* BRAND */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Raunak Ray
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Full-Stack Developer passionate about building scalable,
              performance-driven digital experiences with clean design.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/70 backdrop-blur-md border border-white/30 shadow-sm hover:shadow-md hover:bg-white transition-all"
                >
                  <Icon size={15} />
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* SCROLL TO TOP */}
          <button
            onClick={() => handleScrollTo("home")}
            className="group mt-4 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
          >
            <ArrowUp
              size={22}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Raunak Ray. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;