/**
 * Section heading. The squiggle emphasis is applied inline per-heading via the
 * `.hd-underline` class on the important word(s) — not under the whole line.
 */
export default function SketchHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="mb-5 scroll-mt-8">
      <h2 className="font-hand text-4xl leading-none text-sketch-ink sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}
