import Container from "@/components/layout/Container";

const inputClass =
  "w-full rounded-sm border border-base-border bg-base px-4 py-3 text-body-md text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const labelClass = "eyebrow text-ink-muted";

const bikeOptions = [
  { value: "", label: "Select a model" },
  { value: "apex-pro", label: "Apex Pro" },
  { value: "ridge-rs", label: "Ridge RS" },
  { value: "vanta-x", label: "Vanta X" },
  { value: "undecided", label: "Not sure yet" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-base">
      <Container className="py-section-y-lg">
        <div className="grid gap-12 md:grid-cols-12">
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
            className="surface-elevated rounded-md p-8 md:col-span-7"
            aria-label="Inquiry form"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-bike" className={labelClass}>
                  Bike Interest
                </label>
                <select id="contact-bike" name="bike" className={inputClass} defaultValue="">
                  {bikeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how you ride, your timeline, and anything else."
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end">
              <button type="submit" className="btn-primary">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
