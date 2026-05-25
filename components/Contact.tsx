"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="bg-base py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-16" data-reveal="up">
          <p className="section-label mb-3">05 — Let&apos;s Talk</p>
          <h2 className="font-serif font-black leading-none text-ink"
            style={{ fontSize:"clamp(2.2rem,5vw,4rem)" }}>
            Get In <em className="italic text-accent">Touch</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] sm:gap-6 lg:gap-16 items-start">

          {/* Info */}
          <div data-reveal="up" data-delay="1">
            <p className="font-serif text-lg font-light text-ink2 leading-relaxed mb-10 max-w-sm">
              Have a project in mind or want to collaborate?{" "}
              <em className="italic text-accent">I&apos;d love to hear from you.</em>
            </p>

            <div className="flex flex-col mb-10">
              {[
                { label:"Email",    value:"preetisharma840040@gmail.com", href:"mailto:preetisharma840040@gmail.com" },
                { label:"Phone",    value:"+91-8400403524",                href:"tel:+918400403524" },
                { label:"Location", value:"Lucknow, India — 226021",       href:undefined },
              ].map(({ label, value, href }) => {
                const inner = (
                  <div className="group flex items-baseline gap-3 sm:gap-6 py-4 border-b border-line hover:border-accent/40 transition-colors duration-300">
                    <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted w-20 flex-shrink-0">{label}</span>
                    <span className="text-sm text-ink2 group-hover:text-accent transition-colors duration-300 break-all">{value}</span>
                  </div>
                );
                return href
                  ? <a key={label} href={href} className="cursor-none">{inner}</a>
                  : <div key={label}>{inner}</div>;
              })}
            </div>

            <a href="mailto:preetisharma840040@gmail.com"
              className="cursor-none inline-flex items-center gap-3 font-serif italic font-bold text-2xl text-ink hover:text-accent transition-colors duration-300 group">
              Say hello
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} data-reveal="right" data-delay="2" className="flex flex-col gap-7">
            <div className="grid sm:grid-cols-2 gap-7">
              <div className="form-field">
                <input id="name" name="name" type="text" required placeholder="Your Name" autoComplete="name" />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-field">
                <input id="email" name="email" type="email" required placeholder="Your Email" autoComplete="email" />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="form-field">
              <input id="subject" name="subject" type="text" required placeholder="Subject" />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-field">
              <textarea id="message" name="message" rows={5} required placeholder="Your Message" />
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit"
              className={`cursor-none self-start flex items-center gap-4 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                sent
                  ? "bg-ink text-base"
                  : "bg-accent text-base hover:bg-accentD"
              }`}>
              {sent ? "Message Sent ✓" : (
                <>
                  Send Message
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
