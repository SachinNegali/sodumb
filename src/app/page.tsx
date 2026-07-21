import Hero from "@/components/sketch/Hero";
import About from "@/components/sketch/About";
import Skills from "@/components/sketch/Skills";
import Experience from "@/components/sketch/Experience";
import Projects from "@/components/sketch/Projects";
import Contact from "@/components/sketch/Contact";

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-sketch-paper font-note text-sketch-ink">
      {/* Subtle paper grain */}
      <div className="hd-grain pointer-events-none fixed inset-0" aria-hidden />

      <main className="relative mx-auto max-w-3xl px-5 py-8 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
