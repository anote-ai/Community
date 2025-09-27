import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneAprilAfter() {
    var agendaItems = [
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Natan Vidra",
            company: "Anote",
            role: "Founder / CEO",
            topic: "Human-Centered AI: Dynamic Systems for Optimal Model Performance",
            theme: "Human-Centered AI",
            linkedinUrl: "https://www.linkedin.com/in/natanvidra/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=tfOb-N4LFn0",
            videoUrlEmbed: "https://www.youtube.com/embed/tfOb-N4LFn0",
            description: "Natan Vidra presents on the concept of human-centric AI, focusing on AI systems designed to prioritize human needs and values. The session explores how AI can be tailored to enhance user experience and create more meaningful interactions between humans and machines. Human-centered AI represents a new frontier in artificial intelligence, emphasizing dynamic, active-learning systems that adapt to the specific needs and data of end-users."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Alexander Walsh",
            role: "Low Code Developer",
            company: "Independent",
            topic: "Building a Personalized Pep-Talk App with Low Code",
            theme: "Low Code Development",
            linkedinUrl: "https://www.linkedin.com/in/alexander-walsh/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=qpAahjMtv-E",
            videoUrlEmbed: "https://www.youtube.com/embed/qpAahjMtv-E",
            description: "In this demonstration, Alexander Walsh shows how to build a personalized pep-talk app using low-code platforms. The session covers creating a more involved workflow, illustrating the power and flexibility of low-code development for rapidly deploying customized applications."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Joshua Wolfe",
            role: "CEO and Co-Founder",
            company: "Mindstone",
            topic: "The Future of Skills",
            theme: "Advanced GPT Techniques",
            linkedinUrl: "https://www.linkedin.com/in/joshuawohle/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=rgERVpQ3HgY",
            videoUrlEmbed: "https://www.youtube.com/embed/rgERVpQ3HgY",
            description: "As the world changes ever more rapidly, the ability to learn becomes crucial. Joshua explores what skills will be relevant in the future, discussing how individuals can adapt to the evolving demands of the workforce and stay ahead in a rapidly changing world."
        }
    ];



  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            April AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/mindstone_ny_ai_april_meetup");
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

export default MindstoneAprilAfter;