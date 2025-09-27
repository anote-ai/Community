import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneSeptemberAfter() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Emma Lawler",
            role: "Founder / CEO",
            company: "Velvet",
            topic: "Building AI Into Your Product",
            theme: "",
            linkedinUrl: "https://www.linkedin.com/in/emmalawler/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=nSnk5sSmatU",
            videoUrlEmbed: "https://www.youtube.com/embed/nSnk5sSmatU",
            description: "Velvet is AI-first data platform that helps you warehouse your LLM requests to query, test, and train AI features. Emma will share tangible lessons learned building best-in-class AI features and how to leverage AI data to make impactful product decisions. Velvet enables you to warehouse OpenAI and Anthropic logs to PostgreSQL. Swap two lines of code to get started. Use logs to analyze, evaluate, and generate datasets."
        },
        // {
        //     date: "8/15, 6:55 PM EST - 7:15 PM EST",
        //     name: "Naveen Mohideen",
        //     role: "Founder / CEO",
        //     company: "Guava",
        //     topic: "AI-Powered Integration Tests",
        //     theme: "",
        //     linkedinUrl: "https://www.linkedin.com/in/naveen-mohideen/",
        //     talkUrl: "",
        //     videoUrl: "",
        //     videoUrlEmbed: "",
        //     description: "Naveen will do a demo of Guava and show how users can utilize it to write end-to-end integration tests in a matter of minutes using AI."
        // },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Scott Werner",
            role: "Founder / CEO",
            company: "Sublayer",
            topic: "Building Your Own AI-powered Devtools",
            theme: "",
            linkedinUrl: "https://www.linkedin.com/in/wernerscott/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=f93Q1BtdemE",
            videoUrlEmbed: "https://www.youtube.com/embed/f93Q1BtdemE",
            description: "Scott will talk about the future of app development by rapidly creating small AI apps to quickly build custom AI devtools for speeding up development time. Sublayer is self-assembling, model-agnostic, AI Agent framework in Ruby that allows you to effortlessly create generative AI-powered automations."
        }
    ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            September AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_september_24_meetup");
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

export default MindstoneSeptemberAfter;