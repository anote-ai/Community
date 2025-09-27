import React, { useState, useEffect } from "react";
import axios from "axios";
import ArmorGuide from "./ArmorGuide"; // Guide Component

const LocalPOCs = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [showGuide, setShowGuide] = useState(false); // State for showing/hiding guide

  const SHEET_ID = "1f5XnPzK-h1nn7d9iNCscTc5jycSZHOMhU0fljB3zC6I";
  const API_KEY = "AIzaSyAgE4vhIZ-PR4XuGVRd8PZpyRFMfXIjNFM";
  const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Overview?key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SHEET_URL);
        const rows = response.data.values.slice(1); // Skip the header row
        setCities(
          rows.map((row) => ({
            city: row[0],
            state: row[1],
            priority: row[2],
            launchDate: row[3],
            pocName: row[4],
            pocEmail: row[5],
            venue: row[6],
          }))
        );
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch cities data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-6">
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">
        Local Points of Contact
      </h2>
      <p className="text-gray-300 text-center">
        Explore our current and upcoming city hubs. Learn more about how to become a city organizer!
      </p>

      {/* Learn More and Request Partnership Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          className="btn-yellow font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={openModal}
        >
          {showGuide ? "Hide Guide" : "Learn More"}
        </button>
        <button
          className="btn-black font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          onClick={() => (window.location.href = "/armor/requestArmorOpportunities")}
        >
          Request Partnership
        </button>
      </div>

      {/* ArmorGuide Modal */}
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

      {/* Table Display */}
      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-gray-400 text-center">Loading cities...</p>
        ) : error ? (
          <p className="text-red-400 text-center">{error}</p>
        ) : (
          <table className="w-full bg-gray-800 text-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-4 text-left">City</th>
                <th className="py-3 px-4 text-left">State</th>
                <th className="py-3 px-4 text-left">Priority</th>
                <th className="py-3 px-4 text-left">Launch Date</th>
                <th className="py-3 px-4 text-left">POC Name</th>
                <th className="py-3 px-4 text-left">POC Email</th>
                <th className="py-3 px-4 text-left">Venue</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-600 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  }`}
                >
                  <td className="py-3 px-4">{city.city}</td>
                  <td className="py-3 px-4">{city.state}</td>
                  <td className="py-3 px-4">{city.priority}</td>
                  <td className="py-3 px-4">{city.launchDate}</td>
                  <td className="py-3 px-4">{city.pocName}</td>
                  <td className="py-3 px-4">
                    <a
                      href={`mailto:${city.pocEmail}`}
                      className="text-blue-400 hover:underline"
                    >
                      {city.pocEmail}
                    </a>
                  </td>
                  <td className="py-3 px-4">{city.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LocalPOCs;
