import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneMarchBefore() {
    var agendaItems = [
        {
            name: "Ofer Hermoni",
            role: "Co-Founder",
            company: "Linux Foundation for AI",
            linkedinUrl: "https://www.linkedin.com/in/ofer-hermoni/",
            topic: "Shaping the Future with Responsible AI: Insights from the Generative AI Commons",
            description: "In an era where generative AI is rapidly transforming our world, the rise of deepfakes, algorithmic bias, and privacy breaches threaten the very foundation of trust and fairness in society. In this talk, I will introduce the Responsible Generative AI Framework (RGAF), developed by the LF AI & Data Generative AI Commons – a comprehensive blueprint for the ethical design, development, and deployment of generative AI systems. As we navigate the Cognitive Age and the Fifth Industrial Revolution, RGAF provides a structured approach to addressing the opportunities and risks of AI by balancing nine key dimensions, including human-centeredness, inclusivity, robustness, transparency, accountability, privacy, compliance, fairness, and environmental sustainability. This session will explore actionable insights and best practices to help organizations implement responsible generative AI in an increasingly complex and fast-evolving technological landscape. Dr. Ofer Hermoni is a seasoned AI and technology expert with a strong entrepreneurial background, widely recognized for his contributions to the AI community. He has successfully led startups in the patents and privacy domains and served as a co-founder and former elected chair of the Linux Foundation AI, where he played a key role in shaping the global AI landscape. Holding a Ph.D. in Computer Science and with over 60 patents in AI, networking, security, and blockchain, Ofer combines deep technical expertise with a passion for innovation. As the founder and Chief AI Officer of iForAI, he leads a company dedicated to helping businesses responsibly integrate Artificial Intelligence and Generative AI into their products and services to drive meaningful market impact."
        },
        // {
        //     name: "Haoyun Feng",
        //     role: "Director of Data Science",
        //     company: "Elevance Health",
        //     linkedinUrl: "https://www.linkedin.com/in/haoyun-feng-a1294a34/",
        //     topic: "Generative AI Project",
        //     description: "TBD"
        // },
        {
            // date: '2/12/2025',
            // time: '3:30 PM EST to 3:45 PM EST',
            name: 'Juwariah Shareef',
            linkedinUrl: 'https://www.linkedin.com/in/juwariah/',
            role: 'Founder / CEO',
            company: 'Sageflow',
            topic: 'Low Code AI Agents',
            description: 'Juwariah Shareef, founder of the innovative Stealth AI Startup, will present on the transformative potential of Low Code AI Agents. With a robust background in AI-led platforms and management consulting, Juwariah brings a wealth of expertise in navigating corporate transformation challenges. Attendees can expect an engaging demo showcasing how Low Code AI Agents empower organizations to streamline operations and enhance productivity without extensive technical knowledge. Key takeaways will include practical insights on implementing AI solutions and strategies for fostering a people-centric approach in tech-driven environments.',
            // speakerBio: "",
            // talkUrl: "",
            // videoUrl: 'https://www.youtube.com/watch?v=FozftffJi1g',
            // videoUrlEmbed: 'https://www.youtube.com/embed/FozftffJi1g'
          },
          {
            name: "Alexander Walsh",
            role: "Low Code Developer",
            company: "Independent",
            topic: "Automated market briefs using LLMs",
            linkedinUrl: "https://www.linkedin.com/in/alexander-walsh/",
            description: "This presentation includes a live Demo taking you through how we built automated market briefs using LLMs and agents."
        },
    ];

    return (
        <div className="w-screen bg-gray-900 mb-20">
            <div className="pt-10">
                <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        March AI Meetup
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    {/* <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
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
                    </div> */}
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

export default MindstoneMarchBefore;
