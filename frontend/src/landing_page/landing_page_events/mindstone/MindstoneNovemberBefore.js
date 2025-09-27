import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function MindstoneNovemberBefore() {
    var agendaItems = [
        {
            date: "8/15, 6:35 PM EST - 6:55 PM EST",
            name: "John Barrus",
            role: "Product Manager",
            company: "Groq",
            topic: "A Demo of the Groq Platform",
            linkedinUrl: "https://www.linkedin.com/in/barrus/",
            description: "The LPU™ Inference Engine by Groq is a hardware and software platform that delivers exceptional compute speed, quality, and energy efficiency."
        },
        {
            date: "8/15, 6:55 PM EST - 7:15 PM EST",
            name: "Ze'ev Abrams",
            role: "Co-Founder",
            company: "Iteraite",
            topic: "Going from Idea to Product Requirements (Product Managers) or Pitch Decks (Entrepreneurs)",
            linkedinUrl: "https://www.linkedin.com/in/zeevabrams/",
            description: "Using AI, and the right tools, you can go from a general idea, to full documentation, really fast. Iteraite's tools are designed to help Product Managers, or Startup Entrepreneurs, take their idea from a single line all the way to full requirements or pitches, while getting dynamic feedback as well. In this demo, I will show how you can use the platform to build a PRD and a Pitch Deck, while using other tools like a Lean Canvas Generator and User Persona Generator."
        },
        {
            date: "8/15, 7:15 PM EST - 7:35 PM EST",
            name: "Hadas Frank",
            role: "Founder",
            company: "NextGenAI",
            topic: "Podcast With My Digital Twin",
            linkedinUrl: "https://www.linkedin.com/in/hadas-frank-ai1",
            description: "Use the power of AI for quick summarization and note taking, NotebookLM is your powerful virtual research assistant rooted in information you can trust. Now, you can listen to a conversation between two AI hosts discussing your sources."
        },
        {
          date: "8/15, 7:35 PM EST - 7:55 PM EST",
          name: "Julian Norton",
          role: "Co-Founder",
          company: "Plum",
          topic: "Plum evaluates and improves the quality of LLM applications",
          linkedinUrl: "https://www.linkedin.com/in/juliannorton/",
          description: "The Plum Defense fine-tuning system is meant to be run on a scheduled basis with a cadence dependent on the amount of training data generated. With more training examples generated as users interact with the application, the Plum evaluator, augmenter, and fine-tuner system will re-run to continuously increase the quality of the LLM output along the metrics specific to the business case.If the LLM application has to keep up with a high amount of data drift in production, this evaluation-augmentation-retraining process could be run multiple times an hour. By eliminating the friction at each of these steps, Plum Defense allows tech leaders to make use of their LLM data flywheel."
        }
    ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl  mt-8 mb-4 text-center font-medium lg:font-bold">
            November AI Meetup
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Anote / Mindstone AI Event
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
              onClick={() => {
                window.location.assign("https://community.mindstone.com/events/ny_ai_november_6th");
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

export default MindstoneNovemberBefore;