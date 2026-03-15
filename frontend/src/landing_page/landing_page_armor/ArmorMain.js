import { Link } from "react-router-dom";
import {
  communityEventsPath,
  communityMembersPath,
  communityJobsPath,
  communityResourcesPath,
  communityContentPath,
  communityNewsPath,
  communityAgentRegistryPath,
  communityCoffeeChatsPath,
  communityReferralsPath,
  communityRegionalHubsPath,
  communityAcademyPath,
  communityAcademyOverviewPath,
} from "../../constants/RouteConstants";
import ArmorHubs from "./ArmorHubs";

const ACCENT_YELLOW = "#defe47";
const ACCENT_BLUE = "#28b2fb";
const BG_DARK = "#111827";

export default function ArmorMain() {
  const sections = [
    {
      title: "Academy",
      path: communityAcademyPath,
      blurb: "Explore hands-on AI learning programs, lectures, projects, and community-driven education.",
      // featured: true,
    },
    {
      title: "Events",
      path: communityEventsPath,
      blurb: "Find upcoming meetups, hackathons, workshops, and gatherings online and in person.",
    },
    {
      title: "Members",
      path: communityMembersPath,
      blurb: "Browse and connect with AI builders, researchers, founders, and operators.",
    },
    {
      title: "Courses",
      path: communityResourcesPath,
      blurb: "Access self-paced learning tracks, open-source tools, and curated technical resources.",
    },
    {
      title: "Content",
      path: communityContentPath,
      blurb: "Read blogs, explore decks, and watch demos from community experts and contributors.",
    },
    {
      title: "Agents",
      path: communityAgentRegistryPath,
      blurb: "Discover domain-specific community agents built for real workflows and practical use cases.",
    },
    {
      title: "Coffee Chats",
      path: communityCoffeeChatsPath,
      blurb: "Book 1-on-1 conversations with Anote alumni and community members in roles you admire.",
    },
    {
      title: "Job Referrals",
      path: communityReferralsPath,
      blurb: "Get warm introductions to recruiters, hiring teams, and AI organizations.",
    },
    {
      title: "News",
      path: communityNewsPath,
      blurb: "Stay current with major updates, launches, and trends across the AI ecosystem.",
    },
  ];

  const cardStyles = (featured = false) =>
    featured
      ? {
          background:
            "linear-gradient(135deg, rgba(40,178,251,0.16) 0%, rgba(222,254,71,0.18) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
        }
      : {
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        };

  return (
    <div
      className="min-h-screen text-white pb-24 overflow-hidden"
      style={{ backgroundColor: BG_DARK }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: ACCENT_BLUE }}
        />
        <div
          className="absolute top-32 right-0 h-80 w-80 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: ACCENT_YELLOW }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: ACCENT_BLUE }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-10 sm:pt-16">
  <div
    className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-14"
    style={{
      background:
        "linear-gradient(135deg, rgba(40,178,251,0.08) 0%, rgba(17,24,39,0.98) 35%, rgba(17,24,39,0.98) 70%, rgba(222,254,71,0.08) 100%)",
    }}
  >
    {/* subtle accent blur */}
    <div
      className="absolute top-0 left-0 h-40 w-40 rounded-full blur-3xl opacity-20"
      style={{ backgroundColor: ACCENT_BLUE }}
    />
    <div
      className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl opacity-10"
      style={{ backgroundColor: ACCENT_YELLOW }}
    />

    <div className="relative max-w-4xl">
      {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-200">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: ACCENT_YELLOW }}
        />
        Human-Centered AI Community
      </div> */}

      <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
        Anote’s AI Community Portal
      </h1>

      <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
        A place to learn, meet ambitious people, explore opportunities, and
        build with others across the Anote community.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to={communityEventsPath}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: ACCENT_YELLOW }}
          >
            Explore AI Events
          </Link>

        <Link
          to={communityAcademyPath}
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
        >
          Visit the AI Academy
        </Link>
      </div>
    </div>
  </div>
</section>
        {/* <section className="max-w-7xl mx-auto px-6 pt-10 sm:pt-16">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-14 shadow-2xl"
            // style={{
            //   background:
            //     "linear-gradient(135deg, rgba(40,178,251,0.10) 0%, rgba(17,24,39,0.96) 45%, rgba(222,254,71,0.08) 100%)",
            // }}
          >
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-200 backdrop-blur">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                />
                Human-Centered AI Community
              </div>

              <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Anote’s{" "}
                AI Community Portal
              </h1>

              <p className="mt-5 max-w-3xl text-base sm:text-xl text-gray-300 leading-relaxed">
                A home for ambitious builders, researchers, and operators
                exploring AI through education, events, collaboration, and
                real world projects.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#sections"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                  style={{ backgroundColor: ACCENT_YELLOW }}
                >
                  Explore the Portal
                </a>

                <Link
                  to={communityAcademyPath}
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  Visit the AI Academy
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Section header */}
        <section className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16" id="sections">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: ACCENT_BLUE }}
              >
                Explore
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Everything in one place
              </h2>
            </div>
            <div className="hidden sm:block text-sm text-gray-400">
              Education, community, resources, and opportunity
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.title}
                to={section.path}
                className={`group relative overflow-hidden rounded-[1.75rem] p-6 sm:p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  section.featured ? "xl:col-span-2" : ""
                }`}
                style={cardStyles(section.featured)}
              >
                {/* subtle top accent line */}
                <div
                  className="absolute left-0 top-0 h-1 w-full opacity-90"
                  style={{
                    background: section.featured
                      ? `linear-gradient(90deg, ${ACCENT_BLUE}, ${ACCENT_YELLOW})`
                      : `linear-gradient(90deg, ${ACCENT_BLUE}, transparent)`,
                  }}
                />

                <div className="relative flex h-full min-h-[220px] flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {section.title}
                      </h3>

                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition group-hover:translate-x-1"
                        style={{
                          color: section.featured ? ACCENT_YELLOW : ACCENT_BLUE,
                        }}
                      >
                        →
                      </div>
                    </div>

                    <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-gray-300">
                      {section.blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: section.featured ? ACCENT_YELLOW : "white",
                      }}
                    >
                      Open section
                    </span>

                    {section.featured && (
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold text-black"
                        style={{ backgroundColor: ACCENT_YELLOW }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}