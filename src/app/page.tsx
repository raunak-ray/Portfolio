import About from "@/components/About";
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
    </div>
  );
}

export default page;
