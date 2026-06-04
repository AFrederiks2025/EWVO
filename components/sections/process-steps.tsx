const steps = [
  {
    n: "01",
    title: "Discovery",
    text: "We duiken in je bedrijf, je doelen en je doelgroep. Wat wil je bereiken?",
  },
  {
    n: "02",
    title: "Strategie",
    text: "We bepalen samen de aanpak, de structuur en het plan van aanpak.",
  },
  {
    n: "03",
    title: "Creatie",
    text: "We ontwerpen en bouwen jouw oplossing — van merk tot website.",
  },
  {
    n: "04",
    title: "Groei",
    text: "We lanceren, meten de resultaten en blijven optimaliseren.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div
          key={step.n}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <span className="text-sm font-semibold text-brand">{step.n}</span>
          <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
