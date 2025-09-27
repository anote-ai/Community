import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneAprilNYCBefore() {
    var agendaItems = [
        {
            name: "Haoyun Feng",
            role: "Director of Data Science",
            company: "Elevance Health",
            linkedinUrl: "https://www.linkedin.com/in/haoyun-feng-a1294a34/",
            topic: "Generative AI Project",
            description: "TBD"
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
            videoUrl: "",
            videoUrlEmbed: "",
            description: " AI is revolutionizing industries, but many organizations struggle to translate their AI investments into measurable business value. In this session, Eva Dong, Lead of AI Monetization at Google Cloud, will demystify AI monetization and provide a practical framework for unlocking value while optimizing costs. Attendees will gain insights into overcoming common challenges such as cost unpredictability, scaling AI effectively, and measuring ROI. Through real-world case studies across retail, finance, and healthcare, this session will showcase actionable strategies for maximizing AI-driven revenue and efficiency. Whether you're an executive, data scientist, or AI strategist, you'll leave with a roadmap to make AI a sustainable and profitable asset for your business."
        },
        {
            name: "Uri Goren",
            role: "CEO",
            company: "Argmax",
            linkedinUrl: "https://www.linkedin.com/in/ugoren/",
            topic: "From A/B testing to contextual bandits",
            decsription: "A/B is the gold-standard for any performance marketer. However, A/B testing is costly, and it might take some time to converge. The question of when to stop an A/B test is a common topic for debate, as it may yield suboptimal results. In this talk we would discuss the pitfalls of A/B testing, we would describe a broader framework of experimentation and dive in to the details. We would introduce multi-armed bandits, and deep dive into incorporating machine learning into the experimentation framework with Contextual multi armed bandits. We would summarize the talks with a few guidelines on when to use A/B testing and when to use Bandits.."
        }
    ];

    return (
        <div className="w-screen bg-gray-900 mb-20">
            <div className="pt-10">
                <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        April AI Meetup
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
                        <button
                            className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
                            onClick={() => {
                                window.location.assign("https://community.mindstone.com/events/ny_ai_march_5th_2025");
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
                    <table className="agenda-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Email</th>
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
                                    <td>
                                        {item.role}
                                    </td>
                                    <td>{item.topic}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MindstoneAprilNYCBefore;
