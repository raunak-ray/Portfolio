import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false,
    });
  }, []);
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl px-4 mx-auto">
            <h2 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight" data-aos="fade-up">
                Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all" data-aos="fade-right">
                    <h3 className="text-xl font-bold mb-2">
                        Calculator
                    </h3>
                    <p className="text-gray-400 mb-4">
                        A simple calculator app to perform basic arithmetic operations with a clean UI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["MongoDB", "Express", "React", "Node"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))

                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-color my-4">
                            View Project →
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all" data-aos="fade-left">
                    <h3 className="text-xl font-bold mb-2" >
                        Weather App
                    </h3>
                    <p className="text-gray-400 mb-4">
                        An app that fetches real-time weather data from an API and displays forecasts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["MongoDB", "Express", "React", "Node", "API"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))

                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-color my-4">
                            View Project →
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all" data-aos="fade-right">
                    <h3 className="text-xl font-bold mb-2">
                        To-Do List
                    </h3>
                    <p className="text-gray-400 mb-4">
                        A task management app to add, update, and delete daily tasks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["MongoDB", "Express", "React", "Node"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))

                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-color my-4">
                            View Project →
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all" data-aos="fade-left">
                    <h3 className="text-xl font-bold mb-2">
                        Blog Platform
                    </h3>
                    <p className="text-gray-400 mb-4">
                        A blogging platform with authentication for creating, reading, and managing posts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["MongoDB", "Express", "React", "Node", "JWT"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))

                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-400 transition-color my-4">
                            View Project →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
