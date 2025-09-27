import React, { useState } from "react";
import "../../landing_page_styles/Agenda.css";
import "../../landing_page_styles/Registrations.css";
import AIDayVideo from "../AIDayVideo";

function MindstoneAprilBostonBefore() {
  // Registration form state, including hard-coded event details.
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    company_name: "",
    job_title: "",
    linkedin_url: "",
    // Event-specific details
    event_sheet: "Boston - April 2025",
    event_title: "Anote and Mindstone's April AI Meetup in Boston",
    event_date: "4/8",
    event_time: "6 PM EST to 9 PM EST",
    event_dateTimeStart: "2025-04-08T18:00:00-04:00",
    event_dateTimeEnd: "2025-04-08T21:00:00-04:00",
    // event_dateTimeStart: "2025-03-10T18:00:00-05:00", // for not daylight savings times
    // event_dateTimeEnd: "2025-03-10T21:00:00-05:00", // for not daylight savings times
    event_location: "Microsoft New England – 1 Memorial Drive, Cambridge, MA 02142"
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzztd_sTQij5tYr3Yk2mHI7Pxg_yRl9jJqHWVyxI4b7800ZhUoM-vxMgUzvtOJG16Znzg/exec"; // Replace with your Web App URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData", JSON.stringify(formData));
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      // When using no-cors mode, response.ok might not be reliable.
      setSubmissionStatus("Success! Your registration was submitted.");
      setFormData((prev) => ({
        ...prev,
        first_name: "",
        last_name: "",
        email_address: "",
        company_name: "",
        job_title: "",
        linkedin_url: ""
      }));
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("Failed to submit. Please check your connection.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Agenda table data
  const agendaItems = [
    {
      date: "3/6",
      time: "TBD",
      name: "Doug Williams",
      role: "Product Lead",
      company: "Orbit Software, MIT Sloan",
      topic: "Demoing Practical AI Tools",
      linkedinUrl: "https://www.linkedin.com/in/dcwusa",
      videoUrl: "",
      videoUrlEmbed: "",
      description:
        "A demonstration of how entrepreneurs can be more productive with AI, showcasing MIT’s Orbit AI Jetpacks and their applications in the startup ecosystem."
    },
    {
      date: "3/6",
      time: "TBD",
      name: "Will Brierly",
      role: "Founder",
      company: "DreamKey",
      topic: "DreamKey: The Future of AI Entertainment",
      linkedinUrl: "https://www.linkedin.com/in/williambrierly",
      videoUrl: "",
      videoUrlEmbed: "",
      description:
        "DreamKey is a platform for creating real-time, interactive long-form multi-character animated TV shows. Built by a team of entertainment and industry veterans (Adult Swim, Harmonix, Bethesda, TeamCoco, G4TV, Aerosmith) who have won Emmys, Grammys, and more. The platform has built-in royalty tracking and attribution protecting everyone involved in the creation process. More info: https://www.dreamkey.ai/"
    },
    {
      date: "3/6",
      time: "TBD",
      name: "Wes Sonnenreich",
      role: "co-CEO and co-Founder",
      company: "Practera",
      topic: "Accelerating SaaS Development with AI Agents",
      linkedinUrl: "https://www.linkedin.com/in/sonnenreich",
      videoUrl: "",
      videoUrlEmbed: "",
      description:
        "An overview of 00SaaS, an open-source Next.js template designed to help AI agents rapidly build SaaS applications with built-in authentication, multi-tenancy, and agent-oriented optimizations."
    }
  ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
        {/* Header and event info */}
        <div className="text-white flex flex-col items-center text-center pt-24">
          <div className="text-4xl sm:text-6xl mt-8 mb-4 font-medium lg:font-bold">
            April AI Boston Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
            Anote / Mindstone AI Event
          </div>
          <div className="flex flex-col mx-auto md:flex-row justify-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign(
                  "https://community.mindstone.com/events/mindstone_boston_ai_march_meetup"
                );
              }}
            >
              Register Now
            </button>
            <a
              href="mailto:nvidra@anote.ai"
              className="btn-black w-full sm:w-auto flex justify-center items-center"
            >
              Contact Speakers
            </a>
          </div>
        </div>

        {/* <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4 mt-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Registration</h2>
          <p className="text-sm text-gray-400 mb-6 text-center">
            Join us at Microsoft NERD Center, Boston on 3/10 from 6 PM EST to 9 PM EST.
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

            <input type="hidden" name="event_sheet" value={formData.event_sheet} />
            <input type="hidden" name="event_title" value={formData.event_title} />
            <input type="hidden" name="event_date" value={formData.event_date} />
            <input type="hidden" name="event_time" value={formData.event_time} />
            <input
              type="hidden"
              name="event_dateTimeStart"
              value={formData.event_dateTimeStart}
            />
            <input
              type="hidden"
              name="event_dateTimeEnd"
              value={formData.event_dateTimeEnd}
            />
            <input
              type="hidden"
              name="event_location"
              value={formData.event_location}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
            >
              Register Now
            </button>
          </form>
          {submissionStatus && (
            <p className="mt-4 text-center text-sm">{submissionStatus}</p>
          )}
          <p className="text-center mt-4 text-sm">
            Email{" "}
            <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
              nvidra@anote.ai
            </a>{" "}
            for questions.
          </p>
        </div> */}

        {/* Agenda Table */}
        <div className="agenda-container md:mx-20">
        {/* <h1 className="text-4xl sm:text-5xl mt-8 mb-4 mx-auto font-medium text-center lg:font-bold text-white pb-4">
           AI Meetup Agenda
          </h1> */}
          <table className="agenda-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Role</th>
                <th>Talk Topic</th>
              </tr>
            </thead>
            <tbody>
              {agendaItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href={item.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </td>
                  <td>{item.company}</td>
                  <td>{item.role}</td>
                  <td>{item.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MindstoneAprilBostonBefore;
