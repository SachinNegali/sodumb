import { skillGroups } from "@/content";
import SketchHeading from "./SketchHeading";

// A few tilt classes so the chips look scattered, not gridded.
const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1", "rotate-[0.5deg]"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 py-6">
      <SketchHeading>Stuff I think I know</SketchHeading>

      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-1 font-note text-xl font-bold text-sketch-soft">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <li key={item}>
                  <span
                    className={`hd-box-alt inline-block bg-white/50 px-3 py-1 font-note text-base text-sketch-ink transition-transform duration-200 hover:rotate-0 hover:text-sketch-accent ${tilts[i % tilts.length]}`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
