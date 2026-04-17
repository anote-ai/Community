import React, { useState } from "react";

const ACCENT_YELLOW = "#defe47";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("https://api.anote.ai/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      }).catch(() => {});
      localStorage.setItem("newsletterSubscribed", "true");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-7 flex items-center gap-4">
          <span className="text-2xl">🎉</span>
          <div>
            <p className="font-semibold text-white">You're in!</p>
            <p className="text-sm text-gray-400">
              Welcome to the Anote AI community newsletter.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-8 pb-4">
      <div
        className="rounded-2xl border border-white/10 px-8 py-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(40,178,251,0.08) 0%, rgba(222,254,71,0.05) 100%)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Stay in the loop</h3>
            <p className="mt-1 text-sm text-gray-400">
              Weekly AI news, events, and resources — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 min-w-0 flex-1 sm:max-w-md"
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 w-full sm:w-28"
            />
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 flex-1"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 shrink-0"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
