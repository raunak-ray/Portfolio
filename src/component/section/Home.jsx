import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          data-aos="fade-up"
        >
          Hi, I'm Raunak Ray
        </h1>
        <p
          className="text-gray-300 text-lg mb-8 max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I’m a passionate Full Stack Developer who loves building clean, scalable, and user-friendly applications.
          Always eager to learn and grow, I thrive in collaborative environments and take pride in writing efficient, maintainable code.
        </p>
        <div
          className="flex justify-center space-x-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className=" text-blue-500 border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
