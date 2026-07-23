import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShareButton from "./ShareButton";
import EventActions from "./EventActions";
import EventRegistrationModal from "./EventRegistrationModal";
import SEO from "../../util/SEO";
import {
  aiDayPath,
  panaceaPath,
  mindstoneAugustPath,
  mindstoneSeptemberPath,
  mindstoneJulyPath,
  mindstoneJunePath,
  mindstoneMayPath,
  mindstoneAprilPath,
  mindstoneMarchPath,
  aiDayStartupsDemosPath,
  mindstoneOctoberPath,
  mindstoneNovemberPath,
  mindstoneDecemberPath,
  mindstoneMarchNewPath,
  mindstoneMarchBostonNewPath,
  mindstoneMayBostonNewPath,
  registrationPath,
  mindstoneFebruaryPath,
  mindstoneAprilNYCPath,
  anoteMindstoneMayNYCPath,
  anoteMindstoneJuneNYCPath,
  bttFallPath,
  paleBlueDotPath,
  databricksPath,
  aiDayFall2025Path,
  aiAcademySpring2026Path,
  holidayPartyPath,
  jan2026Path,
  feb2026Path,
  worldCupPartyPath,
  summerPartyPath,
} from "../../constants/RouteConstants";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  BrowserRouter,
} from "react-router-dom";

// ─── Google Calendar live feed ───────────────────────────────────────────────
// 1. Create a Google Calendar for Anote events and make it public:
//    calendar.google.com → three-dot menu → Settings → Share → "Make available to public"
// 2. Copy the Calendar ID:
//    Settings → Integrate calendar → Calendar ID
// 3. Ensure the Google Calendar API is enabled for this project's API key in Google Cloud Console.
const GCAL_ID = "e88890e803003d95935e56c48dc68aedfd5311e3204360f781830c06287f4f24@group.calendar.google.com";
const GCAL_API_KEY = "AIzaSyCjxXVDGAolugKgrTXpJ0HmAjL0lLxLN1E";

// For calendar events that also have a dedicated community page, map event title
// → internal route + image. Events not listed here link to the Google Calendar page.
const MONTH_IMAGES = [
  null,
  "/events_images/january.png",
  "/events_images/february.png",
  "/events_images/march.png",
  "/events_images/april.png",
  "/events_images/may.png",
  "/events_images/june.png",
  "/events_images/july.png",
  "/events_images/august.png",
  "/events_images/september.png",
  "/events_images/october.png",
  "/events_images/november.png",
  "/events_images/december.png",
];

const EVENT_ROUTE_MAP = {
  "Anote World Cup Finals Watch Party": {
    path: worldCupPartyPath,
    image: "/events_images/worldcup.png",
  },
  "Anote Summer Team Party": {
    path: summerPartyPath,
    image: "/events_images/august.png",
  },
};

const eventsData = [
  //   {
  //   path: feb2026Path,
  //   image: "/events_images/february.png",
  //   date: "February 12th, 2026",
  //   title: "February AI Meetup NYC",
  //   description: "Network and learn at our AI Meetup in February, focused on practical AI applications."
  // },
  //   {
  //   path: jan2026Path,
  //   image: "/events_images/january.png",
  //   date: "January 15th, 2026",
  //   title: "January AI Meetup NYC",
  //   description: "Network and learn at our AI Meetup in January, focused on practical AI applications."
  // },
    {
    path: summerPartyPath,
    image: "/events_images/august.png",
    date: "August 7th, 2026",
    title: "Anote Summer Team Party",
    description: "Anote's Summer Team Party celebrating our amazing team in New York City.",
    startISO: "2026-08-07T18:00:00-04:00",
    endISO: "2026-08-07T21:00:00-04:00",
    location: "New York City",
  },
  {
    path: worldCupPartyPath,
    image: "/events_images/worldcup.png",
    date: "July 19th, 2026",
    title: "Anote World Cup Finals Watch Party",
    description: "Anote's World Cup Finals Watch Party celebrating Soccer in New York City.",
    startISO: "2026-07-19T14:00:00-04:00",
    endISO: "2026-07-19T18:00:00-04:00",
    location: "New York City",
  },
  {
    path: aiAcademySpring2026Path,
    image: "/events_images/aidayspring2026.png",
    date: "March 15th, 2026",
    title: "AI Academy Projects",
    description: "Anote's AI Academy Spring 2026 Student Project Presentations."
  },
  {
    path: holidayPartyPath,
    image: "/events_images/holiday.png",
    date: "December 12th, 2025",
    title: "Anote Holiday Party",
    description: "Anote's Holiday Party to celebrate the Fall team in NYC."
  },
    {
    path: aiDayFall2025Path,
    image: "/events_images/aidayfall2025.png",
    date: "December 9th, 2025",
    title: "AI Day Fall 2025",
    description: "Anote's Cornell Tech, Break Through Tech, and Internal Talks."
  },
  //   {
  //   path: databricksPath,
  //   image: "/events_images/databricks.png",
  //   date: "October 23, 2025",
  //   title: "Databricks Meetup NYC",
  //   description: "Anote and Databricks host a halloween themed AI startup meetup in NYC."
  // },
  {
    path: paleBlueDotPath,
    image: "/events_images/palebluedot.png",
    date: "August 20, 2025",
    title: "Pale Blue Dot Launch",
    description: "Anote's Product Launch on Novel Generative AI Research and Development."
  },
  {
    path: anoteMindstoneJuneNYCPath,
    image: "/events_images/june.png",
    date: "June 4th, 2025",
    title: "June AI Meetup NYC",
    description: "Network and learn at our AI Meetup in June, focused on cutting-edge developments."
  },
  {
    path: mindstoneMayBostonNewPath,
    image: "/events_images/december.png",
    date: "May 9th, 2025",
    title: "May AI Meetup Boston",
    description: "Network and learn at our AI Meetup in April, focused on cutting-edge developments."
  },
  {
    path: anoteMindstoneMayNYCPath,
    image: "/events_images/may.png",
    date: "May 7th, 2025",
    title: "May AI Meetup NYC",
    description: "Network and learn at our AI Meetup in May, focused on cutting-edge developments."
  },
  {
    path: mindstoneAprilNYCPath,
    image: "/events_images/april.png",
    date: "April 2nd, 2025",
    title: "April AI Meetup NYC",
    description: "Network and learn at our AI Meetup in April, focused on cutting-edge developments."
  },
  {
    path: mindstoneMarchBostonNewPath,
    image: "/events_images/january.png",
    date: "March 6th, 2025",
    title: "March AI Meetup Boston",
    description: "Network and learn at our AI Meetup in March, focused on cutting-edge developments."
  },
  {
    path: mindstoneMarchNewPath,
    image: "/events_images/march.png",
    date: "March 5th, 2025",
    title: "March AI Meetup NYC",
    description: "Network and learn at our AI Meetup in March, focused on cutting-edge developments."
  },
  {
    path: registrationPath,
    image: "/events_images/aiday.png",
    date: "February 12th, 2025",
    title: "AI Day Summit 2025",
    description: "Learn how to help make AI more accessible at AI Day Summit 2025."
  },
  {
    path: mindstoneFebruaryPath,
    image: "/events_images/february.png",
    date: "February 5th, 2025",
    title: "AI Meetup February",
    description: "Learn at our AI Meetup in February, focused on cutting-edge developments."
  },
  {
    path: bttFallPath,
    image: "/events_images/btt.png",
    date: "December 10th, 2024",
    title: "Break Through AI Talks",
    description: "View Break Through AI Talks on Fine Tuning LLMs and Multimodal RAG Systems."
  },
  {
    path: mindstoneDecemberPath,
    image: "/events_images/december.png",
    date: "December 4th, 2024",
    title: "AI Meetup December",
    description: "Learn at our AI Meetup in December, focused on practical AI applications."
  },
  {
    path: mindstoneNovemberPath,
    image: "/events_images/november.png",
    date: "November 13th, 2024",
    title: "AI Meetup November",
    description: "Learn at our AI Meetup in November, focused on practical AI applications."
  },
  {
    path: mindstoneOctoberPath,
    image: "/events_images/october.png",
    date: "October 2nd, 2024",
    title: "AI Meetup October",
    description: "Learn at our AI Meetup in October, focused on novel AI developments."
  },
  {
    path: panaceaPath,
    image: "/events_images/panaceaupdated.png",
    date: "August 8th, 2024",
    title: "Panacea Launch",
    description: "View the launch of our novel artificial intelligence platform, Panacea."
  },
  {
    path: "https://www.youtube.com/watch?v=7I_pBLjMNzs",
    image: "/events_images/tednew.png",
    date: "March 10th, 2023",
    title: "AI Ted Talk",
    description: "Discover the future of AI at our TEDx talk on Artificial General Intelligence.",
    external: true
  },
  {
    path: aiDayPath,
    image: "/events_images/aiday.png",
    date: "February 2nd, 2024",
    title: "AI Day",
    description: "Explore our mission to make AI more accessible at AI Day 2024."
  },
  {
    path: aiDayStartupsDemosPath,
    image: "/events_images/aidemosnew.png",
    date: "February 2nd, 2024",
    title: "AI Startup Product Demos",
    description: "View Product Demos from promising AI startups at our AI Day."
  },
  {
    path: mindstoneSeptemberPath,
    image: "/events_images/september.png",
    date: "September 4th, 2024",
    title: "AI Meetup September",
    description: "Learn at our AI Meetup in September, focused on cutting-edge developments."
  },
  {
    path: mindstoneAugustPath,
    image: "/events_images/august.png",
    date: "August 7th, 2024",
    title: "AI Meetup August",
    description: "Learn at our AI Meetup in August, focused on cutting-edge developments."
  },
  {
    path: mindstoneJulyPath,
    image: "/events_images/july.png",
    date: "July 10th, 2024",
    title: "AI Meetup July",
    description: "Network and learn at our AI Meetup in July, focused on cutting-edge developments."
  },
  {
    path: mindstoneJunePath,
    image: "/events_images/june.png",
    date: "June 5th, 2024",
    title: "AI Meetup June",
    description: "Network and learn at our AI Meetup in June, focused on cutting-edge developments."
  },
  {
    path: mindstoneMayPath,
    image: "/events_images/may.png",
    date: "May 1st, 2024",
    title: "AI Meetup May",
    description: "Network and learn at our AI Meetup in May, focused on cutting-edge developments."
  },
  {
    path: mindstoneAprilPath,
    image: "/events_images/april.png",
    date: "April 3rd, 2024",
    title: "AI Meetup April",
    description: "Network and learn at our AI Meetup in April, focused on cutting-edge developments."
  },
  {
    path: mindstoneMarchPath,
    image: "/events_images/march.png",
    date: "March 6th, 2024",
    title: "AI Meetup March",
    description: "Network and learn at our AI Meetup in March, focused on cutting-edge developments."
  }
];

function formatDisplayDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function parseCalendarEvent(gcalEvent) {
  const startISO = gcalEvent.start?.dateTime || gcalEvent.start?.date;
  const endISO   = gcalEvent.end?.dateTime   || gcalEvent.end?.date;
  const title    = gcalEvent.summary || "Untitled Event";
  const override = EVENT_ROUTE_MAP[title] || {};

  // Support an optional "image: /path.png" first line in the calendar description.
  let rawDesc = gcalEvent.description || "";
  let image = override.image;
  const imageMatch = rawDesc.match(/^image:\s*(\S+)\s*\n?/i);
  if (imageMatch) {
    image = imageMatch[1];
    rawDesc = rawDesc.replace(imageMatch[0], "").trim();
  } else if (!image) {
    const month = startISO ? new Date(startISO).getMonth() + 1 : 7;
    image = MONTH_IMAGES[month] || "/events_images/july.png";
  }

  return {
    title,
    date: formatDisplayDate(startISO),
    description: rawDesc || title,
    startISO,
    endISO,
    location: gcalEvent.location || "",
    image,
    path: override.path || gcalEvent.htmlLink,
    external: !override.path,
    fromCalendar: true,
  };
}

const ArmorEvents = () => {
  const navigate = useNavigate();
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [calendarLoading, setCalendarLoading] = useState(true);

  useEffect(() => {
    if (GCAL_ID === "REPLACE_WITH_YOUR_CALENDAR_ID") {
      setCalendarLoading(false);
      return;
    }
    const now = new Date().toISOString();
    const url =
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GCAL_ID)}/events` +
      `?key=${GCAL_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}&maxResults=20`;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (data.items) {
          setCalendarEvents(data.items.map(parseCalendarEvent));
        }
      })
      .catch(() => {})
      .finally(() => setCalendarLoading(false));
  }, []);

  const getToday = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  };

  const today = getToday();

  const handleNavigation = (path, isExternal) => {
    if (isExternal) {
      window.open(path, "_blank");
    } else {
      navigate(path);
      document.documentElement.scrollTop = 0; // Ensure the page is at the top immediately
    }
  };

  const parseDate = (dateStr) => {
  // Remove ordinal suffixes like "th", "st", "nd", "rd"
  const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  return new Date(cleanDateStr);
};

  // const sortedEvents = eventsData
  //   .map(event => ({ ...event, dateObject: parseDate(event.date) }))
  //   .sort((a, b) => a.dateObject - b.dateObject);

  // Merge live calendar events with hardcoded list.
  // Calendar events take precedence; deduplicate by title so the World Cup
  // Party (which is hardcoded AND may appear in the calendar) shows only once.
  const calendarTitles = new Set(calendarEvents.map((e) => e.title));
  const dedupedStatic = eventsData.filter((e) => !calendarTitles.has(e.title));
  const mergedEvents = [...calendarEvents, ...dedupedStatic];

  const sortedEvents = mergedEvents
  .map(event => ({ ...event, dateObject: parseDate(event.date) }))
  .sort((a, b) => b.dateObject - a.dateObject);

  // const today = new Date();
  const nextEventIndex = sortedEvents.findIndex(event => event.dateObject >= today);

  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [viewMode, setViewMode] = useState("cards"); // "cards" | "calendar"
  const [modalEvent, setModalEvent] = useState(null);


  const applyFilter = (ev) => {
  const matchesQuery =
    ev.title.toLowerCase().includes(query.toLowerCase()) ||
    ev.date.toString().toLowerCase().includes(query.toLowerCase());  // <-- safer

  if (!matchesQuery) return false;

  if (filterType === "all") return true;
  if (filterType === "upcoming") return ev.dateObject >= today;
  if (filterType === "past") return ev.dateObject < today;
  return true;
};

  const filteredEvents = sortedEvents.filter(applyFilter);

  return (
    <>
    <div className="bg-gray-900 py-20">
      <SEO
        title="Events"
        description="Find upcoming meetups, hackathons, workshops, and gatherings online and in person."
        path="/community/events"
      />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toolbar: filter tabs + view toggle */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {[
              { label: "All", value: "all" },
              { label: "Upcoming", value: "upcoming" },
              { label: "Past", value: "past" },
            ].map(({ label, value }) => (
              <button
                key={label}
                onClick={() => setViewMode("cards") || setFilterType(value)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  filterType === value && viewMode === "cards"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === "calendar" ? "cards" : "calendar")}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                viewMode === "calendar"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
              }`}
            >
              📅 Calendar View
            </button>
            <a
              href="https://calendar.google.com/calendar/u/0?cid=ZTg4ODkwZTgwMzAwM2Q5NTkzNWU1NmM0OGRjNjhhZWRmZDUzMTFlMzIwNDM2MGY3ODE4MzBjMDYyODdmNGYyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border text-sm transition bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              + Subscribe
            </a>
          </div>
        </div>

        {/* Search bar */}
        {viewMode === "cards" && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full sm:w-80 px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {/* Google Calendar embed */}
        {viewMode === "calendar" && (
          <div className="mb-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
            <iframe
              src={`https://calendar.google.com/calendar/embed?src=e88890e803003d95935e56c48dc68aedfd5311e3204360f781830c06287f4f24%40group.calendar.google.com&ctz=America%2FNew_York&bgcolor=%23111827&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&mode=AGENDA`}
              style={{ border: 0 }}
              width="100%"
              height="600"
              title="Anote Community Events Calendar"
            />
          </div>
        )}

        {/* Loading skeleton — shown while live calendar data fetches */}
        {calendarLoading && viewMode === "cards" && filterType !== "past" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-48 bg-gray-700" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-gray-700 rounded w-1/3" />
                  <div className="h-5 bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-700 rounded w-full" />
                  <div className="h-3 bg-gray-700 rounded w-5/6" />
                  <div className="mt-4 h-9 bg-gray-700 rounded-full w-32" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event cards grid */}
        {viewMode === "cards" && filteredEvents.length === 0 && !calendarLoading && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-lg mb-2">No events found</p>
            {query && (
              <p className="text-gray-500 text-sm">
                No results for "{query}" —{" "}
                <button className="text-blue-400 hover:underline" onClick={() => setQuery("")}>
                  clear search
                </button>
              </p>
            )}
          </div>
        )}
        {viewMode === "cards" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredEvents.map((event, index) => {
            const isCalendarOnly = event.fromCalendar && event.path?.includes('google.com/calendar');
            return (
            <div
              key={index}
              onClick={() => isCalendarOnly ? setModalEvent(event) : handleNavigation(event.path, event.external)}
              className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:border-white`}
            >
              <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-6">
                <div className="text-gray-400 text-sm mb-2">{event.date}</div>
                <h3 className="text-white text-2xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-500"
                    onClick={(e) => { e.stopPropagation(); isCalendarOnly ? setModalEvent(event) : handleNavigation(event.path, event.external); }}
                  >
                    {event.path?.includes('youtube.com') || event.path?.includes('youtu.be') ? 'Watch Now' : 'Learn More'}
                  </button>
                  <ShareButton
                    title={event.title}
                    description={event.description}
                    url={event.external ? event.path : `${window.location.origin}${event.path}`}
                  />
                </div>
                <EventActions event={event} className="mt-3" />
              </div>
            </div>
            );
          })}
        </div>
        )}
      </div>
    </div>

    {modalEvent && (
      <EventRegistrationModal
        event={modalEvent}
        onClose={() => setModalEvent(null)}
      />
    )}
    </>
  );
};

export default ArmorEvents;

