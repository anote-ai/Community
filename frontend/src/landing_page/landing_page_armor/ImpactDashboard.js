import React, { useEffect, useRef, useState } from "react";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";

const stats = [
  { label: "Community Members", value: 2000, suffix: "+" },
  { label: "Cities Represented", value: 30, suffix: "+" },
  { label: "Events Hosted", value: 50, suffix: "+" },
  { label: "AI Agents in Gallery", value: 50, suffix: "+" },
  { label: "Academy Lectures", value: 10, suffix: "+" },
  { label: "AI Courses Available", value: 20, suffix: "+" },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
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
        {animate ? count : 0}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function ImpactDashboard() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16">
      <div className="mb-8">
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
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} animate={animate} />
        ))}
      </div>
    </section>
  );
}
