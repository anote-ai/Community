import AIDayVideo from "./AIDayVideo";
import "../landing_page_styles/Agenda.css";

function AIDayVideos() {
    var agendaItems = [
        {
          name: "Natan Vidra",
          role: "Founder / CEO",
          topic: "Introduction to Anote",
          linkedinUrl: "https://www.linkedin.com/in/natanvidra/",
          talkUrl: "https://drive.google.com/file/d/1Vz3y5A8YgUjp4ZYiVih7pKtSsJGJtUXE/",
          videoUrl: "https://www.youtube.com/watch?v=IM0ika7SOJE",
          videoUrlEmbed: "https://www.youtube.com/embed/IM0ika7SOJE",
          description: "In this presentation, we jump into Anote's cutting-edge solutions for handling unstructured text data in the AI domain. Anote addresses the critical challenges faced by enterprises in text classification, entity extraction, and question answering. The platform offers a seamless process to upload and customize datasets, enabling users to create and fine-tune models tailored to their specific domain requirements. Anote's innovative approach leverages active learning and iterative relabeling to enhance model accuracy rapidly. Moreover, it provides the flexibility to build private General Purpose Models (GPMs) and Large Language Models (LLMs) via API, ensuring data security. We explore real-world applications across industries like finance, medical, and government, highlighting how Anote's solutions offer cost-effective, efficient, and accurate alternatives to manual data labeling and processing.",
        },
        {
          name: "Katherine Jijo",
          role: "Machine Learning Engineer",
          topic: "Benchmarking Text Classification Models",
          linkedinUrl: "https://www.linkedin.com/in/katherine-jijo-a1b231242/",
          talkUrl: "https://drive.google.com/file/d/1qd15nnLl0uUY1JbVmIEG3re81g8eRQ5d/",
          // videoUrl: "https://www.youtube.com/watch?v=-jY-1tLGL_Y",
          // videoUrlEmbed: "https://www.youtube.com/embed/-jY-1tLGL_Y",
          videoUrl: "https://www.youtube.com/watch?v=IakXvvdaNJQ",
          videoUrlEmbed: "https://www.youtube.com/embed/IakXvvdaNJQ",
          description: "This presentation dives into the realm of Few Shot Learning, Fine-Tuning, and Active Learning methods to amplify the accuracy of Large Language Models (LLMs) like GPT, BERT, and SetFit. In the context of AI/ML, where obtaining ample labeled data remains challenging, particularly for unstructured text, the focus is on creating a continuous human feedback loop that fine-tunes models and augments their accuracy, recall, and precision with a limited number of labeled examples. The goal is explore how these techniques can optimize language models' performance. The presentation emphasizes ongoing benchmarking, iterative refinement with human feedback, and the positive impact these methods have on language model accuracy. It also highlights the potential of Few Shot Learning and Active Learning to refine language models efficiently with minimal labeled data and human input, ultimately reducing the cost and effort required for model training.",
        },
        {
          name: "Katherine Jijo",
          role: "Machine Learning Engineer",
          topic: "Benchmarking Question and Answering Models",
          linkedinUrl: "https://www.linkedin.com/in/katherine-jijo-a1b231242/",
          talkUrl: "https://drive.google.com/file/d/1DMNd7Hu-q8RpCKyA028aG_YjOOFtGbAK/",
          videoUrl: "https://www.youtube.com/watch?v=sppn68PirPQ",
          videoUrlEmbed: "https://www.youtube.com/embed/sppn68PirPQ",
          description: "This presentation underscores the significance of benchmarking in the realm of Question-Answering (Q-A) for finance. It examines the performance of existing models, introducing 'FinanceBench,' the industry's inaugural benchmark tailored to evaluate Large Language Models (LLMs) on financial inquiries. Comprising 10,000 high-quality Q-A pairs sourced from publicly available financial documents, FinanceBench serves professionals in legal and financial sectors, facilitating the assessment of Retrieval Augmented Generation (RAG) technology. The presentation discusses evaluation methods, including Cosine Similarity, Rouge-L Score, and human evaluation, offering insights into the challenges of evaluating nuanced numerical variations and subjective information. It explores techniques like fine-tuning to enhance model reliability and mitigate hallucinations. The focus is on leveraging benchmarking to refine LLMs' capabilities for quantitative and qualitative analysis in the finance domain, ultimately aiming for more consistent and tailored outputs.",
        },
        {
          name: "Spurthi Setty",
          role: "Machine Learning Engineer",
          topic: "Fine Tuning of Large Language Models",
          linkedinUrl: "https://www.linkedin.com/in/spurthi-setty/",
          talkUrl: "https://drive.google.com/file/d/1CLk0DnkqoEzPwSqUBSS1f6eCTEmH5hZN/",
          videoUrl: "https://www.youtube.com/watch?v=mMmaTMuRZmo",
          videoUrlEmbed: "https://www.youtube.com/embed/mMmaTMuRZmo",
          description: "This presentation goes into the significance of fine-tuning Large Language Models (LLMs) and the various methods employed for parameter fine-tuning to optimize their performance. It highlights the importance of high-quality data and specific prompt templates tailored to use cases in dataset creation and processing. The integration of techniques like Quantization, Retrieval Augmented Generation (RAG), and Low Rank Adaptation (LoRA) for Parameter Efficient Fine Tuning (PEFT) is discussed to reduce computational overhead and enhance model efficiency. The presentation emphasizes the need for more consistent outputs, reduced hallucination, and the reduction of trainable parameters. It also explores approaches such as Query Expansion, Prompt Engineering, and Re-ranking Algorithms to improve retrieval accuracy. The goal is to customize LLMs to specific use cases and make fine-tuning more accessible, ultimately resulting in better-performing models.",
        },
        {
          name: "Sakshi Pandey",
          role: "Product Manager",
          topic: "Build Your Own Private Financial Chatbot",
          linkedinUrl: "https://www.linkedin.com/in/sakshipandey0907/",
          talkUrl: "https://drive.google.com/file/d/1UBFn7_B6-_P_6KRZ8p2a3GYvdCn2Tep9/",
          videoUrl: "https://www.youtube.com/watch?v=SB-Z1v8Emx4",
          videoUrlEmbed: "https://www.youtube.com/embed/SB-Z1v8Emx4",
          description: "This presentation explores the concept of Private GPT and its value in the context of sensitive financial data handling. The focus is on catering to the needs of financial enterprises that require privacy-preserving solutions while leveraging Generative AI for analytics. The presentation introduces 'Private GPT,' a locally deployed model that ensures data security and privacy by keeping all data on-premises. It explains the workflow of uploading financial documents, asking questions, and receiving answers while maintaining data integrity. Additionally, the presentation addresses the importance of fine-tuning, discusses privacy measures such as using local MySQL vector databases, and emphasizes the confidentiality of queries and documents. The use of Private GPT for generating financial reports and insights is highlighted, making it a valuable tool for mid-sized financial companies, data providers, and hedge funds seeking AI-driven solutions for unstructured text data analysis.",
        },
        {
          name: "Eden Chung",
          role: "Machine Learning Engineer",
          topic: "PrivateGPT Chatbot Product Demo",
          linkedinUrl: "https://www.linkedin.com/in/eden-chung/",
          talkUrl: "https://drive.google.com/file/d/1xZhsxRPN4OK1uug7_5Pc_b9Y9SqHktJl/",
          videoUrl: "https://www.youtube.com/watch?v=XSsFmef9LJA",
          videoUrlEmbed: "https://www.youtube.com/embed/XSsFmef9LJA",
          description: "This presentation emphasizes the importance of Private GPT in addressing specific tasks within the financial domain. It outlines various task types that users can execute, highlighting the need for specialized solutions in the financial industry. PrivateGPT differentiates itself by offering a tailored approach for creating AI-powered chatbots capable of answering questions from financial documents with enhanced accuracy compared to generalized Language Model Models (LLMs). The primary goal is to reduce manual annotation efforts, optimize accuracy, and provide context-aware responses. Users can upload documents locally, query through the SEC's API, or use their SQL database, all while benefiting from fine-tuned models and retaining chat history across sessions. Private GPT serves as a valuable tool for streamlining financial data analysis and knowledge extraction.",
        },
        // {
        //   name: "Christy Lin",
        //   role: "Product Manager",
        //   topic: "Upreach - An Autonomous AI Sales Agent",
        //   linkedinUrl: "https://www.linkedin.com/in/christy-lin-/",
        //   talkUrl: "https://drive.google.com/file/d/1lBN8eB5Lu_uQv8DHFB61Kbe1BCJM3l9i/",
        //   videoUrl: "https://www.youtube.com/watch?v=d0ZkHkRLbpU",
        //   videoUrlEmbed: "https://www.youtube.com/embed/d0ZkHkRLbpU",
        //   description: "Upreach is a sophisticated software solution revolutionizing B2B lead generation and outreach. It employs AI-driven automation to swiftly and accurately identify and contact potential leads, significantly reducing manual effort. With a customizable email template and AI-powered email generation, Upreach tailors messages to individual recipients, greatly enhancing engagement and conversion rates. Utilizing proprietary data sources, rapid data storage and retrieval, and precise search algorithms, it stands out as an efficient and precise tool in the lead generation landscape. Upreach operates autonomously, enabling daily lead generation and outreach processes without constant supervision, making it a valuable asset for sales development representatives and marketing professionals seeking to simplify and optimize their outreach efforts.",
        // },
      ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl lg:text-7xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            Anote AI Day Summit
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
          AI Talks from the Anote Team
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
            <button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center"
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

        </div>
        </div>
        <div className="agenda-container md:mx-20">
          <table className="agenda-table ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Talk Topic</th>
                <th className="desktop-only">Link to Slides</th>
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
                  <td>{item.role}</td>
                  <td>{item.topic}</td>
                  <td className="desktop-only">
                    <a
                      href={item.talkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Slides
                    </a>
                  </td>
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
              AI Talk {index + 1} - {item.topic}
            </h1>
            <div className="LP-Contact">
              <AIDayVideo
                title={item.name}
                description={item.description}
                capability={item.role}
                sector={item.topic} // You can customize this if needed
                type={item.role}
                videoUrl={item.videoUrlEmbed}
                slideUrl={item.talkUrl}
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
  )
}

export default AIDayVideos;