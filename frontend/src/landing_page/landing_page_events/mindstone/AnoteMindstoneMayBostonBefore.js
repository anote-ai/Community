// import AIDayVideo from "../AIDayVideo";
// import "../../landing_page_styles/Agenda.css";

// function AnoteMindstoneMayBostonBefore() {
//     var agendaItems = [
//         {
//             name: "Princy Patel",
//             role: "Graduate Student",
//             company: "Northeastern",
//             linkedinUrl: "https://www.linkedin.com/in/princy-patel-4a7a19206/",
//             topic: "Practical AI Agents",
//             description: "TBD"
//         },
//         {
//             // date: '2/12/2025',
//             // time: '3:30 PM EST to 3:45 PM EST',
//             name: 'Swapneel Mehta',
//             linkedinUrl: 'https://www.linkedin.com/in/swapneelm/',
//             role: 'Founder / CEO',
//             company: 'SimPPL',
//             topic: 'AI for Social Media Understanding',
//             description: 'TBD',
//             // speakerBio: "",
//             // talkUrl: "",
//             // videoUrl: 'https://www.youtube.com/watch?v=FozftffJi1g',
//             // videoUrlEmbed: 'https://www.youtube.com/embed/FozftffJi1g'
//           },
//           {
//             name: "Vinzenz Aichlseder",
//             role: "Graduate Student",
//             company: "Harvard",
//             topic: "AI in Public Policy",
//             linkedinUrl: "https://www.linkedin.com/in/vinzenz-karl-aichlseder/",
//             description: "TBD"
//         },
//     ];

//     return (
//         <div className="w-screen bg-gray-900 mb-20">
//             <div className="pt-10">
//                 <div className="text-white justify-center flex flex-col text-center pt-24">
//                     <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
//                         May 9th AI Meetup
//                     </div>
//                     <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
//                         Anote / Mindstone AI Event
//                     </div>
//                     <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
//                         <button
//                             className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
//                             onClick={() => {
//                                 window.location.assign("https://community.mindstone.com/events/ny_ai_march_5th_2025");
//                             }}
//                         >
//                             Register Here
//                         </button>
//                         <a
//                             href={"mailto:nvidra@anote.ai"}
//                             className="btn-black w-full sm:w-auto flex justify-center items-center"
//                         >
//                             Contact Speakers
//                         </a>
//                     </div>
//                 </div>
//                 <div className="agenda-container md:mx-20">
//                     <table className="agenda-table">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Company</th>
//                                 <th>Email</th>
//                                 <th>Talk Topic</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {agendaItems.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>
//                                         <a
//                                         href={item.linkedinUrl}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         >
//                                         {item.name}
//                                         </a>
//                                     </td>
//                                     <td>{item.company}</td>
//                                     <td>
//                                         {item.role}
//                                     </td>
//                                     <td>{item.topic}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AnoteMindstoneMayBostonBefore;

import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";
import React, { useState } from "react";
import "../../landing_page_styles/Registrations.css";
// import AIDaySummit2025Agenda from "./AIDaySummit2025Agenda";
// import AIDaySummit2025PartnerLogos from "./AIDaySummit2025PartnerLogos";
// import AIDaySummit2025PreferredPartnerLogos from "./AIDaySummit2025PreferredPartnerLogos";


function AnoteMindstoneMayBostonBefore() {
    var agendaItems = [
        // {
        //     name: "Princy Patel",
        //     role: "Graduate Student",
        //     company: "Northeastern",
        //     linkedinUrl: "https://www.linkedin.com/in/princy-patel-4a7a19206/",
        //     topic: "Practical AI Agents",
        //     description: "TBD"
        // },
        {
            // date: '2/12/2025',
            // time: '3:30 PM EST to 3:45 PM EST',
            name: 'Swapneel Mehta',
            linkedinUrl: 'https://www.linkedin.com/in/swapneelm/',
            role: 'Founder / CEO',
            company: 'SimPPL',
            topic: 'AI for Social Media Understanding',
            description: 'TBD',
            // speakerBio: "",
            // talkUrl: "",
            // videoUrl: 'https://www.youtube.com/watch?v=FozftffJi1g',
            // videoUrlEmbed: 'https://www.youtube.com/embed/FozftffJi1g'
          },
          {
            name: "Vinzenz Aichlseder",
            role: "Graduate Student",
            company: "Harvard",
            topic: "AI in Public Policy",
            linkedinUrl: "https://www.linkedin.com/in/vinzenz-karl-aichlseder/",
            description: "TBD"
        },
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
    event_title: "May AI Boston Meetup",
    event_date: "5/9",
    event_time: "6 PM EST to 9 PM EST",
    event_dateTimeStart: "2025-05-09T18:00:00-05:00",
    event_dateTimeEnd: "2025-05-09T21:00:00-05:00",
    event_location: "Microsoft NERD Center, Boston"
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
          May AI Boston Meetup Registration
        </h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Join us at Microsoft NERD Center in Boston on 5/9 from 6 PM EST to 9 PM EST.
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

export default AnoteMindstoneMayBostonBefore;