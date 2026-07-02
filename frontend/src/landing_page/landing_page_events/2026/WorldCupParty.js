import React, { useState } from "react";
import AIDayVideo from "../AIDayVideo";
import SEO from "../../../util/SEO";
import EventActions from "../../landing_page_armor/EventActions";
import "../../landing_page_styles/Agenda.css";
import "../../landing_page_styles/Registrations.css";
import AIDayVideoNew from "../AIDayVideoNew";

function WorldCupParty() {


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email_address: "",
    linkedin_url: "",
    event_sheet: "World Cup",
    event_title: "Anote World Cup Party 2026",
    event_date: "7/19/2026",
    event_time: "2:00 PM EST to 6:00 PM EST",
    event_dateTimeStart: "2026-07-19T14:00:00-04:00",
    event_dateTimeEnd: "2026-07-19T18:00:00-04:00",
    event_location: "To Be Confirmed"
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // const scriptURL = "https://script.google.com/macros/s/AKfycbygdbgHUNF-eSIW75nHR4MkQiCXheujnDUrXxZgDhxRsxZFSPggX4rNfoJ2M1fyQhpUAA/exec"; // Replace with your Web App URL
  // const scriptURL = "https://script.google.com/macros/s/AKfycbyIlSXrM57J4VdUyHd1iAeGbfzGqFVyTvMmxzW-PcXI1l85pBSsQ7fe_2_b5eDCR9qhIw/exec";
  const scriptURL = "https://script.google.com/macros/s/AKfycbxGf60XlmZagcwpt-zAtGdha0uQq2y1DNEakO3_CNgkDqqEJZj_wJVQ-l3pgdTj9mqzjw/exec";
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
    }, 300); // 1 second feels snappy but gives feedback
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
      <SEO
        title="Anote World Cup Party 2026"
        description="Anote's World Cup Finals Watch Party celebrating Soccer in New York City."
        path="/worldcup"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Anote World Cup Party 2026",
          "startDate": "2026-07-19",
          "location": { "@type": "Place", "name": "New York, NY" },
          "organizer": { "@type": "Organization", "name": "Anote AI", "url": "https://anote.ai" },
          "description": "Anote's World Cup Finals Watch Party celebrating Soccer in New York City.",
          "url": "https://community.anote.ai/worldcup"
        }}
      />
    <div className="w-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Anote's World Cup Party 2026
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
              World Cup Party Registration
            </h2>
            <p className="text-sm text-gray-400 mb-6 text-center">
              Confirm your registration for Anote's World Cup Finals Watch Party.
            </p>
            <form onSubmit={handleSubmit}>
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

              {/* Hidden fields */}
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
            <h2 className="text-4xl font-bold text-green-400 mb-4">✅ Success!</h2>
            <p className="text-lg mb-2">
              You are registered for <b>{formData.event_title}</b>
            </p>
            <p className="text-lg mb-2">
              📅 {formData.event_date} — {formData.event_time}
            </p>
            <p className="text-md text-gray-300 mb-6">
              You should receive a confirmation email shortly.
            </p>
            <div className="flex justify-center">
              <EventActions
                event={{
                  title: formData.event_title,
                  description: `${formData.event_date} — ${formData.event_time}`,
                  startISO: formData.event_dateTimeStart,
                  endISO: formData.event_dateTimeEnd,
                  location: formData.event_location,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default WorldCupParty;

// DEPLOYMENTID: AKfycbyhU3jp5U_Y-LcANmdfMt9sowDjBeX14z-S7AYJRahjX2RB5KFn1AlNV7H_FOJoEALr