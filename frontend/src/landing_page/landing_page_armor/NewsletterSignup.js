import React, { useState, useEffect } from "react";

const ACCENT_YELLOW = "#defe47";
const STORAGE_KEY = "newsletterSubscribed";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  if (!visible || localStorage.getItem(STORAGE_KEY)) return null;

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
      localStorage.setItem(STORAGE_KEY, "true");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-gray-900/95 backdrop-blur-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
        {submitted ? (
          <div className="flex items-center gap-3 text-white">
            <span className="text-xl">🎉</span>
            <span className="font-semibold">You're in! Welcome to the community.</span>
          </div>
        ) : (
          <>
            <p className="text-white font-semibold text-sm sm:text-base shrink-0">
              Join 2,000+ AI builders — get weekly AI news, events, and resources
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 flex-1 sm:max-w-lg"
            >
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 w-full sm:w-24"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg px-3 py-2 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30 flex-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 shrink-0"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </>
        )}
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-white text-lg shrink-0"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
