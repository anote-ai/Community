import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneOctoberBefore() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "Philip Thomas",
            role: "Co-Founder",
            company: "Find AI",
            topic: "A Peek at the Internal Tools We Built to Manage 2M+ OpenAI Calls a Day",
            linkedinUrl: "https://www.linkedin.com/in/philipithomas/",
            description: "Find AI has built an engine designed to handle millions of OpenAI requests each day, unlocking unprecedented automation and scalability. In this talk, co-founder Philip Thomas pulls back the curtain on the internal tools, architecture, and clever optimization strategies they've developed to manage AI infrastructure at massive scale. Learn about the challenges they faced and how they overcame them to create a system that processes over 2 million AI calls per day, all while maintaining efficiency and reliability."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Krishna Kumar",
            role: "CIO",
            company: "Goose Hollow Capital",
            topic: "Harnessing AI for Understanding Markets Better",
            linkedinUrl: "https://www.linkedin.com/in/dakrishna/",
            description: "Financial markets are complex, ever-evolving beasts, but AI-driven tools are revolutionizing how investors analyze and make decisions. Krishna Kumar will dive deep into how Large Language Models (LLMs) are transforming the way we comprehend market dynamics. From automating complex analyses to surfacing previously unseen patterns, this talk will explore how AI tools provide deeper insights, streamline research processes, and empower investors with actionable, data-driven strategies to stay ahead in the financial game."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Celooser",
            role: "Associate Professor",
            company: "Mind Mastery",
            topic: "Your Brain on Gen AI: Do's and Don’ts for Learning",
            linkedinUrl: "https://www.linkedin.com/in/christine-e-looser/",
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
              Register Here
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
                <th>Talk Topic</th>
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
                  <td>{item.company}</td>
                  <td>{item.role}</td>
                  <td>{item.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  </div>
  )
}

export default MindstoneOctoberBefore;