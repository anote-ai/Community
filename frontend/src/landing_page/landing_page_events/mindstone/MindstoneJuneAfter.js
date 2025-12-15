import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneJuneAfter() {
    var agendaItems = [
        {
          date: "6:35 PM EST",
          name: "Shafik Q",
          role: "Senior ML Engineer",
          company: "New York Times",
          topic: "Beyond Detection: Unleashing AI Image Analysis with CLIP",
          theme: "AI Image Analysis",
          linkedinUrl: "https://www.linkedin.com/in/shafik-quoraishee/",
          talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
          videoUrl: "https://www.youtube.com/watch?v=UbaK6eg2UkA",
          videoUrlEmbed: "https://www.youtube.com/embed/UbaK6eg2UkA",
          description: "This talk explores how combining OpenAI's CLIP with advanced AI models unlocks a wider range of image analysis tasks, from object recognition to scene understanding."
        },
        // {
        //   date: "6:55 PM EST",
        //   name: "Catherine Wang",
        //   role: "Product Manager",
        //   company: "Anote",
        //   topic: "AI assisted RFPs",
        //   theme: "AI Innovations",
        //   linkedinUrl: "https://www.linkedin.com/in/catherine-wang-cath0011/",
        //   talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
        //   videoUrl: "https://www.youtube.com/watch?v=VNzrkQ_vEIk",
        //   videoUrlEmbed: "https://www.youtube.com/embed/VNzrkQ_vEIk",
        //   description: "In the talk, we'll explore how AI can revolutionize the process of RFP and grant applications, with a focus on accelerated RFP writing tailored to each project and memorizing your company's information."
        // },
        {
          date: "7:15 PM EST",
          name: "Reyhan Merekar",
          role: "Machine Learning Engineer",
          company: "Accenture",
          topic: "Autonomous Systems - Countdown to Your Personal AI Companion",
          theme: "Autonomous Systems",
          linkedinUrl: "https://www.linkedin.com/in/reyhanmerekar/",
          talkUrl: "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
          videoUrl: "https://www.youtube.com/watch?v=nJkUQGpK8g4",
          videoUrlEmbed: "https://www.youtube.com/embed/nJkUQGpK8g4",
          description: "In this talk, we'll explore the current state and future prospects of autonomous systems, specifically focusing on personal and household robots, as well as their link to Artificial Intelligence."
        }
      ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            June AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_meetup_june_24");
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

export default MindstoneJuneAfter;