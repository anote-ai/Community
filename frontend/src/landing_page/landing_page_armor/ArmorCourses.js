import React from "react";

// Curated AI Learning Resources
const resources = [
  // Foundational AI & ML Courses
  {
    name: "Andrew Ng – AI for Everyone",
    url: "https://www.coursera.org/learn/ai-for-everyone",
    type: "Foundations",
    icon: "🎓",
  },
  {
    name: "Fast.ai – Practical Deep Learning for Coders",
    url: "https://course.fast.ai",
    type: "Deep Learning",
    icon: "🧠",
  },
  {
    name: "Stanford CS224N – Natural Language Processing",
    url: "http://web.stanford.edu/class/cs224n/",
    type: "NLP",
    icon: "🔤",
  },
  {
    name: "MIT – Introduction to Deep Learning",
    url: "https://introtodeeplearning.com/",
    type: "Deep Learning",
    icon: "📊",
  },
  {
    name: "Harvard CS50 – Computer Science Intro to AI",
    url: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
    type: "Computer Science",
    icon: "💻",
  },

  // Generative AI / LLMs / Prompt Engineering
  {
    name: "Hugging Face – LLM Course",
    url: "https://huggingface.co/learn/llm-course/chapter1/1",
    type: "LLMs",
    icon: "🤗",
  },
  {
    name: "Hugging Face – Agents Course",
    url: "https://huggingface.co/learn/agents-course/en/unit1/introduction",
    type: "Agents",
    icon: "🤖",
  },
  {
    name: "Prompt Engineering Guide",
    url: "https://www.promptingguide.ai/",
    type: "Prompting",
    icon: "✏️",
  },

  // Anote Docs (Product / SDK)
  {
    name: "Anote Documentation",
    url: "https://docs.anote.ai",
    type: "Docs",
    icon: "📄",
  },
];

export default function ArmorCourses() {
  return (
    <section className="w-full bg-gray-900 min-h-screen py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* headline ---------------------------------------------------- */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          AI Learning Hub
        </h1>

        {/* card grid --------------------------------------------------- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-gray-800/80 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500 transition"
            >
              {/* icon */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gray-900 text-3xl">
                {r.icon}
              </div>

              {/* text */}
              <h2 className="text-lg font-semibold text-white text-center mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                {r.name}
              </h2>
              <p className="text-sm text-gray-400 text-center mb-4 line-clamp-3">
                {r.description || "Explore this resource to deepen your AI skills."}
              </p>

              {/* footer */}
              <div className="mt-auto flex items-center justify-between">
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400">
                  {r.type}
                </span>
                <span className="text-blue-400 font-semibold group-hover:underline">
                  Visit ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
