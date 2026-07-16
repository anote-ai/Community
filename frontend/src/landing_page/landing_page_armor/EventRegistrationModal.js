import React, { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxGf60XlmZagcwpt-zAtGdha0uQq2y1DNEakO3_CNgkDqqEJZj_wJVQ-l3pgdTj9mqzjw/exec";

export default function EventRegistrationModal({ event, onClose }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email_address: "",
    linkedin_url: "",
    event_sheet: event.title,
    event_title: event.title,
    event_date: event.date,
    event_dateTimeStart: event.startISO || "",
    event_dateTimeEnd: event.endISO || "",
    event_location: event.location || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
      }, 300);
    } catch (err) {
      setIsLoading(false);
      setSubmissionError("Failed to submit. Please check your connection.");
    }
  };

  const inputClass =
    "w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {isLoading ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">⏳ Submitting...</h2>
            <p className="text-gray-300">Please wait while we confirm your registration.</p>
          </div>
        ) : submitted ? (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-green-400 mb-4">✅ You're registered!</h2>
            <p className="text-lg text-gray-200 mb-2">{event.title}</p>
            <p className="text-gray-400 mb-6">{event.date}</p>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-1">{event.title}</h2>
            <p className="text-gray-400 text-sm mb-6">
              {event.date}{event.location ? ` · ${event.location}` : ""}
            </p>

            <form onSubmit={handleSubmit}>
              <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className={inputClass} required />
              <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className={inputClass} required />
              <input type="text" name="job_title" placeholder="Job Title" value={formData.job_title} onChange={handleChange} className={inputClass} required />
              <input type="text" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} className={inputClass} required />
              <input type="email" name="email_address" placeholder="Email Address" value={formData.email_address} onChange={handleChange} className={inputClass} required />
              <input type="url" name="linkedin_url" placeholder="LinkedIn URL" value={formData.linkedin_url} onChange={handleChange} className={inputClass} required />

              <input type="hidden" name="event_sheet" value={formData.event_sheet} />
              <input type="hidden" name="event_title" value={formData.event_title} />
              <input type="hidden" name="event_date" value={formData.event_date} />
              <input type="hidden" name="event_dateTimeStart" value={formData.event_dateTimeStart} />
              <input type="hidden" name="event_dateTimeEnd" value={formData.event_dateTimeEnd} />
              <input type="hidden" name="event_location" value={formData.event_location} />

              {submissionError && <p className="text-red-400 text-sm mb-3">{submissionError}</p>}

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                Register Now
              </button>
            </form>

            <p className="text-center mt-4 text-sm text-gray-400">
              Questions? Email{" "}
              <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
                nvidra@anote.ai
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
