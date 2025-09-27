import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneJulyAfter() {

    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Sahil Sinha",
            role: "Co-Founder",
            company: "Lytix",
            topic: "Effectively Monitoring and Iterating on Your LLM Applications",
            theme: "LLM Applications",
            linkedinUrl: "https://www.linkedin.com/in/sssinha20/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=5ZydGw8OPgU",
            videoUrlEmbed: "https://www.youtube.com/embed/5ZydGw8OPgU",
            description: "Transitioning from a local prototype to a live LLM application in production reveals a host of unanticipated challenges. In this session, Sahil Sinha of Lytix (YC W24) examines the hurdles LLM companies frequently encounter and discusses proven methods for overcoming these obstacles. The talk shares learnings from building AI applications and working with other YC AI companies."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Joshua Wohle",
            role: "CEO and Co-Founder",
            company: "Mindstone",
            topic: "GPTs on Steroids",
            theme: "Advanced GPT Techniques",
            linkedinUrl: "https://www.linkedin.com/in/joshuawohle/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=Qk9pomFVViQ",
            videoUrlEmbed: "https://www.youtube.com/embed/Qk9pomFVViQ",
            description: "This session presents a demo on the power of GPTs and demonstrates how combining them can yield extremely powerful results quickly. Joshua will showcase advanced techniques for leveraging GPT models to achieve significant outcomes in various applications."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Adam Becker",
            role: "Founder",
            company: "Dugree",
            topic: "Narrative Reconstruction: GenAI and the Israeli-Palestinian Conflict",
            theme: "AI in Conflict Resolution",
            linkedinUrl: "https://www.linkedin.com/in/adamissimo/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=BQd0h6yY8ls",
            videoUrlEmbed: "https://www.youtube.com/embed/BQd0h6yY8ls",
            description: "This talk features a theoretical discussion on the future of conflict, public opinion, and the public sphere, focusing on the role of GenAI in conceptualizing next-generation, AI-first products. Adam Becker explores this topic through the lens of Dugree, a video platform for politically contentious conversations, with a specific focus on the Israeli-Palestinian conflict."
        }
    ];



  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            July AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_meetup_july");
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

export default MindstoneJulyAfter;