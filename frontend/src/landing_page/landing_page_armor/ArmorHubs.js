import React, { useState, useEffect } from "react";
import axios from "axios";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import ArmorGuide from "./ArmorGuide"; // Guide Component

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Define cities with sheetName
const cities = [
  {
    name: "New York",
    sheetName: "New York",
    state: "NY",
    priority: "Current Hub",
    date: "Active",
    coordinates: [-74.006, 40.7128],
  },
  // {
  //   name: "Toronto",
  //   sheetName: "Toronto",
  //   state: "Canada",
  //   priority: "Current Hub",
  //   date: "Active",
  //   coordinates: [-79.347015, 43.65107],
  // },
  {
    name: "Washington",
    sheetName: "Washington",
    state: "DC",
    priority: "Q1",
    date: "Q1 2025",
    coordinates: [-77.0369, 38.9072],
  },
  {
    name: "Boston",
    sheetName: "Boston",
    state: "MA",
    priority: "Current Hub",
    date: "Active",
    coordinates: [-71.0589, 42.3601],
  },
  {
    name: "Chicago",
    sheetName: "Chicago",
    state: "IL",
    priority: "Q1",
    date: "Q1 2025",
    coordinates: [-87.6298, 41.8781],
  },
  {
    name: "Miami",
    sheetName: "Miami",
    state: "FL",
    priority: "Q2",
    date: "Q2 2025",
    coordinates: [-80.1918, 25.7617],
  },
  // {
  //   name: "Atlanta",
  //   sheetName: "Atlanta",
  //   state: "GA",
  //   priority: "Q2",
  //   date: "Q2 2025",
  //   coordinates: [-84.388, 33.749],
  // },
  {
    name: "Austin",
    sheetName: "Austin",
    state: "TX",
    priority: "Q2",
    date: "Q2 2025",
    coordinates: [-97.7431, 30.2672],
  },
  {
    name: "Los Angeles",
    sheetName: "Los Angeles",
    state: "CA",
    priority: "Q4",
    date: "Q4 2025",
    coordinates: [-118.2437, 34.0522],
  },
  {
    name: "San Diego",
    sheetName: "San Diego",
    state: "CA",
    priority: "Q4",
    date: "Q4 2025",
    coordinates: [-117.1611, 32.7157],
  },
  {
    name: "Seattle",
    sheetName: "Seattle",
    state: "WA",
    priority: "Q3",
    date: "Q3 2025",
    coordinates: [-122.3321, 47.6062],
  },
  {
    name: "SF",
    sheetName: "SF",
    state: "CA",
    priority: "Q3",
    date: "Q3 2025",
    coordinates: [-122.4194, 37.7749],
  },
];

// Color mapping based on priority
const priorityColors = {
  Q1: "#28b2fb",
  Q2: "cyan",
  Q3: "#defe47",
  Q4: "#10B981",
  "Current Hub": "blue",
};

const ArmorHubs = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]); // Set the first city as default
  const [venues, setVenues] = useState([]);
  const [events, setEvents] = useState([]);
  const [pocs, setPocs] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Google Sheets API Configuration
  const SHEET_ID = "1Io-rzcwhTP9YJ4I_5964XVptrvPqtvadFlgqpvkZ6WI"; // Your Google Sheet ID
  const API_KEY = "AIzaSyAgE4vhIZ-PR4XuGVRd8PZpyRFMfXIjNFM"; // Your Google API Key

  // Function to construct sheet URLs based on city and data type
  const constructSheetURL = (citySheetName, dataType) => {
    // Define how sheet names are structured
    // For Venues: "{sheetName}"
    // For Events: "{sheetName} Events"
    // For POCs: "{sheetName} POCs"
    // For Speakers: "{sheetName} Speakers"

    let sheet;
    switch (dataType) {
      case "Venues":
        sheet = `${citySheetName}`;
        break;
      case "Events":
        sheet = `${citySheetName} Events`;
        break;
      case "POCs":
        sheet = `${citySheetName} POCs`;
        break;
      case "Speakers":
        sheet = `${citySheetName} Speakers`;
        break;
      default:
        sheet = `${citySheetName}`;
    }

    return `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(sheet)}?key=${API_KEY}`;
  };

  // Fetch data from Google Sheets whenever selectedCity changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const { sheetName } = selectedCity;

        // Construct URLs for each data type
        const VENUES_SHEET_URL = constructSheetURL(sheetName, "Venues");
        const EVENTS_SHEET_URL = constructSheetURL(sheetName, "Events");
        // const POCS_SHEET_URL = constructSheetURL(sheetName, "POCs");
        const SPEAKERS_SHEET_URL = constructSheetURL(sheetName, "Speakers");

        // Fetch all data concurrently
        const [venueResponse, eventResponse, speakerResponse] = await Promise.all([
          axios.get(VENUES_SHEET_URL),
          axios.get(EVENTS_SHEET_URL),
          // axios.get(POCS_SHEET_URL),
          axios.get(SPEAKERS_SHEET_URL),
        ]);

        // Process Venues
        const venueRows = venueResponse.data.values.slice(1); // Skip header
        setVenues(
          venueRows.map((row) => ({
            name: row[0],          // Venue Name
            website: row[1],       // Venue Website
            address: row[2],       // Neighborhood/Address
            description: row[3],   // Description
            maxCapacity: row[4],   // Max Capacity
            pocName: row[5],       // POC Name
            pocLinkedin: row[6],   // POC LinkedIn
          }))
        );

        // Process Events
        const eventRows = eventResponse.data.values.slice(1);
        setEvents(
          eventRows.map((row) => ({
            name: row[0],
            date: row[1],
            location: row[2],
            url: row[3],
            price: row[4],
            description: row[5],
          }))
        );

        // Process Speakers
        const speakerRows = speakerResponse.data.values.slice(1);
        setSpeakers(
          speakerRows.map((row) => ({
            name: row[0],        // Speaker Name
            linkedin: row[1],    // LinkedIn URL
            jobTitle: row[2],    // Job Title
            company: row[3],     // Company
          }))
        );

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please ensure the sheet names are correct and try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCity]);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [showGuide, setShowGuide] = useState(false); // State for showing/hiding guide

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 rounded-lg">
      <h2 className="text-4xl font-semibold mb-6 text-center text-white">Armor Regional Hubs</h2>
      {/* <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
        The goal of Armor is to help make AI more accessible across the USA. We want to bridge the divide between the amazing potential that AI has and the everyday tasks that people care about. To this end, we have built a consortium of AI researchers from institutes across America and host practical AI meetups across the country.
      </p> */}

      {/* Map Visualization */}
      <div className="rounded-lg overflow-hidden shadow-xl max-w-full mx-auto overflow-x-auto">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{ scale: 1000, center: [-98.35, 39.5] }}
          style={{ width: "100%", height: "500px", borderRadius: "8px" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#4B5563", stroke: "#FFFFFF", strokeWidth: 0.8 },
                    hover: { fill: "#6B7280", stroke: "#FFFFFF", strokeWidth: 1.2 },
                    pressed: { fill: "#9CA3AF", stroke: "#FFFFFF", strokeWidth: 1.2 },
                  }}
                />
              ))
            }
          </Geographies>
          {cities.map((city, index) => (
            <Marker key={index} coordinates={city.coordinates}>
              <circle
                r={10}
                fill={priorityColors[city.priority] || "#E42A1D"}
                stroke="#FFFFFF"
                strokeWidth={2}
                onClick={() => setSelectedCity(city)}
                className="cursor-pointer"
              />
              <text
                textAnchor="middle"
                style={{
                  fontFamily: "system-ui",
                  fill: "#F1F5F9",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                y={-15}
                onClick={() => setSelectedCity(city)}
              >
                {city.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* City Selection Buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => setSelectedCity(city)}
            className={`py-2 px-4 rounded-lg font-semibold transition-all ${
              selectedCity?.name === city.name
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>

      {/* Modal for Guide */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#070D1B] bg-opacity-75 z-50">
          <div className="bg-[#070D1B] w-11/12 md:w-3/4 lg:w-1/2 rounded-lg text-white relative max-h-screen overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <ArmorGuide />
          </div>
        </div>
      )}

      {/* Display City Data */}
      {loading ? (
        <p className="text-gray-400 text-center">Loading data...</p>
      ) : error ? (
        <p className="text-red-400 text-center">{error}</p>
      ) : (
        <CityDetails
          city={selectedCity}
          venues={venues}
          events={events}
          pocs={pocs}
          speakers={speakers}
        />
      )}

      {/* <div className="text-center mt-8 space-x-6">
        <button
          className="btn-yellow border-none bg-blue-500 text-white hover:bg-blue-600 font-bold py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/15xwzfSOBkvd1_XoJnuj3jl6dAekQWxZ5U0ZMPgp7-8A/edit?usp=sharing",
              "_blank"
            )
          }
        >
          Learn More
        </button>
      </div> */}
    </div>
  );
};

// CityDetails Component with Tabbed Interface
const CityDetails = ({ city, venues, events, speakers }) => {
  const [activeTab, setActiveTab] = useState("venues");

  return (
    <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">
        {city.name}, {city.state}
      </h3>

      {/* Tab Buttons */}
      {/* <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("venues")}
          className={`py-2 px-4 rounded-lg font-semibold transition-all ${
            activeTab === "venues"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
        >
          Venues
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`py-2 px-4 rounded-lg font-semibold transition-all ${
            activeTab === "events"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab("speakers")}
          className={`py-2 px-4 rounded-lg font-semibold transition-all ${
            activeTab === "speakers"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
        >
          Speakers
        </button>
      </div> */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
  <button
    onClick={() => setActiveTab("venues")}
    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
      activeTab === "venues"
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
    }`}
  >
    Venues
  </button>
  <button
    onClick={() => setActiveTab("events")}
    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
      activeTab === "events"
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
    }`}
  >
    Events
  </button>
  <button
    onClick={() => setActiveTab("speakers")}
    className={`py-2 px-4 rounded-lg font-semibold transition-all ${
      activeTab === "speakers"
        ? "bg-blue-600 text-white shadow-lg"
        : "bg-gray-700 hover:bg-gray-600 text-gray-300"
    }`}
  >
    Speakers
  </button>
</div>


      {/* Venues Tab */}
      {activeTab === "venues" && (
        <>
          <h4 className="text-lg font-semibold text-white mt-4">Potential Venues</h4>
          {venues.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600 mt-2 min-w-max">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2">Venue</th>
                    <th className="border border-gray-600 p-2">Website</th>
                    <th className="border border-gray-600 p-2">Neighborhood/Address</th>
                    <th className="border border-gray-600 p-2">Description</th>
                    <th className="border border-gray-600 p-2">Max Capacity</th>
                    <th className="border border-gray-600 p-2">POC Name</th>
                    <th className="border border-gray-600 p-2">POC LinkedIn</th>
                  </tr>
                </thead>
                <tbody>
                  {venues.map((venue, idx) => (
                    <tr key={idx} className="text-gray-300">
                      <td className="border border-gray-600 p-2">{venue.name}</td>
                      <td className="border border-gray-600 p-2">
                        <a
                          href={venue.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Website
                        </a>
                      </td>
                      <td className="border border-gray-600 p-2">{venue.address}</td>
                      <td className="border border-gray-600 p-2">{venue.description}</td>
                      <td className="border border-gray-600 p-2">{venue.maxCapacity}</td>
                      <td className="border border-gray-600 p-2">{venue.pocName}</td>
                      <td className="border border-gray-600 p-2">
                        <a
                          href={venue.pocLinkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          LinkedIn
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 mt-2">No venues available.</p>
          )}
        </>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <>
          <h4 className="text-lg font-semibold text-white mt-4">Upcoming Events</h4>
          {events.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600 mt-2 min-w-max">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2">Event</th>
                    <th className="border border-gray-600 p-2">Date</th>
                    <th className="border border-gray-600 p-2">Location</th>
                    <th className="border border-gray-600 p-2">URL</th>
                    <th className="border border-gray-600 p-2">Price</th>
                    <th className="border border-gray-600 p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, idx) => (
                    <tr key={idx} className="text-gray-300">
                      <td className="border border-gray-600 p-2">{event.name}</td>
                      <td className="border border-gray-600 p-2">{event.date}</td>
                      <td className="border border-gray-600 p-2">{event.location}</td>
                      <td className="border border-gray-600 p-2">
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          Link
                        </a>
                      </td>
                      <td className="border border-gray-600 p-2">{event.price}</td>
                      <td className="border border-gray-600 p-2">{event.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 mt-2">No events available.</p>
          )}
        </>
      )}

      {/* Speakers Tab */}
      {activeTab === "speakers" && (
        <>
          <h4 className="text-lg font-semibold text-white mt-4">Potential Speakers</h4>
          {speakers.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600 mt-2 min-w-max">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2">Name</th>
                    <th className="border border-gray-600 p-2">LinkedIn</th>
                    <th className="border border-gray-600 p-2">Job Title</th>
                    <th className="border border-gray-600 p-2">Company</th>
                  </tr>
                </thead>
                <tbody>
                  {speakers.map((speaker, idx) => (
                    <tr key={idx} className="text-gray-300">
                      <td className="border border-gray-600 p-2">{speaker.name}</td>
                      <td className="border border-gray-600 p-2">
                        <a
                          href={speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </td>
                      <td className="border border-gray-600 p-2">{speaker.jobTitle}</td>
                      <td className="border border-gray-600 p-2">{speaker.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-400 mt-2">No speakers available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ArmorHubs;