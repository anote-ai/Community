import React from "react";
import { useNavigate } from "react-router-dom";
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
  anoteMindstoneJulyNYCPath,
  bttFallPath
} from "../../constants/RouteConstants";

const eventsData = [
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

const Events = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, isExternal) => {
    if (isExternal) {
      window.open(path, "_blank");
    } else {
      navigate(path);
      document.documentElement.scrollTop = 0; // Ensure the page is at the top immediately
    }
  };

  const parseDate = (dateStr) => new Date(dateStr + " 00:00:00");

  const sortedEvents = eventsData
    .map(event => ({ ...event, dateObject: parseDate(event.date) }))
    .sort((a, b) => a.dateObject - b.dateObject);

  const today = new Date();
  const nextEventIndex = sortedEvents.findIndex(event => event.dateObject >= today);

  return (
    <div className="w-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-12">Anote Events</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(event.path, event.external)}
              className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${index === nextEventIndex ? 'border-white' : 'hover:border-blue-500'}`}
            >
              <img
                className="w-full h-64 object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-6">
                <div className="text-gray-400 text-sm mb-2">{event.date}</div>
                <h3 className="text-white text-2xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-500">
                  {event.external ? 'Watch Now' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

