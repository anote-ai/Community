import React, { useEffect, useRef, useState } from "react";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";

const API_KEY = "AIzaSyCjxXVDGAolugKgrTXpJ0HmAjL0lLxLN1E";
const MEMBERS_SHEET_ID = "1IREd2vCxo7rDGOoDUYtzoywVGLqqUFCsu3qGsA0HsMc";
const MEMBERS_SHEET_NAME = "Sheet-1";
const CALENDAR_ID = "e88890e803003d95935e56c48dc68aedfd5311e3204360f781830c06287f4f24@group.calendar.google.com";

const STATIC_STATS = [
  { key: "cities",    label: "Cities Represented",   value: 30,  suffix: "+" },
  { key: "agents",    label: "AI Agents in Gallery",  value: 50,  suffix: "+" },
  { key: "lectures",  label: "Academy Lectures",      value: 10,  suffix: "+" },
  { key: "courses",   label: "AI Courses Available",  value: 20,  suffix: "+" },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start || !target) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ label, value, suffix, animate }) {
  const count = useCountUp(value, 1200, animate);
  return (
    <div
      className="rounded-2xl p-6 text-center border border-white/8"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      <div className="text-4xl font-extrabold" style={{ color: ACCENT_YELLOW }}>
        {animate ? count : 0}{suffix}
      </div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function ImpactDashboard() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [memberCount, setMemberCount] = useState(2000);
  const [eventCount, setEventCount] = useState(50);

  // Live member count from Google Sheets
  useEffect(() => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${MEMBERS_SHEET_ID}/values/${encodeURIComponent(MEMBERS_SHEET_NAME)}?key=${API_KEY}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.values && data.values.length > 1) {
          setMemberCount(data.values.length - 1); // subtract header row
        }
      })
      .catch(() => {});
  }, []);

  // Live event count from Google Calendar
  useEffect(() => {
    const url =
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
      `?key=${API_KEY}&singleEvents=true&maxResults=250`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setEventCount(data.items.length);
        }
      })
      .catch(() => {});
  }, []);

  // Trigger count-up animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const allStats = [
    { key: "members", label: "Community Members", value: memberCount, suffix: "+" },
    { key: "events",  label: "Events Hosted",     value: eventCount,  suffix: "+" },
    ...STATIC_STATS,
  ];

  const shareText = `Join ${memberCount}+ AI builders at the Anote AI Community — ${eventCount}+ events hosted across 30+ cities. community.anote.ai`;

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: ACCENT_BLUE }}
          >
            Community Impact
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
            Growing together across the U.S.
          </h2>
        </div>
        <div className="flex gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition"
          >
            Share on X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://community.anote.ai")}&summary=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {allStats.map((s) => (
          <StatCard key={s.key} {...s} animate={animate} />
        ))}
      </div>
    </section>
  );
}
