import React, { useState, useMemo } from "react";
import { FaPlay, FaTimes, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

const videoData = [

  // AI Day Main Agenda Videos
  {
    title: "Physical AI Agents",
    speaker: "Niyonika Chabra",
    videoUrl: "https://www.youtube.com/watch?v=LCo2TVlA6mg",
    description: "Explores the integration of AI in physical environments and industrial use cases."
  },
  {
    title: "Learning Assistant Agent",
    speaker: "Princy Patel",
    videoUrl: "https://www.youtube.com/watch?v=-_NAjX5t-UQ",
    description: "AI tool to search papers, blogs, GitHub, and YouTube across platforms into one place for learning."
  },
  {
    title: "Prepright Product Demo",
    speaker: "Siddharth Upadhyay",
    videoUrl: "https://www.youtube.com/watch?v=MDhiSrocl5A",
    description: "AI-powered skill assessment platform analyzing resumes/job descriptions for job preparation."
  },
  {
    title: "AI Agent Roadmap Strategy",
    speaker: "Pinar Yelkikanat",
    videoUrl: "https://www.youtube.com/watch?v=eWn3szkHZqE",
    description: "Strategic frameworks for AI product management and building comprehensive agent systems."
  },
  {
    title: "Data Analyst AI Agent",
    speaker: "Chuxin Liu",
    videoUrl: "https://www.youtube.com/watch?v=T772PqVvClw",
    description: "How JP Morgan applies AI for quantitative modeling, risk governance, and macroeconomic analysis."
  },
  {
    title: "AI Agents for Law Firms",
    speaker: "Thomas Faudree",
    videoUrl: "https://www.youtube.com/watch?v=cbLuLegAz5U",
    description: "Vecflow demo of Oliver AI agent to accelerate legal document drafting and deal document workflows."
  },
  {
    title: "Personal AI Agent",
    speaker: "Jiten Bhalavat",
    videoUrl: "https://www.youtube.com/watch?v=4cAm841ZVYQ",
    description: "Personal AI agent aggregating data across GitHub, LinkedIn, Medium into a unified digital profile."
  },
  {
    title: "AI / ML for Copilot",
    speaker: "Faraz Siddiqi",
    videoUrl: "https://www.youtube.com/watch?v=gEDBG4WTZ3U",
    description: "How ML reasoning capabilities are integrated into Azure Copilot and intelligent assistants."
  },
  {
    title: "Smol Agents & Hugging Face Hub",
    speaker: "David Berenstein",
    videoUrl: "https://www.youtube.com/watch?v=PLCZVUQ1p3c",
    description: "Overview of Smol Agents, Smol Blueprint, and Hugging Face Hub for agentic AI development."
  },
  {
    title: "Newsletter AI Agent",
    speaker: "Reyhan Merekar",
    videoUrl: "https://www.youtube.com/watch?v=uSnk5eQnFcA",
    description: "AI newsletter agent generating optimal marketing topics with high adoption rates in industry."
  },
  {
    title: "AG2: Open-Source AgentOS",
    speaker: "Chi Wang",
    videoUrl: "https://www.youtube.com/watch?v=IbdfuMWnrAY",
    description: "How AG2 open-source agent OS powers task-oriented multi-agent systems in real-world applications."
  },
  {
    title: "AI Marketing Automation",
    speaker: "Thomas Donohue",
    videoUrl: "https://www.youtube.com/watch?v=JeOnZNMCroI",
    description: "How AutoABM uses AI to automate B2B end-to-end marketing campaigns and ABM orchestration."
  },
  {
    title: "AI RFP Agent Demo",
    speaker: "Sanya Mahajan",
    videoUrl: "https://www.youtube.com/watch?v=VKkB675vCkY",
    description: "AI-powered automation of RFP and grant proposals via intelligent agents."
  },
  {
    title: "AI Coding Agent Writeup",
    speaker: "Aisha Ahmad",
    videoUrl: "https://www.youtube.com/watch?v=qi0xV2-qmKo",
    description: "How autonomous AI coding agents can improve multi-agent coding frameworks."
  },
  {
    title: "AI Security Red Teaming",
    speaker: "Kia Khezeli",
    videoUrl: "https://www.youtube.com/watch?v=nMNmHFitq5o",
    description: "Red teaming for computer vision models to enhance AI security and real-world safety."
  },
  {
    title: "National AI Strategy in AGI Era",
    speaker: "Paul J. Maykish",
    videoUrl: "https://www.youtube.com/watch?v=2lVuQ9bz7kg",
    description: "National security strategy considerations for AGI era AI competition."
  },
  {
    title: "rtrvr.ai Product Demo",
    speaker: "Arjun Chintapalli",
    videoUrl: "https://www.youtube.com/watch?v=OD6pnlKlM3s",
    description: "Demonstration of universal AI web agent for browsing optimization and personal knowledge assistants."
  },
  {
    title: "AI Job Application Agents",
    speaker: "Sam Savage",
    videoUrl: "https://www.youtube.com/watch?v=bDmRvt_t1N8",
    description: "Automating job applications and resume processing through AI agents."
  },
  {
    title: "Narada Product Demo",
    speaker: "Fernando Delgado",
    videoUrl: "https://www.youtube.com/watch?v=HsciPy5-t1E",
    description: "Enterprise agentic process automation platform integrating LLMCompiler and cross-system orchestration."
  },
  {
    title: "AI Agent Evaluation",
    speaker: "Deepa Paikar",
    videoUrl: "https://www.youtube.com/watch?v=0VCcZmZhfm4",
    description: "How to evaluate multi-agent AI systems using fine-tuning and RLHF pipelines."
  },
  {
    title: "Agent Optimization",
    speaker: "Jasper Levy",
    videoUrl: "https://www.youtube.com/watch?v=cC1ygplPtuw",
    description: "Optimizing DSPY agent models with model compression and fine-tuning pipelines."
  },
  {
    title: "AI Agent Marketing",
    speaker: "Anelya Altiyeva",
    videoUrl: "https://www.youtube.com/watch?v=DBdoj62KTO0",
    description: "Leveraging AI agents to build blockchain-based personalized marketing platforms."
  },
  {
    title: "OpenAds Product Demo",
    speaker: "Steven Liss",
    videoUrl: "https://www.youtube.com/watch?v=-anU0RGvfgw",
    description: "Generative ad network using real-time creative generation for online advertising."
  },
  {
    title: "Building AI Logistics Agents",
    speaker: "Vanessa Escande",
    videoUrl: "https://www.youtube.com/watch?v=W0t5Y3RyUis",
    description: "How AI agents can automate logistics workflows for enterprises using live agent demos."
  },
  {
    title: "Agent Monitoring / Echosys",
    speaker: "Priyankshi Gupta",
    videoUrl: "https://www.youtube.com/watch?v=cUsH-M8KKaY",
    description: "Monitoring system performance in multi-agent AI systems."
  },
  {
    title: "Agents SDK Examples",
    speaker: "Rishav Acharya, Andrew Hing, Xavier Yin, Meghana Kesanapalli",
    videoUrl: "https://www.youtube.com/watch?v=m52p3ERt2Io",
    description: "Agents SDK demo examples of agent deployment for AI Camp."
  },

  // DevFest Videos
  {
    title: "Medical AI Agent",
    speaker: "Kelvin Xiao, Nicholas Lin, Cindy Lu",
    videoUrl: "https://www.youtube.com/watch?v=L363AOAWAWw",
    description: "AI-powered healthcare insurance recommendation system using personalized machine learning models."
  },
  {
    title: "AI Powered Mock Interviewer",
    speaker: "Michael Wong",
    videoUrl: "https://www.youtube.com/watch?v=u3wPnvGmyl4",
    description: "AI mock interviewer platform for practicing technical interviews with live coding feedback."
  },
  {
    title: "NutriVoice AI Nutrition Tracker",
    speaker: "Qingquan Li, Bi Rong Liu, Megi Murati, Sadia Zalmay",
    videoUrl: "https://www.youtube.com/watch?v=xagk_az7Roc",
    description: "AI-powered nutrition tracking app for blind and visually impaired individuals."
  },
  {
    title: "ScholarPilot Research Assistant",
    speaker: "Roger Nguyen",
    videoUrl: "https://www.youtube.com/watch?v=rFeXdE5_jBE",
    description: "Multi-agent AI assistant for academic paper discovery and private research chatbot."
  },
  {
    title: "AI in Cybersecurity",
    speaker: "Erik Pedersen, Jason Kim, Angie Hu",
    videoUrl: "https://www.youtube.com/watch?v=BNwVaR62T-k",
    description: "Using AI to automate security log analysis and identify malicious patterns."
  },
  {
    title: "Found In Translation",
    speaker: "Rebecca Frey, Arya Sinha, Shirley Deng, Angela Bai",
    videoUrl: "https://www.youtube.com/watch?v=w9f9LZhzFuw",
    description: "AI-powered language learning app integrating web browsing vocabulary practice."
  },
  {
    title: "iAssist Vision Assistant",
    speaker: "Annie Dong, Soonwoo Kwon, Shium Mashud",
    videoUrl: "https://www.youtube.com/watch?v=WcS6sLZOeJM",
    description: "Computer vision powered navigation system for visually impaired users."
  },
  {
    title: "Harvest Hub",
    speaker: "Justine Mach, Naythan Chan, Benjamin Shvartzman",
    videoUrl: "https://www.youtube.com/watch?v=-tTZokkCsHc",
    description: "AI-powered food donation platform optimizing nutritional quality of donated food."
  },
  {
    title: "Forager Survival AI",
    speaker: "Jawad Zaman, Abrar Galib Ohe",
    videoUrl: "https://www.youtube.com/watch?v=I0-juU3ukRU",
    description: "AI-powered identification of edible plants/animals for survival and outdoors."
  },
  {
    title: "FoodBridge Donation App",
    speaker: "Kaushal Damania",
    videoUrl: "https://www.youtube.com/watch?v=RyugMAbes2A",
    description: "Food donation app integrating nutritional scoring agents with government food databases."
  },
  {
    title: "AI Agents for Health Insurance",
    speaker: "Daren Hua, Kien Tran, Brian Tran",
    videoUrl: "https://www.youtube.com/watch?v=NZwnVqUtXUQ",
    description: "AI agents automating broker responsibilities for healthcare insurance plan matching."
  },
  {
    title: "AI Day Summit Overview",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=eR_fnV0DyHE",
    description: "Natan Vidra from Anote provides an overview of Anote's AI Day Summit 2025 and shares new product launches."
  },
  {
    title: "Future of Autonomous Agents",
    speaker: "Spurthi Setty",
    videoUrl: "https://www.youtube.com/watch?v=OgFijOrzarg",
    description: "Discusses future research areas in multi-agent AI frameworks and the importance of accessible AI."
  },
  {
    title: "AI Ted Talk",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=7I_pBLjMNzs",
    description: "Discover the future of AI at our TEDx talk on Artificial General Intelligence."
  },
  {
    title: "Introduction to Anote",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=IM0ika7SOJE",
    description: "Anote platform overview on handling unstructured text data for enterprise ML solutions."
  },
  {
    title: "Benchmarking Text Classification Models",
    speaker: "Katherine Jijo",
    videoUrl: "https://www.youtube.com/watch?v=IakXvvdaNJQ",
    description: "Benchmarking fine-tuned LLM performance with few-shot, active learning, and recall optimization."
  },
  {
    title: "Benchmarking Question and Answering Models",
    speaker: "Katherine Jijo",
    videoUrl: "https://www.youtube.com/watch?v=sppn68PirPQ",
    description: "FinanceBench benchmark for evaluating financial domain RAG models and Q&A accuracy."
  },
  {
    title: "Fine Tuning of Large Language Models",
    speaker: "Spurthi Setty",
    videoUrl: "https://www.youtube.com/watch?v=mMmaTMuRZmo",
    description: "Parameter-efficient fine-tuning, LoRA, PEFT, and prompt optimization for domain specific LLMs."
  },
  {
    title: "Build Your Own Private Financial Chatbot",
    speaker: "Sakshi Pandey",
    videoUrl: "https://www.youtube.com/watch?v=SB-Z1v8Emx4",
    description: "Privacy-preserving GPT chatbot architecture for financial firms analyzing sensitive data."
  },
  {
    title: "PrivateGPT Chatbot Product Demo",
    speaker: "Eden Chung",
    videoUrl: "https://www.youtube.com/watch?v=XSsFmef9LJA",
    description: "PrivateGPT chatbot demo showing fully on-prem document Q&A with full data privacy."
  },
  {
    title: "Panacea - Novel AI Platform",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=jk4hSnoOofA",
    description: "End-to-end human-centered ML platform for classification, RAG, and structured AI pipelines."
  },
  {
    title: "Enhancing RAG Models",
    speaker: "Spurthi Setty",
    videoUrl: "https://www.youtube.com/watch?v=0gqCpghZXEE",
    description: "Advanced RAG architecture combining QLoRA, chunking, re-ranking, and evaluation metrics."
  },
  {
    title: "Unsupervised Learning",
    speaker: "Ben Setel",
    videoUrl: "https://www.youtube.com/watch?v=yoNu9oMpl7I",
    description: "QLoRA + RAG for unsupervised training pipelines with limited data."
  },
  {
    title: "Evaluation Metrics",
    speaker: "Harsh Thakkar",
    videoUrl: "https://www.youtube.com/watch?v=ZC6nnneU0ks",
    description: "Comprehensive model evaluation framework including structured/unstructured label metrics."
  },
  {
    title: "Named Entity Recognition Models",
    speaker: "Henry Toll",
    videoUrl: "https://www.youtube.com/watch?v=w3ZwiupUaGA",
    description: "NER fine-tuning architecture for private entity extraction pipelines."
  },
  {
    title: "Anote Software Developer Kit",
    speaker: "Spurthi Setty",
    videoUrl: "https://www.youtube.com/watch?v=j7QnwfQvDbE",
    description: "Fine-tuning SDK supporting supervised, unsupervised, RLHF pipelines and private model hosting."
  },
{
    title: "AI Assisted RFP Pipeline",
    speaker: "Sanya Mahajan",
    videoUrl: "https://www.youtube.com/watch?v=fE4_Yjjfl0M",
    description: "RFP and grant writing automation pipeline reducing manual customization for proposal submissions."
  },
  {
    title: "Named Entity Recognition Webinar",
    speaker: "Alisha Shah",
    videoUrl: "https://www.youtube.com/watch?v=9I67O-qU17o",
    description: "Fine-tuned NER for healthcare (HIPAA), finance (PCI DSS), and government security."
  },
  {
    title: "Question Answering Webinar",
    speaker: "Sriya Challa",
    videoUrl: "https://www.youtube.com/watch?v=2pl93QgJ20g",
    description: "RAG-powered legal document Q&A model accuracy benchmarking and hallucination reduction."
  },
  {
    title: "Train with Model Versioning",
    speaker: "Tian Jin",
    videoUrl: "https://www.youtube.com/watch?v=JGrsdxb7jxA",
    description: "Model versioning pipelines for monitoring fine-tuning drift across annotation cycles."
  },
  {
    title: "Private Chatbot Overview",
    speaker: "Monica Jain",
    videoUrl: "https://www.youtube.com/watch?v=sajX9jfHIAY",
    description: "Private GPT fully siloed deployment demo for financial services."
  },
  {
    title: "Private Chatbot Desktop App",
    speaker: "Zhiyi Tang",
    videoUrl: "https://www.youtube.com/watch?v=FYdnZTZL7KM",
    description: "Desktop deployment for secure private LLMs with local inference."
  },
  {
    title: "Private Chatbot SDK",
    speaker: "Aarya Sangeeth",
    videoUrl: "https://www.youtube.com/watch?v=xtOFXU86FdY",
    description: "SDK demo to query uploaded PDFs, financial documents, and websites across private LLM models."
  },
  {
    title: "Text Classification Webinar",
    speaker: "Alisha Shah",
    videoUrl: "https://www.youtube.com/watch?v=lbpTqIPKu-c",
    description: "Hierarchical product classification models with few-shot human-in-the-loop pipelines."
  },
  {
    title: "Document Classification Example",
    speaker: "Catherine Wang",
    videoUrl: "https://www.youtube.com/watch?v=l95qAYDwVgQ",
    description: "Grant proposal auto-tagging pipeline to reduce expert review time and improve routing."
  },
  {
    title: "Chatbot on 10-Ks for Financial Analysts",
    speaker: "Soumya Goondla",
    videoUrl: "https://www.youtube.com/watch?v=3i2EXnGig-Y",
    description: "Financial Q&A chatbot using SEC filings (10-K/10-Q) fine-tuned for investment analysts."
  },
  {
    title: "Structured - Semantic Metrics Layer",
    speaker: "Amrutha Gujjar",
    videoUrl: "https://www.youtube.com/watch?v=jkW20eTQx3s",
    description: "Semantic metrics layer for consistent company-wide financial metric alignment across teams."
  },
  {
    title: "Athena Intelligence AI Analyst",
    speaker: "Brendon Geils",
    videoUrl: "https://www.youtube.com/watch?v=xGkb-Az44yM",
    description: "AI-native data analyst copilots for enterprise analysts using Athena Intelligence platform."
  },
  {
    title: "Open Ads Product Demo",
    speaker: "Steven Liss",
    videoUrl: "https://www.youtube.com/watch?v=mEGG_NkKFn4",
    description: "Real-time generative ad network dynamically generating ads per impression."
  },
  {
      title: "Human-Centered AI: Dynamic Systems for Optimal Model Performance",
      speaker: "Natan Vidra",
      videoUrl: "https://www.youtube.com/watch?v=imWuregFoRM",
      description: "Human-centered AI represents a new frontier in artificial intelligence, emphasizing dynamic, active-learning systems that adapt to the specific needs and data of end-users."
  },
  {
      title: "AI For Automated Marketing",
      speaker: "Tal Navarro",
      videoUrl: "https://www.youtube.com/watch?v=RQR2f0AlOlQ",
      description: "How AI will unleash a new era of marketing. Tal goes through different AI based marketing tools such as Hey Gen and Gamma, and shows the potential of an AI marketing team."
  },
  {
      title: "Generative AI Video Generation",
      speaker: "Joshua Wohle",
      videoUrl: "https://www.youtube.com/watch?v=k-3vorK2wLE",
      description: "Josh goes through Veo-3 and the new advancements in AI generated movies."
  },
   {
    title: "Armor Institute",
    speaker: "Anote Team",
    videoUrl: "https://www.youtube.com/watch?v=xsZrNCQ7N1w",
    description: "Overview of Armor’s secure, mission-ready AI stack including data governance, model routing, and on-prem deployment."
  },
  {
    title: "Multimodality and Synthetic Data",
    speaker: "Anote Team",
    videoUrl: "https://www.youtube.com/watch?v=Qj653H5hvIw",
    description: "Demonstration of multimodal tools and synthetic data generators for improving performance with limited or sensitive datasets."
  },
  {
    title: "Languages and Model Leaderboard",
    speaker: "Anote Team",
    videoUrl: "https://www.youtube.com/watch?v=JZ8foxMtct8",
    description: "Presentation of multilingual model evaluations and the public model leaderboard."
  },
  {
    title: "Autonomous Intelligence",
    speaker: "Anote Team",
    videoUrl: "https://www.youtube.com/watch?v=Nf-pc4xyTBI",
    description: "Introduction to the agentic stack with orchestration, guardrails, and human-in-the-loop review."
  },

  // Agenda Videos
  {
    title: "Making AI Accessible",
    speaker: "Franchesca Tamayo",
    videoUrl: "https://www.youtube.com/watch?v=-V5TtTJz0qo",
    description: "Talk on approaches to make AI more accessible."
  },
  {
    title: "Deep Research For Report Generation",
    speaker: "Javier Majumdar",
    videoUrl: "https://www.youtube.com/watch?v=6ijRRGhJX48",
    description: "Talk on conducting deep research to support report generation."
  },
  {
    title: "Smart Orchestration for AI Agents",
    speaker: "Wesley Zeng",
    videoUrl: "https://www.youtube.com/watch?v=M4ZTuLh7-zY",
    description: "Talk on orchestrating AI agents effectively."
  },
  {
    title: "Improving RAG for Report Generation",
    speaker: "Sanya Mahajan",
    videoUrl: "https://www.youtube.com/watch?v=SJ-f8uRGi6o",
    description: "Talk on enhancing Retrieval-Augmented Generation for report generation."
  },
  {
    title: "Autonomous Intelligence (Computer Use)",
    speaker: "Bi Rong Liu",
    videoUrl: "https://www.youtube.com/watch?v=WpLYgeiE-Lo",
    description: "Talk on autonomous intelligence with a focus on computer use."
  },
  {
    title: "Browser Use",
    speaker: "Hannah Qi",
    videoUrl: "https://www.youtube.com/watch?v=zJfx-4YyNKc",
    description: "Talk on browser usage in the context of AI."
  },
  {
    title: "Object Detection of Multi Domain Images",
    speaker: "Anya Ross",
    videoUrl: "https://www.youtube.com/watch?v=ZTL56FpMRec",
    description: "Talk on object detection for images from multiple domains."
  },
  {
    title: "Infrastructure, Intelligence, and Developer Velocity",
    speaker: "Rishav Acharya",
    videoUrl: "https://www.youtube.com/watch?v=kb2X3jGHz3I",
    description: "Talk on infrastructure, intelligence, and improving developer velocity."
  },
  {
    title: "Fine Tuning For Object Detection",
    speaker: "Neha Naveen",
    videoUrl: "https://www.youtube.com/watch?v=mOrear19fX4",
    description: "Talk on fine-tuning techniques for object detection."
  },
  {
    title: "Synthetic Data Generation for Computer Vision and NLP",
    speaker: "Ishaana Rao",
    videoUrl: "https://www.youtube.com/watch?v=5SpeMMJMiyk",
    description: "Talk on generating synthetic data for computer vision and NLP."
  },
  {
    title: "Synthetic Data Generation (Dataset Curation)",
    speaker: "Zexun Yao",
    videoUrl: "https://www.youtube.com/watch?v=nuvZHkuKWgQ",
    description: "Talk on curating datasets for synthetic data generation."
  },
  {
    title: "Synthetic Data Generation (API)",
    speaker: "Saumya Singh",
    videoUrl: "https://www.youtube.com/watch?v=v2OSiva-s0c",
    description: "Talk on API-based synthetic data generation."
  },
  {
    title: "Personalized Chatbots for Languages and Companies",
    speaker: "Arya Sinha",
    videoUrl: "https://www.youtube.com/watch?v=1BU1_Ii4SVQ",
    description: "Talk on building personalized chatbots for multiple languages and companies."
  },
  {
    title: "Evaluating Multilingual LLM Performance",
    speaker: "Angela Bai",
    videoUrl: "https://www.youtube.com/watch?v=FisQu6RqyEI",
    description: "Talk on evaluating multilingual large language model performance."
  },
  {
    title: "Annotation And Evaluation For Audio Data",
    speaker: "Alyssa Lee",
    videoUrl: "https://www.youtube.com/watch?v=fPoPaBoNzMU",
    description: "Talk on annotation and evaluation processes for audio data."
  },
  {
    title: "Match Effectors",
    speaker: "Alan Zhao",
    videoUrl: "https://www.youtube.com/watch?v=soVtZ5uaC68",
    description: "Talk on matching effectors to specific requirements."
  },
  {
    title: "Benchmarking and Fine Tuning Computer Vision Models for Object Detection",
    speaker: "Spurthi Setty",
    videoUrl: "https://www.youtube.com/watch?v=2GI5aFOx1BA",
    description: "Talk on benchmarking and fine-tuning computer vision models for object detection."
  },
  {
    title: "Fine Tuning LLMs for Languages",
    speaker: "Rebecca Frey",
    videoUrl: "https://www.youtube.com/watch?v=Mk3opMRlWcU",
    description: "Talk on fine-tuning large language models for language tasks."
  },
  {
    title: "Model Leaderboard",
    speaker: "Josh Chang",
    videoUrl: "https://www.youtube.com/watch?v=e8V6MfPqAaE",
    description: "Talk on the model leaderboard and its applications."
  },
  {
    title: "Agent Registry",
    speaker: "Hamza Arshad",
    videoUrl: "https://www.youtube.com/watch?v=HyPbQoXrEVg",
    description: "Talk on the agent registry and its uses."
  },
  {
    title: "Autonomous Systems",
    speaker: "Nicholas Lin",
    videoUrl: "https://www.youtube.com/watch?v=MQReyQEckoA",
    description: "Talk on autonomous systems."
  },
  {
    title: "AI in Healthcare",
    speaker: "Kelvin Xiao",
    videoUrl: "https://www.youtube.com/watch?v=ZU-K6LGogwE",
    description: "Talk on applications of AI in healthcare."
  },
  {
    title: "Reasoning Models",
    speaker: "Ani Jain",
    videoUrl: "https://www.youtube.com/watch?v=T4SOwvubQH4",
    description: "Talk on reasoning models."
  },
  {
    title: "Automated AI Data Curation For Armor",
    speaker: "Tianyin Zhang",
    videoUrl: "https://www.youtube.com/watch?v=Q6GlpPerWSM",
    description: "Talk on automated AI data curation for Armor."
  },
  {
    title: "Model Context Protocol",
    speaker: "Mohamed Zakaria Kheder",
    videoUrl: "https://www.youtube.com/watch?v=ZEZaStOT3NE",
    description: "Talk on the model context protocol."
  },
  {
    title: "AI Community Platform",
    speaker: "Chuxin Liu",
    videoUrl: "https://www.youtube.com/watch?v=8pVNBVPeZe4",
    description: "Talk on building and using an AI community platform."
  },
  {
    title: "USA vs. China in the AI Race",
    speaker: "Anna Liu",
    videoUrl: "https://www.youtube.com/watch?v=wLgmJJbIISc",
    description: "Talk comparing the USA and China in the AI race."
  },
  {
    title: "Human Centered AI Principles and Pledge",
    speaker: "Tash Salas",
    videoUrl: "https://www.youtube.com/watch?v=hTkDc9KwZLE",
    description: "Talk on human-centered AI principles and pledge."
  },
  {
    title: "The Future of AI",
    speaker: "Jiayu Xu",
    videoUrl: "https://www.youtube.com/watch?v=0JYLC5SFNHU",
    description: "Talk on the future of AI."
  },
    {
    title: "AI Events and Community Building",
    speaker: "Darian Pan",
    videoUrl: "https://www.youtube.com/watch?v=tfYQNXuL94Y",
    description: "Talk on AI Events and Community Building."
  },
    {
    title: "Making AI Accessible",
    speaker: "Franchesca Tamayo",
    videoUrl: "https://www.youtube.com/watch?v=OISac7BXrg8",
    description: "Talk on making AI accessible."
  },
  {
    title: "Hatch Digital Recruiter",
    speaker: "Faraz Siddiqi",
    videoUrl: "https://www.youtube.com/watch?v=d7VHpq-qayw",
    description: "Hatch recruiting AI automates technical recruiting workflows using autonomous AI recruiters."
  },
  {
    title: "PromptLayer PromptOps Platform",
    speaker: "Nahuel Borda",
    videoUrl: "https://www.youtube.com/watch?v=JUxx5tE9q7g",
    description: "Prompt management, versioning, observability and debugging tools for enterprise LLM prompt engineering."
  },
  {
    title: "Vokel - Private Financial Chatbot",
    speaker: "Hamza Zaveri",
    videoUrl: "https://www.youtube.com/watch?v=wRUk77oVXPM",
    description: "Vokel AI - Cybersecurity & private LLM solution for finance and generative AI threat defense."
  },
    {
    title: "timeOS Product Demo",
    speaker: "Tommy Barav",
    videoUrl: "https://www.youtube.com/watch?v=nQVI-79jJ9k",
    description: "Tommy explains how to create a personal system that captures, summarizes, and takes action on your day using timeOS."
  },
  {
    title: "AI Monetization: A Practical Guide to Unlock Value",
    speaker: "Eva Dong",
    videoUrl: "https://www.youtube.com/watch?v=UPtMRrlHFLc",
    description: "Eva Dong from Google Cloud shares a practical framework for unlocking AI monetization and ROI optimization."
  },
  {
    title: "Anote Product Demo",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=hOWje03o2Xw",
    description: "Demo of Anote's AI for classifying proposal reviews and routing POCs using human-AI collaboration."
  },
  {
    title: "Demoing Practical AI Tools",
    speaker: "Doug Williams",
    videoUrl: "https://www.youtube.com/watch?v=zhJVgUs7pKg",
    description: "MIT’s Orbit AI Jetpacks demo showing how entrepreneurs can boost productivity with AI."
  },
  {
    title: "DreamKey: The Future of AI Entertainment",
    speaker: "Will Brierly",
    videoUrl: "https://www.youtube.com/watch?v=wcC6jq3VPFE",
    description: "Real-time, interactive long-form multi-character animated TV shows built by Emmy/Grammy-winning team."
  },
  {
    title: "Accelerating SaaS Development with AI Agents",
    speaker: "Wes Sonnenreich",
    videoUrl: "https://www.youtube.com/watch?v=f89KWYTx7J4",
    description: "00SaaS — an open-source Next.js template to help AI agents rapidly build SaaS applications."
  },
  {
    title: "How to build a custom GPT",
    speaker: "Stefano Piano",
    videoUrl: "https://www.youtube.com/watch?v=Uqp1JNpyeDM",
    description: "Mindstone demo showing how to build Custom GPTs for simplifying complex prompting tasks."
  },
  {
    title: "DocRouter.AI as a drag-and-drop AI document processing tool",
    speaker: "Andrei Radulescu",
    videoUrl: "https://www.youtube.com/watch?v=n-h-HbtWydg",
    description: "DocRouter demo: AI document evaluation and rubric-based quiz grading integrated with Claude Desktop."
  },
  {
    title: "Investigating the Effects of Domain-Specific Fine-Tuning on LLM Reasoning",
    speaker: "Shaun Ho",
    videoUrl: "https://www.youtube.com/watch?v=Osx5RGvDjWE",
    description: "How fine-tuning LLMs on legal data improves their reasoning ability in real-world legal applications."
  },
  {
    title: "How AI can help you understand and apply scientific publications",
    speaker: "Haoyun Feng",
    videoUrl: "https://www.youtube.com/watch?v=m_ur8K2gb4Y",
    description: "Building an AI agent that extracts key insights from complex scientific papers using RAG."
  },
  {
    title: "How LLMs improve in-site search",
    speaker: "Uri Goren",
    videoUrl: "https://www.youtube.com/watch?v=oC0Che0VzhE",
    description: "How large language models can power dramatically better on-site search engines beyond chatbots."
  },
  {
    title: "Shaping the Future with Responsible AI",
    speaker: "Ofer Hermoni",
    videoUrl: "https://www.youtube.com/watch?v=irKs4f2PBHQ",
    description: "The Responsible Generative AI Framework (RGAF) for ethical AI design, development, and deployment."
  },
  {
    title: "Automated market briefs using LLMs",
    speaker: "Alexander Walsh",
    videoUrl: "https://www.youtube.com/watch?v=83DZ0Pk-rpU",
    description: "How leading financial institutions use scalable RAG over 100M documents to gain investment insights."
  },
  {
    title: "Fine-Tuning LLMs for Financial Data Extraction",
    speaker: "Reena Tandon",
    videoUrl: "https://www.youtube.com/watch?v=0eYaC5xzMSk",
    description: "Using Llama models and quantization to extract structured data from financial datasets securely."
  },
  {
    title: "Autonomous AI Coding Agents",
    speaker: "Aisha Ahmad",
    videoUrl: "https://www.youtube.com/watch?v=K2KUVdZjZnc",
    description: "Multi-agent AI coding frameworks automatically generating feature requests and code updates."
  },
  {
    title: "Multimodal Retrieval-Augmented Generation (RAG) Systems",
    speaker: "Manoj Nath Yogi",
    videoUrl: "https://www.youtube.com/watch?v=kkBNeGIUcfk",
    description: "Integrating Whisper, CNNs, and custom neural networks for multimodal chatbot reasoning."
  },
  {
    title: "Human-Centered AI: Dynamic Systems for Optimal Model Performance",
    speaker: "Natan Vidra",
    videoUrl: "https://www.youtube.com/watch?v=tfOb-N4LFn0",
    description: "Human-centered AI systems using data labeling, fine-tuning, active learning, and evaluation."
  },
  {
    title: "Building a Personalized Pep-Talk App with Low Code",
    speaker: "Alexander Walsh",
    videoUrl: "https://www.youtube.com/watch?v=qpAahjMtv-E",
    description: "How to build customized low-code applications for generating personalized pep talks."
  },
  {
    title: "The Future of Skills",
    speaker: "Joshua Wolfe",
    videoUrl: "https://www.youtube.com/watch?v=rgERVpQ3HgY",
    description: "Joshua explores which skills will remain essential as AI transforms the workforce."
  },
  {
    title: "Integrating an Open-Source AI Financial Analyst to a Financial Terminal",
    speaker: "Didier Lopes",
    videoUrl: "https://www.youtube.com/watch?v=Vp-CIbLf3Ng",
    description: "How OpenBB allows users to bring their own custom AI agents into financial analysis workflows."
  },
  {
    title: "How to be more productive using AI",
    speaker: "Ben Reilly",
    videoUrl: "https://www.youtube.com/watch?v=VNzrkQ_vEIk",
    description: "Athena Intelligence demo on observability and building transparent AI systems for better decision-making."
  },
  {
    title: "Say Yes to High Stakes Decisions and Heavy Regulations",
    speaker: "Chloe Zhu",
    videoUrl: "https://www.youtube.com/watch?v=2GIqkxpxxjQ",
    description: "How Ensemblex applies AI in highly regulated industries like credit underwriting and financial services."
  },
  {
    title: "Making LLMs more Transparent: Advanced Source Controls & Reasoning",
    speaker: "Nana Miyashita",
    videoUrl: "https://www.youtube.com/watch?v=JNgwtI2E_pY",
    description: "Advanced transparency features for controlling sources and complex reasoning inside LLM pipelines."
  },
  {
    title: "Building an LLM Product from Scratch",
    speaker: "Dev Rishi Khare",
    videoUrl: "https://www.youtube.com/watch?v=4ZpUuH5hvqU",
    description: "End-to-end demo of how to build reliable AI pipelines for robust LLM product deployments."
  },
  {
    title: "Getting Started with AI Agents (Finance Example)",
    speaker: "Pablo Vega Bahar",
    videoUrl: "https://www.youtube.com/watch?v=kWL5S0j8pf0",
    description: "Walkthrough of how to use Python to code LLM-powered agents for financial document retrieval."
  },
  {
    title: "Meet Your Dream Tutor: How to Learn Anything with GenAI",
    speaker: "Laura Cane Malahel",
    videoUrl: "https://www.youtube.com/watch?v=2LOeYHc_6bI",
    description: "Generative AI as an adaptive tutor for lifelong learning across subjects and skill development."
  },
  {
    title: "The Future Of Work, Productivity & Beyond",
    speaker: "Joshua Wohle",
    videoUrl: "https://www.youtube.com/watch?v=GSpLQ_fQiF4",
    description: "Exploring how AI will transform the workforce, learning, and productivity."
  },
  {
    title: "Effectively Monitoring and Iterating on Your LLM Applications",
    speaker: "Sahil Sinha",
    videoUrl: "https://www.youtube.com/watch?v=5ZydGw8OPgU",
    description: "Common challenges and solutions for deploying and iterating LLM applications at scale."
  },
  {
    title: "GPTs on Steroids",
    speaker: "Joshua Wohle",
    videoUrl: "https://www.youtube.com/watch?v=Qk9pomFVViQ",
    description: "Demo showing how to combine GPT models for advanced compound outcomes and orchestration."
  },
  {
    title: "Narrative Reconstruction: GenAI and the Israeli-Palestinian Conflict",
    speaker: "Adam Becker",
    videoUrl: "https://www.youtube.com/watch?v=BQd0h6yY8ls",
    description: "Exploring AI-first products for public discourse, political debate, and narrative shaping."
  },
  {
    title: "Beyond Detection: Unleashing AI Image Analysis with CLIP",
    speaker: "Shafik Q",
    videoUrl: "https://www.youtube.com/watch?v=UbaK6eg2UkA",
    description: "Combining OpenAI’s CLIP with advanced models to unlock richer image recognition and scene understanding."
  },
  {
    title: "Autonomous Systems: Countdown to Your Personal AI Companion",
    speaker: "Reyhan Merekar",
    videoUrl: "https://www.youtube.com/watch?v=nJkUQGpK8g4",
    description: "Explores the state and future of autonomous personal and household robots powered by AI."
  },
  {
    title: "Upgrading AI Data Reasoning",
    speaker: "Gil",
    videoUrl: "https://www.youtube.com/watch?v=EFQDxRqeY2A",
    description: "How Merlin BI deepens reasoning abilities of LLMs for complex AI-powered data reasoning tasks."
  },
  {
    title: "How to Build a Private Chatbot",
    speaker: "Sakshi Pandey",
    videoUrl: "https://www.youtube.com/watch?v=t7yrX7iirdM",
    description: "Building secure Retrieval-Augmented Generation chatbots with Llama2 and on-device AI for privacy."
  },
  {
    title: "An Intro to Deep Tech x AI",
    speaker: "Matthew Iles",
    videoUrl: "https://www.youtube.com/watch?v=e6hs9Dxoi_U",
    description: "The future of deep tech's convergence with AI for foundational technological breakthroughs."
  },
  {
    title: "Private, Local ChatGPT in a Few Clicks",
    speaker: "Joshua Wohle",
    videoUrl: "https://www.youtube.com/watch?v=0oUa3zC7JWY",
    description: "Tutorial on running fully local ChatGPT instances with privacy in mind."
  },
  {
    title: "Starting A Business With The Aid Of AI",
    speaker: "Hadas Frank",
    videoUrl: "https://www.youtube.com/watch?v=Dq2wR3NvtVQ",
    description: "Using GPT and AI tools to rapidly turn business ideas into companies."
  },
  {
    title: "A Blueprint For Adopting AI Into Your Business",
    speaker: "Ana Santhosh",
    videoUrl: "https://www.youtube.com/watch?v=b-EdN8R3p9s",
    description: "Step-by-step framework for successfully adopting AI into real business workflows."
  },
  {
    title: "A Demo of the Groq Platform",
    speaker: "John Barrus",
    videoUrl: "https://www.youtube.com/watch?v=vvhCK2ZasBI",
    description: "How Groq achieves LLM inference 10x faster than GPUs using SRAM and deterministic execution."
  },
  {
    title: "Going from Idea to Product Requirements or Pitch Decks",
    speaker: "Ze'ev Abrams",
    videoUrl: "https://www.youtube.com/watch?v=LmySoGL7yiY",
    description: "Using Iteraite tools to turn raw ideas into structured PRDs, pitch decks, and business plans."
  },
  {
    title: "Podcast With My Digital Twin",
    speaker: "Hadas Frank",
    videoUrl: "https://www.youtube.com/watch?v=elV7tvyNOfA",
    description: "AI-powered podcast using your personal digital twin to simulate intelligent conversations."
  },
  {
    title: "Building Your Own AI-powered Devtools",
    speaker: "Scott Werner",
    videoUrl: "https://www.youtube.com/watch?v=f93Q1BtdemE",
    description: "Sublayer demo on rapidly developing lightweight AI-powered devtools to accelerate app development."
  },
  {
    title: "A Peek at the Internal Tools We Built to Manage 2M+ OpenAI Calls a Day",
    speaker: "Philip Thomas",
    videoUrl: "https://www.youtube.com/watch?v=6klWDF9no54",
    description: "How Find AI built internal tools to manage millions of OpenAI requests daily at massive scale."
  },
  {
    title: "Harnessing AI for Understanding Markets Better",
    speaker: "Krishna Kumar",
    videoUrl: "https://www.youtube.com/watch?v=MSHM86q5njk",
    description: "Transforming financial research with LLMs to uncover actionable investment signals and deeper analysis."
  },
  {
    title: "Your Brain on Gen AI: Insights from the Science of Learning",
    speaker: "Christine Looser",
    videoUrl: "https://www.youtube.com/watch?v=D8M51_shKxs",
    description: "Examining how AI reshapes cognition, learning, and productivity; balancing tech use with mental sharpness."
  },
  {
    title: "Building AI Into Your Product",
    speaker: "Emma Lawler",
    videoUrl: "https://www.youtube.com/watch?v=nSnk5sSmatU",
    description: "Velvet demo on how to warehouse AI logs, analyze model output, and build data-driven AI features."
  },
  {
    title: "Plum Evaluates and Improves the Quality of LLM Applications",
    speaker: "Julian Norton",
    videoUrl: "https://www.youtube.com/watch?v=lIbAcNXYcTQ",
    description: "Plum Defense system automates fine-tuning cycles based on continual model evaluation and augmentation."
  }
];


function ArmorContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title-asc");

  const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredVideos = useMemo(() => {
    let filtered = videoData;
    if (searchTerm) {
      filtered = videoData.filter((video) => {
        const target = `${video.title} ${video.speaker} ${video.description}`;
        return normalize(target).includes(normalize(searchTerm));
      });
    }

    switch (sortOption) {
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "speaker-asc":
        filtered.sort((a, b) => a.speaker.localeCompare(b.speaker));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, sortOption]);

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5 overflow-y-auto">
      <h1 className="text-white text-4xl font-bold mb-10 text-center">
        Armor Video Library
      </h1>

      {/* Search + Sort Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="🔎 Search videos by title, speaker, or topic..."
            className="w-full p-4 rounded-xl text-white bg-gray-700 text-lg shadow-lg border border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute right-4 top-4 text-white text-xl"
              onClick={() => setSearchTerm("")}
            >
              <FaTimes />
            </button>
          )}
        </div>

        {/* <div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 rounded-xl bg-gray-700 text-white text-lg shadow-lg border border-gray-600 focus:outline-none"
          >
            <option value="title-asc">Sort: Title (A-Z)</option>
            <option value="title-desc">Sort: Title (Z-A)</option>
            <option value="speaker-asc">Sort: Speaker (A-Z)</option>
          </select>
        </div> */}
      </div>

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="text-white text-center text-2xl mt-20">
          🚫 No videos found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVideos.map((video, index) => {
            let videoId;
            try {
              videoId = new URL(video.videoUrl).searchParams.get("v");
              if (!videoId) {
                const urlParts = video.videoUrl.split("v=");
                if (urlParts.length > 1) {
                  videoId = urlParts[1].split("&")[0];
                } else {
                  const segments = video.videoUrl.split("/");
                  videoId = segments[segments.length - 1];
                }
              }
            } catch {
              videoId = null;
            }

            const thumbnailUrl = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "";

            return (
              <div
                key={index}
                className="relative bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-700"
                onClick={() => window.open(video.videoUrl, "_blank")}
              >
                {thumbnailUrl && (
                  <div className="relative">
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaPlay className="text-white text-5xl" />
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-white mb-2">{video.title}</h2>
                  <p className="text-blue-400 mb-2">{video.speaker}</p>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ArmorContent;