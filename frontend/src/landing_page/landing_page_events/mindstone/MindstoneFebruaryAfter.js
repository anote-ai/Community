import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneFebruaryAfter() {
    var agendaItems = [
        {
            name: "Pablo Vega Bahar",
            role: "Director",
            company: "Fitch Ratings",
            linkedinUrl: "https://www.linkedin.com/in/pablo-vega-behar/",
            topic: "Getting Started with AI Agents, using examples from finance",
            videoUrl: "https://www.youtube.com/watch?v=kWL5S0j8pf0",
            videoUrlEmbed: "https://www.youtube.com/embed/kWL5S0j8pf0",
            description: "I will show the differences between human-driven and agent-executed LLM usage, guided by a financial document information retrieval example. The session is intended for people with knowledge of Python, to introduce them to coding their own LLM-powered agents."
        },
        {
            name: "Laura Cane Malahel",
            role: "Entrepreneur",
            company: "Two Sigma",
            linkedinUrl: "https://www.linkedin.com/in/lauracanemahalel/",
            topic: "Meet Your Dream Tutor: How to Learn Anything with GenAI.",
            videoUrl: "https://www.youtube.com/watch?v=2LOeYHc_6bI",
            videoUrlEmbed: "https://www.youtube.com/embed/2LOeYHc_6bI",
            description: "Unlock the power of Generative AI as your personalized, ever-patient tutor. Whether you’re looking to become a better coder, prep for a professional exam, teach yoga in Spanish, or help your child with homework, AI can adapt to your learning needs in any subject. This session will show you how to harness AI for continuous learning and growth."
        },
        {
            name: "Joshua Wohle",
            role: "Founder",
            company: "Mindstone",
            linkedinUrl: "https://www.linkedin.com/in/joshuawohle/",
            topic: "The Future Of Work, Productivity & Beyond",
            videoUrl: "https://www.youtube.com/watch?v=GSpLQ_fQiF4",
            videoUrlEmbed: "https://www.youtube.com/embed/GSpLQ_fQiF4",
            description: "Talk about what the future might/will look like with all of this technology in it. Showcases an amazing presentation made by Gamma and discusses how AI will affect the workplace."
        }
    ];

    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            February AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_february_2025");
              }}
            >
              Learn More
            </button>
            <a
              href={"mailto:nvidra@anote.ai"}
              className="btn-black w-full sm:w-auto flex justify-center items-center"
            >
              Contact Speakers
            </a>
            </div> */}
        </div>
        <div className="agenda-container md:mx-20">
          <table className="agenda-table ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Role</th>
                {/* <th>Theme</th> */}
                <th>Talk Topic</th>
                {/* <th className="desktop-only">Link to Slides</th> */}
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
                  {/* <td>{item.date}</td> */}
                  <td>{item.company}</td>
                  <td>{item.role}</td>
                  {/* <td>{item.theme}</td> */}
                  <td>{item.topic}</td>
                  {/* <td className="desktop-only">
                    <a
                      href={item.talkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Slides
                    </a>
                  </td> */}
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
          </table>
      </div>
    </div>
    <div className="LP-FAQs pt-10 bg-gray-900">
    <div className="FAQ">
      <div className={"LP-Sample-Projects bg-gray-900"}>
        {agendaItems.map((item, index) => (
          <div key={index}>
            <h1 className="TutorialHeader mb-3 bg-gray-900">
              {item.topic}
            </h1>
            <div className="LP-Contact">
              <AIDayVideo
                title={item.name}
                description={item.description}
                capability={item.role}
                sector={item.topic} // You can customize this if needed
                type={item.role}
                videoUrl={item.videoUrlEmbed}
                slideUrl={item.linkedinUrl}
                linkedinUrl={item.linkedinUrl}
              />
              <hr className="Green-Line-New" style={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
    );
}

export default MindstoneFebruaryAfter;
