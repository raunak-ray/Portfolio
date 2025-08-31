import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <footer className="py-12 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Let’s Connect 🚀
        </h2>

        <div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          data-aos="zoom-in"
        >
          {["GitHub", "LinkedIn", "Twitter"].map((platform, idx) => (
            <a 
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 py-2 px-5 rounded-full text-sm text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
            >
              {platform}
            </a>
          ))}
        </div>

        <div 
          className="flex justify-center gap-3 mb-8 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>

        <p 
          className="text-gray-400 text-sm"
          data-aos-delay="400"
        >
          © {new Date().getFullYear()} — Created by{" "}
          <a
            href="https://github.com/raunak-ray"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-purple-500 transition-colors"
          >
            Raunak Ray
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
