import React from "react";
import AIDayVideo from './AIDayVideo';
import "../landing_page_styles/Agenda.css";

function AIDaySummit2025Agenda() {
  const companies = [
    { name: "Break Through Tech", logo: "/aiday_logos/BTTnew.png" },
    { name: "CIBC", logo: "/aiday_logos/CIBCnew.png" },
    { name: "Mindstone", logo: "/aiday_logos/Mindstone.png" },
    { name: "MLOps Community", logo: "/aiday_logos/MLOps.png" },
    { name: "AI Camp", logo: "/aiday_logos/AICampnew.png" },
    { name: "Columbia Devfest", logo: "/aiday_logos/Columbianewer.png" },
    { name: "Digestible AI", logo: "/aiday_logos/DigestibleAInew.png" },
    { name: "Cornell Tech", logo: "/aiday_logos/CornellTech.png" },
    // { name: "AI Furnace", logo: "/aiday_logos/AIFurnace.png" },
  ];

  const agendaItems = [
    {
      date: '2/12/2025',
      time: '8:00 AM EST to 8:15 AM EST',
      name: 'Niyonika Chabra',
      linkedinUrl: 'https://www.linkedin.com/in/niyonikachhabra/',
      email: 'nc574@cornell.edu',
      role: 'Grad Student',
      company: 'Cornell Tech',
      topic: 'Physical AI Agents',
      description:
        'Niyonika Chabra is a graduate student at Cornell Tech, specializing in Tech Product Management, where she merges her passion for AI with practical applications. With a robust background as a Software Engineer at IBM, she has developed cutting-edge AI solutions, including a Gen AI-powered Conversational Intelligence system and an end-to-end visual inspection solution for automotive manufacturing. Niyonika shares insights into the integration of AI in physical environments that illuminate the transformative potential of Physical AI Agents. Attendees will gain a unique perspective on how these agents can enhance efficiency and sustainability in various industries, making her session a must-attend for anyone interested in the future of technology.',
      speakerBio: '',
      talkUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=LCo2TVlA6mg',
      videoUrlEmbed: 'https://www.youtube.com/embed/LCo2TVlA6mg'
    },
    {
      date: '2/12/2025',
      time: '8:15 AM EST to 8:30 AM EST',
      name: 'Princy Patel',
      linkedinUrl: 'https://www.linkedin.com/in/princy-patel-4a7a19206/',
      email: 'patel.princyr@northeastern.edu',
      role: 'Graduate Student',
      company: 'Northeastern',
      topic: 'Learning Assistant Agent',
      description:
        'The Learning Assistant Agent is a tool that helps users find and organize learning resources across different platforms. It uses AI models (Gemini/GPT-4) to gather information from multiple sources and present it in one place. The agent searches through academic papers, blog posts, GitHub repositories, and YouTube videos to find relevant content for any given topic. Users can input their topic of interest and choose which type of resources they want to explore. The agent then searches the appropriate platforms and returns organized results, saving time that would otherwise be spent searching multiple websites separately.',
      speakerBio: '',
      talkUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=-_NAjX5t-UQ',
      videoUrlEmbed: 'https://www.youtube.com/embed/-_NAjX5t-UQ'
    },
    {
      date: '2/12/2025',
      time: '8:30 AM EST to 8:45 AM EST',
      name: 'Siddharth Upadhyay',
      linkedinUrl: 'https://www.linkedin.com/in/siddharth-upadhyay/',
      email: 'supadhya2@stevens.edu',
      role: 'Student',
      company: 'Stevens',
      topic: 'Prepright Product Demo',
      description:
        'PrepRight addresses this problem by leveraging AI-powered skill assessment to analyze resumes and job descriptions, providing candidates with tailored preparation plans. The platform highlights key areas of improvement, empowering job seekers to align their skills better with job requirements. We will walk through our technology stack, including React, Node.js, Python, LangChain, Flask, and OpenAI APIs, and demonstrate how we utilize AI to create a smarter and more efficient preparation process.',
      speakerBio: '',
      talkUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=MDhiSrocl5A',
      videoUrlEmbed: 'https://www.youtube.com/embed/MDhiSrocl5A'
    },
    {
      date: '2/12/2025',
      time: '8:45 AM EST to 9:00 AM EST',
      name: 'Pinar Yelkikanat',
      linkedinUrl: 'https://www.linkedin.com/in/pinarsyelkikanat/',
      email: 'pyelkikanat@gmail.com',
      role: 'Strategic AI Manager',
      company: 'MIT',
      topic: 'Strategy for an AI Agent Roadmap',
      description:
        '​Pinar Yelkikanat is a Strategic AI Manager at HBR, where she leverages her extensive expertise in generative AI and agile methodologies to drive innovation and operational excellence. With a proven track record at Conviva, she has successfully led data analytics programs that increased client revenue by 25% and enhanced system performance by 20%. Pinar has a robust educational background, including an MBA and advanced studies in AI, equips her with a unique perspective on integrating technology into strategic frameworks. Attendees will gain invaluable insights into developing a comprehensive AI agent roadmap, drawing from her rich experience in product management and program leadership in the tech industry.',
      speakerBio: '',
      talkUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=eWn3szkHZqE',
      videoUrlEmbed: 'https://www.youtube.com/embed/eWn3szkHZqE'
    },
    {
      date: '2/12/2025',
      time: '9:00 AM EST to 9:15 AM EST',
      name: 'Chuxin Liu',
      linkedinUrl: 'https://www.linkedin.com/in/chuxin-liu/',
      role: 'Data Scientist',
      company: 'J.P. Morgan Chase',
      topic: 'Data Analyst AI Agent',
      description:
        'Chuxin Liu, PhD, is a Data Scientist at J.P. Morgan Chase, where they specialize in quantitative modeling and risk management. With a robust background in economics and extensive experience in time-series forecasting and data science workflows, Chuxin has made significant contributions to model risk governance and macroeconomic analysis. Their academic journey includes a PhD from The City University of New York and a Bachelor\'s degree from Peking University, equipping them with a deep understanding of finance and analytics. In today\'s session on Data Analyst AI Agent, attendees will gain unique insights into leveraging AI for enhanced data analysis and decision-making, drawing from Chuxin\'s expertise in applying advanced technologies to real-world challenges.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=T772PqVvClw',
      videoUrlEmbed: 'https://www.youtube.com/embed/T772PqVvClw'
    },
    {
      date: '2/12/2025',
      time: '9:15 AM EST to 9:30 AM EST',
      name: 'Thomas Faudree',
      linkedinUrl: 'https://www.linkedin.com/in/thomas-bueler-faudree-333b6993/',
      role: 'Co-Founder',
      company: 'Vecflow',
      topic: 'AI agents for law firms',
      description:
        'Vecflow is an AI-powered platform that helps lawyers streamline workflows, and its flagship solution, Oliver, is trusted by top transactional firms to accelerate legal work. Oliver uses Agentic AI (a hierarchy of LLMs) to look through law firm documents to identify precedent rapidly. Oliver can then precisely edit (in tracked changes) a precedent or firm deal document with a term sheet, decreasing the time to get to a first draft by over 80%. Vecflow has partnered with Meta to deploy and develop the Llama model, allowing our system to be fully on-premise.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=cbLuLegAz5U',
      videoUrlEmbed: 'https://www.youtube.com/embed/cbLuLegAz5U'
    },
    {
      date: '2/12/2025',
      time: '9:30 AM EST to 9:45 AM EST',
      name: 'Jiten Bhalavat',
      linkedinUrl: 'https://www.linkedin.com/in/jiten-bhalavat/',
      email: 'jbha0504@umd.edu',
      role: 'Machine Learning Student',
      company: 'University of Maryland',
      topic: 'Personal AI Agent',
      description:
        'This project focuses on developing a personal AI agent that offers a comprehensive overview of my skills, education, projects, and experience by integrating data from GitHub, LinkedIn, Medium, and the internet. Key features include GitHub and LinkedIn agents to fetch repositories and professional details, Medium integration for top blog posts, and a general information agent using DuckDuckGo. A unified response system consolidates all data, while OpenAI’s Text-to-Speech enhances interactivity by converting text into speech. Technologies like OpenAI LLM, Scrapin.io API, and Firecrawl Tools ensure seamless data retrieval and user engagement. This AI agent serves as an innovative alternative to traditional resumes.',
      speakerBio: '',
      talkUrl: '',
      videoUrl: 'https://www.youtube.com/watch?v=4cAm841ZVYQ',
      videoUrlEmbed: 'https://www.youtube.com/embed/4cAm841ZVYQ'
    },
    {
      date: '2/12/2025',
      time: '9:45 AM EST to 10:00 AM EST',
      name: 'Faraz Siddiqi',
      linkedinUrl: 'https://www.linkedin.com/in/farazmsiddiqi/',
      role: 'Software Engineer',
      company: 'Microsoft',
      topic: 'AI / ML for Copilot',
      description:
        '​Faraz Siddiqi is a Software Engineer at Microsoft, where he is at the forefront of integrating machine learning into Azure Copilot. With a rich background that includes co-founding Hatch, a pioneering digital recruitment platform, and extensive experience in developing innovative ML tools, Faraz has consistently demonstrated his expertise in AI and technology. His current work focuses on enhancing LLM reasoning capabilities, making him uniquely qualified to discuss the intricacies of AI/ML for Copilot. Attendees will gain invaluable insights into cutting-edge ML projects and algorithms that are shaping the future of intelligent assistance in cloud environments.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=gEDBG4WTZ3U',
      videoUrlEmbed: 'https://www.youtube.com/embed/gEDBG4WTZ3U'
    },
    {
      date: '2/12/2025',
      time: '10:00 AM EST to 10:15 AM EST',
      name: 'David Berenstein',
      linkedinUrl: 'https://www.linkedin.com/in/davidberenstein/',
      role: 'ML / Developer Relations',
      company: 'Hugging Face',
      topic: 'Smol Agents and Hugging Face Hub',
      description:
        '​David Berenstein is a Machine Learning and Developer Relations expert at Hugging Face, where he focuses on enhancing data quality for both synthetic and real data. With a robust background in NLP and data-centric solutions, David has contributed significantly to the open-source community through his roles at Argilla and Pandora Intelligence. His extensive education in Computer Science and Engineering, combined with hands-on experience in developing innovative AI solutions, positions him uniquely to discuss Smol Agents, Smol Bluprint and the Hugging Face Hub. Attendees can expect to gain valuable insights into leveraging these tools for enhanced AI applications, drawing from David\'s deep expertise and practical knowledge in the field.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=PLCZVUQ1p3c',
      videoUrlEmbed: 'https://www.youtube.com/embed/PLCZVUQ1p3c'
    },
    {
      date: '2/12/2025',
      time: '10:15 AM EST to 10:30 AM EST',
      name: 'Reyhan Merekar',
      linkedinUrl: 'https://www.linkedin.com/in/reyhanmerekar/',
      role: 'AI Consultant',
      company: 'Accenture',
      topic: 'Newsletter AI Agent',
      description:
        'Reyhan Merekar is an AI Consultant at Accenture, where he specializes in developing innovative AI and machine learning solutions for Fortune 500 clients. With a strong background in data analytics and a Bachelor of Business Administration with Honors from Baruch College, Reyhan has successfully launched a Generative AI tool that achieved 90% adoption in retail marketing. In his session on the Newsletter AI Agent, attendees will gain unique insights into leveraging AI agents for generating compelling newsletter topics, drawing from Reyhan\'s extensive experience in MLOps and his passion for educating others in the field. Prepare to be inspired by his expertise and practical strategies that can transform your approach to content creation.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=uSnk5eQnFcA',
      videoUrlEmbed: 'https://www.youtube.com/embed/uSnk5eQnFcA'
    },
    {
      date: '2/12/2025',
      time: '10:30 AM EST to 10:45 AM EST',
      name: 'Chi Wang',
      linkedinUrl: 'https://www.linkedin.com/in/chi-wang-autogen/',
      role: 'Founder',
      company: 'Autogen',
      topic: 'AG2: open-source AgentOS',
      description:
        'Chi Wang is the Founder of AutoGen, now known as AG2, and a Senior Staff Research Scientist at Google DeepMind. With a Ph.D. in Computer Science from the University of Illinois Urbana-Champaign and extensive experience at leading tech companies like Microsoft and Facebook, Chi has made significant contributions to AI and data mining. In today\'s session, he will delve into AG2: open-source AgentOS, sharing his unique insights on how this innovative platform can transform the landscape of AI development. Attendees will gain valuable knowledge on leveraging open-source technologies to enhance agent-based systems, drawing from Chi\'s rich background in research and practical applications.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=IbdfuMWnrAY',
      videoUrlEmbed: 'https://www.youtube.com/embed/IbdfuMWnrAY'
    },
    {
      date: '2/12/2025',
      time: '10:45 AM EST to 11:00 AM EST',
      name: 'Thomas Donohue',
      linkedinUrl: 'https://www.linkedin.com/in/thomasjdonohue/',
      role: 'Founder',
      company: 'AutoABM',
      topic: 'AI-Powered Marketing',
      description:
        'Introducing Thomas Donohue, the visionary Founder of AutoABM, who is at the forefront of revolutionizing B2B marketing through AI-powered solutions. With a robust background as a Senior Implementation Consultant and a proven track record of driving significant revenue growth across various industries, Thomas brings unparalleled expertise in marketing automation and account-based marketing strategies. His session will delve into the intricacies of an AI-driven ABM system, showcasing how it can seamlessly orchestrate end-to-end marketing campaigns that not only enhance efficiency but also maximize ROI. Attendees will gain invaluable insights into leveraging AI technology to transform their marketing efforts and achieve scalable growth in today\'s competitive landscape.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=JeOnZNMCroI',
      videoUrlEmbed: 'https://www.youtube.com/embed/JeOnZNMCroI'
    },
    {
      date: '2/12/2025',
      time: '11:00 AM EST to 11:15 AM EST',
      name: 'Sanya Mahajan',
      linkedinUrl: 'https://www.linkedin.com/in/sanyamahajan2027/',
      role: 'Student',
      company: 'Cornell',
      topic: 'AI RFP Agent Demo',
      description:
        'Sanya Mahajan, a Computer Science student at Cornell University, brings a wealth of knowledge and innovative research to the tech conference. With experience as an Incoming Software Engineer Intern at Capital One and a Software Developer at Hack4Impact, Sanya has demonstrated her commitment to leveraging technology for impactful solutions. Her presentation on the AI RFP Agent Demo will showcase cutting-edge advancements in AI-powered grant proposal and RFP response automation, offering attendees insights into streamlining processes and enhancing efficiency. Participants can expect to gain valuable takeaways on integrating AI into their workflows and the future of automated solutions in the tech industry.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=VKkB675vCkY',
      videoUrlEmbed: 'https://www.youtube.com/embed/VKkB675vCkY'
    },
    {
      date: '2/12/2025',
      time: '11:15 AM EST to 11:30 AM EST',
      name: 'Aisha Ahmad',
      linkedinUrl: 'https://www.linkedin.com/in/aisha-ahmad-423646244/',
      role: 'Student',
      company: 'Hofstra',
      topic: 'AI Coding Agent Writeup',
      description:
        'Aisha Ahmad, an AI/ML Fellow at Break Through Tech and a dual degree candidate in Computer Science and Data Science at Hofstra University, will present her groundbreaking research on autonomous AI coding agents and multi-agent frameworks. With a strong academic foundation, including a Bachelor of Science in Computer Science and a Machine Learning Foundations certificate from Cornell University, Aisha is at the forefront of innovative AI applications. Attendees will gain insights into the development and implications of AI coding agents, exploring how these technologies can enhance programming efficiency and collaboration. This talk promises to inspire and equip participants with knowledge on the future of AI in software development.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=qi0xV2-qmKo',
      videoUrlEmbed: 'https://www.youtube.com/embed/qi0xV2-qmKo'
    },
    {
      date: '2/12/2025',
      time: '11:30 AM EST to 11:45 AM EST',
      name: 'Kia Khezeli',
      linkedinUrl: 'https://www.linkedin.com/in/kia-khezeli/',
      role: 'Co-Founder and CEO',
      company: 'Yrikka',
      topic: 'Contextual Red Teaming for Computer Vision',
      description: 'Kia Khezeli, Co-Founder and CEO of YRIKKA, will present on "Contextual Red Teaming for Computer Vision" at the tech conference. With a strong background as a Machine Learning Scientist and extensive experience in AI security, Kia has led innovative projects at organizations like Mayo Clinic and the Frontier Development Lab. His expertise lies in ensuring that AI systems are aligned with human values, particularly in the realm of vision models. Attendees can expect insights into the critical role of red teaming in enhancing the reliability and safety of AI applications in real-world scenarios.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=nMNmHFitq5o',
      videoUrlEmbed: 'https://www.youtube.com/embed/nMNmHFitq5o'
    },
    {
      date: '2/12/2025',
      time: '11:45 AM EST to 12:00 PM EST',
      name: 'Paul J. Maykish',
      linkedinUrl: 'https://www.linkedin.com/in/paul-j-maykish-a0550072/',
      role: 'Senior Advisor',
      company: 'SCSP',
      topic: 'National AI Strategy in the AGI Era',
      description:
        'Paul J. Maykish serves as a Senior Advisor at the Special Competitive Studies Project, where he leverages his extensive experience in national security and technology strategy. With a distinguished career that includes leadership roles at the National Security Council and U.S. Central Command, Paul has been at the forefront of shaping U.S. advantages in technology and defense. His deep understanding of military strategy and innovation uniquely positions him to address the complexities of the National AI Strategy in the AGI Era. Attendees will gain invaluable insights into how the U.S. can navigate the evolving landscape of artificial intelligence, ensuring national security and technological leadership in an increasingly competitive world.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=2lVuQ9bz7kg',
      videoUrlEmbed: 'https://www.youtube.com/embed/2lVuQ9bz7kg'
    },
    {
      date: '2/12/2025',
      time: '12 PM EST to 12:15 PM EST',
      name: 'Arjun Chintapalli, Bhavani Kalisetty',
      linkedinUrl: 'https://www.linkedin.com/in/arjun-chintapalli/',
      role: 'Founder / CEO',
      company: 'rtrvr.ai',
      topic: 'rtrvr.ai Product Demo',
      description:
        'Arjun Chintapalli is the Founder and CEO of rtrvr.ai, where he is pioneering the development of the Universal Web Agent to enhance the browsing experience through AI. With a robust background as a Machine Learning Engineer at Google, he has led innovative projects utilizing vertical federated learning to train models on a global scale. Arjun\'s extensive experience, including roles at Capital One and Intellicess Inc., showcases his deep expertise in AI and technology. In today\'s session, attendees will gain exclusive insights into the rtrvr.ai product, discovering how it leverages cutting-edge AI to transform the way we interact with the web.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=OD6pnlKlM3s',
      videoUrlEmbed: 'https://www.youtube.com/embed/OD6pnlKlM3s'
    },
    {
      date: '2/12/2025',
      time: '12:15 PM EST to 12:30 PM EST',
      name: 'Sam Savage',
      linkedinUrl: 'https://www.linkedin.com/in/samuel-savage/',
      role: 'Founder',
      company: 'RoboApply',
      topic: 'AI Agents for Job Applications',
      description:
        'Sam Savage, Lead Data Engineer at AstraZeneca and Vice President of Engineering at AgentSmyth, will present at the tech conference on the topic "AI Agents for Job Applications." With over six years of experience in data science and engineering, Sam will share insights on leveraging AI to streamline the job application process. Attendees can expect a live demo showcasing RoboApply, an innovative tool that automates job applications, allowing users to focus on what matters most. Join us to explore the future of AI in recruitment and enhance your understanding of this transformative technology.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=bDmRvt_t1N8',
      videoUrlEmbed: 'https://www.youtube.com/embed/bDmRvt_t1N8'
    },
    {
      date: '2/12/2025',
      time: '12:30 PM EST to 12:45 PM EST',
      name: 'Fernando Delgado',
      linkedinUrl: 'https://www.linkedin.com/in/fernando-delgado-/',
      role: 'Growth',
      company: 'Narada',
      topic: 'Narada Computer Use Product Demo',
      description:
        'During our talk, we will introduce Narada, a new agentic process automation platform designed to transform how enterprises automate complex workflows. Based on new research from the UC Berkeley AI Research Lab, Narada uses large action models to take natural language commands and automatically plans, orchestrates, and executes tasks across different siloed tools and ecosystems. We will showcase how Narada automates labor-intensive processes - like finance operations, sales workflows, HR tasks, and even intricate release testing - without requiring complex scripting or IT overhead. As well as touch on how our LLMCompiler generates an intermediate, executable representation that invokes tools through both APIs and browser automations.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=HsciPy5-t1E',
      videoUrlEmbed: 'https://www.youtube.com/embed/HsciPy5-t1E'
    },
    {
      date: '2/12/2025',
      time: '12:45 PM EST to 1:00 PM EST',
      name: 'Deepa Paikar',
      linkedinUrl: 'https://www.linkedin.com/in/deepapaikar/',
      role: 'ML Engineer',
      company: 'Yeshiva University',
      topic: 'AI-Agent Evals',
      description:
        'Deepa Paikar is a Machine Learning Engineer at Yeshiva University, where she specializes in developing innovative AI solutions. With a robust background in generative AI and full-stack development, Deepa has engineered AI-driven applications at leading organizations like S&P Global and BJC Healthcare. In her session on "Leveraging AI Agents to Evaluate AI Agents," she will share her unique insights into the evaluation processes of AI systems, drawing from her extensive experience in fine-tuning large language models and creating intelligent chatbots. Attendees will gain valuable knowledge on how to effectively assess AI agents, enhancing their understanding of AI\'s capabilities and limitations',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=0VCcZmZhfm4',
      videoUrlEmbed: 'https://www.youtube.com/embed/0VCcZmZhfm4'
    },
    {
      date: '2/12/2025',
      time: '1:00 PM EST to 1:15 PM EST',
      name: 'Jasper Levy',
      linkedinUrl: 'https://www.linkedin.com/in/jasper-levy-956722208/',
      role: 'Graduate Student',
      company: 'Cornell Tech',
      topic: 'Agent Optimization',
      description:
        '​Jasper Levy is currently a Graduate Student at Cornell Tech, specializing in Computer Science and Machine Learning. With a robust background as a Solutions Engineer at EliseAI and experience in data analytics at HP, Jasper brings a wealth of knowledge in AI technologies. In his session on Agent Optimization, he will delve into DSPY and Model Optimization, offering unique insights into "Fine Tuning" for Agents and Evals. Attendees can expect to gain practical strategies and innovative approaches that will enhance their understanding of optimizing agent performance in real-world applications.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=cC1ygplPtuw',
      videoUrlEmbed: 'https://www.youtube.com/embed/cC1ygplPtuw'
    },
    {
      date: '2/12/2025',
      time: '1:15 PM EST to 1:30 PM EST',
      name: 'Anelya Altiyeva',
      linkedinUrl: 'https://www.linkedin.com/in/anelyaltiyeva/',
      role: 'Student',
      company: 'Academy of Arts',
      topic: 'AI Agent based marketing',
      description:
        '​Anelya A. is currently a dedicated student at the Academy of Art University, pursuing a Master of Arts in Artificial Intelligence in Design. With a robust background as a Marketing Manager and Product Analyst, she has successfully leveraged her analytical skills to drive impactful marketing strategies. In her session on AI Agent-based marketing, Anelya will share unique insights into how AI-powered platforms can revolutionize advertising through blockchain technology, enabling the creation of highly personalized ads. Attendees will gain valuable knowledge on the intersection of AI and marketing, equipping them with innovative approaches to enhance their advertising efforts.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=DBdoj62KTO0',
      videoUrlEmbed: 'https://www.youtube.com/embed/DBdoj62KTO0'
    },
    {
      date: '2/12/2025',
      time: '1:30 PM EST to 1:45 PM EST',
      name: 'Steven Liss',
      linkedinUrl: 'https://www.linkedin.com/in/stevenliss/',
      role: 'Co-Founder / CEO',
      company: 'OpenAds',
      topic: 'OpenAds Product Demo',
      description:
        'Steven Liss is the Co-Founder and CEO of OpenAds, where he leads the development of the only real-time generative ad network that creates unique creatives for every impression. With a rich background in technology and AI, including previous ventures like Birb and Scratchwork, Steven has consistently pushed the boundaries of innovation in advertising and online collaboration. In his session on the OpenAds Product Demo, attendees will gain invaluable insights into how generative ads are transforming the digital landscape, making advertising more personalized and effective for the generative internet. Join Steven to explore the future of advertising and discover how AI can reshape business incentives around creative content.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=-anU0RGvfgw',
      videoUrlEmbed: 'https://www.youtube.com/embed/-anU0RGvfgw'
    },
    {
      date: '2/12/2025',
      time: '1:45 PM EST to 2:00 PM EST',
      name: 'Vanessa Escande',
      linkedinUrl: 'https://www.linkedin.com/in/vanessaescande/',
      role: 'AI Consultant',
      company: 'Big Picture',
      topic: 'Building your own AI logistics agent',
      description:
        'Vanessa Escande - 万丽莎 is an accomplished AI Implementation Consultant at BIG PICTURE GmbH, where she guides companies in harnessing AI solutions to drive significant business impact. With a rich background in project management and co-founding innovative platforms, Vanessa brings a wealth of knowledge in technology and strategic growth. In her presentation, "How to Build Your Own AI Agent - A Live Example from Logistics," she will share practical insights and real-world applications that empower attendees to create their own AI agents, enhancing efficiency and connectivity in logistics. Join her to discover how to leverage AI for transformative results in your organization.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=W0t5Y3RyUis',
      videoUrlEmbed: 'https://www.youtube.com/embed/W0t5Y3RyUis'
    },
    {
      date: '2/12/2025',
      time: '2:00 PM EST to 2:15 PM EST',
      name: 'Priyankshi Gupta, Dev Ashar',
      linkedinUrl: 'https://www.linkedin.com/in/priyanshiguptaaa/',
      role: 'Graduate Student',
      company: 'Cornell Tech',
      topic: 'Agent Monitoring',
      description:
        'Priyanshi Gupta is a Graduate Student at Cornell Tech, specializing in Computer Science and Information Systems. With a robust background in AI and technology, she has held pivotal roles at leading companies such as Samsung and NVIDIA, where she contributed to groundbreaking projects in natural language processing and machine learning. In her session on Echosys Demo, Priyanshi will delve into the intricacies of Agent Monitoring, sharing unique insights drawn from her extensive research and hands-on experience. Attendees can expect to gain a deeper understanding of how advanced monitoring systems can enhance AI performance and user interaction.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=cUsH-M8KKaY',
      videoUrlEmbed: 'https://www.youtube.com/embed/cUsH-M8KKaY'
    },
    // {
    //   date: '2/12/2025',
    //   time: '2:00 PM EST to 2:15 PM EST',
    //   name: 'Dev Ashar',
    //   linkedinUrl: 'https://www.linkedin.com/in/dev-ashar/',
    //   role: 'Graduate Student',
    //   company: 'Cornell Tech',
    //   topic: 'Multi-Agent AI Interpretability',
    //   description:
    //     '​Dev Ashar is currently a Graduate Student at Cornell Tech, specializing in Computer Science with a focus on AI technologies. With a robust background as a Software Development Engineer at Luganodes and experience in developing innovative solutions for blockchain and AI-driven projects, Dev has made significant contributions to the field, including the development of an Ethereum Staking API. In today\'s session on Multi-Agent AI Interpretability, Dev will share unique insights from the Echosys Demo, exploring how advanced algorithms can enhance understanding and collaboration among AI agents, providing attendees with valuable perspectives on the future of AI interpretability.',
    //   speakerBio: "",
    //   talkUrl: "",
    //   videoUrl: 'https://www.youtube.com/watch?v=cUsH-M8KKaY&t=12s',
    //   videoUrlEmbed: 'https://www.youtube.com/embed/cUsH-M8KKaY&t=12s'
    // },
    // {
    //   date: '2/12/2025',
    //   time: '2:15 PM EST to 2:30 PM EST',
    //   name: 'Meghana Kesanapalli',
    //   linkedinUrl: 'https://www.linkedin.com/in/lakshmi-meghana-kesanapalli/',
    //   role: 'Student',
    //   company: 'Cornell University',
    //   topic: 'Agents SDK Overview',
    //   description:
    //     'Meghana Kesanapalli is a dedicated student at Cornell University, pursuing a Bachelor\'s degree in Computer Science. With hands-on experience as an Incoming Sales & Trading Rotational Summer Analyst at Bank of America and a Data Analyst & Software Developer at the Cornell Lab of Ornithology, Meghana has demonstrated a strong expertise in AI and technology. In her session on Agents SDK Overview, attendees will gain unique insights into the practical applications of agent-based systems, drawing from her extensive background in software development and machine learning. Prepare to be inspired by her innovative approach to leveraging technology in real-world scenarios.',
    //   speakerBio: "",
    //   talkUrl: "",
    //   videoUrl: 'Y, share URL'
    // },
    {
      date: '2/12/2025',
      time: '2:15 PM EST to 2:30 PM EST',
      name: 'Rishav Acharya, Andrew Hing, Xavier Yin, Meghana Kesanapalli',
      linkedinUrl: 'https://www.linkedin.com/in/rishav-a-0482051a7/',
      role: 'AI Developer',
      company: 'AI Camp',
      topic: 'Agents SDK Examples',
      description:
        '​Rishav A. is an accomplished AI Developer at AI Camp, where he leverages his extensive background in software engineering and education to drive innovative solutions. With a rich history of mentoring and developing user-friendly applications, Rishav has successfully automated complex processes and enhanced user engagement through technology. In his session on Agent SDK Examples, attendees will gain unique insights into practical applications and best practices, drawing from Rishav\'s diverse experiences in both open-source development and educational environments. Prepare to be inspired by his expertise as he demystifies the intricacies of Agent SDKs and their transformative potential in the tech landscape.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=m52p3ERt2Io',
      videoUrlEmbed: 'https://www.youtube.com/embed/m52p3ERt2Io'
    },
    // {
    //   date: '2/12/2025',
    //   time: '2:15 PM EST to 2:30 PM EST',
    //   name: 'Andrew Hing',
    //   linkedinUrl: 'https://www.linkedin.com/in/andrew-hing21/',
    //   role: 'Student',
    //   company: 'Stevens',
    //   topic: 'Agents SDK Use Cases',
    //   description:
    //     '​Introducing Andrew Hing, a dedicated Computer Science student at Stevens Institute of Technology, who is making waves in the field of AI and technology. As an AI Researcher at Algoverse, Andrew developed a time series model that significantly improved prediction accuracy and reduced computation time, showcasing his innovative approach to complex problems. In his session on Agents SDK Use Cases, attendees will gain unique insights into practical applications of agent technology, drawing from Andrew\'s hands-on experience and research. Prepare to be inspired by Andrew\'s expertise and vision for the future of AI-driven solutions.',
    //   speakerBio: "",
    //   talkUrl: "",
    //   videoUrl: 'Y, share URL'
    // },
    // {
    //   date: '2/12/2025',
    //   time: '2:15 PM EST to 2:45 PM EST',
    //   name: 'Xavier Yin',
    //   linkedinUrl: 'https://www.linkedin.com/in/xavier-yin-623a392b6/',
    //   role: 'Graduate Student',
    //   company: 'Cornell Tech',
    //   topic: 'Agents SDK Private Version',
    //   description:
    //     'Jiacheng Yin is a Graduate Student at Cornell Tech, specializing in Computer and Information Sciences. With a robust background as a Research Assistant at Wuhan University, where he focused on GIS and biostatistics, and as an Assistant Engineer at China Railway Construction Co., Ltd., Jiacheng brings a wealth of expertise in AI and technology. His insights into the Private Version of Agent SDK will illuminate its potential applications and innovations, offering attendees a unique perspective on leveraging advanced technology in real-world scenarios. Join us to discover how Jiacheng\'s experiences and knowledge can enhance your understanding of this cutting-edge topic.',
    //   speakerBio: "",
    //   talkUrl: "",
    //   videoUrl: 'Y, share URL'
    // },
    {
      date: '2/12/2025',
      time: '2:45 PM EST to 3:00 PM EST',
      name: 'Zhou Yu',
      linkedinUrl: 'https://www.linkedin.com/in/zhou-jo-yu-95327378/',
      role: 'Founder & CEO',
      company: 'Arklex.ai',
      topic: 'Arklex Agent Framework',
      description:
        '​Zhou (Jo) Yu is the Founder and CEO of Arklex.ai, where they lead the development of innovative AI solutions. With a distinguished academic background, including a PhD in Computer Science from Carnegie Mellon University, and extensive experience as an Associate Professor at Columbia University, Zhou has been recognized as a Forbes 30 Under 30 honoree for their contributions to AI. Attendees will gain unique insights into the Arklex Agent Framework, a modular and extensible system designed for creating task-oriented dialogue agents powered by LLMs, enabling seamless and customizable interactions under the guidance of the Taskgraph orchestrator. Agent First Organization provides a framework for developing task-oriented dialogue agents to complete complex tasks powered by LLMs. The framework is designed to be modular and extensible, allowing developers to customize workers that can interact with each other in a variety of ways under the supervision of the orchestrator managed by Taskgraph.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=xxlbKVNm_m4',
      videoUrlEmbed: 'https://www.youtube.com/embed/xxlbKVNm_m4'
    },
    {
      date: '2/12/2025',
      time: '3:00 PM EST to 3:15 PM EST',
      name: 'Jiquan Ngiam',
      linkedinUrl: 'https://www.linkedin.com/in/jngiam/',
      role: 'Founder',
      company: 'Lutra',
      topic: 'Lutra Product Demo',
      description: 'Jiquan Ngiam, Co-Founder and CEO of Lutra AI, will present an engaging demo of the Lutra product, showcasing how foundation models can revolutionize AI workflows. With a rich background in engineering and leadership at companies like Google and Coursera, Jiquan brings a wealth of expertise in building innovative software solutions. Attendees will gain insights into how Lutra enables users to automate repetitive tasks through specialized AI assistants that seamlessly integrate with existing tools. This presentation promises to equip participants with practical knowledge on leveraging AI to enhance productivity and streamline operations.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=jsQGAe7OWF8',
      videoUrlEmbed: 'https://www.youtube.com/embed/jsQGAe7OWF8'
    },
    {
      date: '2/12/2025',
      time: '3:15 PM EST to 3:30 PM EST',
      name: 'Amrutha Gujjar',
      linkedinUrl: 'https://www.linkedin.com/in/amruthagujjar/',
      role: 'Founder',
      company: 'Structured',
      topic: 'Preswald Data Framework',
      description: 'Amrutha Gujjar, CEO and Co-Founder of Structured, will present the innovative Preswald Data Framework, a cutting-edge solution designed to streamline data management and enhance productivity. With a robust background in software engineering at leading tech companies like Facebook and Google, Amrutha brings a wealth of expertise to the table. Attendees will gain insights into how the Preswald Data Framework integrates seamlessly into daily workflows, combining calendar, to-do lists, and habit tracking into a cohesive visual timeline. This presentation promises to equip participants with practical strategies for optimizing their data processes and improving overall efficiency in their projects.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=KI-umaA086E',
      videoUrlEmbed: 'https://www.youtube.com/embed/KI-umaA086E'
    },
    {
      date: '2/12/2025',
      time: '3:30 PM EST to 3:45 PM EST',
      name: 'Juwariah Shareef',
      linkedinUrl: 'https://www.linkedin.com/in/juwariah/',
      role: 'Founder / CEO',
      company: 'Sageflow',
      topic: 'Low Code AI Agents',
      description: 'Juwariah Shareef, founder of the innovative Stealth AI Startup, will present on the transformative potential of Low Code AI Agents. With a robust background in AI-led platforms and management consulting, Juwariah brings a wealth of expertise in navigating corporate transformation challenges. Attendees can expect an engaging demo showcasing how Low Code AI Agents empower organizations to streamline operations and enhance productivity without extensive technical knowledge. Key takeaways will include practical insights on implementing AI solutions and strategies for fostering a people-centric approach in tech-driven environments.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=FozftffJi1g',
      videoUrlEmbed: 'https://www.youtube.com/embed/FozftffJi1g'
    },
    {
      date: '2/12/2025',
      time: '3:45 PM EST to 4:15 PM EST',
      name: 'Bernardo Aceituno',
      linkedinUrl: 'https://www.linkedin.com/in/baceituno/',
      role: 'Co-Founder',
      company: 'Stack AI',
      topic: 'Stack AI Product Demo',
      description:
        'Bernardo Aceituno, Co-Founder of Stack AI, will present an engaging demo of the AI Operating System designed specifically for enterprises. With a robust background in AI research and a PhD from MIT, Bernardo has led innovative projects that integrate advanced machine learning techniques into practical applications. Attendees will gain insights into how Stack AI enhances organizational efficiency through intelligent automation and AI assistants. This presentation promises to showcase cutting-edge technology and provide actionable takeaways for leveraging AI in business operations.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=dB_LRGnqURA',
      videoUrlEmbed: 'https://www.youtube.com/embed/dB_LRGnqURA'
    },
    {
      date: '2/12/2025',
      time: '4:15 PM EST to 4:30 PM EST',
      name: 'John Gilhuly',
      linkedinUrl: 'https://www.linkedin.com/in/johngilhuly/',
      role: 'Head of Dev Rel',
      company: 'Arize',
      topic: 'Arize Agent Evals',
      description: 'John Gilhuly, Head of Developer Relations at Arize AI, brings a wealth of experience in technology and business strategy to the stage. With a strong background in AI research and developer advocacy, he leads the charge in enhancing the capabilities of Arize Agent Evals, a pivotal tool for evaluating AI agents. Attendees will gain insights into the significance of effective agent evaluations in driving AI performance and learn about innovative strategies for developer engagement. This presentation promises to equip participants with actionable knowledge to leverage AI technologies effectively in their own organizations.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=CjOSvXygOzA',
      videoUrlEmbed: 'https://www.youtube.com/embed/CjOSvXygOzA'
    },
    {
      date: '2/12/2025',
      time: '4:30 PM EST to 4:45 PM EST',
      name: 'Harrison Muchnic',
      linkedinUrl: 'https://www.linkedin.com/in/harrisonmuchnic/',
      role: 'Founder',
      company: 'Pomu',
      topic: 'Autonomous Coding Product Demo',
      description: 'Harrison Muchnic, founder of Pomu-io, will present an engaging Autonomous Coding Product Demo at the tech conference. With a strong background in artificial intelligence and computer engineering, Harrison leads a team dedicated to revolutionizing the fashion manufacturing landscape through innovative technology. Attendees will gain insights into how his platform utilizes advanced algorithms to seamlessly connect designers with manufacturers, promoting sustainability and ethical practices in the industry. Key takeaways include understanding the impact of autonomous coding on efficiency and transparency in fashion production, as well as the importance of fostering a responsible creative ecosystem.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=h817lM0Giso',
      videoUrlEmbed: 'https://www.youtube.com/embed/h817lM0Giso'
    },
    {
      date: '2/12/2025',
      time: '4:45 PM EST to 5:00 PM EST',
      name: 'Jared Zoneraich',
      linkedinUrl: 'https://www.linkedin.com/in/imjaredz/',
      role: 'Founder',
      company: 'Promptlayer',
      topic: 'Promptlayer Demo',
      description: 'Jared Zoneraich, founder of PromptLayer, will present an engaging demo on the first platform designed specifically for prompt engineering teams. With a robust background in software engineering, including roles at Tecton and Facebook, Jared brings a wealth of expertise to the table. Attendees will gain insights into how PromptLayer enables users to track, debug, and explore GPT requests, streamlining the prompt engineering process. This session promises to equip participants with practical knowledge and tools to enhance their prompt engineering workflows, making it a must-attend for tech enthusiasts and professionals alike.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=B63s2fB6-Kc',
      videoUrlEmbed: 'https://www.youtube.com/embed/B63s2fB6-Kc'
    },
    {
      date: '2/12/2025',
      time: '5:00 PM EST to 5:15 PM EST',
      name: 'Derek Chen',
      linkedinUrl: 'https://www.linkedin.com/in/derekchen14/',
      role: 'Co-Founder / CEO',
      company: 'Soleda',
      topic: 'Understanding Before Action',
      description:
        'Generative AI chatbots are all too eager to spit out an answer without really considering a user’s intention. Even the new "reasoning" models fail to address this because they assume that there is always some verifiable correct answer (like math competitions), but reality does not work this way. If you want to book a flight from New York to San Francisco, there is no one best ticket. It depends on what the specific user wants - a cheaper option, the fastest route, no layovers, something with a window seat? Or maybe a combination of the above? In order for an AI agent to be useful and reliable, it must take the preferences into account, along with the general messiness of the real world -- which is exactly how Soleda’s agents are built. We are starting Dana, an AI assistant that helps prepare and analyze spreadsheet data, but we are building on a scalable foundation that can power many more agents in the future.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=e2FHO--6EIU',
      videoUrlEmbed: 'https://www.youtube.com/embed/e2FHO--6EIU'
    },
    {
      date: '2/12/2025',
      time: '5:15 PM EST to 5:30 PM EST',
      name: 'Didier Rodrigues Lopes',
      linkedinUrl: 'https://www.linkedin.com/in/didier-lopes/',
      role: 'Founder / CEO',
      company: "OpenBB",
      topic: 'It is all function calling',
      description:
        'Didier Rodrigues Lopes is the Founder and CEO of OpenBB, where he is at the forefront of building an AI-powered research and analytics workspace. With a robust background in control systems and extensive experience in sensor fusion and software engineering, Didier has made significant contributions to the fields of AI and finance. His expertise in function calling is pivotal to understanding the intricate workings of modern technology, making his insights invaluable. Attendees will gain a unique perspective on how OpenBB leverages these principles to enhance research capabilities and drive innovation in analytics.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=gH1mMtRa84Y',
      videoUrlEmbed: 'https://www.youtube.com/embed/gH1mMtRa84Y'
    },
    {
      date: '2/12/2025',
      time: '5:30 PM EST to 5:45 PM EST',
      name: 'Dan Pechi',
      linkedinUrl: 'https://www.linkedin.com/in/dan-pechi-17800078/',
      role: 'Generative AI Product Specialist',
      company: 'Databricks',
      topic: 'Multi Agent Framework',
      description: '​Dan Pechi is a Senior Generative AI Product Specialist at Databricks, where he leverages his extensive background in AI and machine learning to drive innovative solutions. With a Master’s degree in Data Science from New York University and a wealth of experience as an AI/ML Engineer at JetBlue and a Data Scientist at Opensignal, Dan has consistently demonstrated his expertise in developing cutting-edge technologies. His deep understanding of multi-agent frameworks, combined with his hands-on experience in data analytics and natural language processing, positions him uniquely to discuss the Databricks agent framework. Attendees will gain invaluable insights into how this framework can enhance collaboration and efficiency in AI applications, making this session a must-attend for anyone interested in the future of generative AI.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=LJZAxW3QMUo',
      videoUrlEmbed: 'https://www.youtube.com/embed/LJZAxW3QMUo'
    },
    {
      date: '2/12/2025',
      time: '5:45 PM EST to 6:00 PM EST',
      name: 'Sarah Wooders',
      linkedinUrl: 'https://www.linkedin.com/in/wooders/',
      role: 'Co-Founder and CTO',
      company: 'Letta',
      topic: 'Letta Agent Development Environment',
      description:
        '​Sarah Wooders is the Co-Founder and CTO of Letta, where she leverages her extensive expertise in AI systems to drive innovation in agent development. With a PhD in Computer Science from UC Berkeley and a rich background that includes leadership roles at Glisten.ai and impactful internships at top tech companies, Sarah is at the forefront of technology. Today, she will delve into Lettas Agent Development Environment, showcasing its capabilities through an engaging product demo. Attendees will gain invaluable insights into how this cutting-edge platform can transform their approach to AI development and enhance their projects.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=QUOhQhSkWAo',
      videoUrlEmbed: 'https://www.youtube.com/embed/QUOhQhSkWAo'
    },
    {
      date: '2/12/2025',
      time: '6:00 PM EST to 6:15 PM EST',
      name: 'Glenn Ko',
      linkedinUrl: 'https://www.linkedin.com/in/glennko/',
      role: 'Founder / CEO',
      company: 'Stochastic',
      topic: 'Stochastic Product Demo',
      description: '​Glenn Ko is the Co-Founder and CEO of Stochastic, where he leads innovative advancements in real-time intelligence. With a PhD in Electrical and Computer Engineering from the University of Illinois Urbana-Champaign, Glenn has garnered accolades such as the 2023 Harvard University President Innovation Award. His extensive experience at Harvard University, coupled with his entrepreneurial success at Alias Medical, positions him as a thought leader in AI and technology. Attendees will gain unique insights into how intelligence can seamlessly flow in real time, transforming the way we interact with technology.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=fDWDMe-oK8g',
      videoUrlEmbed: 'https://www.youtube.com/embed/fDWDMe-oK8g'
    },
  ];

  const inPersonAgendaItems = [
    {
      date: '2/12/2025',
      time: '6:30 PM EST - 7:00 PM EST',
      name: 'Natan Vidra',
      linkedinUrl: 'https://www.linkedin.com/in/natanvidra/',
      role: 'Founder / CEO',
      company: 'Anote',
      topic: 'AI Day Summit Overview',
      description: `Natan Vidra from Anote provides an overview of Anote's AI Day Summit 2025 and discusses a few of the core problems that Anote is looking to solve.
                He also shares the following Product Launch announcements:\n\n
                1. OpenAnote, a free and decentralized baseline version of Anote.

                2. Armor Institute, an AI hub for community building across the USA.

                3. Agent Registry, a place to share and find domain-specific AI agents.

                4. Model Leaderboard, a marketplace for LLM evaluations on test datasets.

                5. Autonomous Intelligence, an open-source project on multi-agent AI systems.`,
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=eR_fnV0DyHE',
      videoUrlEmbed: 'https://www.youtube.com/embed/eR_fnV0DyHE',
    },
    {
      date: '2/12/2025',
      time: '7:00 PM EST - 7:15 PM EST',
      name: 'Spurthi Setty',
      linkedinUrl: 'https://www.linkedin.com/in/spurthi-setty/',
      role: 'Founding ML Engineer',
      company: 'Anote',
      topic: 'Future of Autonomous Agents',
      description: 'Spurthi Setty from Anote shares her perspective on the Future of Autonomous AI Agents, and why there is a need for a generalist multi agent framework. She discusses a few of the research areas that Anote is looking into solving over the next few years, and shares why it is important to ensure that the AI we build is more accessible. And why it is important that not only those with the biggest brains are involved, but also those with the biggest hearts.',
      speakerBio: "",
      talkUrl: "",
      videoUrl: 'https://www.youtube.com/watch?v=OgFijOrzarg',
      videoUrlEmbed: 'https://www.youtube.com/embed/OgFijOrzarg',
    },
  ]

  const devFestAgendaItems =
  [
    {
      date: '2/13/2025',
      time: '3:30 PM EST - 3:40 PM EST',
      name: 'Kelvin Xiao, Nicholas Lin, Cindy Lu',
      linkedinUrl: 'https://www.linkedin.com/in/kelvin-xiao-a5a473179/',
      role: 'Student',
      company: 'Columbia University',
      topic: 'Medical AI Agent',
      description:
        'The project developed a data-driven and personalized recommendation system that helps individuals select healthcare insurance plans based on a comprehensive set of factors—beyond just the lowest premium. Unlike traditional static comparison tools, this AI-powered system uses a personalized approach by incorporating individual data such as personal demographics and health conditions. The process involved extensive data collection and preparation from around 10 pre-processed datasets covering various insurance features, as well as data predicting annual medical expenditure. For model training, multiple approaches were tested—including linear regression, decision trees, gradient boosted decision trees, and a deep learning feedforward neural network—with the gradient boosted decision tree model emerging as the top performer.',
      videoUrl: 'https://www.youtube.com/watch?v=L363AOAWAWw',
      videoUrlEmbed: 'https://www.youtube.com/embed/L363AOAWAWw'
    },
    {
      date: '2/13/2025',
      time: '3:40 PM EST - 3:50 PM EST',
      name: 'Michael Wong',
      linkedinUrl: 'https://www.linkedin.com/in/michaelwong44/',
      role: 'Developer',
      company: 'Echo',
      topic: 'AI Powered Mock Interviewer',
      description:
        'Echo is an application where you are able to imitate software engineering interviews with an AI powered interviewer; you will be able to relay your thought process, write and run real code, and receive feedback as if you were interviewing with a real human!',
      videoUrl: 'https://www.youtube.com/watch?v=u3wPnvGmyl4',
      videoUrlEmbed: 'https://www.youtube.com/embed/u3wPnvGmyl4'
    },
    {
      date: '2/13/2025',
      time: '3:50 PM EST - 4:00 PM EST',
      name: 'Qingquan Li, Bi Rong Liu, Megi Murati, Sadia Zalmay',
      linkedinUrl: 'https://www.linkedin.com/in/qingquan-li/',
      role: 'Product Manager',
      company: 'NutriVoice',
      topic:
        'AI-powered Nutrition Tracking App',
      description:
        'Our presentation showcases NutriVoice, an AI-powered nutrition tracking app designed for blind and visually impaired individuals. Our solution consists of three key steps: (1) Using Speech-to-Text to capture user information and generate a personalized nutrition plan; (2) Leveraging OpenAI Vision to analyze food images—extracting nutrition facts, detecting allergens, and verifying expiration dates; (3) Generating a feedback summary with an open-source LLM and reading it aloud with Text-to-Speech to provide accessible, real-time dietary guidance.',
      videoUrl: 'https://www.youtube.com/watch?v=xagk_az7Roc',
      videoUrlEmbed: 'https://www.youtube.com/embed/xagk_az7Roc'
    },
    // {
    //   date: '2/13/2025',
    //   time: '3:50 PM EST - 4:00 PM EST',
    //   name: 'Bi Rong Liu',
    //   linkedinUrl: 'https://www.linkedin.com/in/birongliu',
    //   role: 'Full Stack Developer',
    //   company: 'NutriVoice',
    //   topic:
    //     'AI-powered Nutrition Tracking App for Blind and Visually Impaired Individuals',
    //   description:
    //     'Our presentation showcases NutriVoice, an AI-powered nutrition tracking app designed for blind and visually impaired individuals. Our solution consists of three key steps: (1) Using Speech-to-Text to capture user information and generate a personalized nutrition plan; (2) Leveraging OpenAI Vision to analyze food images—extracting nutrition facts, detecting allergens, and verifying expiration dates; (3) Generating a feedback summary with an open-source LLM and reading it aloud with Text-to-Speech to provide accessible, real-time dietary guidance.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '3:50 PM EST - 4:00 PM EST',
    //   name: 'Megi Murati',
    //   linkedinUrl: 'https://www.linkedin.com/in/megi-murati/',
    //   role: 'User Researcher',
    //   company: 'NutriVoice',
    //   topic:
    //     'AI-powered Nutrition Tracking App for Blind and Visually Impaired Individuals',
    //   description:
    //     'Our presentation showcases NutriVoice, an AI-powered nutrition tracking app designed for blind and visually impaired individuals. Our solution consists of three key steps: (1) Using Speech-to-Text to capture user information and generate a personalized nutrition plan; (2) Leveraging OpenAI Vision to analyze food images—extracting nutrition facts, detecting allergens, and verifying expiration dates; (3) Generating a feedback summary with an open-source LLM and reading it aloud with Text-to-Speech to provide accessible, real-time dietary guidance.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '3:50 PM EST - 4:00 PM EST',
    //   name: 'Sadia Zalmay',
    //   linkedinUrl: 'https://www.linkedin.com/in/sadiazalmay/',
    //   role: 'Frontend Developer',
    //   company: 'NutriVoice',
    //   topic:
    //     'AI-powered Nutrition Tracking App for Blind and Visually Impaired Individuals',
    //   description:
    //     'Our presentation showcases NutriVoice, an AI-powered nutrition tracking app designed for blind and visually impaired individuals. Our solution consists of three key steps: (1) Using Speech-to-Text to capture user information and generate a personalized nutrition plan; (2) Leveraging OpenAI Vision to analyze food images—extracting nutrition facts, detecting allergens, and verifying expiration dates; (3) Generating a feedback summary with an open-source LLM and reading it aloud with Text-to-Speech to provide accessible, real-time dietary guidance.',
    // },
    {
      date: '2/13/2025',
      time: '4:00 PM EST - 4:10 PM EST',
      name: 'Roger Nguyen',
      linkedinUrl: 'https://www.linkedin.com/in/rogerng05/',
      role: 'Software Engineer, Research Assistant',
      company: 'Villanova University',
      topic: 'ScholarPilot - Multi AI-Agents for Researchers',
      description:
        'Welcome to ScholarPilot, a tool that helps you find the best academic papers for your research. You can create a new or select an existing topic, view a list of papers, and ask questions about the topic, similar to your own private chatbot.',
      videoUrl: 'https://www.youtube.com/watch?v=rFeXdE5_jBE',
      videoUrlEmbed: 'https://www.youtube.com/embed/rFeXdE5_jBE'
    },
    {
      date: '2/13/2025',
      time: '4:10 PM EST - 4:20 PM EST',
      name: 'Erik Pedersen, Jason Kim, Angie Hu',
      linkedinUrl: 'https://www.linkedin.com/in/erikzhangpedersen',
      role: 'Co-founder',
      company: 'Gloq',
      topic: 'AI in Cybersecurity',
      description:
        'While humans have trouble combing through and identifying malicious activity within enormous network logs, AI proves remarkably effective at handling this big data problem. This project leverages AI to find information through vast amounts of logs.',
      videoUrl: 'https://www.youtube.com/watch?v=BNwVaR62T-k',
      videoUrlEmbed: 'https://www.youtube.com/embed/BNwVaR62T-k'
    },
    // {
    //   date: '2/13/2025',
    //   time: '4:10 PM EST - 4:20 PM EST',
    //   name: 'Jason Kim',
    //   linkedinUrl: 'https://www.linkedin.com/in/jasonkimdev',
    //   role: 'Co-founder',
    //   company: 'Gloq',
    //   topic: 'AI in Cybersecurity',
    //   description:
    //     'While humans have trouble combing through and identifying malicious activity within enormous network logs, AI proves remarkably effective at handling this big data problem.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '4:10 PM EST - 4:20 PM EST',
    //   name: 'Angie Hu',
    //   linkedinUrl: 'https://www.linkedin.com/in/angiehu76',
    //   role: 'Co-founder',
    //   company: 'Gloq',
    //   topic: 'AI in Cybersecurity',
    //   description:
    //     'While humans have trouble combing through and identifying malicious activity within enormous network logs, AI proves remarkably effective at handling this big data problem.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '4:30 PM',
    //   name: 'Angela Bai',
    //   linkedinUrl: 'https://www.linkedin.com/in/angela-bai-36a9a5331/',
    //   role: 'AI Model Engineer',
    //   company: 'Columbia University / Barnard College',
    //   topic: 'Found In Translation: AI-Powered Language Learning',
    //   description:
    //     'This talk focuses on the promising future of generative AI in the realm of education and linguistics, bridging the gap between the virtual classroom and real world. We introduce Found in Translation, an AI-powered web application and Chrome extension that helps users reinforce vocabulary from everyday web browsing through conversational practice. With the use of OpenAI’s API, React, and database storage, Found in Translation streamlines language learning and translation in a fashion that takes linguistic education in a novel, practical direction. Along with showcasing a live demo of our app, this talk emphasizes the benefit of integrating generative AI into language learning, and sparks a discussion on how it can be implemented moving forward.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '4:30 PM',
    //   name: 'Shirley Deng',
    //   linkedinUrl: 'https://www.linkedin.com/in/shirley-deng-/',
    //   role: 'Extension Engineer',
    //   company: 'Columbia University / Barnard College',
    //   topic: 'Found In Translation: AI-Powered Language Learning',
    //   description:
    //     'This talk focuses on the promising future of generative AI in the realm of education and linguistics, bridging the gap between the virtual classroom and real world. We introduce Found in Translation, an AI-powered web application and Chrome extension that helps users reinforce vocabulary from everyday web browsing through conversational practice. With the use of OpenAI’s API, React, and database storage, Found in Translation streamlines language learning and translation in a fashion that takes linguistic education in a novel, practical direction. Along with showcasing a live demo of our app, this talk emphasizes the benefit of integrating generative AI into language learning, and sparks a discussion on how it can be implemented moving forward.',
    // },
    {
      date: '2/13/2025',
      time: '4:30 PM',
      name: 'Rebecca Frey, Arya Sinha, Shirley Deng, Angela Bai',
      linkedinUrl: 'https://www.linkedin.com/in/beccafrey/',
      role: 'Data Analyst',
      company: 'Columbia University / Barnard College',
      topic: 'Found In Translation: AI-Powered Language Learning',
      description:
        'This talk focuses on the promising future of generative AI in the realm of education and linguistics, bridging the gap between the virtual classroom and real world. We introduce Found in Translation, an AI-powered web application and Chrome extension that helps users reinforce vocabulary from everyday web browsing through conversational practice. With the use of OpenAI’s API, React, and database storage, Found in Translation streamlines language learning and translation in a fashion that takes linguistic education in a novel, practical direction. Along with showcasing a live demo of our app, this talk emphasizes the benefit of integrating generative AI into language learning, and sparks a discussion on how it can be implemented moving forward.',
      videoUrl: 'https://www.youtube.com/watch?v=w9f9LZhzFuw',
      videoUrlEmbed: 'https://www.youtube.com/embed/w9f9LZhzFuw'
    },
    // {
    //   date: '2/13/2025',
    //   time: '4:30 PM',
    //   name: 'Arya Sinha',
    //   linkedinUrl: 'https://www.linkedin.com/in/aryapsinha/',
    //   role: 'Full-Stack Developer',
    //   company: 'Columbia University / Barnard College',
    //   topic: 'Found In Translation: AI-Powered Language Learning',
    //   description:
    //     'This talk focuses on the promising future of generative AI in the realm of education and linguistics, bridging the gap between the virtual classroom and real world. We introduce Found in Translation, an AI-powered web application and Chrome extension that helps users reinforce vocabulary from everyday web browsing through conversational practice. With the use of OpenAI’s API, React, and database storage, Found in Translation streamlines language learning and translation in a fashion that takes linguistic education in a novel, practical direction. Along with showcasing a live demo of our app, this talk emphasizes the benefit of integrating generative AI into language learning, and sparks a discussion on how it can be implemented moving forward.',
    // },
    // {
    //   date: '2/13/2025',
    //   time: '5:00 PM EST - 5:10 PM EST',
    //   name: 'Soonwoo Kwon',
    //   linkedinUrl: 'https://www.linkedin.com/in/soonwook/',
    //   role: 'Student',
    //   company: 'University of Connecticut',
    //   topic: 'Computer Vision',
    //   description:
    //     'Combining computer vision models with real-time streaming, large language models, and text-to-speech models.',
    // },
    {
      date: '2/13/2025',
      time: '5:00 PM EST - 5:10 PM EST',
      name: 'Annie Dong, Soonwoo Kwon, Shium Mashud',
      linkedinUrl: 'https://www.linkedin.com/in/annieydong/',
      role: 'Student',
      company: 'Barnard College of Columbia University',
      topic: 'iAssist',
      description:
        'iAssist is an AI-powered vision assistant that uses computer vision, speech processing, and Large Language Model (LLM) powered navigation tool. iAssist can assist visually impaired users through real-time audio guidance, as treatments and assistive devices often require significant financial investment or high maintenance, limiting accessibility for those in underserved communities. iAssist provides a more inclusive, cost-effective alternative. Our project utilized YOLOv11 for object detection & spatial awareness, Kokoro-82M Text-To-Speech for output, and Llama 3.2 for scene summarization',
      videoUrl: 'https://www.youtube.com/watch?v=WcS6sLZOeJM',
      videoUrlEmbed: 'https://www.youtube.com/embed/WcS6sLZOeJM'
    },
    {
      date: '2/13/2025',
      time: '5:20 PM EST - 5:30 PM EST',
      name: 'Justine Mach, Naythan Chan, Benjamin Shvartzman',
      linkedinUrl: 'https://www.linkedin.com/in/justinemach/',
      role: 'Student',
      company: 'Columbia University',
      topic: 'Harvest Hub',
      description:
        'iAssist is an AI-powered vision assistant that uses computer vision, speech processing, and Large Language Model (LLM) powered navigation tool. iAssist can assist visually impaired users through real-time audio guidance, as treatments and assistive devices often require significant financial investment or high maintenance, limiting accessibility for those in underserved communities. iAssist provides a more inclusive, cost-effective alternative. Our project utilized YOLOv11 for object detection & spatial awareness, Kokoro-82M Text-To-Speech for output, and Llama 3.2 for scene summarization',
      videoUrl: 'https://www.youtube.com/watch?v=-tTZokkCsHc',
      videoUrlEmbed: 'https://www.youtube.com/embed/-tTZokkCsHc'
    },
    {
      date: '2/13/2025',
      time: '5:30 PM EST - 5:40 PM EST',
      name: 'Jawad Zaman, Abrar Galib Ohe',
      linkedinUrl: 'https://www.linkedin.com/in/abrar-galib-ohe-81a280318/',
      role: 'Student',
      company: 'Stony Brook',
      topic: 'Forager',
      description:
        'Forager on the Go is a web app designed for adventurers and professionals in remote areas, using AI-powered image recognition to help users identify edible plants and animals. By uploading an image, users receive species identification along with information on edibility, survival uses, and necessary precautions. The app employs a ResNet model for image identification and a Llama model for generating detailed responses, and it is accessible through a custom domain with an offline version in development that utilizes a Vision AI model to cache species data for use without internet connectivity. Developed by Abra Galii and Jaad Zaan, the team plans to expand the database and improve its functionality for travelers and outdoor enthusiasts.',
      videoUrl: 'https://www.youtube.com/watch?v=I0-juU3ukRU',
      videoUrlEmbed: 'https://www.youtube.com/embed/I0-juU3ukRU'
    },
    {
      date: '2/13/2025',
      time: '6:00 PM EST - 6:10 PM EST',
      name: 'Kaushal Damania',
      linkedinUrl: 'https://www.linkedin.com/in/kaushal-damania/',
      role: 'Graduate Student',
      company: 'Columbia University',
      topic: 'Foodbridge',
      description:
        'The project builds a system designed to encourage nutritional donations to food pantries through an app where users can post excess food in exchange for coupons. It leverages agents to optimize workflow, including rating the nutritional content of food and scraping information from food pantry websites. Using a context-based approach that incorporates data scraped from US government branded products database and a vector database, the system features a rating system and a web search component to analyze uploaded images and extract relevant nutritional information. A multi-agent system further debates and decides on actions, such as navigating websites to gather additional data, thereby enhancing the overall functionality of the application.',
      videoUrl: 'https://www.youtube.com/watch?v=RyugMAbes2A',
      videoUrlEmbed: 'https://www.youtube.com/embed/RyugMAbes2A'
    },
    {
      date: '2/13/2025',
      time: '6:20 PM EST - 6:30 PM EST',
      name: 'Daren Hua, Kien Tran, Brian Tran',
      linkedinUrl: 'https://www.linkedin.com/in/daren-hua/',
      role: 'Software Engineer',
      company: 'Gleamcare',
      topic: 'AI Agents for Health Insurance',
      description:
        'What are big problems in health insurance and how can AI help? In this talk, we discuss our hackathon project at Devfest 2025, centered around the potential of AI Agents in disrupting the health insurance broker market. We will demonstrate how two core responsibilities of health insurance brokers: analyzing SPD documents and determining coverage from drug formularies, can be automated with AI. Finally, we discuss what benefit agents bring over traditional brokers in regards to trust, scale, and speed.',
      videoUrl: 'https://www.youtube.com/watch?v=NZwnVqUtXUQ',
      videoUrlEmbed: 'https://www.youtube.com/embed/NZwnVqUtXUQ'
    },
    // {
    //   date: '2/13/2025',
    //   time: '6:20 PM EST - 6:30 PM EST',
    //   name: 'Kien Tran',
    //   linkedinUrl: 'https://www.linkedin.com/in/kien-kyle-tran-6615b3216/',
    //   role: 'Student',
    //   company: 'Hamilton College',
    //   topic: 'AI Agents for Health Insurance',
    //   description:
    //     'What are big problems in health insurance and how can AI help? In this talk, we discuss our hackathon project at Devfest 2025, centered around the potential of AI Agents in disrupting the health insurance broker market. We will demonstrate how two core responsibilities of health insurance brokers: analyzing SPD documents and determining coverage from drug formularies, can be automated with AI. Finally, we discuss what benefit agents bring over traditional brokers in regards to trust, scale, and speed.',
    //   videoUrl: 'https://www.youtube.com/watch?v=NZwnVqUtXUQ',
    //   videoUrlEmbed: 'https://www.youtube.com/embed/NZwnVqUtXUQ'
    // },
    // {
    //   date: '2/13/2025',
    //   time: '6:20 PM EST - 6:30 PM EST',
    //   name: 'Brian Tran',
    //   linkedinUrl: 'https://www.linkedin.com/in/brian-tran-b33t34/',
    //   role: 'Student',
    //   company: 'Hamilton College',
    //   topic: 'AI Agents for Health Insurance',
    //   description:
    //     'What are big problems in health insurance and how can AI help? In this talk, we discuss our hackathon project at Devfest 2025, centered around the potential of AI Agents in disrupting the health insurance broker market. We will demonstrate how two core responsibilities of health insurance brokers: analyzing SPD documents and determining coverage from drug formularies, can be automated with AI. Finally, we discuss what benefit agents bring over traditional brokers in regards to trust, scale, and speed.',
    //   videoUrl: 'https://www.youtube.com/watch?v=NZwnVqUtXUQ',
    //   videoUrlEmbed: 'https://www.youtube.com/embed/NZwnVqUtXUQ'
    // }
  ];

  return (
    <div className="w-screen bg-gray-900 mb-20">
      <div className="pt-10">
        <div className="text-white text-center justify-center">
          {/* <div className="text-2xl sm:text-3xl lg:text-4xl mb-5 md:mb-10 text-center font-medium lg:font-bold">
            Speakers and Agenda
          </div> */}
          <div className="text-3xl sm:text-4xl lg:text-5xl mt-8 mb-4 text-center font-medium lg:font-bold bg-clip-text text-transparent bg-gradient-to-b from-turquoise-500 to-blue-400 pt-15 pb-5">
            AI Day Summit 2025
          </div>
          <div className="flex flex-col sm:flex-row justify-center mx-6">
        {/* <button
          className="btn-yellow mb-4 mr-4 sm:mb-0 w-full sm:w-auto flex justify-center items-center"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1yV1Tmzy7M2nfgN1ZAGLUK3BnJN66f9EM/view?usp=sharing",
              "_blank"
            );
          }}
        >
          View Agenda
        </button>
        <a
          className="btn-black w-full sm:w-auto flex justify-center items-center"
          href={"mailto:" + "nvidra@anote.ai"}
        >
          Contact Team
        </a> */}
      </div>
      <div className="px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-items-center mx-[5%]">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-28 h-20 bg-gray-900 rounded-lg p-2"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="agenda-container md:mx-20">
          <table className="agenda-table ">
            <thead>
              <tr>
                <th>Time</th>
                <th>Name</th>
                <th>Role</th>
                <th>Company</th>
                <th>Talk Topic</th>
                <th>Link to Presentation</th>
              </tr>
            </thead>
            <tbody>
              {agendaItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
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
                  <td>{item.company}</td>
                  <td>{item.topic}</td>
                  <td>
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
       <div className="FAQ">
       <div className={"LP-Sample-Projects bg-gray-900 mx-[6%]"}>
              {inPersonAgendaItems.map((item, index) => (
                <div key={index}>
                  <h1 className="TutorialHeader mb-3 bg-gray-900">
                    Anote In Person Talk {index + 1} - {item.topic}
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
                      company={item.company}
                    />
                    <hr className="Green-Line-New" style={{ width: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={"LP-Sample-Projects bg-gray-900 mx-[6%]"}>
              {agendaItems.map((item, index) => (
                <div key={index}>
                  <h1 className="TutorialHeader mb-3 bg-gray-900">
                    AI Day Talk {index + 1} - {item.topic}
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
                      company={item.company}
                    />
                    <hr className="Green-Line-New" style={{ width: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={"LP-Sample-Projects bg-gray-900 mx-[6%]"}>
              {devFestAgendaItems.map((item, index) => (
                <div key={index}>
                  <h1 className="TutorialHeader mb-3 bg-gray-900">
                    Devfest Talk {index + 1} - {item.topic}
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
                      company={item.company}
                    />
                    <hr className="Green-Line-New" style={{ width: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
}

export default AIDaySummit2025Agenda;
