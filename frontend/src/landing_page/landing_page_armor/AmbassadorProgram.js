import React, { useState } from "react";
import { Link } from "react-router-dom";
import { communityEventsPath, communityMembersPath } from "../../constants/RouteConstants";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const BG_DARK = "#111827";

const tiers = [
  {
    name: "Connector",
    threshold: "Refer 3+ members",
    benefits: ["Early event access", "Newsletter feature", "Anote recognition badge"],
    color: ACCENT_BLUE,
  },
  {
    name: "Builder",
    threshold: "Refer 10+ members",
    benefits: ["All Connector perks", "Anote swag pack", "Coffee chat priority"],
    color: ACCENT_YELLOW,
  },
  {
    name: "Leader",
    threshold: "Refer 25+ members",
    benefits: ["All Builder perks", "Co-host an event with Anote", "Advisory circle access"],
    color: "#a78bfa",
  },
];

const ambassadors = [
  { name: "Sarah K.", role: "AI Engineer", city: "New York" },
  { name: "James L.", role: "Founder, AI Startup", city: "Boston" },
  { name: "Priya M.", role: "Data Scientist", city: "San Francisco" },
  { name: "Alex R.", role: "ML Researcher", city: "Chicago" },
];

export default function AmbassadorProgram() {
  const [copied, setCopied] = useState(false);
  const referralLink = `${window.location.origin}/?ref=community`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen text-white pb-24" style={{ backgroundColor: BG_DARK }}>
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: ACCENT_BLUE }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: ACCENT_YELLOW }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-10 sm:pt-16">
        {/* Hero */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: ACCENT_BLUE }}
          >
            Ambassador Program
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Grow the community.<br />Earn recognition.
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Refer friends, colleagues, and peers to Anote's AI community and unlock
            exclusive rewards as you grow your impact.
          </p>
        </div>

        {/* Referral link */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
          <p className="text-sm text-gray-400 mb-3">Your referral link</p>
          <div className="flex gap-3">
            <input
              readOnly
              value={referralLink}
              className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-200 focus:outline-none"
            />
            <button
              onClick={copyLink}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 shrink-0"
              style={{ backgroundColor: ACCENT_YELLOW }}
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Share this link — when someone joins via your link, it counts toward your tier.
          </p>
        </div>

        {/* Tiers */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Ambassador Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-white/10 p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <div
                  className="text-xl font-bold mb-1"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </div>
                <div className="text-xs text-gray-500 mb-4">{tier.threshold}</div>
                <ul className="space-y-2">
                  {tier.benefits.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="mt-0.5 shrink-0" style={{ color: tier.color }}>
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Top ambassadors */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Top Ambassadors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ambassadors.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div
                  className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center text-lg font-bold"
                  style={{ color: ACCENT_YELLOW }}
                >
                  {a.name[0]}
                </div>
                <div className="text-sm font-semibold text-white">{a.name}</div>
                <div className="text-xs text-gray-500 mt-1">{a.role}</div>
                <div className="text-xs text-gray-600 mt-0.5">{a.city}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Share your link", desc: "Copy your referral link above and share it in your network, on LinkedIn, or in Slack." },
              { step: "2", title: "Friends join", desc: "When someone uses your link to join the community, it's tracked automatically." },
              { step: "3", title: "Unlock rewards", desc: "Hit referral milestones to level up your tier and unlock exclusive benefits." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-black shrink-0"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:nvidra@anote.ai?subject=Ambassador Program Application"
            className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: ACCENT_YELLOW }}
          >
            Apply to Become an Ambassador
          </a>
          <p className="text-xs text-gray-600 mt-3">
            We'll reach out within 2 business days.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
            <Link to={communityEventsPath} className="hover:text-white transition">
              Browse Events
            </Link>
            <Link to={communityMembersPath} className="hover:text-white transition">
              Meet Members
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
