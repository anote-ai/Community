import React, { useEffect, useState } from "react";
import classNames from "classnames";

const SHEET_ID = "1IREd2vCxo7rDGOoDUYtzoywVGLqqUFCsu3qGsA0HsMc";
const API_KEY = "AIzaSyAgE4vhIZ-PR4XuGVRd8PZpyRFMfXIjNFM";
const SHEET_NAME = "Sheet-1";

function ArmorMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}?key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data.values || data.values.length < 2) {
          throw new Error("No data found in sheet");
        }

        const headers = data.values[0];
        const rows = data.values.slice(1);

        const parsed = rows.map(row => {
          const obj = {};
          headers.forEach((header, idx) => {
            obj[header] = row[idx] || "";
          });
          return {
            firstName: obj["First Name"] || "",
            lastName: obj["Last Name"] || "",
            company: obj["Company Name"] || "",
            title: obj["Job Title"] || "",
            linkedin: obj["LinkedIn"] || "",
          };
        });

        setMembers(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = members.filter((m) => {
    const q = query.toLowerCase();
    return (
      m.firstName.toLowerCase().includes(q) ||
      m.lastName.toLowerCase().includes(q) ||
      m.company.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q)
    );
  });

  const pages = Math.ceil(filtered.length / pageSize);
  const slice = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-900 mb-20 px-8 pt-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-bold text-white">Community Members</h1>
        <input
          type="text"
          placeholder="Search members…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="w-full sm:w-72 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto shadow-md sm:rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-3 py-3 w-1/5 break-words">First Name</th>
              <th className="px-3 py-3 w-1/5 break-words">Last Name</th>
              <th className="px-3 py-3 w-1/5 break-words">Company</th>
              <th className="px-3 py-3 w-1/5 break-words">Job Title</th>
              <th className="px-3 py-3 w-1/5 break-words">LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((member, i) => (
              <tr key={i} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <td className="px-3 py-2 whitespace-normal">{member.firstName}</td>
                <td className="px-3 py-2 whitespace-normal">{member.lastName}</td>
                <td className="px-3 py-2 whitespace-normal">{member.company}</td>
                <td className="px-3 py-2 whitespace-normal">{member.title}</td>
                <td className="px-3 py-2 whitespace-normal">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      View ↗
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

      {pages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-400">
            Showing {filtered.length} members
          </div>

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

export default ArmorMembers;

