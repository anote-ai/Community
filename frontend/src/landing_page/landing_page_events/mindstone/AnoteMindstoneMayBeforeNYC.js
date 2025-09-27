import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";
import React, { useState } from "react";
import "../../landing_page_styles/Registrations.css";
// import AIDaySummit2025Agenda from "./AIDaySummit2025Agenda";
// import AIDaySummit2025PartnerLogos from "./AIDaySummit2025PartnerLogos";
// import AIDaySummit2025PreferredPartnerLogos from "./AIDaySummit2025PreferredPartnerLogos";


function AnoteMindstoneMayBeforeNYC() {
    var agendaItems = [
        {
            date: "5/7/2025, 6:35 PM EST - 6:55 PM EST",
            name: "Shaun Ho",
            company: "Sappling Data",
            role: "AI Engineer",
            topic: "TBD",
            theme: "TBD",
            linkedinUrl: "https://www.linkedin.com/in/shaun-ho/",
            talkUrl: "",
            videoUrl: "",
            videoUrlEmbed: "",
            description: ""
        },
        {
            date: "5/7/2025, 6:55 PM EST - 7:15 PM EST",
            name: "Haoyun Feng",
            company: "Elevance Health",
            role: "Director of Data Science",
            topic: "TBD",
            theme: "TBD",
            linkedinUrl: "https://www.linkedin.com/in/haoyun-feng-a1294a34/",
            talkUrl: "",
            videoUrl: "",
            videoUrlEmbed: "",
            description: ""
        },
        // {
        //     date: "5/7/2025, 7:15 PM EST - 7:35 PM EST",
        //     name: "Rumman Chowdhury",
        //     company: "Humane Intelligence",
        //     role: "Founder / CEO",
        //     topic: "Humane Intelligence Platform",
        //     theme: "TBD",
        //     linkedinUrl: "https://www.linkedin.com/in/rumman/",
        //     talkUrl: "",
        //     videoUrl: "",
        //     videoUrlEmbed: "",
        //     description: ""
        // },
        {
            name: "Uri Goren",
            role: "CEO",
            company: "Argmax",
            linkedinUrl: "https://www.linkedin.com/in/ugoren/",
            topic: "From A/B testing to contextual bandits",
            decsription: "A/B is the gold-standard for any performance marketer. However, A/B testing is costly, and it might take some time to converge. The question of when to stop an A/B test is a common topic for debate, as it may yield suboptimal results. In this talk we would discuss the pitfalls of A/B testing, we would describe a broader framework of experimentation and dive in to the details. We would introduce multi-armed bandits, and deep dive into incorporating machine learning into the experimentation framework with Contextual multi armed bandits. We would summarize the talks with a few guidelines on when to use A/B testing and when to use Bandits.."
        }
    ];


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    company_name: "",
    job_title: "",
    linkedin_url: "",
    // Hard-coded event details
    event_sheet: "Boston - May 2025",
    event_title: "May AI NYC Meetup",
    event_date: "5/7",
    event_time: "6 PM EST to 9 PM EST",
    event_dateTimeStart: "2025-05-07T18:00:00-05:00",
    event_dateTimeEnd: "2025-05-07T21:00:00-05:00",
    event_location: "CIBC, New York"
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzkUdTtNDsmmBmoW58lv7vnZbCHNX9S6xnYZVdQziww4FL8LQ6-M4mSnAZZ1IBTrsDwag/exec"; // Replace with your Web App URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData");
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // When using mode: no-cors, response.ok may not work as expected,
      // so we'll assume success after the fetch completes.
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

  return (
    <div>
    <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          May AI NYC Meetup Registration
        </h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Join us at CIBC in New York on 5/7 from 6 PM EST to 9 PM EST.
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
          {/* Hidden fields for event details */}
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
      </div>
      </div>
      {/* <div> */}
      <div className="w-screen bg-gray-900 mb-20">
            <div className="pt-10">
                {/* <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        May AI Meetup
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
                        <button
                            className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
                            onClick={() => {
                                window.location.assign("https://community.mindstone.com/events/ny_ai_march_5th_2025");
                            }}
                        >
                            Register Here
                        </button>
                        <a
                            href={"mailto:nvidra@anote.ai"}
                            className="btn-black w-full sm:w-auto flex justify-center items-center"
                        >
                            Contact Speakers
                        </a>
                    </div>
                </div> */}
                <h1 className="text-center">Speakers / Agenda</h1>
                <div className="agenda-container md:mx-20">
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
                                    <td>
                                        {item.role}
                                    </td>
                                    <td>{item.topic}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AnoteMindstoneMayBeforeNYC;