import Container from "@/components/layout/Container";

type ValueProp = {
  number: string;
  title: string;
  description: string;
};

const valueProps: ValueProp[] = [
  {
    number: "01",
    title: "Performance",
    description:
      "Silent torque, race-tuned suspension, and instant throttle response. Every model is engineered to outperform combustion peers on the trail and the track.",
  },
  {
    number: "02",
    title: "Build Quality",
    description:
      "Aerospace-grade alloys, sealed drivetrains, and showroom-grade finish. Built to survive hard riding and look right doing it.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Direct factory service, fast parts shipping, and a real human on the phone. We back every bike for the long haul.",
  },
  {
    number: "04",
    title: "Financing",
    description:
      "Flexible terms tailored to riders. Apply in minutes and get on your bike sooner, with options for every budget.",
  },
];

export default function WhyKinetic() {
  return (
    <section className="border-b border-base-border bg-base">
      <Container className="py-section-y-lg">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Kinetic Moto</p>
          <h2 className="mt-4 font-display text-display-md text-ink">
            Built for riders who refuse to compromise.
          </h2>
          <p className="mt-4 max-w-prose text-body-lg text-ink-muted">
            Premium electric performance backed by service that respects your time and your investment.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-base-border bg-base-border sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <li
              key={item.number}
              className="flex flex-col gap-4 bg-base-surface p-8 transition-colors duration-200 ease-brand hover:bg-base-elevated"
            >
              <span className="eyebrow text-accent">{item.number}</span>
              <h3 className="font-display text-heading-lg text-ink">
                {item.title}
              </h3>
              <p className="text-body-sm text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
