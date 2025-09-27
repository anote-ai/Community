import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AnoteMindstoneNYCAprilAfter() {
    var agendaItems = [
        // {
        //     name: "Haoyun Feng",
        //     role: "Director of Data Science",
        //     company: "Elevance Health",
        //     linkedinUrl: "https://www.linkedin.com/in/haoyun-feng-a1294a34/",
        //     topic: "Generative AI Project",
        //     description: "TBD"
        // },
        {
            name: "Tommy Barav",
            role: "CEO / Co-Founder",
            company: "timeOS",
            linkedinUrl: "https://www.linkedin.com/in/tombarav/",
            topic: "timeOS Product Demo",
            description: "Tommy will discuss the concept of self-driving cars for work. He will explain how to create a personal system that captures, summarizes, and takes action on your entire day. Additionally, he will provide a demo of timeOS, one of the leading AI notetakers, which he believes represents the future of personal productivity.",
            videoUrl: "https://www.youtube.com/watch?v=nQVI-79jJ9k",
            videoUrlEmbed: "https://www.youtube.com/embed/nQVI-79jJ9k"
        },
        {
            date: "4/2/2025, 6:55 PM EST - 7:15 PM EST",
            name: "Eva Dong",
            company: "Google Cloud",
            role: "Lead of AI Monetization",
            topic: "AI Monetization: A Practical Guide to Unlock Value",
            theme: "TBD",
            linkedinUrl: "https://www.linkedin.com/in/evadong1010/",
            talkUrl: "",
            videoUrl: "https://www.youtube.com/watch?v=UPtMRrlHFLc",
            videoUrlEmbed: "https://www.youtube.com/embed/UPtMRrlHFLc",
            description: " AI is revolutionizing industries, but many organizations struggle to translate their AI investments into measurable business value. In this session, Eva Dong, Lead of AI Monetization at Google Cloud, will demystify AI monetization and provide a practical framework for unlocking value while optimizing costs. Attendees will gain insights into overcoming common challenges such as cost unpredictability, scaling AI effectively, and measuring ROI. Through real-world case studies across retail, finance, and healthcare, this session will showcase actionable strategies for maximizing AI-driven revenue and efficiency. Whether you're an executive, data scientist, or AI strategist, you'll leave with a roadmap to make AI a sustainable and profitable asset for your business."
        },
        {
            name: "Natan Vidra",
            role: "Founder / CEO",
            company: "Anote",
            linkedinUrl: "https://www.linkedin.com/in/natanvidra/",
            topic: "Anote Product Demo",
            description: "Product Demo of an AI use case in regards to classifying thousands of proposal reviews, and then using AI to route the proposal to the correct POC, and having each POC provide reviews with human / AI collaboration.",
            videoUrl: "https://www.youtube.com/watch?v=hOWje03o2Xw",
            videoUrlEmbed: "https://www.youtube.com/embed/hOWje03o2Xw",
        },
        // {
        //     name: "Uri Goren",
        //     role: "CEO",
        //     company: "Argmax",
        //     linkedinUrl: "https://www.linkedin.com/in/ugoren/",
        //     topic: "From A/B testing to contextual bandits",
        //     decsription: "A/B is the gold-standard for any performance marketer. However, A/B testing is costly, and it might take some time to converge. The question of when to stop an A/B test is a common topic for debate, as it may yield suboptimal results. In this talk we would discuss the pitfalls of A/B testing, we would describe a broader framework of experimentation and dive in to the details. We would introduce multi-armed bandits, and deep dive into incorporating machine learning into the experimentation framework with Contextual multi armed bandits. We would summarize the talks with a few guidelines on when to use A/B testing and when to use Bandits.."
        // }
    ];

    return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            April NYC AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_april_2nd_2025");
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

export default AnoteMindstoneNYCAprilAfter;
