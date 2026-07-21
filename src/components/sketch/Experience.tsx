import { experience } from "@/content";
import SketchHeading from "./SketchHeading";

const tilts = ["rotate-[-0.8deg]", "rotate-[0.7deg]"];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-8 py-6">
      <SketchHeading>Where i&rsquo;ve worked</SketchHeading>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <div
            key={`${job.company}-${job.dates}`}
            className={`hd-box bg-white/50 p-5 shadow-[4px_5px_0_0_#33302a] transition-transform duration-200 hover:rotate-0 sm:p-6 ${tilts[i % tilts.length]}`}
          >
            <p className="font-note text-base font-bold text-sketch-accent">
              {job.dates}
            </p>
            <h3 className="mt-1 font-hand text-3xl leading-none text-sketch-ink">
              {job.role}
            </h3>
            <p className="mt-1 font-note text-lg text-sketch-soft">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sketch-ink underline decoration-wavy decoration-sketch-accent/60 underline-offset-2 transition-colors hover:text-sketch-accent"
              >
                {job.company}
              </a>{" "}
              · {job.location}
            </p>

            <ul className="mt-3 space-y-1.5 font-note text-[17px] leading-snug text-sketch-ink">
              {job.points.map((point, pi) => (
                <li key={pi} className="flex gap-2">
                  <span className="font-bold text-sketch-accent">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
