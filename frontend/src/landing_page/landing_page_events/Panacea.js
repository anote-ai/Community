import AIDayVideo from "./AIDayVideo";
import "../landing_page_styles/Agenda.css";

function Panacea() {
    var agendaItems = [
        {
            date: "8/9, 12 PM EST - 1 PM EST",
            name: "Natan Vidra",
            role: "Founder / CEO",
            topic: "Panacea - Novel AI Platform",
            theme: "Human Centered AI",
            linkedinUrl: "https://www.linkedin.com/in/natanvidra/",
            talkUrl: "https://drive.google.com/file/d/1_WGG9kCQe9wu1gSDb0FqbDvZn5k8wuOC/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=jk4hSnoOofA",
            videoUrlEmbed: "https://www.youtube.com/embed/jk4hSnoOofA",
            description: "In this talk, we present Anote, an innovative platform engineered to enhance the process of text classification, entity extraction, and question answering through a human-centered AI approach. Anote integrates both model-centric and data-centric methodologies, allowing for a dynamic interplay between high-quality data curation and model optimization. The presentation covers the platform’s architecture, highlighting its ensemble model API that asynchronously merges weak learner models to prioritize better-performing ones. The discussion addresses challenges such as model hallucinations and the importance of domain-specificity in AI. We also explore the use of retrieval-augmented generation (RAG) for more accurate response generation and consider the implications of deploying private chatbots fine-tuned on proprietary datasets."
        },
        {
            date: "8/12, 5 PM EST - 6 PM EST",
            name: "Spurthi Setty",
            role: "Machine Learning Engineer",
            topic: "Enhancing RAG Models",
            theme: "Improving RAG",
            linkedinUrl: "https://www.linkedin.com/in/spurthi-setty/",
            talkUrl: "https://drive.google.com/file/d/1eDEtfS9NMIRrwlGmtls-h6OaeehdurIT/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=0gqCpghZXEE",
            videoUrlEmbed: "https://www.youtube.com/embed/0gqCpghZXEE",
            description: "This talk explores advanced methodologies for enhancing the performance of Large Language Models (LLMs) through quantization and Low-Rank Adaptation (QLoRA). We discuss fine-tuning techniques that reduce the computational complexity and memory requirements needed to adapt models to domain-specific tasks, particularly in financial document processing. Key strategies such as chunking, query expansion, and re-ranking algorithms are highlighted to improve Retrieval Augmented Generation (RAG) pipelines for question-answering tasks. The session also covers evaluation metrics, including Cosine Similarity, Rouge scores, and human evaluation, and compares their effectiveness in assessing model performance. Additionally, the talk addresses the challenges of balancing scalability and reliability in fine-tuning LLMs, demonstrating how QLoRA can lower the barriers to deploying accurate, domain-specific models."
        },
        {
            date: "8/13, 3 PM EST - 4 PM EST",
            name: "Ben Setel",
            role: "Machine Learning Engineer",
            topic: "Unsupervised Learning",
            theme: "Novel ML Approaches to Human Centered AI",
            datasets: "Train Unsupervised Chatbot",
            linkedinUrl: "https://www.linkedin.com/in/bensetel/",
            talkUrl: "https://drive.google.com/file/d/1HXBo65SY48BPz8rghngExBsz2MUVK-vJ/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=yoNu9oMpl7I",
            videoUrlEmbed: "https://www.youtube.com/embed/yoNu9oMpl7I",
            description: "This presentation provides an in-depth analysis of using Unsupervised Learning techniques combined with Low-Rank Adaptation (LoRA) for fine-tuning quantized Large Language Models (LLMs). We examine the process of quantization, which reduces the numerical precision of a model's tensors, making it faster and more compact while retaining accuracy. The talk also covers how QLoRA optimizes specific parameters during fine-tuning, minimizing the risk of overfitting by updating only low-rank matrices. In addition, we explore the application of Retrieval-Augmented Generation (RAG) as an Information Refiner in unsupervised settings. The presentation includes a demonstration of various product scenarios where LLMs handle prompts with complete, incomplete, or only partially relevant information. These scenarios illustrate how unsupervised learning can be effectively harnessed to refine and improve LLM responses, even in the absence of labeled data. The discussion highlights the significant reduction in computational and memory requirements achieved through these methods, making fine-tuning more accessible and efficient."
        },
        {
            date: "8/13, 3 PM EST - 4 PM EST",
            name: "Harsh Thakkar",
            role: "Machine Learning Engineer",
            topic: "Evaluation Metrics",
            theme: "Novel ML Approaches to Human Centered AI",
            datasets: "Evaluate Chatbot, Evaluate Prompting, Evaluate Classification, Evaluate NER",
            linkedinUrl: "https://www.linkedin.com/in/harsh-thakkar-nj/",
            talkUrl: "https://drive.google.com/file/d/1REzzb6KB8jUfyv6I6qLxHb6D-3LJ8jnX/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=ZC6nnneU0ks",
            videoUrlEmbed: "https://www.youtube.com/embed/ZC6nnneU0ks",
            description: "This talk focuses on the critical aspects of evaluating retrieval and answering accuracy in natural language processing systems. We explore both structured and unstructured metrics used to assess how accurately models retrieve evidence text and generate correct answers. The session covers structured answer accuracy metrics, which are evaluated against ground truth labels, and unstructured metrics, which assess performance without such labels. Key evaluation metrics, such as classification reports, confusion matrices, and aggregate versus row-specific metrics, are discussed in detail. The presentation also includes a demonstration of how these metrics are applied in practice using Anote’s platform, showcasing the importance of accurately identifying mislabels and refining model performance. Whether working with structured or unstructured data, the talk provides a comprehensive guide to the metrics essential for robust model evaluation."
        },
        {
            date: "8/13, 3 PM EST - 4 PM EST",
            name: "Henry Toll",
            role: "Machine Learning Engineer",
            topic: "Named Entity Recognition Models",
            theme: "Novel ML Approaches to Human Centered AI",
            datasets: "Labeler, NER PII",
            linkedinUrl: "https://www.linkedin.com/in/henry-toll-b1b398285/",
            talkUrl: "https://drive.google.com/file/d/1nLxqcimu9VXgR4vPE_RpaDW8uFJjpzqK/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=w3ZwiupUaGA",
            videoUrlEmbed: "https://www.youtube.com/embed/w3ZwiupUaGA",
            description: "This talk provides an in-depth look at Named Entity Recognition (NER), a natural language processing technique that identifies and classifies real-world entities such as persons, locations, and organizations within text. We discuss the limitations of pre-trained NER models, particularly their struggle to deliver accurate results in domain-specific tasks—such as identifying Personally Identifiable Information (PII)—which is crucial for business applications. The presentation covers various evaluation metrics, including precision, recall, and the F1 score, with a focus on improving these metrics through custom data labeling and model training. Tools like SpaCy, Stanford NER, and Flair are explored as options for implementing and enhancing NER capabilities. We highlight how to use these tools to train models on your own datasets, ensuring that they can accurately recognize entities relevant to your specific use case. Additionally, the Intersection over Union (IOU) metric is introduced as a means to evaluate the accuracy of character-level predictions within entities."
        },
        {
            date: "8/13, 3 PM EST - 4 PM EST",
            name: "Spurthi Setty",
            role: "Machine Learning Engineer",
            topic: "Anote Software Developer Kit",
            theme: "Novel ML Approaches to Human Centered AI",
            datasets: "Cookbook",
            linkedinUrl: "https://www.linkedin.com/in/spurthi-setty/",
            talkUrl: "https://drive.google.com/file/d/1_ycuPgwRyEr0gvWqBjpnQvZRRsskEEE2/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=j7QnwfQvDbE",
            videoUrlEmbed: "https://www.youtube.com/embed/j7QnwfQvDbE",
            description: "This talk provides an in-depth overview of the Fine Tuning Library, a powerful toolkit designed to help developers train, fine-tune, predict, and evaluate models across various natural language processing (NLP) tasks. The session highlights the flexibility of the library, which supports a range of fine-tuning methods, including supervised, unsupervised, and reinforcement learning with human feedback (RLHF). Attendees will learn how to seamlessly integrate these models into custom workflows, ensuring that their enterprise-specific applications are optimized for accuracy and performance. The presentation includes practical examples demonstrating how to use the library for tasks such as text classification, chatbot development, prompting, and named entity recognition. Through detailed code walkthroughs, participants will see how to train models, make predictions, and evaluate their performance using a variety of metrics. By the end of the talk, developers will have the knowledge needed to effectively implement the Fine Tuning Library in their own projects, enhancing the capabilities of large language models (LLMs) within their organizations.."
        },
        {
            date: "8/13, 3 PM EST - 4 PM EST",
            name: "Sanya Mahajan",
            role: "Machine Learning Engineer",
            topic: "AI Assisted RFP Pipeline",
            theme: "Novel ML Approaches to Human Centered AI",
            datasets: "Anote Documentation / SAM Grants",
            linkedinUrl: "https://www.linkedin.com/in/sanyamahajan2027/",
            talkUrl: "https://drive.google.com/file/d/1VKtjdtGPo-_canYTcFJOVwEK-vYFPjSV/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=fE4_Yjjfl0M",
            videoUrlEmbed: "https://www.youtube.com/embed/fE4_Yjjfl0M",
            description: "This talk addresses the challenges faced by startups and businesses in navigating the complex and time-consuming process of grant proposals and RFP responses. The discussion focuses on how to effectively manage the high customization effort required to align proposals with specific business contexts and niche problems. We explore the distribution of time spent on various aspects of grant writing, from compliance checks to tailoring applications to meet unique submission requirements. The session highlights the role of AI in assisting with RFP proposals, demonstrating how automated tools can significantly reduce the manual effort involved in filling out applications and improving success rates. The talk also covers strategies for reducing the number of teams required to handle large volumes of documents and how to stand out in a highly competitive landscape. Anote’s platform is showcased, illustrating how it can streamline the proposal process, making it more efficient and effective."
        },
        {
            date: "8/14, 2 PM EST - 3 PM EST",
            name: "Alisha Shah",
            role: "Product Manager",
            topic: "Named Entity Recognition Webinar",
            theme: "Classify Text, Extract Entities, Answer Questions",
            datasets: "Labeler: Classification - Product Reviews",
            linkedinUrl: "https://www.linkedin.com/in/alishashah1/",
            talkUrl: "https://drive.google.com/file/d/1-STX_ze3kt8qF1V0_zIhkm76B_eT-ngM/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=9I67O-qU17o",
            videoUrlEmbed: "https://www.youtube.com/embed/9I67O-qU17o",
            description: "This talk focuses on the critical role of Named Entity Recognition (NER) and data masking in safeguarding sensitive information across various industries, including healthcare, finance, and government. We discuss how fine-tuning architectures are applied to pre-trained language models (LLMs) to improve data privacy while maintaining the usability of the data for research, testing, and analytics. Key use cases include masking patient records to comply with HIPAA in healthcare, protecting financial data in accordance with PCI DSS in finance, and securing sensitive government information. The session also explores the business impact of implementing robust data masking techniques. By fine-tuning models on domain-specific datasets, organizations can enhance both data privacy and model accuracy. This approach not only ensures compliance with industry regulations but also saves time and money while strengthening customer trust. A product demonstration will show how Anote’s platform allows for effective data masking, making sensitive information unusable to unauthorized intruders while still accessible for authorized use."
        },
        {
            date: "8/14, 2 PM EST - 3 PM EST",
            name: "Sriya Challa",
            role: "Product Manager",
            topic: "Question Answering Webinar",
            theme: "Classify Text, Extract Entities, Answer Questions",
            datasets: "Labeler, Prompting Legal Questions",
            linkedinUrl: "https://www.linkedin.com/in/sriya-challa/",
            talkUrl: "https://drive.google.com/file/d/10sz29OO_zBAHlrYbFXr3Y5ID0RhnO2uh/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=2pl93QgJ20g",
            videoUrlEmbed: "https://www.youtube.com/embed/2pl93QgJ20g",
            description: "This talk explores the limitations of current approaches to processing and extracting information from legal documents, focusing on the challenges posed by model hallucinations and lack of domain-specificity. Legal practitioners often need to extract specific entities from lengthy documents to answer queries, a task that can be either unstructured or require categorical responses. Traditional methods involve manually reviewing documents, a tedious and time-consuming process. While some large language models (LLMs) have been developed to assist in this task, they frequently struggle to deliver accurate and relevant information in legal contexts. The session introduces Anote’s human-centered approach as a solution to these challenges. By fine-tuning models to better understand legal documents, Anote aims to improve accuracy and reduce the occurrence of incorrect or irrelevant outputs. The talk includes a product demonstration showcasing how Anote’s platform can enhance the extraction of legal information, ensuring that models provide more reliable and domain-specific responses. Examples highlight the discrepancies between model-generated answers and human answers, emphasizing the need for more sophisticated AI solutions in the legal field."
        },
        {
          date: "8/14, 2 PM EST - 3 PM EST",
          name: "Tian Jin",
          role: "Machine Learning Engineer",
          topic: "Train with Model Versioning",
          theme: "Novel ML Approaches to Human Centered AI",
          datasets: "Train Supervised Classification, Train Supervised Chatbot, Train Supervised NER, Train Supervised Prompting",
          linkedinUrl: "https://www.linkedin.com/in/t-jin/",
          talkUrl: "https://drive.google.com/file/d/1Yis7c8Hj814UbSCiU32dExbh9TQKCtJ2/view",
          videoUrl: "https://www.youtube.com/watch?v=JGrsdxb7jxA",
          videoUrlEmbed: "https://www.youtube.com/embed/JGrsdxb7jxA",
          description: "This talk focuses on the critical process of model versioning, emphasizing how to manage and track the evolution of Language Learning Models (LLMs) as they adapt to changes in categories, training data, and annotations. Key considerations include assessing the impact of adding or removing categories and regularly updating models with expanded training data to maintain accuracy. The session highlights the importance of measuring model performance over time and across different annotation levels, allowing teams to identify the optimal version for their specific data needs. Through a product demonstration, we show how Anote facilitates progress tracking and model selection, ensuring that the chosen model is always aligned with the latest data and requirements. This approach ensures that the best-performing model is consistently used, tailored to the most current dataset and use case."
      },
        {
          date: "8/16, 4 PM EST - 5 PM EST",
          name: "Monica Jain",
          role: "Product Manager",
          topic: "Private Chatbot Overview",
          theme: "Answering Questions on Financial Documents",
          datasets: "Labeler: Prompting Unstructured - Earnings Calls, Labeler",
          linkedinUrl: "https://www.linkedin.com/in/monicajain01/",
          talkUrl: "https://drive.google.com/file/d/1xVrqtYaMNUuYS7JxsC7LCTjuVw1lVglO/view?usp=sharing",
          videoUrl: "https://www.youtube.com/watch?v=sajX9jfHIAY",
          videoUrlEmbed: "https://www.youtube.com/embed/sajX9jfHIAY",
          description: "This talk introduces Private GPT, a solution designed to enable financial enterprises to leverage Generative AI while maintaining the privacy and security of their sensitive data. Financial institutions often face challenges when trying to utilize AI for document analysis, particularly with the need to keep data on-premises and out of third-party cloud services. Private GPT addresses this by allowing users to upload documents to a local silo, ask questions, and receive accurate responses—all while ensuring that data remains securely stored on local infrastructure. The session demonstrates how Private GPT operates, from uploading financial documents like 10-K filings to querying and retrieving relevant information using models like GPT4All and Llama2. The product overview covers how the system processes and embeds data locally, preventing any sensitive information from leaving the premises. Additionally, the talk highlights the flexibility of building custom workflows, enabling users to create and download documents such as financial reports, while keeping all operations within a secure, private environment. The focus on data privacy ensures that organizations can confidently use AI without compromising on security or compliance."
      },
        {
            date: "8/16, 4 PM EST - 5 PM EST",
            name: "Zhiyi Tang",
            role: "Machine Learning Engineer",
            topic: "Private Chatbot Desktop App",
            theme: "Private Fine Tuned Chatbot for You",
            datasets: "Predict, Zero Shot Chatbot",
            linkedinUrl: "https://www.linkedin.com/in/zhiyi-tang/",
            talkUrl: "https://drive.google.com/file/d/1TCyAf50lbHYEIM3xKWSvHmidnFu3nqaJ/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=FYdnZTZL7KM",
            videoUrlEmbed: "https://www.youtube.com/embed/FYdnZTZL7KM",
            description: "This talk explores the Private Chatbot desktop app, designed to enable enterprises to interact with their documents using generative AI while maintaining stringent data privacy. Private Chatbot allows organizations to securely upload documents, ask detailed questions, and receive accurate, well-cited responses—all within a local, on-premise environment. The session highlights how the app uses advanced fine-tuning techniques like LoRA and QLoRA to enhance the performance of private LLMs such as Llama2, ensuring that AI-driven insights are both reliable and secure. Attendees will learn about the app's retrieval-augmented generation (RAG) system, which provides precise citations from the original documents, and the robust evaluation metrics used to verify the accuracy of these answers. By the end of the talk, participants will understand how to implement Private Chatbot within their organizations, leveraging its capabilities to gain insights from their data without compromising on privacy or security."
        },
        {
            date: "8/16, 4 PM EST - 5 PM EST",
            name: "Aarya Sangeeth",
            role: "Machine Learning Engineer",
            topic: "Private Chatbot Software Developer Kit",
            theme: "Private Fine Tuned Chatbot for You",
            datasets: "Predict, Zero Shot Chatbot, Anote Documentation Links, 10-Ks",
            linkedinUrl: "https://www.linkedin.com/in/aarya-sangeeth-9247752a6/",
            talkUrl: "https://drive.google.com/file/d/1YIqVxZ6SqER2JfTd7tFrk_i7xyyhgNKK/view?usp=sharing",
            videoUrl: "https://www.youtube.com/watch?v=xtOFXU86FdY",
            videoUrlEmbed: "https://www.youtube.com/embed/xtOFXU86FdY",
            description: "This talk provides a comprehensive overview of using the Private Chatbot SDK to perform sophisticated queries on various types of documents, including financial reports, research papers, and even web-based content. The presentation demonstrates how to integrate the Private Chatbot SDK into workflows, enabling users to upload documents, ask detailed questions, and receive highly relevant and accurate responses. We explore several practical use cases, such as querying Apple's 10-K filings, interacting with uploaded documents, and extracting information from websites, all while ensuring data privacy. The session includes detailed code examples that illustrate how to implement these functionalities using the Private Chatbot SDK. Each example highlights the process of uploading documents, running queries, and evaluating the relevance and faithfulness of the answers provided by the model. We also showcase the flexibility of the SDK in handling documents in multiple languages and the advantages of using private models for sensitive data. By the end of the talk, attendees will have a clear understanding of how to harness the Private Chatbot SDK to improve document analysis and information retrieval across a variety of contexts."
        },
        {
          date: "8/16, 4 PM EST - 5 PM EST",
          name: "Alisha Shah",
          role: "Product Manager",
          topic: "Text Classification Webinar",
          theme: "Classify Text, Extract Entities, Answer Questions",
          datasets: "Labeler: Classification - Product Reviews",
          linkedinUrl: "https://www.linkedin.com/in/alishashah1/",
          talkUrl: "https://drive.google.com/file/d/1hwAu5keKJ2EykZg4stRWzuVpZkoFjmRu/view?usp=sharing",
          videoUrl: "https://www.youtube.com/watch?v=lbpTqIPKu-c",
          videoUrlEmbed: "https://www.youtube.com/embed/lbpTqIPKu-c",
          description: "This talk explores hierarchical classification, a machine learning approach that structures data into a hierarchy of categories, sub-categories, and sub-sub-categories. By leveraging this technique, we can improve the accuracy and efficiency of product categorization, particularly in large datasets like Amazon reviews. The session provides a detailed overview of how hierarchical classification can be applied to predict product categories with minimal labeled samples, utilizing state-of-the-art few-shot learning. We also demonstrate how to create a customized text-based dataset, add relevant categories, and fine-tune a language model using human feedback to enhance performance. Through a product demo, the process of annotating edge cases is shown, where the model learns to predict and label similar instances. The talk concludes with practical examples of exporting the refined model as an API endpoint, showcasing its application in real-world scenarios such as product reviews for various categories like clothing, electronics, and home goods.."
      },
      {
        date: "8/16, 4 PM EST - 5 PM EST",
        name: "Catherine Wang",
        role: "Product Manager",
        topic: "Document Classification Example",
        theme: "Classify Text, Extract Entities, Answer Questions",
        datasets: "Labeler: Prompting With Structured and Unstructured, Natan to get NIH Data ping me",
        linkedinUrl: "https://www.linkedin.com/in/catherine-wang-cath0011/",
        talkUrl: "https://drive.google.com/file/d/1Bu-4v8VRIgLJZmDf4fGnXVfF8zzU_0W8/view?usp=sharing",
        videoUrl: "https://www.youtube.com/watch?v=l95qAYDwVgQ",
        videoUrlEmbed: "https://www.youtube.com/embed/l95qAYDwVgQ",
        description: "This talk focuses on the challenges organizations face in managing and reviewing thousands of grant proposals annually. The current approach often results in inefficiencies, where proposals are misrouted, delayed, or lost, making the review process time-consuming and reliant on expert intervention. We explore the requirements for a solution that can accurately tag and classify content, ensuring that each proposal reaches the appropriate reviewer efficiently. The session introduces Anote's platform as a scalable, accurate, and user-friendly solution for document classification in grant proposal reviews. The platform allows organizations to create custom text-based datasets, add relevant categories, and annotate documents. As users annotate edge cases, the model learns to predict and label similar cases, streamlining the entire process. The talk also covers how to identify mislabeled tags and how to export fine-tuned models as API endpoints, ultimately reducing costs and improving scalability in grant management."
    },
    {
      date: "8/16, 4 PM EST - 5 PM EST",
      name: "Soumya Goondla",
      role: "Product Manager",
      topic: "Chatbot on 10-Ks for Financial Analysts",
      theme: "Answering Questions on Financial Documents",
      datasets: "Financebench (found in Train Supervised Chatbot) from Labeler 10-K",
      linkedinUrl: "https://www.linkedin.com/in/soumya-goondla-1039b151/",
      talkUrl: "https://drive.google.com/file/d/1oIpJXPBaRLagVX2eg2FZ61UJQUf25Z8M/view?usp=sharing",
      videoUrl: "https://www.youtube.com/watch?v=3i2EXnGig-Y",
      videoUrlEmbed: "https://www.youtube.com/embed/3i2EXnGig-Y",
      description: "This talk addresses the challenges faced by financial companies in processing and extracting information from large volumes of unstructured text data, such as 10-Ks, 10-Qs, earnings call transcripts, and annual reports. Traditional methods, like manual document review and keyword searches, are time-consuming, tedious, and often inaccurate. While some companies have turned to large language models (LLMs) to improve efficiency, these models frequently struggle with financial domain-specific questions, leading to a lack of trust in their outputs. Anote’s solution offers a transformative approach by integrating state-of-the-art few-shot learning and domain-specific fine-tuning to significantly improve the accuracy of information extraction from financial documents. The session highlights the impact of this approach, showcasing how even with a few labeled samples, the model can rapidly learn and adapt, reducing the need for manual data labeling. The talk includes a cost comparison, demonstrating the substantial savings in time and resources, as well as a product demo illustrating how Anote’s platform can be customized to meet the specific needs of financial analysts, enabling them to derive insights that were previously unattainable."
  },
    ];


  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
      <div className="text-white justify-center flex flex-col text-center pt-24">
          <div className="text-4xl sm:text-6xl lg:text-7xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400">
            Launch of Panacea
          </div>
          <div className="text-xl sm:text-2xl lg:text-4xl mb-4 font-medium lg:font-bold font-['Helvetica_Neue']">
           Novel Artificial Intelligence Platform
        </div>
        <div className="flex flex-col mx-auto md:flex-row justify-center text-center mt-4">
<button
              className="btn-yellow mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto flex justify-center items-center inline-flex bg-yellow-500 text-gray-900 border-2 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-sm md:text-lg font-bold"
              onClick={() => {
                // window.open(
                //   "https://forms.gle/KJGXjcCw9QG6LJjb6",
                //   "_blank"
                // );
                window.location.assign("https://calendly.com/natanvidra/anote");
              }}
            >
              Schedule Demo
            </button>
            <button
              onClick={() => {
                window.open(
                    "https://drive.google.com/file/d/1NsB_p2Dj-im_KqPCJqSPL915LD7-FlJ4/view?usp=sharing",
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
                {/* <th>Date</th> */}
                <th>Role</th>
                {/* <th>Theme</th> */}
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
                  {/* <td>{item.date}</td> */}
                  <td>{item.role}</td>
                  {/* <td>{item.theme}</td> */}
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

export default Panacea;