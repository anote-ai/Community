import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneNYCMarchAfter() {
    var agendaItems = [
        {
            name: "Ofer Hermoni",
            role: "Co-Founder",
            company: "Linux Foundation for AI",
            linkedinUrl: "https://www.linkedin.com/in/ofer-hermoni/",
            topic: "Shaping the Future with Responsible AI: Insights from the Generative AI Commons",
            videoUrl: "https://www.youtube.com/watch?v=irKs4f2PBHQ",
            videoUrlEmbed: "https://www.youtube.com/embed/irKs4f2PBHQ",
            description: "In an era where generative AI is rapidly transforming our world, the rise of deepfakes, algorithmic bias, and privacy breaches threaten the very foundation of trust and fairness in society. In this talk, I will introduce the Responsible Generative AI Framework (RGAF), developed by the LF AI & Data Generative AI Commons – a comprehensive blueprint for the ethical design, development, and deployment of generative AI systems. As we navigate the Cognitive Age and the Fifth Industrial Revolution, RGAF provides a structured approach to addressing the opportunities and risks of AI by balancing nine key dimensions, including human-centeredness, inclusivity, robustness, transparency, accountability, privacy, compliance, fairness, and environmental sustainability. This session will explore actionable insights and best practices to help organizations implement responsible generative AI in an increasingly complex and fast-evolving technological landscape. Dr. Ofer Hermoni is a seasoned AI and technology expert with a strong entrepreneurial background, widely recognized for his contributions to the AI community. He has successfully led startups in the patents and privacy domains and served as a co-founder and former elected chair of the Linux Foundation AI, where he played a key role in shaping the global AI landscape. Holding a Ph.D. in Computer Science and with over 60 patents in AI, networking, security, and blockchain, Ofer combines deep technical expertise with a passion for innovation. As the founder and Chief AI Officer of iForAI, he leads a company dedicated to helping businesses responsibly integrate Artificial Intelligence and Generative AI into their products and services to drive meaningful market impact."
        },
          {
            name: "Alexander Walsh",
            role: "Low Code Developer",
            company: "Independent",
            topic: "Automated market briefs using LLMs",
            linkedinUrl: "https://www.linkedin.com/in/alexander-walsh/",
            description: "I’ll be sharing real-world examples of how leading financial institutions leverage LLMs + high-precision search & retrieval to uncover insights and gain an edge in the market. I’ll cover how scalable RAG over bigdata.com’s archive of +100m documents is transforming the world of investment research.",
            videoUrl: "https://www.youtube.com/watch?v=83DZ0Pk-rpU",
            videoUrlEmbed: "https://www.youtube.com/embed/83DZ0Pk-rpU"
        },
    ];

    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            March NYC AI Meetup
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

export default AnoteMindstoneNYCMarchAfter;
