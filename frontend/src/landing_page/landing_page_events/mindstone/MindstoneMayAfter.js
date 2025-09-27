import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneMayAfter() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Joshua Wohle",
            role: "CEO and Co-Founder",
            company: "Mindstone",
            topic: "Private, Local ChatGPT in a few clicks",
            theme: "Advanced GPT Techniques",
            linkedinUrl: "https://www.linkedin.com/in/joshuawohle/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=0oUa3zC7JWY",
            videoUrlEmbed: "https://www.youtube.com/embed/0oUa3zC7JWY",
            description: "In some cases, you don't want your data exposed on the internet, but you'd still like to use AI to help with your problem. This session demonstrates how running ChatGPT on your machine has become dramatically easier over time, with a guide on how to set it up with just a few simple clicks."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Hadas Frank",
            role: "Founder / CEO",
            company: "Next Gen AI",
            topic: "Starting A Business With The Aid Of AI",
            theme: "AI in Business",
            linkedinUrl: "https://www.linkedin.com/in/hadas-frank-ai1/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=Dq2wR3NvtVQ",
            videoUrlEmbed: "https://www.youtube.com/embed/Dq2wR3NvtVQ",
            description: "This session will guide you through the process of turning an idea into a business venture using ChatGPT. Hadas Frank will cover how to craft a strategic business plan, introduce various AI tools that streamline the business-building process, and explore the pivotal role that GPTs can play in building a business."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Ana Santhosh",
            role: "Founder / CEO",
            company: "Kraft AI",
            topic: "A Blueprint For Adopting AI Into Your Business",
            theme: "AI Implementation",
            linkedinUrl: "https://www.linkedin.com/in/anakraftai/",
            talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=b-EdN8R3p9s",
            videoUrlEmbed: "https://www.youtube.com/embed/b-EdN8R3p9s",
            description: "Through the exploration of real-world case studies, Ana Santhosh will examine how to successfully incorporate AI into your business. This session provides an actionable framework for AI adoption, empowering you to leverage this exciting technology effectively."
        }
    ];



  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            May AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_may_meetup_may_24");
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

export default MindstoneMayAfter;