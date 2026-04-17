import React, { useState } from "react";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const BG_DARK = "#111827";

const activeCities = [
  { name: "New York", members: 800 },
  { name: "Boston", members: 350 },
  { name: "San Francisco", members: 200 },
  { name: "Chicago", members: 150 },
  { name: "Los Angeles", members: 120 },
];

const responsibilities = [
  "Host 1 in-person or virtual meetup per month",
  "Promote events to your local network",
  "Grow the local member list to 50+ people",
  "Connect members to AI resources and opportunities",
  "Provide feedback to the Anote core team",
];

const benefits = [
  "Official Anote chapter organizer recognition",
  "Access to Anote's event toolkit and speaker network",
  "Direct line to the Anote core team",
  "Featured in the community newsletter",
  "Anote swag and a small event support budget",
];

export default function StartAChapter() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    linkedin: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.anote.ai/chapter/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => {});
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white pb-24" style={{ backgroundColor: BG_DARK }}>
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-80 w-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: ACCENT_BLUE }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: ACCENT_YELLOW }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-10 sm:pt-16">
        {/* Hero */}
        <div className="mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: ACCENT_BLUE }}
          >
            Start a Chapter
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Bring Anote AI to<br />your city
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Help people in your area learn AI, build together, and connect with a
            nationwide community. No prior experience required — just energy and a
            passion for making AI accessible.
          </p>
        </div>

        {/* Active cities */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-5">Active Chapters</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activeCities.map((city) => (
              <div
                key={city.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-base font-semibold text-white mb-1">
                  {city.name}
                </div>
                <div className="text-xs text-gray-500">{city.members}+ members</div>
              </div>
            ))}
            <button
              onClick={() =>
                document
                  .getElementById("apply-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-2xl border-2 border-dashed border-white/15 p-5 flex items-center justify-center hover:border-white/30 transition"
            >
              <span className="text-sm text-gray-500">+ Your city?</span>
            </button>
          </div>
        </div>

        {/* What you'll do / get */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div>
            <h2 className="text-xl font-bold text-white mb-5">What you'll do</h2>
            <ul className="space-y-3">
              {responsibilities.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span
                    className="mt-0.5 shrink-0 text-xs"
                    style={{ color: ACCENT_BLUE }}
                  >
                    ●
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-5">What you'll get</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: ACCENT_YELLOW }}
                  >
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application form */}
        <div
          id="apply-form"
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Application received!
              </h3>
              <p className="text-gray-400">
                We'll be in touch within a week to get you started.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-white mb-6">
                Apply to Start a Chapter
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/30"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">
                      City
                    </label>
                    <input
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/30"
                      placeholder="Austin, TX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">
                    LinkedIn URL
                  </label>
                  <input
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/30"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">
                    Why do you want to organize an Anote chapter?
                  </label>
                  <textarea
                    name="motivation"
                    required
                    value={form.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl px-4 py-2.5 bg-white/10 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-white/30 resize-none"
                    placeholder="Tell us about your connection to AI and your local community..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
