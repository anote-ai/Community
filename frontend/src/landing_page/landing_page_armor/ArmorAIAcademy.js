import React, { useState } from "react";

// Anote AI Academy — Winter Cohort (First Edition)
// Dates: Jan 5 → Mar 6, 2026 | 8 weeks | $500 | Capped at 50 participants
// Sessions: Every Wednesday night
// TailwindCSS styling. No external deps required.

export default function AnoteAIAcademy() {
  // Simple capacity placeholder (replace from API if you want live numbers)
  const seatsCap = 50;
  const seatsRemaining = 10; // TODO: fetch from your API

  // Syllabus content (inline accordion; no modal)
  const weeks = [
    {
      title: "Week 1 — Foundations & Setup (Wed, Jan 7)",
      bullets: [
        "AI landscape for the enterprise (capabilities, risks, ROI)",
        "Tooling setup: secure accounts, approved models, policy check",
        "Deliverable: Personal AI learning plan + access checklist",
      ],
      talk: "Kickoff keynote + NYC optional meetup (welcome)",
    },
    {
      title: "Week 2 — Prompting & Task Design (Wed, Jan 14)",
      bullets: [
        "Prompt patterns for reliability (CoT, ReAct, critique)",
        "Templates for daily workflows (summaries, emails, briefs)",
        "Deliverable: 3 prompt templates mapped to your role",
      ],
      talk: "Curated Speaker: Prompt engineering in the enterprise",
    },
    {
      title: "Week 3 — Data Privacy & Governance (Wed, Jan 21)",
      bullets: [
        "PII handling, redaction, policy‑compliant usage",
        "Choosing SaaS vs. private models; approval workflows",
        "Deliverable: AI usage SOP draft for your team",
      ],
      talk: "Curated Speaker: Legal/Compliance best practices",
    },
    {
      title: "Week 4 — Automations & Agents (No‑/Low‑Code) (Wed, Jan 28)",
      bullets: [
        "Automate repetitive tasks with orchestrations",
        "Connectors: docs, email, spreadsheets, ticketing",
        "Deliverable: 1 working automation in your environment",
      ],
      talk: "Curated Speaker: Real automations that drive ROI",
    },
    {
      title: "Week 5 — Retrieval & Knowledge (RAG) (Wed, Feb 4)",
      bullets: [
        "Organizing knowledge bases for accuracy",
        "Chunking, embeddings, evaluation basics",
        "Deliverable: Mini knowledge bot on approved content",
      ],
      talk: "Curated Speaker: Production RAG patterns",
    },
    {
      title: "Week 6 — Evaluation & Safety (Wed, Feb 11)",
      bullets: [
        "Define success metrics; detect regressions",
        "Guardrails, monitoring, and human‑in‑the‑loop",
        "Deliverable: Eval checklist + dashboard starter",
      ],
      talk: "Curated Speaker: Measuring AI quality at scale",
    },
    {
      title: "Week 7 — Integration & Change Management (Wed, Feb 18)",
      bullets: [
        "Rollout plans, training, enablement",
        "Stakeholder mapping; risk/issue logs",
        "Deliverable: Team rollout plan (v1)",
      ],
      talk: "Curated Speaker: Leading AI programs",
    },
    {
      title: "Week 8 — The Future of AI (Wed, Feb 25)",
      bullets: [
        "Where AI is headed: trends to watch",
        "Automation, agents, and beyond",
        "Deliverable: Personal AI roadmap for next 6 months",
      ],
      talk: "Curated Speaker: Future trends in AI",
    },
    {
      title: "Week 9 — Showcase & Next Steps (Wed, Mar 4)",
      bullets: [
        "Capstone demos; feedback loop",
        "Career pathways & continued learning",
        "Deliverable: Capstone + personal development roadmap",
      ],
      talk: "NYC optional graduation event (celebration)",
    },
  ];


  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* BACKGROUND */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />
      <div className="absolute inset-0 opacity-60" style={{background:"linear-gradient(180deg, rgba(17,24,39,0.6) 0%, rgba(17,24,39,0.95) 60%, #0a0f1f 100%)"}} />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-16">
        {/* HERO */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white rounded-full px-3 py-1 text-xs tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DEFE47]" />
            Winter Cohort · Jan 5 → Mar 6, 2026 · Wednesdays · First Edition
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Anote AI Academy</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            An 8‑week, beginner‑friendly program for enterprise AI leaders. Get a dedicated coach, weekly expert talks, and a practical AI roadmap you can ship at work.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm max-w-3xl mx-auto">
            {[
              ["$500", "One‑time Fee"],
              ["2", "In Person Meetups"],
              ["7 PM EST", "every Wednesday"],
              ["1:1", "AI Coach"],
            ].map(([title, sub]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-white/90 font-medium text-lg">{title}</div>
                <div className="text-white/50 text-xs">{sub}</div>
              </div>
            ))}
          </div>
          {/* Single CTA — the only one on the page */}
          <a
            href="#academy-form"
            className="mt-7 inline-flex rounded-2xl px-6 py-3 bg-[#DEFE47] text-black font-semibold shadow hover:shadow-lg hover:opacity-90 transition"
          >
            Register interest
          </a>
          <div className="mt-4 text-sm text-gray-300">
            Seats remaining: <span className="text-[#DEFE47] font-semibold">{seatsRemaining}</span> / {seatsCap}
          </div>
        </header>

        {/* SESSION TIMELINE */}
        {/* <section className="mt-12"> */}
          {/* <h2 className="text-xl font-semibold text-white/90">Schedule</h2>
          <p className="text-white/60 text-sm">Every Wednesday evening · Jan 7 – Feb 25 (ET)</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sessionDates.map((d) => (
              <div key={d.date} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
                <span className="font-medium text-white">{d.label}</span>
                <span className="mx-2 text-white/40">•</span>
                <span>{d.date}</span>
              </div>
            ))}
          </div> */}
                      {/* <div className="px-5 py-4">
              <div className="font-medium">Coaching & Community</div>
              <ul className="mt-2 list-disc list-inside text-white/90 space-y-1">
                <li>Every participant is paired with a dedicated coach for 1:1 guidance.</li>
                <li>Weekly cohort call featuring a curated speaker and live Q&A.</li>
                <li>Optional in‑person NYC meetup in Week 1 (kickoff) and Week 8 (graduation).</li>
              </ul>
            </div> */}
        {/* </section> */}

        {/* FEATURES */}
        <section className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Dedicated 1:1 Coaching",
              body: "Every participant is paired with a dedicated AI coach for 1 on 1 guidance and mentorship.",
            },
            {
              title: "Weekly Expert Talks",
              body: "Weekly cohort call featuring a curated speaker and live Q&A to go from theory to practice.",
            },
            {
              title: "Hybrid Community",
              body: "Optional in‑person NYC meetup in Week 1 (kickoff) and Week 9 (graduation) to network and celebrate.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-semibold">{f.title}</div>
              <div className="mt-2 text-white/70 text-sm">{f.body}</div>
            </div>
          ))}
        </section>

        {/* SYLLABUS — single inline accordion */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white/90">Weekly Syllabus and Talks</h2>
          <div className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {weeks.map((w, i) => (
              <details key={i} className="group">
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between">
                  <span className="font-medium">{w.title}</span>
                  <span className="text-white/40 group-open:rotate-45 transition">＋</span>
                </summary>
                <div className="px-5 pb-4">
                  <ul className="list-disc list-inside text-white/90 space-y-1">
                    {w.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-2 text-sm text-white/60">{w.talk}</div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* REGISTRATION FORM (Google Apps Script) */}
        <AcademyRegistrationForm />
      </div>

      {/* FOOTER STRIP */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-white/60">
        Anote AI Academy · Winter Cohort (First Edition) · Jan 5 → Mar 6, 2026 · $500 · Capped at 50 · Sessions every Wednesday night
      </div>
    </section>
  );
}

// ----- Registration Form (Apps Script target) -----
function AcademyRegistrationForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email_address: "",
    linkedin_url: "",
    event_sheet: "Anote AI Academy Winter 2026",
    event_title: "Anote AI Academy — Winter Cohort (First Edition)",
    event_date: "Wednesdays, Jan 5 – Mar 6, 2026",
    event_time: "Evening (ET)",
    event_dateTimeStart: "2026-01-07T19:00:00-05:00", // first Wed placeholder
    event_dateTimeEnd: "2026-03-04T21:00:00-05:00",   // last Wed placeholder
    event_location: "Hybrid (Virtual + NYC kickoff/graduation)",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // TODO: replace with your Academy Sheet endpoint
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbygdbgHUNF-eSIW75nHR4MkQiCXheujnDUrXxZgDhxRsxZFSPggX4rNfoJ2M1fyQhpUAA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionError("");
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
      }, 500);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsLoading(false);
      setSubmissionError("Failed to submit. Please check your connection.");
    }
  };

  return (
    <section id="academy-form" className="relative text-white mt-12">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl">
          <h3 className="text-2xl font-semibold">Register for the AI Academy</h3>
          <p className="text-sm text-white/70 mt-1">Wednesdays · Jan 5 – Mar 6, 2026 · $500</p>

          {isLoading ? (
            <div className="text-center py-12">
              <h4 className="text-2xl font-bold text-blue-300 mb-2">⏳ Submitting…</h4>
              <p className="text-white/70">Please wait while we confirm your registration.</p>
            </div>
          ) : !submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} required />
              <Field label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} required />
              <Field label="Job Title" name="job_title" value={formData.job_title} onChange={handleChange} required />
              <Field label="Company Name" name="company_name" value={formData.company_name} onChange={handleChange} required />
              <Field label="Email Address" name="email_address" type="email" value={formData.email_address} onChange={handleChange} required />
              <Field label="LinkedIn URL" name="linkedin_url" type="url" value={formData.linkedin_url} onChange={handleChange} required />

              {/* hidden fields */}
              <input type="hidden" name="event_sheet" value={formData.event_sheet} />
              <input type="hidden" name="event_title" value={formData.event_title} />
              <input type="hidden" name="event_date" value={formData.event_date} />
              <input type="hidden" name="event_time" value={formData.event_time} />
              <input type="hidden" name="event_dateTimeStart" value={formData.event_dateTimeStart} />
              <input type="hidden" name="event_dateTimeEnd" value={formData.event_dateTimeEnd} />
              <input type="hidden" name="event_location" value={formData.event_location} />

              <div className="md:col-span-2 mt-2">
                <button type="submit" className="w-full bg-[#DEFE47] text-black font-semibold py-3 rounded-xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-white/30">
                  Register Now
                </button>
                <p className="text-center mt-3 text-sm text-white/70">
                  Questions? <a href="mailto:nvidra@anote.ai" className="text-[#DEFE47] underline">nvidra@anote.ai</a>
                </p>
                {submissionError && <p className="mt-3 text-center text-red-400">{submissionError}</p>}
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <h4 className="text-3xl font-bold text-green-400 mb-3">✅ Success!</h4>
              <p className="text-lg mb-2">You’re registered for <b>{formData.event_title}</b></p>
              <p className="text-lg mb-2">📅 {formData.event_date} — {formData.event_time}</p>
              <p className="text-md text-white/70">You should receive a confirmation email shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ----- Small UI helpers -----
function Field({ label, name, value, onChange, type = "text", required }) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-1 text-white/80">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 rounded-xl bg-[#0b1121] text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#28B2FB]"
      />
    </div>
  );
}