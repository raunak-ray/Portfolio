"use client";

import { Briefcase, Compass, Contact, Home, User } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Experience", icon: Compass, id: "experience" },
  { name: "Contact", icon: Contact, id: "contact" },
];

function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
      const handleScroll = () => {
        navLinks.forEach((link) => {
          const section = document.getElementById(link.id);
          if (!section) return;
  
          const rect = section.getBoundingClientRect();
  
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.id);
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // run once
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Centered content */}
      <div className="max-w-2xl mx-auto">
        <nav className="mt-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 shadow-md flex gap-4 justify-center items-center">
          Navbar
          {navLinks.map((nav) => {
            const Icon = nav.icon;
            const isActive = active === nav.id;

            return (
              <a
                href={`#${nav.id}`}
                key={nav.id}
                className={`inline-flex gap-2 items-center justify-center  border border-transparent rounded-full px-3 py-2
                    ${isActive ? "bg-white/90 border-white/40 text-black" : "bg-transparent hover:bg-white/90 text-black/70"}`}
              >
                <Icon />
                {nav.name}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Navbar; 