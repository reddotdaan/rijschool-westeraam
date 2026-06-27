export function TarievenPageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-westeraam-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
