"use client";

import {
  Briefcase,
  Compass,
  Home,
  User,
  Menu,
  X,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Experience", icon: Compass, id: "experience" },
  { name: "Contact", icon: Mail, id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // 🔥 Better scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          current = navLinks[i].id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full px-4">
      
      <div className="max-w-xl mx-auto">
        
        {/* NAVBAR */}
        <nav className="mt-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-4 py-3 shadow-md flex items-center justify-between md:justify-center">
          
          {/* MOBILE LEFT */}
          <div className="md:hidden text-sm font-medium">
            Raunak
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-2 items-center">
            {navLinks.map((nav) => {
              const Icon = nav.icon;
              const isActive = active === nav.id;

              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-black shadow-md"
                        : "text-black/70 hover:bg-white/70"
                    }`}
                >
                  <Icon size={16} />
                  {nav.name}
                </a>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-white/60"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-3 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg flex flex-col gap-2">
            
            {navLinks.map((nav) => {
              const Icon = nav.icon;
              const isActive = active === nav.id;

              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
                    ${
                      isActive
                        ? "bg-black/10 text-black"
                        : "hover:bg-black/5"
                    }`}
                >
                  <Icon size={18} />
                  {nav.name}
                </a>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;