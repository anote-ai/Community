// import AIDayVideo from "../AIDayVideo";
// import "../../landing_page_styles/Agenda.css";
// import React, { useState } from "react";
// import "../../landing_page_styles/Registrations.css";
// // import AIDaySummit2025Agenda from "./AIDaySummit2025Agenda";
// // import AIDaySummit2025PartnerLogos from "./AIDaySummit2025PartnerLogos";
// // import AIDaySummit2025PreferredPartnerLogos from "./AIDaySummit2025PreferredPartnerLogos";


// function Jan2026() {
//     var agendaItems = [
//         // {
//         //     name: "Princy Patel",
//         //     role: "Graduate Student",
//         //     company: "Northeastern",
//         //     linkedinUrl: "https://www.linkedin.com/in/princy-patel-4a7a19206/",
//         //     topic: "Practical AI Agents",
//         //     description: "TBD"
//         // },
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


//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email_address: "",
//     company_name: "",
//     job_title: "",
//     linkedin_url: "",
//     // Hard-coded event details
//     event_sheet: "Boston - May 2025",
//     event_title: "May AI Boston Meetup",
//     event_date: "5/9",
//     event_time: "6 PM EST to 9 PM EST",
//     event_dateTimeStart: "2025-05-09T18:00:00-05:00",
//     event_dateTimeEnd: "2025-05-09T21:00:00-05:00",
//     event_location: "Microsoft NERD Center, Boston"
//   });
//   const [submissionStatus, setSubmissionStatus] = useState("");

//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbzkUdTtNDsmmBmoW58lv7vnZbCHNX9S6xnYZVdQziww4FL8LQ6-M4mSnAZZ1IBTrsDwag/exec"; // Replace with your Web App URL

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("formData");
//     console.log(JSON.stringify(formData));
//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       // When using mode: no-cors, response.ok may not work as expected,
//       // so we'll assume success after the fetch completes.
//       setSubmissionStatus("Success! Your registration was submitted.");
//       setFormData((prev) => ({
//         ...prev,
//         first_name: "",
//         last_name: "",
//         email_address: "",
//         company_name: "",
//         job_title: "",
//         linkedin_url: ""
//       }));
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       setSubmissionStatus("Failed to submit. Please check your connection.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
//       <div className="w-screen bg-gray-900 mb-20">
//             <div className="pt-10">
//                 <div className="text-white justify-center flex flex-col text-center pt-24">
//                     <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
//                         January 2026 AI Meetup NYC
//                     </div>
//                     <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
//                         Anote / Mindstone AI Event
//                     </div>
//                     <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
//                           <button
//     onClick={() => {
//       window.location.assign(
//         "https://community.mindstone.com/events/mindstone-new-york-january-ai-meetup"
//       );
//     }}
//     className="
//       inline-flex items-center justify-center
//       px-6 py-3
//       text-sm font-semibold
//       rounded-md
//       bg-[#defe47] text-[#111827]
//       hover:brightness-95
//       active:brightness-90
//       focus:outline-none focus:ring-2 focus:ring-[#defe47]/60 focus:ring-offset-2
//       transition
//       w-full sm:w-auto
//     "
//   >
//     Register Here
//   </button>

//   <a
//     href="mailto:nvidra@anote.ai"
//     className="
//       inline-flex items-center justify-center
//       px-6 py-3
//       text-sm font-semibold
//       rounded-md
//       bg-[#111827] text-[#defe47]
//       border-[#defe47] border-2
//       hover:bg-[#1f2937]
//       active:bg-[#0f172a]
//       focus:outline-none focus:ring-2 focus:ring-[#111827]/60 focus:ring-offset-2
//       transition
//       w-full sm:w-auto
//     "
//   >
//     Contact Speakers
//   </a>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//   );
// }

// export default Jan2026;

import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";
import React, { useState } from "react";
import "../../landing_page_styles/Registrations.css";
// import AIDaySummit2025Agenda from "./AIDaySummit2025Agenda";
// import AIDaySummit2025PartnerLogos from "./AIDaySummit2025PartnerLogos";
// import AIDaySummit2025PreferredPartnerLogos from "./AIDaySummit2025PreferredPartnerLogos";


function Jan2026() {
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
    <div className="w-screen bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-screen bg-gray-900 mb-20">
            <div className="pt-10">
                <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        January 2026 AI Meetup NYC
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row justify-center items-center gap-4 mt-4">
  <button
    onClick={() => {
      window.location.assign(
        "https://community.mindstone.com/events/mindstone-new-york-january-ai-meetup"
      );
    }}
    className="
      inline-flex items-center justify-center
      px-6 py-3
      text-sm font-semibold
      rounded-md
      bg-[#defe47] text-[#111827]
      hover:brightness-95
      active:brightness-90
      focus:outline-none focus:ring-2 focus:ring-[#defe47]/60 focus:ring-offset-2
      transition
      w-full sm:w-auto
    "
  >
    Register Here
  </button>

  <a
    href="mailto:nvidra@anote.ai"
    className="
      inline-flex items-center justify-center
      px-6 py-3
      text-sm font-semibold
      rounded-md
      bg-[#111827] text-[#defe47]
      border-[#defe47] border-2
      hover:bg-[#1f2937]
      active:bg-[#0f172a]
      focus:outline-none focus:ring-2 focus:ring-[#111827]/60 focus:ring-offset-2
      transition
      w-full sm:w-auto
    "
  >
    Contact Speakers
  </a>
</div>

                </div>
                </div>
            </div>
        </div>
  );
}

export default Jan2026;