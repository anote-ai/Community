import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneMayBostonAfter() {
    var agendaItems = [
        {
            date: "5/9/2025, 6:35 PM EST - 6:55 PM EST",
            name: "Stefano Piano",
            company: "Mindstone",
            role: "Head of Community",
            topic: "How to build a custom GPT",
            linkedinUrl: "https://www.linkedin.com/in/stefano-piano/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=Uqp1JNpyeDM",
            videoUrlEmbed: "https://www.youtube.com/embed/Uqp1JNpyeDM",
            description: "In this video, Stefano from Mindstone will show you how to build a Custom GPT to help simplify the prompting process for routine tasks. He provides a product demo of a J&J Custom GPT."
        },
        {
            date: "5/9/2025, 6:55 PM EST - 7:15 PM EST",
            name: "Andrei Radulescu",
            company: "DocRouter",
            role: "Founder",
            topic: "DocRouter.AI as a drag-and-drop AI document processing tool",
            linkedinUrl: "https://www.linkedin.com/in/andrei-radulescu-banu/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=n-h-HbtWydg",
            videoUrlEmbed: "https://www.youtube.com/embed/n-h-HbtWydg",
            description: "This is a hands-on demo of DocRouter.AI as a drag-and-drop AI document processing tool. At the Sundai MIT hackathon the previous week, I worked with Della Ando to develop a flow that grades 5th grade quizzes against a configured rubric. DocRouter implements the back end, with the teacher-in-the-loop able to correct the evaluations. A front-end UI can be attached, specialized to this application - the DocRouter being the tech stack accelerator, just managing prompts and evaluations, and hiding the complexity of LLM workflows. This paradigm, of quickly developing a UI front end, is made easier by vibe coding tools like Manus, Bolt AI, Cursor, and Windsurf. We also discuss Model Context Protocol (MCP), and how it transforms the way we integrate software. And we show how Claude Desktop integrates, with MCP, with the DocRouter, for optimization and business intelligence applications."
        },
    ];


    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            May Boston AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/mindstone-anote-boston-may-ai-meetup");
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
            </div>
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

export default AnoteMindstoneMayBostonAfter;