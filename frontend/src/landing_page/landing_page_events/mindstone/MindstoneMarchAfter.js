import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneMarchAfter() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Gil",
            role: "AI Specialist",
            company: "Merlin BI",
            topic: "Upgrading AI Data Reasoning",
            theme: "AI Data Reasoning",
            linkedinUrl: "https://www.linkedin.com/company/merlin-bi",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=EFQDxRqeY2A",
            videoUrlEmbed: "https://www.youtube.com/embed/EFQDxRqeY2A",
            description: "This talk explores into how LLMs work, the limitations of their current reasoning capabilities, and provides a practical example of how Merlin BI, an early-gen AI startup from Toronto, has deepened these reasoning skills. Gil will also open the discussion on future possibilities and the next frontiers in AI data reasoning."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Sakshi Pandey",
            role: "Product Manager",
            company: "Amazon",
            topic: "How to Build a Private Chatbot",
            theme: "Secure AI Solutions",
            linkedinUrl: "https://www.linkedin.com/in/sakshipandey0907/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=t7yrX7iirdM",
            videoUrlEmbed: "https://www.youtube.com/embed/t7yrX7iirdM",
            description: "In this presentation, Sakshi explores the creation of a secure financial chatbot that keeps data confined to a single silo, allowing users to upload documents and interact for answers. The session covers using Retrieval-Augmented Generation (RAG) for credible citations to enhance answer reliability, and highlights how using LLAMA2 enables running large language models directly on your device, ensuring all data remains secure and local."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Matthew Iles",
            role: "Founder / CEO",
            company: "Mojito",
            topic: "An Intro to Deep Tech x AI",
            theme: "Deep Tech & AI",
            linkedinUrl: "https://www.linkedin.com/in/matthewiles/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=e6hs9Dxoi_U",
            videoUrlEmbed: "https://www.youtube.com/embed/e6hs9Dxoi_U",
            description: "This talk provides an overview of the importance and growth of Deep Tech, focusing on its integration with AI. Matthew Iles will dive into the rapid pace at which Deep Tech is expanding, the potential for significant advancements within the next decade, and the unprecedented nature of multiple concurrent breakthroughs in the field."
        }
    ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            March AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/mindstone_ny_ai_march_meetup");
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

export default MindstoneMarchAfter;