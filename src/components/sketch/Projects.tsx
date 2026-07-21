import { projects } from "@/content";
import SketchHeading from "./SketchHeading";
import { ArrowDoodle } from "./Doodles";

// Alternating sticky-note looks: paper color + tilt.
const notes = [
  { bg: "#fdec9a", tilt: "rotate-[-2deg]" }, // yellow
  { bg: "#f9c1cd", tilt: "rotate-[2deg]" }, // pink
  { bg: "#bfe3f0", tilt: "rotate-[1.4deg]" }, // blue
  { bg: "#c8e6b8", tilt: "rotate-[-1.4deg]" }, // green
];

// Torn-tape edge.
const tapeClip =
  "polygon(0 20%, 12% 6%, 26% 16%, 44% 4%, 62% 15%, 80% 5%, 100% 14%, 96% 82%, 82% 96%, 62% 86%, 44% 98%, 26% 87%, 10% 97%, 0 84%)";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 py-6">
      <SketchHeading>
        <span className="hd-underline">Drunk Ideas</span> that stuck
      </SketchHeading>

      <div className="grid gap-10 pt-4 sm:grid-cols-2">
        {projects.map((project, i) => {
          const note = notes[i % notes.length];
          return (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: note.bg }}
              className={`group relative block rounded-[2px] p-6 pt-8 text-sketch-ink shadow-[4px_9px_18px_rgba(51,48,42,0.28)] ring-1 ring-black/[0.06] transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] ${note.tilt}`}
            >
              {/* Paper fiber texture */}
              <span
                className="hd-grain pointer-events-none absolute inset-0 z-0 rounded-[2px]"
                aria-hidden
              />
              {/* Bottom curl shadow */}
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-10 bg-gradient-to-t from-black/15 to-transparent"
                aria-hidden
              />
              {/* Torn tape */}
              <span
                style={{ clipPath: tapeClip }}
                className="pointer-events-none absolute -top-3.5 left-1/2 z-20 h-7 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#efe6c6]/70 shadow-sm"
                aria-hidden
              />

              <div className="relative z-10">
                <h3 className="font-hand text-4xl leading-none group-hover:text-sketch-accent">
                  {project.title}
                </h3>
                <p className="mt-3 font-note text-lg leading-snug">
                  {project.description}
                </p>

                <p className="mt-4 font-note text-sm text-sketch-ink/70">
                  {project.tech.join(" · ")}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-note text-lg font-bold text-sketch-accent">
                  check it out <ArrowDoodle width={32} height={16} />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
