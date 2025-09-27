import { useState, useEffect } from "react";
import classNames from "classnames";

// Google Sheets config
const SHEET_ID = "1Tr9-EvVLRroabQN7r5Xdu1W9gGKve4_WF4Lp8mZcEU4";
const API_KEY = "AIzaSyAgE4vhIZ-PR4XuGVRd8PZpyRFMfXIjNFM";
const SHEET_NAME = "AI Jobs With Anote Referrals";

export default function ArmorReferrals() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const range = encodeURIComponent(`${SHEET_NAME}!A1:Z1000`);
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch sheet");
        const json = await res.json();
        const [header, ...rows] = json.values;
        const parsed = rows.map((row) => {
          const obj = {};
          header.forEach((h, idx) => (obj[h] = row[idx] || ""));
          return {
            companyName: obj["Company Name"],
            companyRole: obj["Company Role"],
            contactName: obj["Company Contact Name"],
            contactLinkedIn: obj["Company Contact LinkedIn"],
            anoteName: obj["Anote Connection Name"],
            anoteLinkedIn: obj["Anote Connection LinkedIn"],
          };
        });
        setJobs(parsed);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filtered = jobs.filter((j) =>
    [j.companyName, j.companyRole, j.contactName, j.anoteName]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const pages = Math.ceil(filtered.length / pageSize);
  const slice = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (loading) return <div className="p-6 text-gray-400">Loading referrals…</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;

  return (
    <div className="w-full bg-gray-900 mb-20 px-8 pt-10">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-bold text-white">AI Jobs – Referrals</h1>
        <input
          type="text"
          placeholder="Search jobs…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="w-full sm:w-72 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-3 py-3">Company</th>
              <th className="px-3 py-3">Role</th>
              <th className="px-3 py-3">Recruiter / Contact</th>
              <th className="px-3 py-3">Anote Connection</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((j, idx) => (
              <tr key={idx} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <td className="px-3 py-2 whitespace-normal">{j.companyName}</td>
                <td className="px-3 py-2 whitespace-normal">{j.companyRole}</td>
                <td className="px-3 py-2 whitespace-normal">
                  {j.contactName ? (
                    <a
                      href={j.contactLinkedIn || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {j.contactName} ↗
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-3 py-2 whitespace-normal">
                  {j.anoteName ? (
                    <a
                      href={j.anoteLinkedIn || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      {j.anoteName} ↗
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-400">Showing {filtered.length} referrals</div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className={classNames(
                "px-3 py-2 rounded-md border text-lg",
                page === 1
                  ? "bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-gray-800 border-gray-600 hover:bg-blue-500 hover:text-white transition"
              )}
              disabled={page === 1}
            >
              ←
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">Page</span>
              <input
                type="number"
                value={page}
                onChange={(e) => {
                  let val = parseInt(e.target.value);
                  if (!isNaN(val) && val >= 1 && val <= pages) {
                    setPage(val);
                  }
                }}
                className="w-16 text-center py-1 px-2 rounded-md bg-gray-800 border border-gray-600 text-white"
              />
              <span className="text-gray-300 text-sm">of {pages}</span>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, pages))}
              className={classNames(
                "px-3 py-2 rounded-md border text-lg",
                page === pages
                  ? "bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-gray-800 border-gray-600 hover:bg-blue-500 hover:text-white transition"
              )}
              disabled={page === pages}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
