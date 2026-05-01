"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const params = useSearchParams();
  const initialBike = params.get("bike") ?? "";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike: initialBike,
    message: "",
  });

  useEffect(() => {
    const b = params.get("bike");
    if (b) setForm((f) => ({ ...f, bike: b }));
  }, [params]);

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Failed to send. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/10 text-cyan-glow">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-sm text-white/65">
          Thanks — we'll get back to you shortly. In the meantime, feel free to
          keep browsing the lineup.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name">
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Jamie Rivers"
            disabled={submitting}
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
            placeholder="you@email.com"
            disabled={submitting}
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="(555) 555-5555"
            disabled={submitting}
          />
        </Field>
        <Field label="Tell us what bike you're interested in">
          <input
            type="text"
            value={form.bike}
            onChange={(e) => update("bike", e.target.value)}
            className="input"
            placeholder="e.g. Talaria MX5"
            disabled={submitting}
          />
        </Field>
      </div>
      <Field label="Message">
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input resize-none"
          placeholder="What kind of riding are you doing? Any questions on financing, setup, or fit?"
          disabled={submitting}
        />
      </Field>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {errorMsg}
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-white/50">
          We respond within one business day.
        </p>
        <button
          type="submit"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          disabled={submitting}
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #0c0d10;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.input::placeholder) {
          color: rgba(255, 255, 255, 0.35);
        }
        :global(.input:focus) {
          border-color: rgba(34, 184, 255, 0.6);
          box-shadow: 0 0 0 3px rgba(34, 184, 255, 0.12);
        }
        :global(.input:disabled) {
          opacity: 0.6;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}
