import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function BTTTalks() {
    var agendaItems = [
        {
            date: "12/10, 6:00 PM EST - 6:20 PM EST",
            name: "Reena Tandon",
            role: "Machine Learning Engineer",
            company: "Break Through Tech Team 1A",
            topic: "Fine-Tuning LLMs for Financial Data Extraction",
            linkedinUrl: "https://www.linkedin.com/in/reena-tandon/",
            videoUrl: "https://www.youtube.com/watch?v=0eYaC5xzMSk",
            videoUrlEmbed: "https://www.youtube.com/embed/0eYaC5xzMSk",
            description: "This presentation focused on developing fine-tuned large language models to extract numerical information from financial data, utilizing private or local LLMs like Llama. This approach incorporates distillation and quantization techniques to enhance runtime performance while maintaining accuracy and security."
        },
        {
            date: "12/10, 6:20 PM EST - 6:40 PM EST",
            name: "Aisha Ahmad",
            role: "Machine Learning Engineer",
            company: "Break Through Tech Team 1B",
            topic: "Autonomous AI Coding Agents",
            linkedinUrl: "https://www.linkedin.com/in/aishaahmad-cs/",
            videoUrl: "https://www.youtube.com/watch?v=K2KUVdZjZnc",
            videoUrlEmbed: "https://www.youtube.com/embed/K2KUVdZjZnc",
            description: "This presentation explored the potential of autonomous AI coding agents capable of automatically and iteratively generating feature requests, implementing code, and pushing updates to a GitHub repository in a recursive workflow. Key highlights included multi-agent AI frameworks like CrewAI and AutoGPT to orchestrate collaborative agent teams, such as Product Manager Agent, Software Engineer Agent, and Engineering Manager Agent, demonstrated through a live product demo."
        },
        {
            date: "12/10, 6:40 PM EST - 7:00 PM EST",
            name: "Manoj Nath Yogi",
            role: "Machine Learning Engineer",
            company: "Break Through Tech Team 1B",
            topic: "Multimodal Retrieval-Augmented Generation (RAG) Systems",
            linkedinUrl: "https://www.linkedin.com/in/manoj-nath-yogi/",
            videoUrl: "https://www.youtube.com/watch?v=kkBNeGIUcfk",
            videoUrlEmbed: "https://www.youtube.com/embed/kkBNeGIUcfk",
            description: "This presentation introduced a Multimodal Retrieval-Augmented Generation system designed for comprehensive data processing. The system integrates Whisper for audio-to-text transcription, a Residual CNN for image-to-text conversion, and a custom neural network for video-to-text transformation. These multimodal processing capabilities are unified within a chatbot interface, enabling users to upload diverse file formats—including text, image, video, and audio—and receive accurate, context-aware answers to their queries."
        }
    ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            Break Through AI
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Fall AI Presentations
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.location.assign("https://tech.cornell.edu/impact/break-through-tech/break-through-ai/");
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

export default BTTTalks;