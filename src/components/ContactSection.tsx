import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { emailjsConfig } from "@/config/emailjs";
import { identity, publicProfiles } from "@/data/profiles";
import type { ToastMessage } from "./Toast";

interface ContactSectionProps {
  onNotify: (toast: Omit<ToastMessage, "id">) => void;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection({ onNotify }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusKind, setStatusKind] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      onNotify({
        title: "Email copied to clipboard",
        description: identity.email,
      });
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      onNotify({
        title: "Copy failed",
        description: `Please copy manually: ${identity.email}`,
        variant: "error",
      });
    }
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      next.email = "Please enter a valid email address.";
    }
    if (trimmedMessage.length < 10) {
      next.message = "Please enter a message of at least 10 characters.";
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(null);
    setStatusKind(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusKind("error");
      setStatusMessage("Please resolve the highlighted fields before sending.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_name: identity.name,
        },
        emailjsConfig.publicKey
      );

      setFormData({ name: "", email: "", message: "" });
      setStatusKind("success");
      setStatusMessage("Message sent. Thank you for reaching out.");
      onNotify({
        title: "Message sent",
        description: "Thank you for reaching out. I will respond soon.",
      });
    } catch {
      setStatusKind("error");
      setStatusMessage(
        `Unable to send automatically. Please email ${identity.email} directly.`
      );
      onNotify({
        title: "Delivery failed",
        description: `Please email ${identity.email} directly.`,
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs text-ink-secondary">Correspondence</p>
          <h2 className="section-display text-ink">Contact</h2>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">
            Open to undergraduate research collaborations, ML/NLP evaluation benchmarks, and
            systems engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Contact Details & Copy Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-panel border border-hairline bg-surface divide-y divide-hairline">
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span>Direct Email</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${identity.email}`}
                    className="font-mono text-sm font-medium text-ink hover:text-accent break-all monograph-transition"
                  >
                    {identity.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    data-testid="copy-email-btn"
                    className="inline-flex h-8 items-center gap-1.5 rounded-control border border-hairline-strong bg-surface-subtle px-3 font-mono text-xs font-medium text-ink hover:bg-hairline/40 monograph-transition"
                  >
                    {copied ? (
                      <>
                        <Check size={13} strokeWidth={1.5} aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} strokeWidth={1.5} aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span>Phone</span>
                </div>
                <a
                  href={`tel:${identity.phone.replace(/\s+/g, "")}`}
                  className="block font-mono text-sm text-ink hover:text-accent monograph-transition"
                >
                  {identity.phone}
                </a>
              </div>

              <div className="p-5 space-y-1.5">
                <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
                  <span>Location</span>
                </div>
                <p className="text-sm text-ink">{identity.location}</p>
              </div>
            </div>

            <div className="rounded-panel border border-hairline bg-surface p-5">
              <p className="mb-3 font-mono text-xs text-ink-muted">Verified Profiles</p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {publicProfiles.map((profile) => (
                  <li key={profile.name}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-control border border-hairline bg-surface-subtle px-3 py-2 font-mono text-xs font-medium text-ink hover:border-accent hover:text-accent monograph-transition"
                    >
                      <span>{profile.name}</span>
                      <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accessible EmailJS Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              data-testid="contact-form"
              className="rounded-panel border border-hairline bg-surface p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-xs font-medium text-ink"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    placeholder="Dr. A. Rahman"
                    className="h-11 w-full rounded-control border border-hairline-strong bg-paper px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none monograph-transition"
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-1.5 font-mono text-xs text-[var(--accent-warm-ink)]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-xs font-medium text-ink"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    placeholder="colleague@university.edu"
                    className="h-11 w-full rounded-control border border-hairline-strong bg-paper px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none monograph-transition"
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      role="alert"
                      className="mt-1.5 font-mono text-xs text-[var(--accent-warm-ink)]"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-xs font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  placeholder="Share research collaboration details, engineering scope, or a question"
                  className="w-full rounded-control border border-hairline-strong bg-paper p-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none resize-y monograph-transition"
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="mt-1.5 font-mono text-xs text-[var(--accent-warm-ink)]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {statusMessage && (
                <div
                  role={statusKind === "error" ? "alert" : "status"}
                  data-testid="contact-form-status"
                  className={`rounded-control border px-4 py-3 text-xs font-medium ${
                    statusKind === "error"
                      ? "border-accent-warm/40 bg-accent-warm-soft text-[var(--accent-warm-ink)]"
                      : "border-accent/40 bg-accent-soft text-accent"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <span className="font-mono text-xs text-ink-muted">
                  Dispatched via EmailJS to {identity.name}
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 items-center gap-2 rounded-control bg-accent px-6 text-sm font-medium text-[var(--accent-ink-on-fill)] hover:bg-accent-hover disabled:opacity-60 monograph-transition"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send size={15} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
