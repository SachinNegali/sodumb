import { site } from "@/content";
import { ArrowDoodle, StarDoodle } from "./Doodles";

const socials = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
];

export default function Hero() {
  return (
    <section className="relative pb-14 text-center">
      <div className="mb-6 flex items-center justify-center gap-2 font-note text-lg text-sketch-accent">
        <StarDoodle width={22} height={22} />
        <span>hello there!</span>
      </div>

      <h1 className="font-hand text-3xl leading-none text-sketch-ink sm:text-4xl">
        Hi, I&rsquo;m{" "}
        <span className="hd-underline text-sketch-accent">{site.name}</span>
      </h1>

      <p className="mt-4 font-hand text-4xl leading-[1.05] text-sketch-ink sm:text-5xl">
        I&rsquo;m{" "}
        <span className="hd-strike text-sketch-soft">an idiot</span>{" "}
        a <span className="text-sketch-accent">Software developer</span>.
      </p>

      <p className="mx-auto mt-4 max-w-xl font-note text-lg leading-relaxed text-sketch-soft">
        {site.tagline}
      </p>

      {/* Sketchy buttons */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="hd-box inline-block rotate-[-1.5deg] bg-sketch-ink px-6 py-3 font-note text-lg font-bold text-sketch-paper transition-transform duration-200 hover:rotate-0"
        >
          see my work
        </a>
        <a
          href="#contact"
          className="hd-box-alt inline-flex items-center gap-2 rotate-[1.5deg] px-6 py-3 font-note text-lg font-bold text-sketch-ink transition-transform duration-200 hover:rotate-0"
        >
          say hi <ArrowDoodle width={30} height={16} />
        </a>
        <a
          href={site.resume}
          download
          className="hd-box inline-block rotate-[0.8deg] bg-sketch-paper px-6 py-3 font-note text-lg font-bold text-sketch-ink transition-transform duration-200 hover:rotate-0"
        >
          grab my resume ↓
        </a>
      </div>

      {/* Social scribbles */}
      <div className="mt-8 flex items-center justify-center gap-6 font-note text-lg">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            {...(s.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-sketch-soft underline decoration-sketch-accent/70 decoration-1 underline-offset-[6px] transition-colors hover:text-sketch-accent"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
