import { useState, useEffect } from "react";

export default function AiJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://remotive.com/api/remote-jobs?search=machine%20learning&limit=20"
        );
        const json = await res.json();
        setJobs(json.jobs || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs. Please try again later.");
      }
    }

    load();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-400 text-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">AI Job Board</h1>
      <div className="space-y-4">
        {jobs.length === 0 ? (
          <p className="text-gray-400">Loading jobs…</p>
        ) : (
          jobs.map((job) => (
            <a
              key={job.id}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h2 className="text-lg font-semibold text-white">
                  {job.title}
                </h2>
                <span className="text-sm text-gray-400">
                  {job.candidate_required_location}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1">{job.company_name}</p>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
