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
  communityAcademyOverviewPath
} from "../../constants/RouteConstants";
import ArmorHubs from "./ArmorHubs";

// Palette tuned for dark bg (#141414 / bg-gray-900)
const PALETTE = [
    "#A7D8FF", // Pale sky blue
];

export default function ArmorMain() {
  const sections = [
    { title: "Academy", path: communityAcademyPath, blurb: "Explore our comprehensive AI academy learning programs." },
    // { title: "Academy Overview", path: communityAcademyOverviewPath, blurb: "Join Anote's AI Academy for enterprise AI leaders." },
    { title: "Events", path: communityEventsPath, blurb: "Find upcoming meet‑ups, hackathons, and workshops in your city and online." },
    { title: "Members", path: communityMembersPath, blurb: "Browse and connect with AI builders, researchers, and operators." },
    { title: "Courses", path: communityResourcesPath, blurb: "Self‑paced learning tracks, open‑source tools, and curated reading lists." },
    { title: "Content", path: communityContentPath, blurb: "Technical blogs, slide decks, and demo videos from community experts." },
    { title: "Agents", path: communityAgentRegistryPath, blurb: "Community based domain specific agents gallery for daily use cases." },
    { title: "Coffee Chats", path: communityCoffeeChatsPath, blurb: "Schedule 1‑on‑1s with Anote alumni working in your dream roles." },
    { title: "Job Referrals", path: communityReferralsPath, blurb: "Warm intros to hiring managers and recruiters inside top AI orgs." },
    // { title: "Job Board", path: communityJobsPath, blurb: "Curated openings in applied AI, ML research, and data science—updated daily." },
    { title: "News", path: communityNewsPath, blurb: "Stay up to date with the latest AI news and announcements." },
    // { title: "Local Hubs", path: communityRegionalHubsPath, blurb: "Find regional organizers and roadmap milestones across ARMOR." },
  ];

  // Gradient inline style generator
  const gradientStyle = (i) => {
    const c1 = PALETTE[i % PALETTE.length];
    const c2 = PALETTE[(i + 1) % PALETTE.length];
    return { backgroundImage: `linear-gradient(135deg, ${c1}, ${c2})` };
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen space-y-12 pb-24">
      {/* ─── Hero / Intro ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-6 text-center space-y-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Anote's AI Community Portal
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A nationwide, community‑driven initiative accelerating human‑centered AI through events, open resources, and real‑world collaboration.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:nvidra@anote.ai?subject=Anote%20Community%20Lead" className="px-8 py-4 rounded-md bg-[#defe47] text-black font-bold hover:opacity-90 transition ring-2 ring-[#defe47]/20">Become a Community Lead</a>
          <a href="mailto:nvidra@anote.ai?subject=Anote%20Sponsorship" className="px-8 py-4 rounded-md bg-gray-800 border border-gray-600 hover:bg-gray-700 transition font-semibold">Become a Sponsor</a>
        </div> */}
      </section>

      {/* ─── Section Grid ─────────────────────────────────────── */}
      {/* <section className="mx-auto px-6" id="sections">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s, i) => (
            <Link key={s.title} to={s.path} style={gradientStyle(i)}
              className="relative overflow-hidden rounded-3xl p-7 min-h-[11rem] flex flex-col justify-end shadow-xl transition-transform hover:scale-[1.03] hover:shadow-2xl">
              <h3 className="text-2xl text-[#111827] font-bold drop-shadow-sm mb-1">{s.title}</h3>
              <p className="text-sm text-[#111827] opacity-90 leading-snug max-w-xs">{s.blurb}</p>
              <span className="absolute inset-0" aria-hidden></span>
            </Link>
          ))}
        </div>
      </section> */}
      {/* ─── Section Grid ─────────────────────────────────────── */}
<section className="mx-auto px-6" id="sections">
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {sections.map((s, i) => (
      <Link
        key={s.title}
        to={s.path}
        style={gradientStyle(i)}
        /* fixed height + top-to-bottom layout */
        className="relative overflow-hidden rounded-3xl p-7 flex flex-col justify-between shadow-xl transition-transform hover:scale-[1.03] hover:shadow-2xl"
      >
        <h3 className="text-2xl font-bold text-[#111827]">{s.title}</h3>

        {/* Spacer keeps blurb near the bottom, but consistent across cards */}
        <p className="text-sm text-[#111827] leading-snug max-w-xs">
          {s.blurb}
        </p>

        {/* invisible overlay for clickable area */}
        <span className="absolute inset-0" aria-hidden />
      </Link>
    ))}
  </div>
</section>


    </div>
  );
}
