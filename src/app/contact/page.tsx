"use client";
import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata export doesn't work in client components
// Move metadata to a separate layout if needed

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-center">
        <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
            Us
          </span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Have a question, suggestion or just want to say hello? We'd love to
          hear from you.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
        {/* Form */}
        <div className="glass-card rounded-3xl p-8 border border-white/5">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-zinc-400">
                Thank you for reaching out. We'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 text-emerald-400 hover:underline text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  placeholder="What is your message about?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Write your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3.5 rounded-xl transition-colors text-sm"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Telegram */}
          <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 bg-emerald-500/5">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="text-white font-bold text-lg mb-2">
              Fastest Response
            </h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              For the quickest response, join our Telegram community and send us
              a direct message there.
            </p>
            <a
              href="https://t.me/+acQi9-pYh4c1OTE1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl text-sm transition-colors"
            >
              Open Telegram
            </a>
          </div>

          {/* Info Cards */}
          <div className="glass-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-white font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">📍</span>
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-zinc-400 text-sm">Online — Global</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">⏰</span>
                <div>
                  <p className="text-white text-sm font-medium">
                    Response Time
                  </p>
                  <p className="text-zinc-400 text-sm">Within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-lg">✈️</span>
                <div>
                  <p className="text-white text-sm font-medium">Telegram</p>
                  <a
                    href="https://t.me/+acQi9-pYh4c1OTE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 text-sm hover:underline"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="glass-card rounded-2xl p-5 border border-white/5">
            <p className="text-zinc-500 text-xs leading-relaxed">
              <span className="text-amber-400 font-semibold">Note:</span> We do
              not provide personal financial advice or trading recommendations.
              All inquiries should be educational in nature.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
