import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

function page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default page;
