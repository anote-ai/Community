import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneMarchAfter() {
    const agendaItems = [
        {
          date: "3/6",
          time: "TBD",
          name: "Doug Williams",
          role: "Product Lead",
          company: "Orbit Software, MIT Sloan",
          topic: "Demoing Practical AI Tools",
          linkedinUrl: "https://www.linkedin.com/in/dcwusa",
          videoUrl: "https://www.youtube.com/watch?v=zhJVgUs7pKg",
          videoUrlEmbed: "https://www.youtube.com/embed/zhJVgUs7pKg",
          description:
            "A demonstration from Doug Williams from MIT's Entrepreneurship Center of how entrepreneurs can be more productive with AI, showcasing MIT’s Orbit AI Jetpacks and their applications in the startup ecosystem."
        },
        {
          date: "3/6",
          time: "TBD",
          name: "Will Brierly",
          role: "Founder",
          company: "DreamKey",
          topic: "DreamKey: The Future of AI Entertainment",
          linkedinUrl: "https://www.linkedin.com/in/williambrierly",
          videoUrl: "https://www.youtube.com/watch?v=wcC6jq3VPFE",
          videoUrlEmbed: "https://www.youtube.com/embed/wcC6jq3VPFE",
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
          videoUrl: "https://www.youtube.com/watch?v=f89KWYTx7J4",
          videoUrlEmbed: "https://www.youtube.com/embed/f89KWYTx7J4",
          description:
            "An overview of 00SaaS, an open-source Next.js template designed to help AI agents rapidly build SaaS applications with built-in authentication, multi-tenancy, and agent-oriented optimizations."
        }
      ];

    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            March Boston AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
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

export default AnoteMindstoneMarchAfter;
