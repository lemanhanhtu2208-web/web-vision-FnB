export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-nghe">
            {eyebrow}
          </p>
        )}
        <h2 className="mb-10 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
