interface Props {
  label: string;
  title: string;
  italic: string;
}

export default function SectionHeader({ label, title, italic }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
        {label}
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">
        {title}{" "}
        <em className="font-serif not-italic grad-text">{italic}</em>
      </h2>
    </div>
  );
}
