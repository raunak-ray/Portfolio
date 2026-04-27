import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

function page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default page;
