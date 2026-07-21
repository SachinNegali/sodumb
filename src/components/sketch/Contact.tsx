import { site } from "@/content";
import { StarDoodle } from "./Doodles";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 py-14 text-center">
      <div className="mb-4 flex items-center justify-center gap-2 font-note text-lg text-sketch-accent">
        <StarDoodle width={20} height={20} />
        <span>let&rsquo;s talk</span>
        <StarDoodle width={20} height={20} />
      </div>

      <h2 className="font-hand text-5xl leading-tight text-sketch-ink sm:text-6xl">
        Building something <span className="hd-underline text-sketch-accent">cool</span>?
      </h2>

      <p className="mx-auto mt-5 max-w-md font-note text-lg leading-relaxed text-sketch-soft">
        Hit me up if you&rsquo;re building something cool — just please not an
        astrology or betting app.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${site.email}`}
          className="hd-box rotate-[-1.5deg] bg-sketch-ink px-6 py-3 font-note text-lg font-bold text-sketch-paper transition-transform duration-200 hover:rotate-0"
        >
          drop me an email
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hd-box-alt rotate-[1.5deg] px-6 py-3 font-note text-lg font-bold text-sketch-ink transition-transform duration-200 hover:rotate-0"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hd-box rotate-[1deg] px-6 py-3 font-note text-lg font-bold text-sketch-ink transition-transform duration-200 hover:rotate-0"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
