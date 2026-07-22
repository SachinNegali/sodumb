import { about, site } from "@/content";
import SketchHeading from "./SketchHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-8 pb-12">
      <SketchHeading>
        Who, <span className="hd-underline">Me</span>?
      </SketchHeading>

      <div className="hd-box rotate-[-0.6deg] bg-white/50 p-6 shadow-[5px_6px_0_0_#33302a] sm:p-8">
        <div className="space-y-4 font-note text-lg leading-relaxed text-sketch-ink">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-5 font-note text-lg text-sketch-soft">
          Exists in{" "}
          <span className="hd-mark font-bold text-sketch-ink">
            {site.location}
          </span>
        </p>
      </div>
    </section>
  );
}
