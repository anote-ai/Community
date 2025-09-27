import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneDecemberAfter() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Chloe Zhu",
            role: "Director",
            company: "Ensemblex",
            topic: "Say Yes to High Stakes Decisions and Heavy Regulations",
            linkedinUrl: "https://www.linkedin.com/in/chloe-zhu-cfa/",
            videoUrl: "https://www.youtube.com/watch?v=2GIqkxpxxjQ",
            videoUrlEmbed: "https://www.youtube.com/embed/2GIqkxpxxjQ",
            description: "How AI can be applied in high-stakes decisions like credit underwriting in a heavily regulated industry like financial services. Field notes from Ensemblex, a leader in applying AI in finance for over a decade."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Nana Miyashita",
            role: "Product Manager",
            company: "You.com",
            topic: "Making LLMs more Transparent: Advanced Source Controls & Reasoning",
            linkedinUrl: "https://www.linkedin.com/in/nanamiyashita/",
            videoUrl: "https://www.youtube.com/watch?v=JNgwtI2E_pY",
            videoUrlEmbed: "https://www.youtube.com/embed/JNgwtI2E_pY",
            description: "Be 10x more productive with AI by limiting which web sources to pull from and by employing a PhD-level reasoning agent to research complex topics. Hear from Nana Miyashita (PM at You.com, ex-Meta) about how you.com built these features and how to use them for work."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Dev Rishi Khare",
            role: "Co-Founder",
            company: "Curriculo",
            topic: "Building an LLM Product from Scratch",
            linkedinUrl: "https://www.linkedin.com/in/dev-rishi-khare/",
            videoUrl: "https://www.youtube.com/watch?v=4ZpUuH5hvqU",
            videoUrlEmbed: "https://www.youtube.com/embed/4ZpUuH5hvqU",
            description: "We will cover the fundamentals of the new paradigm of setting up a reliable machine learning pipeline and dive into the orchestration and fine-tuning techniques necessary for a robust LLM product. The talk will focus on debunking well-known AI myths along with a focus on owning your own AI solutions and ethics."
        }
    ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            December AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_december_4th");
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

export default MindstoneDecemberAfter;