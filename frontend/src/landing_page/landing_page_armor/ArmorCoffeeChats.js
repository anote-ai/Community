import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const SHEET_ID   = "1Tr9-EvVLRroabQN7r5Xdu1W9gGKve4_WF4Lp8mZcEU4";
const API_KEY    = "AIzaSyAgE4vhIZ-PR4XuGVRd8PZpyRFMfXIjNFM";
const SHEET_NAME = "Anote Alumni For Coffee Chats";

export default function ArmorCoffeeChats() {
  const [people,  setPeople]  = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);
  const [query,   setQuery]   = useState("");

  /* ─────────── Fetch once ─────────── */
  useEffect(() => {
    (async () => {
      try {
        const range = encodeURIComponent(`${SHEET_NAME}!A1:Z1000`);
        const url   = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
        const res   = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch sheet");
        const json             = await res.json();
        const [header, ...rows] = json.values;
        setPeople(
          rows.map((row) => {
            const obj = {};
            header.forEach((h, i) => (obj[h] = row[i] || ""));
            return {
              name:     obj["Name"],
              email:    obj["Email"],
              linkedin: obj["LinkedIn URL"],
              role:     obj["Current Role"],
              photo:    obj["Profile Photo URL"],
            };
          })
        );
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = people.filter((p) =>
    [p.name, p.email, p.role].join(" ").toLowerCase().includes(query.toLowerCase())
  );
  const colors = ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-pink-600", "bg-yellow-600"];

  if (loading) return <div className="p-6 text-gray-400">Loading coffee chats…</div>;
  if (error)   return <div className="p-6 text-red-400">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-white">Coffee Chats with Anote Community Members</h1>
        <input
          className="w-full sm:w-72 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search alumni…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-400">No matching alumni.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const initials = p.name
              ? p.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
              : "?";
            const color    = colors[i % colors.length];
            // const hasPhoto = p.photo && p.photo.trim() !== "";
            const hasPhoto = false;

            return (
              <div
                key={i}
                className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 flex flex-col gap-4 shadow hover:shadow-lg hover:border-blue-500 transition-shadow"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  {/* initials always render */}
                  <div
                    className={`relative h-12 w-12 rounded-full ${color} flex items-center justify-center text-white text-lg font-semibold overflow-hidden`}
                  >
                    {initials}
                    {/* optional photo overlays the circle */}
                    {hasPhoto && (
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-white font-semibold truncate">{p.name}</h2>
                    {p.role && <p className="text-sm text-gray-300">{p.role}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {p.email && (
                    <a
                      href={`mailto:${p.email}?subject=Coffee%20Chat%20with%20Anote`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-xs text-white transition-colors"
                      title="Email"
                    >
                      <FaEnvelope /> Email
                    </a>
                  )}
                  {p.linkedin && (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-xs text-white transition-colors"
                      title="LinkedIn"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
