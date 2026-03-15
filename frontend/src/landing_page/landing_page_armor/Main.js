import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
    BrowserRouter,
} from "react-router-dom";
import {
    FaHome,
    FaCalendarAlt,
    FaUsers,
    FaNewspaper,
    FaGlobe,
    FaRobot,
    FaBriefcase,
    FaBook,
    FaUserCircle,
    FaHandshake,
    FaCoffee,
    FaLanguage,
} from "react-icons/fa";
import {
    communityHomePath,
    communityEventsPath,
    communityMembersPath,
    communityNewsPath,
    communityJobsPath,
    communityResourcesPath,
    communityContentPath,
    communityPartnershipsPath,
    uploadPath,
    communityCoffeeChatsPath,
    communityReferralsPath,
    communityRegionalHubsPath,
    communityAgentRegistryPath,
    communityAcademyPath,
    communityAcademyOverviewPath
} from "../../constants/RouteConstants"; // ← adjust import path
import ArmorEvents from "./ArmorEvents";
import ArmorMain from "./ArmorMain";
import ArmorMembers from "./ArmorMembers";
import ArmorContent from "./ArmorContent";
import ArmorCourses from "./ArmorCourses";
import ArmorJobs from "./ArmorJobs";
import ArmorNews from "./ArmorNews";
import ArmorGrantsPartnerships from "./ArmorGrantPartnerships";
import ArmorCoffeeChats from "./ArmorCoffeeChats";
import ArmorReferrals from "./ArmorReferrals";
import ArmorAgentRegistry from "./ArmorAgentRegistry";
import ArmorHubs from "./ArmorHubs";
import ArmorAIAcademy from "./ArmorAIAcademy";
import ArmorAIAcademyOverview from "./ArmorAIAcademyOverview";

// ─── Nav config ──────────────────────────────────────────────────
const navigation = [
    { name: "Academy", path: communityAcademyPath, icon: FaGlobe },
    // { name: "AI Academy", path: communityAcademyOverviewPath, icon: FaLanguage },
    { name: "Home", path: communityHomePath, icon: FaHome },
    { name: "Events", path: communityEventsPath, icon: FaCalendarAlt },
    { name: "Members", path: communityMembersPath, icon: FaUsers },
    { name: "Courses", path: communityResourcesPath, icon: FaBook },
    { name: "Content", path: communityContentPath, icon: FaUserCircle },
    { name: "Agents", path: communityAgentRegistryPath, icon: FaRobot },
    // { name: "Partnerships",   path: communityPartnershipsPath, icon: FaNewspaper },
    { name: "Coffee Chats", path: communityCoffeeChatsPath, icon: FaCoffee },
    { name: "Job Referrals", path: communityReferralsPath, icon: FaHandshake },
    // { name: "Job Board", path: communityJobsPath, icon: FaBriefcase },
    { name: "News", path: communityNewsPath, icon: FaNewspaper },
    // { name: "Regional Hubs",    path: communityRegionalHubsPath,   icon: FaGlobe },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const cx = (...c) => c.filter(Boolean).join(" ");

// ─── Layout (sidebar + outlet) ───────────────────────────────────

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="h-screen flex overflow-hidden bg-gray-900 text-white">
            {/* Mobile overlay */}
            <div
                className={classNames(
                    "fixed inset-0 z-40 flex lg:hidden transition-transform duration-300",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <Sidebar onClose={() => setSidebarOpen(false)} />
                <div
                    className="flex-grow bg-black bg-opacity-50"
                    onClick={() => setSidebarOpen(false)}
                />
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <Sidebar />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                <header className="lg:hidden flex items-center h-14 px-4 shadow-md bg-gray-800">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-400 hover:text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <Link to="/events" className="ml-4 font-bold">
                        Anote Community
                    </Link>
                </header>
                <main className="flex-1 bg-gray-900 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>

            {/* Highlight active nav link on route change */}
            {navigation.forEach((item) => {
                item.current = location.pathname.startsWith(item.path);
            })}
        </div>
    );
}

function Sidebar({ onClose }) {
    const boxes = [
        {
            image: "/socials/slack-new.png",
            title: "Join Our Slack",
            description: "Connect with our community",
            link: "https://join.slack.com/t/anote-ai/shared_invite/zt-2vdh1p5xt-KWvtBZEprhrCzU6wrRPwNA",
            buttonText: "Join Slack",
        },
        {
            image: "/socials/github-new.png",
            title: "Visit Our GitHub",
            description: "Explore our codebase",
            link: "https://github.com/nv78/OpenAnote",
            buttonText: "View GitHub",
        },
        {
            image: "/socials/youtube-new.png",
            title: "Visit Our YouTube",
            description: "Watch demos & tutorials",
            link: "https://www.youtube.com/@anote-ai/videos",
            buttonText: "Watch Videos",
        },
        {
            image: "/socials/linkedin-new.png",
            title: "Visit Our LinkedIn",
            description: "Stay up to date",
            link: "https://www.linkedin.com/company/anote-ai/",
            buttonText: "Follow Us",
        },
    ];
    const location = useLocation();
    return (
        <div className="flex flex-col w-64 bg-gray-900 border-r border-gray-700 h-full">
            <div className="flex items-center justify-between h-14 px-4">
                {/* <a href="https://anote.ai" className="text-xl font-extrabold">
          Armor Institute
        </a> */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="lg:hidden text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                )}
            </div>
            <nav className="flex-1 px-2 space-y-1 mt-4">
                <Link
                    to={uploadPath}
                    className={cx(
                        "text-gray-100 text-xl hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-3 py-2 mb-10 rounded-md"
                    )}
                >
                    {/* rocket-container animation you already use */}
                    <div className={`rocket-container mr-3`}>
                        <img
                            src="/logo.png" /* your logo */
                            alt="Anote"
                            className="h-6 w-6"
                        />
                    </div>

                    {/* label */}
                    <span className="font-bold">Anote</span>
                </Link>
                {navigation.map((item) => {
                    const isActive =
                        item.path === "/academy"
                            ? location.pathname === "/"
                            : location.pathname.startsWith(item.path);
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cx(
                                isActive
                                    ? "bg-gray-800 text-[#defe47]"
                                    : "text-gray-400 hover:bg-gray-700 hover:text-white",
                                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                            )}
                        >
                            <Icon className="h-5 w-5 mr-3 shrink-0" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Social Links Section */}
            <div className="px-3 py-4 border-t border-b border-gray-700">
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-3 text-center">
                    Stay Connected
                </p>

                {/* Grid layout for social links */}
                <div className="grid grid-cols-4 gap-2">
                    {boxes.map((box, index) => (
                        <a
                            key={index}
                            href={box.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="bg-gray-900 rounded-lg p-3 flex flex-col items-center text-center transition-all duration-200 hover:bg-gray-600 hover:scale-105">
                                <img
                                    src={box.image}
                                    alt={box.title}
                                    className="w-10 h-7 mb-2 opacity-80 group-hover:opacity-100"
                                />
                                {/* <p className="text-xs text-gray-300 mb-2 leading-tight">
                  {box.description}
                </p>
                <span className="text-xs bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded text-white font-medium transition-colors">
                  {box.buttonText}
                </span> */}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
// ──────────────────────────────────────────────────────────────────────────────
// Root App & Routing
// ──────────────────────────────────────────────────────────────────────────────
export default function Main() {
    const Wrapper = React.Fragment;
    return (
        <Wrapper>
            <Layout>
                <Routes>
                    {/* <Route path="*" element={<ArmorMain />} /> */}
                    <Route path="*" element={<ArmorAIAcademy />} />
                    <Route path="/academyoverview" element={<ArmorAIAcademyOverview />} />
                    <Route path="/home" element={<ArmorMain />} />
                    <Route path="/events" element={<ArmorEvents />} />
                    <Route path="/agents" element={<ArmorAgentRegistry />} />
                    <Route path="/members" element={<ArmorMembers />} />
                    <Route path="/news" element={<ArmorNews />} />
                    <Route path="/coffeechats" element={<ArmorCoffeeChats />} />
                    <Route path="/jobs" element={<ArmorJobs />} />
                    <Route path="/referrals" element={<ArmorReferrals />} />
                    <Route path="/resources" element={<ArmorCourses />} />
                    <Route path="/content" element={<ArmorContent />} />
                    <Route
                        path="/partnerships"
                        element={<ArmorGrantsPartnerships />}
                    />
                    <Route path="/regionalhubs" element={<ArmorHubs />} />
                    {/* Fallback */}
                    <Route path="/academy" element={<ArmorAIAcademy />} />
                </Routes>
            </Layout>
        </Wrapper>
    );
}
