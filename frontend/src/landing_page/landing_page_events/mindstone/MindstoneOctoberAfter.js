import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneOctoberAfter() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Philip Thomas",
            role: "Co-Founder",
            company: "Find AI",
            topic: "A Peek at the Internal Tools We Built to Manage 2M+ OpenAI Calls a Day",
            linkedinUrl: "https://www.linkedin.com/in/philipithomas/",
            videoUrl: "https://www.youtube.com/watch?v=6klWDF9no54",
            videoUrlEmbed: "https://www.youtube.com/embed/6klWDF9no54",
            description: "Find AI has built an engine designed to handle millions of OpenAI requests each day, unlocking unprecedented automation and scalability. In this talk, co-founder Philip Thomas pulls back the curtain on the internal tools, architecture, and clever optimization strategies they've developed to manage AI infrastructure at massive scale. Learn about the challenges they faced and how they overcame them to create a system that processes over 2 million AI calls per day, all while maintaining efficiency and reliability."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Krishna Kumar",
            role: "CIO",
            company: "Goose Hollow Capital",
            topic: "Harnessing AI for Understanding Markets Better",
            linkedinUrl: "https://www.linkedin.com/in/dakrishna/",
            videoUrl: "https://www.youtube.com/watch?v=MSHM86q5njk",
            videoUrlEmbed: "https://www.youtube.com/embed/MSHM86q5njk",
            description: "Financial markets are complex, ever-evolving beasts, but AI-driven tools are revolutionizing how investors analyze and make decisions. Krishna Kumar will dive deep into how Large Language Models (LLMs) are transforming the way we comprehend market dynamics. From automating complex analyses to surfacing previously unseen patterns, this talk will explore how AI tools provide deeper insights, streamline research processes, and empower investors with actionable, data-driven strategies to stay ahead in the financial game."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Christine Looser",
            role: "Associate Professor",
            company: "Minerva University",
            topic: "Your Brain on Gen AI: Insights from the Science of Learning",
            linkedinUrl: "https://www.linkedin.com/in/christine-e-looser/",
            videoUrl: "https://www.youtube.com/watch?v=D8M51_shKxs",
            videoUrlEmbed: "https://www.youtube.com/embed/D8M51_shKxs",
            description: "In a world where generative AI is powering everything from search engines to productivity tools, we’re seeing a paradox: AI is making us more productive, but potentially less smart. Celooser’s provocative talk examines the ways in which generative AI is reshaping the way we learn, think, and problem-solve. Discover the do’s and don’ts for leveraging Gen AI in a way that enhances cognitive ability, rather than detracting from it. You’ll leave with actionable advice on how to strike a balance between harnessing AI’s power and preserving your own mental sharpness."
        }
    ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            October AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_october_2nd_2024");
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

export default MindstoneOctoberAfter;