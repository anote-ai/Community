import AIDayVideo from "./AIDayVideo";
import "../landing_page_styles/Agenda.css";

function AIDayStartupVideos() {
    var agendaItems = [
        {
          name: "Amrutha Gujjar",
          company: "Structured",
          role: "Founder / CEO",
          topic: "Introduction to Anote",
          linkedinUrl: "https://www.linkedin.com/in/amruthagujjar/",
          talkUrl: "https://drive.google.com/file/d/1Vz3y5A8YgUjp4ZYiVih7pKtSsJGJtUXE/",
          videoUrl: "https://www.youtube.com/watch?v=jkW20eTQx3s",
          videoUrlEmbed: "https://www.youtube.com/embed/jkW20eTQx3s",
          description: "Structured is a semantic layer that ensures consistent and reliable business metrics across your organization. When different teams define key metrics like CAC and MRR differently, it leads to conflicting reports and poor decisions. Structured connects directly to your cloud data warehouse, enforcing a single, agreed-upon definition for every metric. This eliminates hours of manual reconciliation and aligns your entire company on the same data, enabling faster, more confident decisions. With Structured, your data is consistent, your metrics are trustworthy, and your team can focus on growth, not fixing data issues.",
        },
        {
          name: "Brendon Geils",
          role: "Founder / CEO",
          company: "Athena Intelligence",
          topic: "Introducing Human Centered AI",
          linkedinUrl: "https://www.linkedin.com/in/brendongeils/",
          talkUrl: "https://drive.google.com/file/d/170algNejIBWWfZ1VFgpMDMLesYbhoYCZ/",
          videoUrl: "https://www.youtube.com/watch?v=xGkb-Az44yM",
          videoUrlEmbed: "https://www.youtube.com/embed/xGkb-Az44yM",
          description: "Athena Intelligence is an AI-native analytics platform and artificial employee for enterprise analysts. Athena is the first artificial data analyst, copilot and take over laborious tasks, so analysts can focus on the strategic work. In this talk, we get a demo of the Athena Platform.",
        },
        {
          name: "Steven Liss",
          role: "Co-Founder / CEO",
          company: "Open Ads",
          topic: "Benchmarking Text Classification Models",
          linkedinUrl: "https://www.linkedin.com/in/stevenliss/",
          talkUrl: "https://drive.google.com/file/d/1qd15nnLl0uUY1JbVmIEG3re81g8eRQ5d/",
          videoUrl: "https://www.youtube.com/watch?v=mEGG_NkKFn4",
          videoUrlEmbed: "https://www.youtube.com/embed/mEGG_NkKFn4",
          description: "OpenAds.ai is the only real-time generative ad network: every impression generates a new, unique creative from first-party search and contextual signals. OpenAds works with AI publishers, traditional publishers, and advertisers to align business incentives around generative content.",
        },
        {
          name: "Faraz Siddiqi",
          role: "Founder / CEO",
          company: "Hatch",
          topic: "Benchmarking Question and Answering Models",
          linkedinUrl: "https://www.linkedin.com/in/farazmsiddiqi/",
          talkUrl: "https://drive.google.com/file/d/1DMNd7Hu-q8RpCKyA028aG_YjOOFtGbAK/",
          videoUrl: "https://www.youtube.com/watch?v=d7VHpq-qayw",
          videoUrlEmbed: "https://www.youtube.com/embed/d7VHpq-qayw",
          description: "Hatch is building the world’s first generation of digital recruiters. Source and filter top talent in minutes. Get time back to focus on the best talent in your pool. Hire Athena, our revolutionary technical recruiter, at hatchrecruiting.com.",
        },
        {
          name: "Nahuel Borda",
          role: "Founding Engineer",
          company: "PromptLayer",
          topic: "Fine Tuning of Large Language Models",
          linkedinUrl: "https://www.linkedin.com/in/nahuel-borda/",
          talkUrl: "https://drive.google.com/file/d/1CLk0DnkqoEzPwSqUBSS1f6eCTEmH5hZN/",
          videoUrl: "https://www.youtube.com/watch?v=JUxx5tE9q7g",
          videoUrlEmbed: "https://www.youtube.com/embed/JUxx5tE9q7g",
          description: "Promptlayer enables advanced prompt management and versioning for LLMs. Streamline your prompt engineering with powerful tools for testing, deployment, observability. This presentation goes Promptlayer, the first platform built for prompt engineers. Track, debug, and explore GPT requests.",
        },
        {
          name: "Hamza Zaveri",
          role: "Co-Founder",
          company: "Vokel",
          topic: "Build Your Own Private Financial Chatbot",
          linkedinUrl: "https://www.linkedin.com/in/hamzazaveri/",
          talkUrl: "https://drive.google.com/file/d/1UBFn7_B6-_P_6KRZ8p2a3GYvdCn2Tep9/",
          videoUrl: "https://www.youtube.com/watch?v=wRUk77oVXPM",
          videoUrlEmbed: "https://www.youtube.com/embed/wRUk77oVXPM",
          description: "This presentation explores Vokel AI. Vokel AI is building solutions to protect against new forms of AI fraud, threats and vulnerabilities. Vokel AI helps protect against AI-driven Cyber Threats and Fraud in a Generative AI World.",
        },
      ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl lg:text-7xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            Anote AI Day Summit
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
          Product Demos from AI Startups
        </div>
        {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/watch?v=ftx72fY5s2I",
                  "_blank"
                );
              }}
            >
              Watch Full Recording
            </button>
            <button
              onClick={() => {
                window.open(
                    "https://drive.google.com/file/d/1GJCZSLCO3ALVKePkkiDg12i0k3Hsy1Ba/",
                    "_blank"
                  );
              }}
              className="btn-black w-full sm:w-auto flex justify-center items-center"
            >
              View Agenda
            </button>

        </div> */}
        </div>
        <div className="agenda-container md:mx-20">
          <table className="agenda-table ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Role</th>
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
                  <td>{item.company}</td>
                  <td>{item.role}</td>
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
              {item.name} - {item.company}
            </h1>
            <div className="LP-Contact">
              <AIDayVideo
                title={item.name}
                description={item.description}
                capability={item.role}
                sector={item.company}
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

export default AIDayStartupVideos;