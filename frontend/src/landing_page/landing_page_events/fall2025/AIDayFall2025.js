import React, { useState } from "react";
import "../../landing_page_styles/Agenda.css";
import "../../landing_page_styles/Registrations.css";

function AIDayFall2025() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email_address: "",
    linkedin_url: "",
    event_sheet: "AI Day Fall 2025",
    event_title: "AI Day Summit: Fall 2025",
    event_date: "12/9",
    event_time: "5:30 PM EST to 10 PM EST",
    event_dateTimeStart: "2025-12-09T17:30:00-04:00",
    event_dateTimeEnd: "2025-12-09T22:00:00-04:00",
    event_location: "Virtual"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbygdbgHUNF-eSIW75nHR4MkQiCXheujnDUrXxZgDhxRsxZFSPggX4rNfoJ2M1fyQhpUAA/exec";

    const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true); // start loading immediately
  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // show loading for a short moment, then success
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 500); // 1 second feels snappy but gives feedback
  } catch (error) {
    console.error("Error submitting the form:", error);
    setIsLoading(false);
    setSubmissionError("Failed to submit. Please check your connection.");
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Anote's AI Day Summit Fall 2025
        </h1>

        <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
          {isLoading ? (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">⏳ Submitting...</h2>
      <p className="text-gray-300">Please wait while we confirm your registration.</p>
    </div>
  ) : !submitted ? (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center">
                AI Day Summit Fall Registration
              </h2>
              <p className="text-sm text-gray-400 mb-6 text-center">
                Join our waitlist for the AI Day Summit Fall 2025.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Job Title</label>
                  <input
                    type="text"
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* hidden fields */}
                <input type="hidden" name="event_sheet" value={formData.event_sheet} />
                <input type="hidden" name="event_title" value={formData.event_title} />
                <input type="hidden" name="event_date" value={formData.event_date} />
                <input type="hidden" name="event_time" value={formData.event_time} />
                <input type="hidden" name="event_dateTimeStart" value={formData.event_dateTimeStart} />
                <input type="hidden" name="event_dateTimeEnd" value={formData.event_dateTimeEnd} />
                <input type="hidden" name="event_location" value={formData.event_location} />

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
                >
                  Register Now
                </button>
              </form>
              {submissionError && (
                <p className="mt-4 text-center text-red-400">{submissionError}</p>
              )}
              <p className="text-center mt-4 text-sm">
                Email{" "}
                <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
                  nvidra@anote.ai
                </a>{" "}
                for questions.
              </p>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold text-green-400 mb-4">
                ✅ Success!
              </h2>
              <p className="text-lg mb-2">
                You are registered for <b>{formData.event_title}</b>
              </p>
              <p className="text-lg mb-2">
                📅 {formData.event_date} — {formData.event_time}
              </p>
              <p className="text-md text-gray-300">
                You should receive a confirmation email shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIDayFall2025;
