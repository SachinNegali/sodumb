import { SquiggleDoodle } from "./Doodles";

export default function SketchHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="mb-2 scroll-mt-8">
      <h2 className="font-hand text-4xl leading-none text-sketch-ink sm:text-5xl">
        {children}
      </h2>
      <SquiggleDoodle
        className="text-sketch-accent"
        width={150}
        height={14}
      />
    </div>
  );
}
