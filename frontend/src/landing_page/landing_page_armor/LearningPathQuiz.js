import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  communityAcademyPath,
  communityEventsPath,
  communityAgentRegistryPath,
  communityMembersPath,
  communityReferralsPath,
  communityCoffeeChatsPath,
  communityResourcesPath,
} from "../../constants/RouteConstants";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";

const questions = [
  {
    id: "background",
    text: "What's your background?",
    options: [
      { id: "beginner", label: "New to AI" },
      { id: "technical", label: "Technical / Developer" },
      { id: "business", label: "Business / Operator" },
    ],
  },
  {
    id: "goal",
    text: "What's your main goal?",
    options: [
      { id: "build", label: "Build AI apps" },
      { id: "learn", label: "Learn AI concepts" },
      { id: "network", label: "Grow my network" },
      { id: "job", label: "Find a job in AI" },
    ],
  },
  {
    id: "time",
    text: "How much time per week?",
    options: [
      { id: "light", label: "1–2 hours" },
      { id: "medium", label: "3–5 hours" },
      { id: "full", label: "Full-time learner" },
    ],
  },
];

function getRecommendations(answers) {
  const recs = [];
  const { background, goal } = answers;

  if (goal === "build" || background === "technical") {
    recs.push({ label: "AI Academy — Agents Module", path: communityAcademyPath });
    recs.push({ label: "Agents Gallery", path: communityAgentRegistryPath });
  }
  if (goal === "learn" || background === "beginner") {
    recs.push({ label: "AI Academy — Start Here", path: communityAcademyPath });
    recs.push({ label: "Courses & Resources", path: communityResourcesPath });
  }
  if (goal === "network" || background === "business") {
    recs.push({ label: "Upcoming Events", path: communityEventsPath });
    recs.push({ label: "Community Members", path: communityMembersPath });
  }
  if (goal === "job") {
    recs.push({ label: "Job Referrals", path: communityReferralsPath });
    recs.push({ label: "Book a Coffee Chat", path: communityCoffeeChatsPath });
  }

  const seen = new Set();
  return recs
    .filter((r) => {
      if (seen.has(r.path)) return false;
      seen.add(r.path);
      return true;
    })
    .slice(0, 4);
}

export default function LearningPathQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("quizSeen");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 4000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("quizSeen", "true");
    setOpen(false);
  };

  const answer = (questionId, optionId) => {
    const next = { ...answers, [questionId]: optionId };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("quizSeen", "true");
      setDone(true);
    }
  };

  if (!open) return null;

  const q = questions[step];
  const recs = done ? getRecommendations(answers) : [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-2xl"
        style={{ background: "#0f172a" }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl leading-none"
        >
          ✕
        </button>

        {!done ? (
          <>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: ACCENT_BLUE }}
            >
              Step {step + 1} of {questions.length}
            </p>
            <h2 className="text-xl font-bold text-white mb-6">{q.text}</h2>
            <div className="space-y-3">
              {q.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => answer(q.id, opt.id)}
                  className="w-full text-left px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:border-white/20 transition text-sm font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-white mb-2">
              Your personalized path
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Start here to get the most out of the community.
            </p>
            <div className="space-y-3">
              {recs.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  onClick={dismiss}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition"
                >
                  {r.label}
                  <span style={{ color: ACCENT_YELLOW }}>→</span>
                </Link>
              ))}
            </div>
            <button
              onClick={dismiss}
              className="mt-5 text-sm text-gray-500 hover:text-gray-300 transition"
            >
              Explore on my own →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
