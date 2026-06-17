import React, { useState, useEffect } from "react";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const STORAGE_KEY = "newsletterSubscribed";
const DISMISSED_KEY = "newsletterModalDismissed";

export default function NewsletterModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) || localStorage.getItem(DISMISSED_KEY)) return;

    const timer = setTimeout(() => setShow(true), 30000);

    const handleExitIntent = (e) => {
      if (e.clientY < 10) setShow(true);
    };
    document.addEventListener("mouseleave", handleExitIntent);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "true");
    setShow(false);
  };

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

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(40,178,251,0.10) 0%, #111827 50%, rgba(222,254,71,0.06) 100%)",
        }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <span className="text-4xl">🎉</span>
            <p className="mt-4 text-xl font-bold text-white">You're in!</p>
            <p className="mt-2 text-sm text-gray-400">
              Welcome to the Anote AI community newsletter.
            </p>
          </div>
        ) : (
          <>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 mb-4"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT_YELLOW }}
              />
              2,000+ AI builders and counting
            </div>

            <h3 className="text-xl font-bold text-white leading-snug">
              Join 2,000+ AI builders
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Get weekly AI news, events, and resources — straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/30"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl px-5 py-3 font-semibold text-black transition hover:opacity-90 mt-1"
                style={{ backgroundColor: ACCENT_YELLOW }}
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>

            <button
              onClick={dismiss}
              className="mt-4 w-full text-center text-xs text-gray-500 hover:text-gray-300 transition"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
