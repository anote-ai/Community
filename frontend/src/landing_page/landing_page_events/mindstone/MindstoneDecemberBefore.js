import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneDecemberBefore() {
    var agendaItems = [
        {
            name: "Chloe Zhu",
            role: "Director",
            company: "Ensemblex",
            linkedin: "https://www.linkedin.com/in/chloe-zhu-cfa/",
            topic: "Say Yes to High Stakes Decisions and Heavy Regulations"
        },
        {
            name: "Laura Cane Malahel",
            role: "Entrepreneur",
            company: "Two Sigma",
            linkedin: "https://www.linkedin.com/in/lauracanemahalel/",
            topic: "We’ll see how tools like ChatGPT can be customized to best help with learning that meets your needs and style."
        },
        {
            name: "Dev Rishi Hare",
            role: "Co-Founder",
            company: "Curriculo",
            linkedin: "https://www.linkedin.com/in/dev-rishi-khare/",
            topic: "Building an LLM product from scratch"
        }
    ];

    return (
        <div className="w-screen bg-gray-900 mb-20">
            <div className="pt-10">
                <div className="text-white justify-center flex flex-col text-center pt-24">
                    <div className="text-4xl sm:text-6xl mt-8 mb-4 text-center font-medium lg:font-bold">
                        December AI Meetup
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
                        Anote / Mindstone AI Event
                    </div>
                    <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
                        <button
                            className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
                            onClick={() => {
                                window.location.assign("https://community.mindstone.com/events/ny_ai_december_4th");
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
                                        href={item.linkedin}
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

export default MindstoneDecemberBefore;
