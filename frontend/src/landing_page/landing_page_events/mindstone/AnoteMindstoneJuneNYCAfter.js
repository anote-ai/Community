import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneMayBostonAfter() {
    var agendaItems = [
    {
          date: "6/4/2025, 6:35 PM EST - 6:55 PM EST",
          name: "Natan Vidra",
          company: "Anote",
          role: "Founder / CEO",
          topic: "Human-Centered AI: Dynamic Systems for Optimal Model Performance",
          theme: "Human-Centered AI",
          linkedinUrl: "https://www.linkedin.com/in/natanvidra/",
          talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
          videoUrl: "https://www.youtube.com/watch?v=imWuregFoRM",
          videoUrlEmbed: "https://www.youtube.com/embed/imWuregFoRM",
          description: "Human-centered AI represents a new frontier in artificial intelligence, emphasizing dynamic, active-learning systems that adapt to the specific needs and data of end-users. This innovative approach integrates four key components—data labeling, training or fine-tuning large language models, prediction on test datasets, and evaluation—to ensure optimal model performance. By reducing hallucinations, offering customization, enhancing accuracy through active learning, and enabling the comparison and combination of multiple models, human-centered AI is poised to revolutionize applications in chatbots, spreadsheets, developer kits, and beyond. This technology provides a reliable, responsive, and user-centric AI experience, making it a powerful tool for a wide range of complex tasks."
      },
        {
            date: "6/4/2025, 6:55 PM EST - 7:15 PM EST",
            name: "Tal Navarro",
            company: "Social Lady",
            role: "Founder / CEO",
            topic: "AI For Automated Marketing",
            theme: "TBD",
            linkedinUrl: "https://www.linkedin.com/in/talnavarro/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=RQR2f0AlOlQ",
            videoUrlEmbed: "https://www.youtube.com/embed/RQR2f0AlOlQ",
            description: "How AI will unleash a new era of marketing. Tal goes through different AI based marketing tools such as Hey Gen and Gamma, and shows the potential of an AI marketing team."
        },
        {
            date: "6/4/2025, 7:15 PM EST - 7:35 PM EST",
            name: "Joshua Wohle",
            company: "Mindstone",
            role: "CEO and Co-Founder",
            topic: "Generative AI Video Generation",
            theme: "TBD",
            linkedinUrl: "https://www.linkedin.com/in/joshuawohle/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=k-3vorK2wLE",
            videoUrlEmbed: "https://www.youtube.com/embed/k-3vorK2wLE",
            description: "What skills will be valuable tomorrow, and what parallels can we draw to what happened in the past to get us some confidence on it? Josh goes through Veo-3 and the new advancements in AI generated movies"
        }
    ];


    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
                       <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        June AI Meetup
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
                        <button
                            className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
                            onClick={() => {
                                window.location.assign("https://community.mindstone.com/events/mindstone-anote-nyc-june-ai-meetup");
                            }}
                        >
                            Register Here
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