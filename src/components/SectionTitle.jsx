export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-text-dark md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-7 text-text-dark/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
