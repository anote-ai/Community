export default function AnoteAIAcademy() {
  const lectures = [
    {
      number: 1,
      presenter: "Hadas Frank",
      role: "AI educator and researcher",
      topic: "Smarter Research with AI — Practical AI Demos",
      youtube: "https://www.youtube.com/watch?v=uv2N7wMwKvU",
      description:
        "Hadas Frank explores how AI can enhance academic and professional research workflows without replacing critical thinking or human judgment. The session covers where applied AI creates real value in research, how to find and explore source material more efficiently, and how to use AI to summarize and synthesize information responsibly. Throughout the lecture, Hadas emphasizes that strong research still depends on rigorous thinking, careful verification, and meaningful human oversight.",
      takeaways: [
        "How to use AI to accelerate research workflows while preserving rigor, critical thinking, and academic integrity.",
        "Practical techniques for discovering, analyzing, and summarizing research materials using modern AI tools.",
        "Best practices for responsible and ethical AI use, including transparency, accuracy, and human-in-the-loop decision-making.",
      ],
      extraLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hadas-frank-ai1/",
      },
    ]
    },
    {
      number: 2,
      presenter: "Rajshri Jain",
      role: "AI engineer and synthetic data practitioner",
      topic: "Synthetic Data Generation and Model Evaluation",
      youtube: "https://www.youtube.com/watch?v=uN6SMbVitNQ",
      description:
        "Rajshri Jain walks through the full lifecycle of synthetic data in modern AI systems, from generation techniques to rigorous evaluation frameworks. The lecture explains why synthetic data is increasingly important for privacy-preserving learning, data augmentation, and testing rare or difficult scenarios. Rajshri also shows how teams can evaluate synthetic datasets for fidelity, diversity, bias, and downstream model utility so that synthetic data improves model quality rather than creating hidden risk.",
      takeaways: [
        "When and why to use synthetic data for privacy, data scarcity, and coverage of rare or critical edge cases.",
        "Practical approaches for generating synthetic datasets using generative, rule-based, and hybrid methods.",
        "How to evaluate synthetic data using metrics that capture fidelity, diversity, bias, and impact on downstream model performance.",
      ],
      extraLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rajshrij/",
      },
    ]
    },
    {
      number: 3,
      presenter: "Jiquan Ngiam",
      role: "Founder and CEO, MintMCP",
      topic: "How I Run My Life (and Business) on AI Agents",
      youtube: "https://www.youtube.com/watch?v=5T6m7HRCqLQ",
      description:
        "Jiquan Ngiam shares how he uses AI agents to manage both personal and professional workflows. Drawing from his background at Google Brain, Stanford, and Coursera, he focuses on practical agentic systems rather than research-only ideas. The lecture covers a useful recipe for building effective agents through a runtime harness, persistent memory, and secure data access, along with realworld examples such as task tracking, personal knowledge management, health workflows, and business operations.",
      takeaways: [
        "A practical framework for building useful AI agents using a runtime harness, persistent memory, and data access.",
        "Implementation patterns you can use today, including instruction files, Git-based memory, and MCPs for tool and data integration.",
        "Real-world examples of agents managing health, tasks, relationships, and business workflows—plus key security considerations when giving agents access to sensitive data.",
      ],
      extraLinks: [
      {
        label: "MintMCP",
        href: "https://mintmcp.com",
      },
      {
        label: "Life System Setup GitHub Repo",
        href: "https://github.com/jngiam/life-system-setup",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=n0pk_jEAAAAJ&hl=en",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jngiam/",
      },
    ]
    },
    {
      number: 4,
      presenter: "Chuxin Liu",
      role: "Vice President, J.P. Morgan Chase",
      topic: "Vibe Coding — Practical Applications of AI",
      youtube: "https://www.youtube.com/watch?v=rstBRsu3U14",
      description:
        "Chuxin Liu walks through practical vibe coding techniques for building real-world AI applications quickly and effectively. The lecture focuses on how developers can go from idea to prototype through conversational development workflows, iterative prompting, and tight feedback loops with AI tools. Chuxin shares concrete advice on structuring prompts, debugging with AI, and turning rough concepts into working demos that can evolve into useful products.",
      takeaways: [
        "How to use vibe coding workflows to rapidly prototype and iterate on AI-powered applications.",
        "Practical prompting and debugging techniques for building features with AI as a development partner.",
        "Strategies for moving from rough ideas to functional demos using fast feedback loops and tool-assisted coding.",
      ],
      extraLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/chuxin-liu/",
      }]
    },
    {
      number: 5,
      presenter: "Shafik Quoraishee",
      role: "Machine learning researcher at The New York Times",
      topic: "Foundations & Architectures of Multi-Modal Machine Learning",
      youtube: "https://www.youtube.com/watch?v=PH1PzuG6djs",
      description:
        "Shafik provides a technical deep dive into multi-modal machine learning, focusing on the architectures that power image understanding, video generation, and cross-modal reasoning. The lecture helps participants understand how systems combine text, image, and video inputs in practice, and why multimodal design is becoming central to modern AI products. The session is especially useful for students who want a clearer systems-level view of how next-generation models are actually built.",
      takeaways: [
        "Understanding the core architectures that enable multi-modal AI systems.",
        "How image, text, and video modalities are combined in modern machine learning models.",
        "Practical foundations for reasoning about real-world applications of multimodal AI.",
      ],
      extraLinks: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/shafik-quoraishee/",
        },
      ]
    },
    {
      number: 6,
      presenter: "Amrutha Gujjar",
      role: "Founder, Waldium",
      topic: "Waldium and Agentic AI",
      youtube: "https://www.youtube.com/watch?v=9o_lrZIDixg",
      description:
        "Amrutha Gujjar introduces Waldium, an AI-powered Agentic CMS designed to act like a real content teammate instead of a one-off generation tool. The lecture shows how modern AI systems can become context-aware collaborators that research, draft, edit, and publish with increasing autonomy. Amrutha also covers practical architecture choices including knowledge base onboarding, multi-agent workflows, sandboxed execution, structured outputs, streaming UX, and integrations such as Slack bots and MCP.",
      takeaways: [
        "Agentic AI systems can act as true collaborators by learning company context and operating autonomously.",
        "A modern Agentic CMS combines research, drafting, editing, and publishing into a single continuous workflow.",
        "Robust AI products require strong foundations in structured outputs, sandboxed execution, and thoughtful user experience design.",
      ],
      extraLinks: [
  {
    label: "Waldium",
    href: "https://waldium.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amruthagujjar/",
  },
]
    },
    {
      number: 7,
      presenter: "Spurthi Setty",
      role: "AI researcher and engineer",
      topic: "RAG and Fine Tuning",
      youtube: "https://www.youtube.com/watch?v=h6QA2VVB1gE",
      description:
        "Spurthi Setty provides a deep dive into Retrieval-Augmented Generation and fine-tuning as two core building blocks for production-ready AI systems. The lecture explains how RAG connects language models to external knowledge sources to improve factual grounding and reduce hallucinations, while fine-tuning is used to shape tone, behavior, and output format. Spurthi also covers chunking, embeddings, hybrid search, re-ranking, vector databases, evaluation with Ragas, and the move toward more autonomous agentic RAG systems.",
      takeaways: [
        "RAG is the default architecture for connecting LLMs to external knowledge, while fine-tuning is best used for behavior, tone, and structured output control.",
        "Production-ready RAG systems depend heavily on high-quality chunking, embeddings, retrieval methods, and continuous evaluation.",
        "Agentic RAG represents the next evolution, enabling autonomous reasoning loops, tool selection, and multi-step problem solving.",
      ],
      extraLinks: [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/spurthi-setty/",
  },
  {
    label: "Website",
    href: "https://spurthi.ksetty.com/",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=VuU1MR8AAAAJ&hl=en",
  }
]
    },
    {
      number: 8,
      presenter: "Katherine Jijo",
      role: "AI researcher and systems thinker",
      topic: "Autonomous Agents and System-Centric AI",
      youtube: "https://www.youtube.com/watch?v=moPa_evDDIM",
      description:
        "Katherine Jijo presents a foundational perspective on autonomous agents, framing them as a shift from model-centric AI to system-centric AI. Instead of focusing only on model accuracy, the lecture emphasizes end-to-end systems that prioritize action, execution, reliability, and measurable outcomes. Katherine explores how multi-agent systems coordinate through specialized roles, structured communication, and orchestration, and why continuous experimentation is essential to deploying agentic workflows successfully.",
      takeaways: [
        "Autonomous agents represent a shift from model-level optimization to system-level design focused on action and execution.",
        "Multi-agent architectures require specialized agents, structured communication, and an orchestrator to coordinate complex workflows.",
        "Evaluation of agentic systems should focus on system metrics such as task completion, reliability, and failure recovery rather than only model accuracy.",
        "Continuous experimentation and applied research are critical for integrating agentic techniques into production environments.",
        "Skills developed in human-centered AI and experimentation transfer directly to real-world data science and product roles, especially in agentic system development.",
      ],
      extraLinks: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/katherine-jijo-a1b231242/",
      },
]
    },
    {
      number: 9,
      presenter: "Natan Vidra",
      role: "Founder and CEO, Anote",
      topic: "Human-Centered AI and Building Practical AI Systems",
      youtube: "https://www.youtube.com/watch?v=PFwxIIWR1iM",
      description:
        "In the final lecture of the AI Academy series, Natan Vidra presents an overview of Human-Centered AI and how it informs the design of practical, reliable AI systems. The lecture focuses on the gap between powerful foundation models and real-world deployment, explaining why strong workflows, evaluation, structured data, and human expertise are required to bridge that gap. It also highlights Anote’s ecosystem, including the Human-Centered AI platform, Autonomous Intelligence framework, Model Leaderboard, and Synthetic Data API, as examples of how these ideas become real products.",
      takeaways: [
        "Human-Centered AI integrates human expertise into the AI lifecycle to improve model reliability, evaluation, and performance in real-world settings.",
        "Building practical AI systems requires more than powerful models; it requires high-quality data, evaluation frameworks, and well-designed workflows.",
        "Tools such as multi-agent systems, model benchmarking platforms, and synthetic data generation can help bridge the gap between cutting-edge AI research and real-world applications.",
      ],
      extraLinks: [
  {
    label: "Anote",
    href: "https://anote.ai",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=W3kg9sQAAAAJ",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/natanvidra/",
  },
]
    },
  ];
const studentPresentations = [
  {
    title: "Fellow Presentation 1",
    presenter: "Aadi Bery",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 2",
    presenter: "Lucy Manalang",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 3",
    presenter: "Yidian Chen",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 4",
    presenter: "Ebuka Uzuoma",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 5",
    presenter: "Amelie Norris",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 6",
    presenter: "Caleb Dickson",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 7",
    presenter: "Aisha Ahmad",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 8",
    presenter: "Xingtai Huang",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 9",
    presenter: "Manish Kumbham",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 10",
    presenter: "Saumya Singh",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 11",
    presenter: "Ashwin Dhanasamy",
    youtube: "#",
  },
  {
    title: "Fellow Presentation 12",
    presenter: "Alina Kapanova",
    youtube: "#",
  },
];

  const highlights = [
  {
    title: "Dedicated 1:1 Coaching",
    body: "Every participant is paired with a dedicated AI coach for one-on-one guidance, feedback, and project mentorship throughout the program.",
  },
  {
    title: "Weekly Expert Talks",
    body: "Each week features a cohort call with a curated expert speaker and live Q&A, helping participants move from theory to real-world AI practice.",
  },
  {
    title: "Strong Community",
    body: "Participants join a broader network of students, fellows, and mentors interested in practical AI, research, and product development.",
  },
];

  const getYoutubeId = (url) => {
    if (!url) return "";
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#111827]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,178,251,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(222,254,71,0.12),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.04),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#28b2fb]/30 bg-[#28b2fb]/10 px-4 py-1.5 text-sm font-medium text-[#28b2fb]">
                Anote AI Academy
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A modern AI education program built around real systems, real builders, and real world application.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/75">
                Welcome to Anote’s AI Academy. The AI Academy represents a new paradigm in AI education by combining hands-on project work, community support, and direct exposure to how practical AI products are actually built. The AI Academy brings together selected individuals who are excited about building innovative AI solutions across research, evaluation, agents, multimodal systems, synthetic data, RAG, and Human-Centered AI.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#lectures"
                  className="rounded-2xl bg-[#defe47] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:translate-y-[-1px] hover:shadow-xl"
                >
                  Explore the Lecture Series
                </a>
                <a
                  href="#student-showcase"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Fellow Showcase
                </a>
              </div>
            </div>
          </div>
        </div>
            </section>

      {/* <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0f172a] p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
                      Academy Overview
                    </div>
                    <h2 className="mt-2 text-2xl font-semibold text-white">What makes this program different</h2>
                  </div>
                  <div className="rounded-xl border border-[#defe47]/30 bg-[#defe47]/10 px-3 py-1 text-xs font-medium text-[#defe47]">
                    Inaugural Cohort
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/72">
                  Anote AI Academy is designed to help ambitious students and builders understand not just what modern AI can do, but how effective AI systems are designed, evaluated, deployed, and improved in practice.
                </p>

                <div className="mt-6 grid gap-3">
                  {overviewPillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#28b2fb]" />
                      <div className="text-sm leading-6 text-white/80">{pillar}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://anote.ai/airesearchfellowship"
                  className="mt-6 inline-flex rounded-2xl border border-[#28b2fb]/30 bg-[#28b2fb]/10 px-5 py-3 text-sm font-semibold text-[#28b2fb] transition hover:bg-[#28b2fb]/15"
                >
                  Learn about the next cohort
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="border-b border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#defe47]">
              Why AI Academy
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built for people who want to create useful AI, not just talk about it.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              An beginner‑friendly program for enterprise AI leaders. Get a dedicated coach, weekly expert talks, and a practical AI roadmap you can ship at work. Participants are exposed to the ideas, tools and practices behind modern AI systems, while also seeing how those systems connect to real products and research.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#111827] p-6 shadow-lg"
              >
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#28b2fb]/10 text-lg font-semibold text-[#28b2fb]">
                  •
                </div> */}
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lectures" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#28b2fb]">
            Lecture Series
          </div>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Recorded lectures from leading builders and researchers</h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            The lecture series covers a broad set of practical AI topics, from research workflows and synthetic data to AI agents, multimodal architectures, RAG, evaluation, and Human-Centered AI. Each lecture below includes the full recording, a detailed description, and key takeaways.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {lectures.map((lecture) => (
            <article
              key={lecture.number}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a] shadow-2xl"
            >
              <div className="grid">
                <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${getYoutubeId(lecture.youtube)}`}
                      title={lecture.topic}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#defe47]/30 bg-[#defe47]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#defe47]">
                      Lecture {lecture.number}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                      {lecture.presenter}
                    </span>
                    {lecture.role ? (
                      <span className="rounded-full border border-[#28b2fb]/25 bg-[#28b2fb]/10 px-3 py-1 text-xs font-medium text-[#28b2fb]">
                        {lecture.role}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white">{lecture.topic}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">{lecture.description}</p>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
                      Key Takeaways
                    </div>
                    <ul className="mt-4 space-y-3">
                      {lecture.takeaways.map((takeaway) => (
                        <li key={takeaway} className="flex items-start gap-3 text-sm leading-7 text-white/78">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#28b2fb]" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={lecture.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-[#defe47] px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:translate-y-[-1px]"
                    >
                      Watch on YouTube
                    </a>
                    {lecture.extraLinks?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="student-showcase" className="border-y border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#defe47]">
              Fellow Showcase
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Fellow Presentations and final projects</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Here are some of the featured Fellow Presentations from the inaugural AI academy cohort. Each talk highlights the practical work, demos, and projects that fellows produced during the program, with a focus on real-world practical AI applications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {studentPresentations.map((presentation, index) => (
              <a
                key={presentation.title + index}
                href={presentation.youtube}
                className="group rounded-[1.75rem] border border-white/10 bg-[#111827] p-6 shadow-lg transition hover:-translate-y-1 hover:border-[#28b2fb]/35"
              >
                <div className="flex items-center justify-between">
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-white">{presentation.title}</h3>
                  <div className="mt-2 text-sm font-medium text-[#28b2fb]">{presentation.presenter}</div>
                  <div className="mt-1 text-sm text-white/55">{presentation.topic}</div>
                  <p className="mt-4 text-sm leading-7 text-white/70">{presentation.description}</p>
                </div>
                {/* <div className="mt-6 text-sm font-medium text-white/75 transition group-hover:text-[#defe47]">
                  Add video and details →
                </div> */}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#28b2fb]">
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Community, clarity, and momentum</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Testimonials can reinforce that the Academy is not only educational, but energizing and deeply practical. The placeholders below are ready to be replaced with real fellow and attendee quotes.
            </p>
          </div>

          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.quote + index}
                className="rounded-[1.75rem] border border-white/10 bg-[#0f172a] p-6 shadow-lg"
              >
                <div className="mb-4 text-3xl text-[#defe47]">“</div>
                <p className="text-lg leading-8 text-white/86">{testimonial.quote}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/55">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="border-t border-white/10 bg-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(40,178,251,0.12),rgba(222,254,71,0.08))] p-8 shadow-2xl lg:p-12">
            <div className="grid gap-8">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-[#defe47]">
                  Get Involved
                </div>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-white">
                  Ready to join the next cohort?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
                  The Anote AI Academy is an entry point into a broader community of ambitious builders, researchers, and students who want to work on meaningful AI systems. If you want to go deeper, apply to the Anote AI Research Fellowship and get involved in the next stage of the program.
                </p>
              </div>
              <div>
                <a
                  href="https://anote.ai/airesearchfellowship"
                  className="inline-flex rounded-2xl bg-[#defe47] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:translate-y-[-1px] hover:shadow-xl"
                >
                  Apply to the Anote AI Research Fellowship
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
