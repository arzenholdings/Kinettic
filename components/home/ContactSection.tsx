import Container from "@/components/layout/Container";

const inputClass =
  "h-12 w-full rounded-sm border border-base-border bg-base px-4 text-body-md text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const textareaClass =
  "min-h-[140px] w-full rounded-sm border border-base-border bg-base px-4 py-3 text-body-md text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-y";

const labelClass =
  "text-body-sm font-semibold uppercase tracking-wider text-ink";

const bikeOptions = [
  { value: "", label: "Select a model" },
  { value: "apex-pro", label: "Apex Pro" },
  { value: "ridge-rs", label: "Ridge RS" },
  { value: "vanta-x", label: "Vanta X" },
  { value: "undecided", label: "Not sure yet" },
];

type FieldProps = {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

function Field({ id, label, className = "", children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-base">
      <Container className="py-section-y-lg">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 font-display text-display-md text-ink">
              Tell us about your ride.
            </h2>
            <p className="mt-4 max-w-prose text-body-lg text-ink-muted">
              Send us a few details and we will follow up with availability, financing options, and next steps.
            </p>
          </div>

          <form
            className="surface-elevated rounded-md p-6 sm:p-8 md:col-span-7"
            aria-label="Inquiry form"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <Field id="contact-name" label="Name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>

              <Field id="contact-email" label="Email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>

              <Field id="contact-phone" label="Phone">
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  className={inputClass}
                />
              </Field>

              <Field id="contact-bike" label="Bike Interest">
                <select
                  id="contact-bike"
                  name="bike"
                  defaultValue=""
                  className={inputClass}
                >
                  {bikeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                id="contact-message"
                label="Message"
                className="sm:col-span-2"
              >
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how you ride, your timeline, and anything else."
                  className={textareaClass}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-base-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-body-sm text-ink-subtle">
                We respond within one business day.
              </p>
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
