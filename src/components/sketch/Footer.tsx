import { site } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-dashed border-sketch-line/50 pt-6 pb-10 text-center font-note text-base text-sketch-soft">
      <p>
        drawn with love by {site.name} · {year}
      </p>
      <p className="mt-1">made with Next.js &amp; Tailwind (and a bit of ink)</p>
    </footer>
  );
}
