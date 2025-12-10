// import React, { useState } from "react";
// import "../../landing_page_styles/Agenda.css";
// import "../../landing_page_styles/Registrations.css";

// function AIDayFall2025() {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     job_title: "",
//     company_name: "",
//     email_address: "",
//     linkedin_url: "",
//     event_sheet: "AI Day Fall 2025",
//     event_title: "AI Day Summit: Fall 2025",
//     event_date: "12/9",
//     event_time: "5:30 PM EST to 10 PM EST",
//     event_dateTimeStart: "2025-12-09T17:30:00-04:00",
//     event_dateTimeEnd: "2025-12-09T22:00:00-04:00",
//     event_location: "Virtual"
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [submissionError, setSubmissionError] = useState("");

//   const scriptURL =
//     "https://script.google.com/macros/s/AKfycbygdbgHUNF-eSIW75nHR4MkQiCXheujnDUrXxZgDhxRsxZFSPggX4rNfoJ2M1fyQhpUAA/exec";

//     const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsLoading(true); // start loading immediately
//   try {
//     await fetch(scriptURL, {
//       method: "POST",
//       mode: "no-cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     // show loading for a short moment, then success
//     setTimeout(() => {
//       setIsLoading(false);
//       setSubmitted(true);
//     }, 500); // 1 second feels snappy but gives feedback
//   } catch (error) {
//     console.error("Error submitting the form:", error);
//     setIsLoading(false);
//     setSubmissionError("Failed to submit. Please check your connection.");
//   }
// };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="w-screen bg-gray-900 text-white flex items-center justify-center">
//       <div className="w-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-8">
//         <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
//           Anote's AI Day Summit Fall 2025
//         </h1>

//         <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
//           {isLoading ? (
//     <div className="text-center py-12">
//       <h2 className="text-2xl font-bold text-blue-400 mb-4">⏳ Submitting...</h2>
//       <p className="text-gray-300">Please wait while we confirm your registration.</p>
//     </div>
//   ) : !submitted ? (
//             <>
//               <h2 className="text-3xl font-bold mb-4 text-center">
//                 AI Day Summit Fall Registration
//               </h2>
//               <p className="text-sm text-gray-400 mb-6 text-center">
//                 Join our waitlist for the AI Day Summit Fall 2025.
//               </p>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm mb-1">First Name</label>
//                   <input
//                     type="text"
//                     name="first_name"
//                     value={formData.first_name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-1">Last Name</label>
//                   <input
//                     type="text"
//                     name="last_name"
//                     value={formData.last_name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-1">Job Title</label>
//                   <input
//                     type="text"
//                     name="job_title"
//                     value={formData.job_title}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-1">Company Name</label>
//                   <input
//                     type="text"
//                     name="company_name"
//                     value={formData.company_name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email_address"
//                     value={formData.email_address}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-1">LinkedIn URL</label>
//                   <input
//                     type="url"
//                     name="linkedin_url"
//                     value={formData.linkedin_url}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>

//                 {/* hidden fields */}
//                 <input type="hidden" name="event_sheet" value={formData.event_sheet} />
//                 <input type="hidden" name="event_title" value={formData.event_title} />
//                 <input type="hidden" name="event_date" value={formData.event_date} />
//                 <input type="hidden" name="event_time" value={formData.event_time} />
//                 <input type="hidden" name="event_dateTimeStart" value={formData.event_dateTimeStart} />
//                 <input type="hidden" name="event_dateTimeEnd" value={formData.event_dateTimeEnd} />
//                 <input type="hidden" name="event_location" value={formData.event_location} />

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
//                 >
//                   Register Now
//                 </button>
//               </form>
//               {submissionError && (
//                 <p className="mt-4 text-center text-red-400">{submissionError}</p>
//               )}
//               <p className="text-center mt-4 text-sm">
//                 Email{" "}
//                 <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
//                   nvidra@anote.ai
//                 </a>{" "}
//                 for questions.
//               </p>
//             </>
//           ) : (
//             <div className="text-center py-12">
//               <h2 className="text-4xl font-bold text-green-400 mb-4">
//                 ✅ Success!
//               </h2>
//               <p className="text-lg mb-2">
//                 You are registered for <b>{formData.event_title}</b>
//               </p>
//               <p className="text-lg mb-2">
//                 📅 {formData.event_date} — {formData.event_time}
//               </p>
//               <p className="text-md text-gray-300">
//                 You should receive a confirmation email shortly.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AIDayFall2025;


import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AIDayFall2025() {
    var agendaItems = [
        {
            topic: "Break Through Tech - Anote 1A",
            theme: "Multilingual Language Model Evaluation and Fine Tuned Chatbot Enhancements",
            videoUrl: "https://www.youtube.com/watch?v=GWyYDq5EA-g",
            videoUrlEmbed: "https://www.youtube.com/embed/GWyYDq5EA-g",
            description: "This project focused on exploring and improving AI language and translation models through synthetic evaluation dataset creation, benchmark development, and integration into customized chatbots. The goal was to assess and compare language and translation models (e.g., ChatGPT, Claude, Llama) and deploy the best-performing models into user-facing applications. We focused on improving language-specific models for Chinese, Korean, Japanese, and Hebrew."
        },
        {
            topic: "Break Through Tech - Anote 1B",
            theme: "Model Leaderboard for benchmarking AI models across multiple domains and task types.",
            videoUrl: "https://www.youtube.com/watch?v=JuFF3WPQ1Hc",
            videoUrlEmbed: "https://www.youtube.com/embed/JuFF3WPQ1Hc",
            description: "This presentation introduces Anote’s Model Leaderboard, a comprehensive evaluation platform designed to benchmark AI models across a wide range of domains and task types. The leaderboard features more than 30 benchmark datasets spanning general language, finance, multilingual, science, code, and safety domains, and supports five core task types including text classification, named entity recognition (NER), question answering (QA), line-level QA, and retrieval. Models are evaluated using over 20 metrics, each accompanied by clear, detailed explanations to ensure transparency and interpretability of results. The platform includes a modern React-based user interface with multiple view modes, side-by-side model comparison, and full submission history tracking. On the backend, Anote leverages FastAPI with performance-focused features such as caching, rate limiting, and structured logging. Seamless integration with Hugging Face enables easy dataset imports, making the Model Leaderboard a scalable, end-to-end solution for rigorous and reproducible AI model evaluation."
        },
        {
            topic: "Break Through Tech - Anote 2A",
            theme: "Synthetic Data Generation for Images",
            videoUrl: "https://www.youtube.com/watch?v=RQdETLoJCfw",
            videoUrlEmbed: "https://www.youtube.com/embed/RQdETLoJCfw",
            description: "This project focuses on the development of an image synthetic data generation pipeline designed to create high-quality, customizable datasets for training computer vision models. The work involved building an end-to-end synthetic image generation system using two complementary approaches: a diffusion-based method leveraging OpenAI’s DALL·E model and a 3D rendering–based method using the BlenderProc SDK. Together, these approaches were aimed at reducing manual annotation time while enabling domain-specific dataset generation. The platform architecture integrates a React.js frontend with a Flask and Redis backend, and uses MongoDB alongside AWS S3 for data storage, allowing for seamless cross-platform coordination and asynchronous data generation workflows. The system supports standard export formats such as COCO and YOLO to ensure compatibility with common computer vision training pipelines. Using BlenderProc in particular, the project achieved automatic generation of diverse synthetic datasets with 100% pixel-perfect ground truth accuracy and more than five customizable parameters, resulting in a significant reduction in data labeling effort and overall training costs. In addition to the technical implementation, the project produced actionable insights and strategic recommendations to guide business decisions at Anote and support the evolution of its SyntheticData SDK and API."
        },
        {
            topic: "Break Through Tech - Anote 2B",
            theme: "Multimodal RAG Chatbot and Computer Vision Fine Tuning SDK",
            videoUrl: "https://www.youtube.com/watch?v=aMJGDz5ZgQ4",
            videoUrlEmbed: "https://www.youtube.com/embed/aMJGDz5ZgQ4",
            description: "The goal of this project was to build a multimodal Retrieval‑Augmented Generation (RAG) chatbot and a Computer Vision (CV) fine‑tuning SDK for object detection. The chatbot extends the Autonomous Intelligence baseline to support text, images, audio, and video, while Synthetic Data Generation supplies training and evaluation datasets to measure progress and improve model accuracy. The CV SDK provides APIs to upload data, fine‑tune YOLO / Faster R‑CNN / Grounding DINO, run predictions, and evaluate results with standard metrics."
        },
        {
            topic: "Cornell Tech Product Studio",
            theme: "Loopmind - AI Driven Route Optimization",
            videoUrl: "https://www.youtube.com/watch?v=_9quB3oSdZg",
            videoUrlEmbed: "https://www.youtube.com/embed/_9quB3oSdZg",
            description: "Cornell Tech's Product Studio is a foundational, required course for all master's students, immersing them in multidisciplinary teams to solve real-world tech challenges from major companies, developing and pitching new product or business ideas from concept to prototype, building practical skills in innovation, design, and entrepreneurship. It's the starting point for the broader Studio curriculum, which includes specialized tracks like Startup Studio and BigCo Studio for deeper dives into entrepreneurship or large corporations. Here you can find the presentation for Anote's Product Studio Team from Cornell Tech on Loopmind, an AI-driven route optimization platform designed to enhance logistics efficiency by leveraging advanced algorithms and real-time data analysis."
        },
        {
            topic: "DASH 3 (COA Generation)",
            theme: "Human Centered AI for Course of Action Generation",
            videoUrl: "https://www.youtube.com/watch?v=kfRCNZg-Hyg",
            videoUrlEmbed: "https://www.youtube.com/embed/kfRCNZg-Hyg",
            description: "DASH-3 was the third in a series of Air Force experiments for the Decision Advantage Sprint for Human-Machine Teaming program. These experiments focus on integrating artificial intelligence (AI) into command and control (C2) operations to speed up decision-making. Anote participated in DASH3, and built a human centered AI solution for Course of Action (COA) generation that scored in the top 3rd percentile of all vendors. The solution involved creating a user interface that allows military planners to interact with AI-generated COAs, providing feedback and refining the outputs. The system was designed to enhance human decision-making by offering AI-generated suggestions while keeping the human in the loop for final decisions. This approach aimed to improve the speed and quality of COA generation in complex military scenarios."
        },
        {
            topic: "Autonomous Intelligence",
            theme: "Automating tasks with multi agent AI workflows",
            videoUrl: "https://www.youtube.com/watch?v=QM1lecUowVc",
            videoUrlEmbed: "https://www.youtube.com/embed/QM1lecUowVc",
            description: "Autonomous Intelligence is an open-source research project by Anote that enables collaborative multi-agent AI systems. The framework provides the infrastructure to create, deploy, and coordinate specialized AI agents that can operate both independently and together in dynamic environments. Agents communicate through defined pathways while an orchestrator manages task distribution, ensuring efficient execution and seamless collaboration. This architecture allows the system to adapt to changing conditions, automatically selecting the best agents, tools, and workflows to tackle complex problems"
        }
    ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-5xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            Anote AI Day Summit - Fall 2025
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Making AI More Accessible
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                // window.open(
                //   "https://forms.gle/KJGXjcCw9QG6LJjb6",
                //   "_blank"
                // );
                window.location.assign("https://calendly.com/natanvidra/anote");
              }}
            >
              Schedule Demo
            </button>
            <button
              onClick={() => {
                window.open(
                    "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
                    "_blank"
                  );
              }}
              className="btn-black w-full sm:w-auto flex justify-center items-center"
            >
              View Agenda
            </button>

        </div> */}
        </div>
        {/* <div className="agenda-container md:mx-20"> */}
          {/* <table className="agenda-table ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Talk Topic</th>
                <th className="desktop-only">Link to Slides</th>
                <th className="desktop-only">Link to Presentation</th>
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
                  <td>{item.role}</td>
                  <td>{item.topic}</td>
                  <td className="desktop-only">
                    <a
                      href={item.talkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Slides
                    </a>
                  </td>
                  <td className="desktop-only">
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Presentation
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
      {/* </div> */}
    </div>
    <div className="LP-FAQs pt-10 bg-gray-900">
    <div className="FAQ">
      <div className={"LP-Sample-Projects bg-gray-900"}>
        {agendaItems.map((item, index) => (
          <div key={index}>
            <h1 className="TutorialHeader mb-3 bg-gray-900">
              AI Day Talk {index + 1}
            </h1>
            <div className="LP-Contact">
              <AIDayVideo
                title={item.topic}
                description={item.description}
                sector={item.theme} // You can customize this if needed
                videoUrl={item.videoUrlEmbed}
                slideUrl={item.videoUrl}
                linkedinUrl={item.videoUrl}
              />
              <hr className="Green-Line-New" style={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  )
}

export default AIDayFall2025;