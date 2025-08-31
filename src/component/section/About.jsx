import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const frontendSkills = ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>
        <div
          className="rounded-xl p-10 border-white/10 border hover:-translate-y-1 transition-all"
          data-aos="zoom-in"
        >
          <p
            className="text-gray-300 mb-10 text-center text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I am a dedicated Full Stack Developer with a passion for building efficient, scalable, and user-friendly web applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-6 hover:-translate-y-1 transition-all"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    data-aos="zoom-in"
                    data-aos-delay={100 + key * 50}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="rounded-xl p-6 hover:-translate-y-1 transition-all"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Backend</h3>
              <div className="flex flex-wrap gap-2 cursor-pointer">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    data-aos="zoom-in"
                    data-aos-delay={100 + key * 50}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div
              className="p-6 rounded-xl border-white/10 border cursor-pointer hover:-translate-y-1 hover:transition-all"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Technology (B.Tech) in Computer Science</strong> – XYZ University, 2023 – 2027
                </li>
              </ul>
            </div>
            <div
              className="p-6 rounded-xl border-white/10 border cursor-pointer hover:-translate-y-1 hover:transition-all"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div data-aos="fade-up" data-aos-delay="400">
                  <h4 className="font-semibold">Full Stack Developer – ABC Company (20XX – Present)</h4>
                  <p>Built and maintained scalable web applications, optimized performance, and collaborated with cross-functional teams to deliver high-quality products.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <h4 className="font-semibold">Frontend Developer Intern – DEF Startup (20XX – 20XX)</h4>
                  <p>Contributed to UI development using React and Tailwind, improved responsiveness, and enhanced user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
