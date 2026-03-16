import AIDayVideo from "../AIDayVideo";
import "../../landing_page_styles/Agenda.css";

function AIAcademyPresentationsSpring2026() {
  const agendaItems = [
    {
      topic: "AI Academy Presentation 1",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 2",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 3",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 4",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 5",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 6",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 7",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 8",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 9",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 10",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 11",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
    {
      topic: "AI Academy Presentation 12",
      theme: "Fellow Project Presentation",
      videoUrl: "#",
      videoUrlEmbed: "",
      description:
        "Presentation from the Spring 2026 AI Academy cohort highlighting a student project, research direction, or applied AI demo.",
    },
  ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
        <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-5xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            Anote AI Academy Presentations - Spring 2026
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
            Student Presentations and Applied AI Projects
          </div>
          <div className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto px-6 leading-relaxed">
            Explore final presentations from the Spring 2026 AI Academy cohort,
            featuring student work across applied AI, agents, evaluation,
            multimodal systems, research, and product development.
          </div>
        </div>
      </div>

      <div className="LP-FAQs pt-10 bg-gray-900">
        <div className="FAQ">
          <div className="LP-Sample-Projects bg-gray-900">
            {agendaItems.map((item, index) => (
              <div key={index}>
                <h1 className="TutorialHeader mb-3 bg-gray-900">
                  AI Academy Presentation {index + 1}
                </h1>
                <div className="LP-Contact">
                  <AIDayVideo
                    title={item.topic}
                    description={item.description}
                    sector={item.theme}
                    videoUrl={item.videoUrlEmbed || item.videoUrl}
                    slideUrl={item.videoUrl}
                    linkedinUrl={item.videoUrl}
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

export default AIAcademyPresentationsSpring2026;