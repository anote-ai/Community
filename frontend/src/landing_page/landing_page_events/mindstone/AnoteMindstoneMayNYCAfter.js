import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneNYCMayAfter() {
    var agendaItems = [
        {
            date: "5/7/2025, 6:35 PM EST - 6:55 PM EST",
            name: "Shaun Ho",
            company: "Sappling Data",
            role: "AI Engineer",
            topic: "Investigating the Effects of Domain-Specific Fine-Tuning on LLM Reasoning",
            linkedinUrl: "https://www.linkedin.com/in/shaun-ho/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=Osx5RGvDjWE",
            videoUrlEmbed: "https://www.youtube.com/embed/Osx5RGvDjWE",
            description: "Fine-tuning LLMs on domain-specific data improves performance on benchmarks, but to what degree does it benefit real-world applications? This investigation, which was recently published at a European AI & Law conference, analyzed the extent to which fine-tuning an LLM on legal data enabled it to improve its utilization of legal domain-specific concepts in the way attorneys formulate and use them every day, with surprising implications for model selection and training regime formulation."
        },
        {
            date: "5/7/2025, 6:55 PM EST - 7:15 PM EST",
            name: "Haoyun Feng",
            company: "Elevance Health",
            role: "Director of Data Science",
            topic: "How AI can help you understand and apply scientific publications",
            linkedinUrl: "https://www.linkedin.com/in/haoyun-feng-a1294a34/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=m_ur8K2gb4Y",
            videoUrlEmbed: "https://www.youtube.com/embed/m_ur8K2gb4Y",
            description: "In this talk, we'll explore how AI techniques, specifically Large Language Model (LLM) agents and Retrieval Augmented Generation (RAG), can help you quickly and easily comprehend complex research papers, extracting key insights and identifying practical applications. The session will include a live demonstration showcasing how to build an interesting innovative project leveraging learnings from scientific papers."
        },
        {
            date: "5/7/2025, 7:15 PM EST - 7:35 PM EST",
            name: "Uri Goren",
            role: "CEO",
            company: "Argmax",
            linkedinUrl: "https://www.linkedin.com/in/ugoren/",
            topic: "How LLMs improve in-site search",
            description: "When we think of large language models, we instinctively picture ChatGPT. OpenAI’s early dominance made “chatbots” the default LLM interface. But here’s the thing—we don’t need more chatbots. Conversational UIs are often clunky and unnecessary for many user needs. Instead, we believe the real opportunity lies in supercharging the classic search bar. This talk will challenge the chatbot-first mindset and show how LLMs can quietly but powerfully transform in-site search experiences—driving better results, boosting user satisfaction, and increasing retention. We’ll share practical, low-effort strategies to win in search without falling into the chatbot hype.",
            videoUrl: "https://www.youtube.com/watch?v=oC0Che0VzhE",
            videoUrlEmbed: "https://www.youtube.com/embed/oC0Che0VzhE",
        }
    ];


    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            May NYC AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/mindstone-anote-ny-may-ai-meetup");
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

export default AnoteMindstoneNYCMayAfter;
