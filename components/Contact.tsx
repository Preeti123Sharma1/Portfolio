"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const contactInfo = [
  { icon: "✉️", label: "Email",    value: "preetisharma840040@gmail.com", href: "mailto:preetisharma840040@gmail.com" },
  { icon: "📞", label: "Phone",    value: "+91-8400403524",                href: "tel:+918400403524" },
  { icon: "📍", label: "Location", value: "Lucknow, India - 226021",       href: undefined },
];

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  multiline?: boolean;
}

function Field({ id, label, type = "text", multiline = false }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  const base =
    "w-full bg-surface border rounded-xl px-4 pt-6 pb-2 text-[#f0f0f8] text-sm outline-none transition-all duration-300 resize-none " +
    (focused
      ? "border-accent shadow-[0_0_0_3px_rgba(167,139,250,0.12)]"
      : "border-white/[0.07]");

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={base}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={base}
        />
      )}
      {/* Floating label — sits INSIDE the input, never on the border */}
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-300 ${
          active
            ? "top-2 text-[0.68rem] text-accent font-semibold"
            : "top-4 text-sm text-muted"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-bg2 py-28">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader label="Let's Talk" title="Get In" italic="Touch" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="reveal-left">
            <p className="text-muted text-base leading-relaxed mb-8">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </p>
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4 p-4 bg-surface border border-white/[0.07] rounded-2xl hover:border-accent/30 hover:translate-x-1.5 transition-all duration-300">
                    <span className="text-xl">{icon}</span>
                    <div>
                      <span className="block text-[0.7rem] font-semibold text-muted uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="block text-sm font-medium">{value}</span>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href}>{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal-right flex flex-col gap-5"
          >
            <Field id="name"    label="Your Name" />
            <Field id="email"   label="Your Email"   type="email" />
            <Field id="subject" label="Subject" />
            <Field id="message" label="Your Message"  multiline />

            <button
              type="submit"
              className={`cursor-none w-full py-4 rounded-full font-semibold text-sm text-white transition-all duration-300 ${
                sent
                  ? "bg-emerald-500 shadow-[0_8px_30px_rgba(16,185,129,0.3)]"
                  : "grad-bg shadow-[0_8px_30px_rgba(167,139,250,0.3)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(167,139,250,0.4)]"
              }`}
            >
              {sent ? "Message Sent ✓" : "Send Message ✦"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
