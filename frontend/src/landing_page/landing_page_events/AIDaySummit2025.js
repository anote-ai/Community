import React, { useState } from "react";
import "../landing_page_styles/Registrations.css";
import AIDaySummit2025Agenda from "./AIDaySummit2025Agenda";
import AIDaySummit2025PartnerLogos from "./AIDaySummit2025PartnerLogos";
import AIDaySummit2025PreferredPartnerLogos from "./AIDaySummit2025PreferredPartnerLogos";

function Registration() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    company_name: "",
    job_title: "",
    linkedin_url: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzkUdTtNDsmmBmoW58lv7vnZbCHNX9S6xnYZVdQziww4FL8LQ6-M4mSnAZZ1IBTrsDwag/exec"; // Replace with your Web App URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData")
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Success! Your registration was submitted.");
        setFormData({
          first_name: "",
          last_name: "",
          email_address: "",
          company_name: "",
          job_title: "",
          linkedin_url: "",
        }); // Reset form
      } else {
        setSubmissionStatus("Success! Please email nvidra@anote.ai to confirm.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("Failed to submit. Please check your connection.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
    <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
      {/* <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          AI Day Registration
        </h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Join us for the AI Day Summit 2025 on February 12th!
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
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
          >
            Register
          </button>
        </form>
        {submissionStatus && (
          <p className="mt-4 text-center text-sm">{submissionStatus}</p>
        )}
        <p className="text-center mt-4 text-sm">
          Email{" "}
          <a
            href="mailto:nvidra@anote.ai"
            className="text-blue-400 underline"
          >
            nvidra@anote.ai
          </a>{" "}
          for questions.
        </p>
      </div>
    </div>
    <div> */}
    {/* <AIDaySummit2025PartnerLogos></AIDaySummit2025PartnerLogos> */}
    {/* <AIDaySummit2025PreferredPartnerLogos></AIDaySummit2025PreferredPartnerLogos> */}
    {/* </div>
          <div> */}
          <AIDaySummit2025Agenda></AIDaySummit2025Agenda>
          </div>
          </div>
  );
}

export default Registration;
