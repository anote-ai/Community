import React, { useState } from "react";
import AIDayVideo from "./AIDayVideo";
import "../landing_page_styles/Agenda.css";
import "../landing_page_styles/Registrations.css";
import AIDayVideoNew from "./AIDayVideoNew";

function PaleBlueDot() {
    const launchItems = [
      {
        name: "MLOps Platform",
        role: "Product Launch",
        topic: "Anote",
        theme: "Launch",
        isLaunch: true,
        linkedinUrl: "https://anote.ai",
        talkUrl: "",
        videoUrl: "https://www.youtube.com/watch?v=4Ei8mqn_ufg",
        videoUrlEmbed: "https://www.youtube.com/embed/4Ei8mqn_ufg",
        description: "Anote is an end to end MLOps platform that enables you to obtain the best large language model for your data. On Anote, we provide an evaluation framework to compare zero shot LLMs like GPT, Claude, Llama3 and Mistral, with fine tuned LLMs that are trained on your domain specific training data (via supervised, unsupervised and RLHF fine tuning). We provide a data annotation interface to convert raw unstructured data into an LLM ready format, and incorporate subject matter expertise into your training process to improve model accuracies. End users can route / integrate the best LLM into their own, on premise, private chatbot, as well as interact with our software development kit for fine tuning."
      },
    {
      name: "Armor Institute",
      role: "Product Launch",
      topic: "Armor",
      theme: "Launch",
      isLaunch: true,
      linkedinUrl: "https://anote.ai", // optional placeholder
      talkUrl: "",
      videoUrl: "https://www.youtube.com/watch?v=xsZrNCQ7N1w",
      videoUrlEmbed: "https://www.youtube.com/embed/xsZrNCQ7N1w",
      description:
        "Introducing Armor: our secure, mission‑ready stack for AI in sensitive environments. This launch video walks through the core pillars—data governance, model routing, and on‑prem deployment—and shows how Armor reduces time‑to‑impact without compromising safety.",
    },
    {
      name: "Multimodality and Synthetic Data",
      role: "Product Launch",
      topic: "Multimodal + Synthetic Data",
      theme: "Launch",
      isLaunch: true,
      linkedinUrl: "https://anote.ai",
      talkUrl: "",
      videoUrl: "https://www.youtube.com/watch?v=Qj653H5hvIw",
      videoUrlEmbed: "https://www.youtube.com/embed/Qj653H5hvIw",
      description:
        "A tour of our multimodal toolchain and synthetic data generators. See how we bootstrap scarce datasets, balance classes, and evaluate cross‑modal tasks to lift accuracy where real data is limited or sensitive.",
    },
    {
      name: "Languages and Model Leaderboard",
      role: "Product Launch",
      topic: "Languages + Leaderboard",
      theme: "Launch",
      isLaunch: true,
      linkedinUrl: "https://anote.ai",
      talkUrl: "",
      videoUrl: "https://www.youtube.com/watch?v=JZ8foxMtct8",
      videoUrlEmbed: "https://www.youtube.com/embed/JZ8foxMtct8",
      description:
        "We demo multilingual evaluations and our public model leaderboard. The launch highlights transparent, reproducible scoring and how to route traffic to the best model for each language or task.",
    },
    {
      name: "Autonomous Intelligence",
      role: "Product Launch",
      topic: "Autonomous Intelligence",
      theme: "Launch",
      isLaunch: true,
      linkedinUrl: "https://anote.ai",
      talkUrl: "",
      videoUrl: "https://www.youtube.com/watch?v=Nf-pc4xyTBI",
      videoUrlEmbed: "https://www.youtube.com/embed/Nf-pc4xyTBI",
      description:
        "Our agentic stack for real‑world workflows. This launch show‑and‑tell covers orchestration, guardrails, and human‑in‑the‑loop review so autonomous systems are reliable—and auditable.",
    },
      {
    date: "8/4/2025",
    time: "6:20 – 6:40 PM",
    name: "Wesley Zeng",
    role: "Computer Science Student, Cornell",
    topic: "Smart Orchestration for AI Agents",
    theme: "Autonomous Intelligence",
    linkedinUrl: "https://www.linkedin.com/in/wesleyzeng08/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=M4ZTuLh7-zY",
    videoUrlEmbed: "https://www.youtube.com/embed/M4ZTuLh7-zY",
    description: ""
  },
  ];
const agendaItems = [
  // {
  //   date: "8/4/2025",
  //   time: "5:20 – 5:40 PM",
  //   name: "Franchesca Tamayo",
  //   role: "International Marketing Student, Baruch College",
  //   topic: "Making AI Accessible",
  //   theme: "Autonomous Intelligence",
  //   linkedinUrl: "https://www.linkedin.com/in/franchesca-nevaeh-tamayo-4a7410293/",
  //   talkUrl: "",
  //   videoUrl: "https://www.youtube.com/watch?v=-V5TtTJz0qo",
  //   videoUrlEmbed: "https://www.youtube.com/embed/-V5TtTJz0qo",
  //   description: ""
  // },
  // {
  //   date: "8/4/2025",
  //   time: "5:40 – 6:00 PM",
  //   name: "Javier Majumdar",
  //   role: "Mechanical Engineering, Cornell",
  //   topic: "Deep Research For Report Generation",
  //   theme: "Autonomous Intelligence",
  //   linkedinUrl: "https://www.linkedin.com/in/javier-majumdar-242929262/",
  //   talkUrl: "",
  //   videoUrl: "https://www.youtube.com/watch?v=6ijRRGhJX48",
  //   videoUrlEmbed: "https://www.youtube.com/embed/6ijRRGhJX48",
  //   description: ""
  // },
  // {
  //   date: "8/4/2025",
  //   time: "6:20 – 6:40 PM",
  //   name: "Wesley Zeng",
  //   role: "Computer Science Student, Cornell",
  //   topic: "Smart Orchestration for AI Agents",
  //   theme: "Autonomous Intelligence",
  //   linkedinUrl: "https://www.linkedin.com/in/wesleyzeng08/",
  //   talkUrl: "",
  //   videoUrl: "https://www.youtube.com/watch?v=M4ZTuLh7-zY",
  //   videoUrlEmbed: "https://www.youtube.com/embed/M4ZTuLh7-zY",
  //   description: ""
  // },
  // {
  //   date: "8/4/2025",
  //   time: "6:40 – 7:00 PM",
  //   name: "Sanya Mahajan",
  //   role: "Computer Science Student, Cornell",
  //   topic: "Improving RAG for Report Generation",
  //   theme: "Autonomous Intelligence",
  //   linkedinUrl: "https://www.linkedin.com/in/sanyamahajan2027/",
  //   talkUrl: "",
  //   videoUrl: "https://www.youtube.com/watch?v=SJ-f8uRGi6o",
  //   videoUrlEmbed: "https://www.youtube.com/embed/SJ-f8uRGi6o",
  //   description: ""
  // },
  {
    date: "8/4/2025",
    time: "7:00 – 7:20 PM",
    name: "Bi Rong Liu",
    role: "Computer Science Student, CUNY",
    topic: "Autonomous Intelligence (Computer Use)",
    theme: "Autonomous Intelligence",
    linkedinUrl: "https://www.linkedin.com/in/birongliu/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=WpLYgeiE-Lo",
    videoUrlEmbed: "https://www.youtube.com/embed/WpLYgeiE-Lo",
    description: ""
  },
  {
    date: "8/4/2025",
    time: "7:20 – 7:40 PM",
    name: "Hannah Qi",
    role: "Computer Science Student, Columbia University",
    topic: "Browser Use",
    theme: "Autonomous Intelligence",
    linkedinUrl: "https://www.linkedin.com/in/hannahqi/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=zJfx-4YyNKc",
    videoUrlEmbed: "https://www.youtube.com/embed/zJfx-4YyNKc",
    description: ""
  },
  {
    date: "8/5/2025",
    time: "5:00 – 5:20 PM",
    name: "Anya Ross",
    role: "Computer Science Student, Cornell",
    topic: "Object Detection of Multi Domain Images",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/anya-ross/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=ZTL56FpMRec",
    videoUrlEmbed: "https://www.youtube.com/embed/ZTL56FpMRec",
    description: ""
  },
  {
    date: "8/5/2025",
    time: "5:20 – 5:40 PM",
    name: "Rishav Acharya",
    role: "Full‑Stack Developer, Freelance",
    topic: "Infrastructure, Intelligence, and Developer Velocity",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/rishav-a-0482051a7/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=kb2X3jGHz3I",
    videoUrlEmbed: "https://www.youtube.com/embed/kb2X3jGHz3I",
    description: ""
  },
  {
    date: "8/5/2025",
    time: "5:40 – 6:00 PM",
    name: "Neha Naveen",
    role: "Computer Science Student, Cornell",
    topic: "Fine Tuning For Object Detection",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/neha-naveen-713b48275/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=mOrear19fX4",
    videoUrlEmbed: "https://www.youtube.com/embed/mOrear19fX4",
    description: ""
  },
  {
    date: "8/5/2025",
    time: "6:00 – 6:20 PM",
    name: "Ishaana Rao",
    role: "Operations Research Student, Cornell",
    topic: "Synthetic Data Generation for Computer Vision and NLP",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/ishaana-rao-076156202/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=5SpeMMJMiyk",
    videoUrlEmbed: "https://www.youtube.com/embed/5SpeMMJMiyk",
    description: ""
  },
  // {
  //   date: "8/5/2025",
  //   time: "6:20 – 6:40 PM",
  //   name: "Alina Kapanova",
  //   role: "Graduate Teaching Assistant, Cornell",
  //   topic: "Synthetic Data Generation for Videos",
  //   theme: "OpenAnote",
  //   linkedinUrl: "https://www.linkedin.com/in/alinakapanova/",
  //   talkUrl: "",
  //   videoUrl: "",
  //   videoUrlEmbed: "",
  //   description: ""
  // },
  {
    date: "8/5/2025",
    time: "6:40 – 7:00 PM",
    name: "Zexun Yao",
    role: "Master’s Student, Cornell Tech",
    topic: "Synthetic Data Generation (Dataset Curation)",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/zexun-yao-397ab321b/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=nuvZHkuKWgQ",
    videoUrlEmbed: "https://www.youtube.com/embed/nuvZHkuKWgQ",
    description: ""
  },
  {
    date: "8/5/2025",
    time: "7:00 – 7:20 PM",
    name: "Saumya Singh",
    role: "Masters in Computer Science, NYU",
    topic: "Synthetic Data Generation (API)",
    theme: "OpenAnote",
    linkedinUrl: "https://www.linkedin.com/in/saumyasinghz/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=v2OSiva-s0c",
    videoUrlEmbed: "https://www.youtube.com/embed/v2OSiva-s0c",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "5:00 – 5:20 PM",
    name: "Arya Sinha",
    role: "Computer Science Student, Barnard College",
    topic: "Personalized Chatbots for Languages and Companies",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/aryapsinha/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=1BU1_Ii4SVQ",
    videoUrlEmbed: "https://www.youtube.com/embed/1BU1_Ii4SVQ",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "5:20 – 5:40 PM",
    name: "Angela Bai",
    role: "Computer Science Student, Barnard College",
    topic: "Evaluating Multilingual LLM Performance",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/angela-bai-36a9a5331/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=FisQu6RqyEI",
    videoUrlEmbed: "https://www.youtube.com/embed/FisQu6RqyEI",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "5:40 – 6:00 PM",
    name: "Alyssa Lee",
    role: "Applied Mathematics and Statistics, Johns Hopkins",
    topic: "Annotation And Evaluation For Audio Data",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/alyssa-lee-829693286/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=fPoPaBoNzMU",
    videoUrlEmbed: "https://www.youtube.com/embed/fPoPaBoNzMU",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "6:20 – 6:40 PM",
    name: "Alan Zhao",
    role: "Computer Science Student, Cornell",
    topic: "Match Effectors",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/alan-zhao-CU2027/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=soVtZ5uaC68",
    videoUrlEmbed: "https://www.youtube.com/embed/soVtZ5uaC68",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "6:40 – 7:00 PM",
    name: "Spurthi Setty",
    role: "ML Engineer Manager, Stevens",
    topic: "Benchmarking and Fine Tuning Computer Vision Models for Object Detection",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/spurthi-setty/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=2GI5aFOx1BA",
    videoUrlEmbed: "https://www.youtube.com/embed/2GI5aFOx1BA",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "7:00 – 7:20 PM",
    name: "Rebecca Frey",
    role: "Computer Science Student, Barnard College",
    topic: "Fine Tuning LLMs for Languages",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/beccafrey/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=Mk3opMRlWcU",
    videoUrlEmbed: "https://www.youtube.com/embed/Mk3opMRlWcU",
    description: ""
  },
  {
    date: "8/6/2025",
    time: "7:20 – 7:40 PM",
    name: "Josh Chang",
    role: "Master’s Student, Cornell Tech",
    topic: "Model Leaderboard",
    theme: "Model Leaderboard",
    linkedinUrl: "https://www.linkedin.com/in/joshchang928/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=e8V6MfPqAaE",
    videoUrlEmbed: "https://www.youtube.com/embed/e8V6MfPqAaE",
    description: ""
  },
  // ---------- 8/7/2025 ----------
  // {
  //   date: "8/7/2025",
  //   time: "5:00 – 5:20 PM",
  //   name: "Katherine Jijo",
  //   role: "Computer Science Student, Hofstra",
  //   topic: "Autonomous Intelligence",
  //   theme: "Agent Registry",
  //   linkedinUrl: "https://www.linkedin.com/in/katherine-jijo-a1b231242/",
  //   talkUrl: "",
  //   videoUrl: "",
  //   videoUrlEmbed: "",
  //   description: ""
  // },
  {
    date: "8/7/2025",
    time: "5:20 – 5:40 PM",
    name: "Hamza Arshad",
    role: "Computer Science Student, NYU",
    topic: "Agent Registry",
    theme: "Agent Registry",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-majeed/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=HyPbQoXrEVg",
    videoUrlEmbed: "https://www.youtube.com/embed/HyPbQoXrEVg",
    description: ""
  },
  {
    date: "8/7/2025",
    time: "6:00 – 6:20 PM",
    name: "Nicholas Lin",
    role: "M.S. Data Science, Columbia University",
    topic: "Autonomous Systems",
    theme: "Agent Registry",
    linkedinUrl: "https://www.linkedin.com/in/nicholxslin/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=MQReyQEckoA",
    videoUrlEmbed: "https://www.youtube.com/embed/MQReyQEckoA",
    description: ""
  },
  // {
  //   date: "8/7/2025",
  //   time: "6:40 – 7:00 PM",
  //   name: "Kelvin Xiao",
  //   role: "M.S. Applied Analytics, Columbia University",
  //   topic: "AI in Healthcare",
  //   theme: "Agent Registry",
  //   linkedinUrl: "https://www.linkedin.com/in/kelvin-xiao-a5a473179/",
  //   talkUrl: "",
  //   videoUrl: "https://www.youtube.com/watch?v=ZU-K6LGogwE",
  //   videoUrlEmbed: "https://www.youtube.com/embed/ZU-K6LGogwE",
  //   description: ""
  // },
  {
    date: "8/7/2025",
    time: "7:00 – 7:20 PM",
    name: "Ani Jain",
    role: "Computer Science Student, Cornell",
    topic: "Reasoning Models",
    theme: "Agent Registry",
    linkedinUrl: "https://www.linkedin.com/in/animishjain/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=T4SOwvubQH4",
    videoUrlEmbed: "https://www.youtube.com/embed/T4SOwvubQH4",
    description: ""
  },

  // ---------- 8/8/2025 ----------
  {
    date: "8/8/2025",
    time: "5:00 – 5:20 PM",
    name: "Tianyin Zhang",
    role: "Master’s Student, Cornell Tech",
    topic: "Automated AI Data Curation For Armor",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/tianyinzhang37/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=Q6GlpPerWSM",
    videoUrlEmbed: "https://www.youtube.com/embed/Q6GlpPerWSM",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "5:20 – 5:40 PM",
    name: "Darian Pan",
    role: "AEM Student, Cornell",
    topic: "AI Events and Community Building",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/dpan21/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=tfYQNXuL94Y",
    videoUrlEmbed: "https://www.youtube.com/embed/tfYQNXuL94Y",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "5:40 – 6:00 PM",
    name: "Mohamed Zakaria Kheder",
    role: "Electrical and Computer Engineering, Cornell",
    topic: "Model Context Protocol",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-zakaria-kheder/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=ZEZaStOT3NE",
    videoUrlEmbed: "https://www.youtube.com/embed/ZEZaStOT3NE",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "6:00 – 6:20 PM",
    name: "Chuxin Liu",
    role: "Quantitative Modeling Associate, J.P. Morgan Chase",
    topic: "AI Community Platform",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/chuxin-liu/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=8pVNBVPeZe4",
    videoUrlEmbed: "https://www.youtube.com/embed/8pVNBVPeZe4",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "6:20 – 6:40 PM",
    name: "Anna Liu",
    role: "MBA Student, Cornell",
    topic: "USA vs. China in the AI Race",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/anna-liu-cornelljohnson/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=wLgmJJbIISc",
    videoUrlEmbed: "https://www.youtube.com/embed/wLgmJJbIISc",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "6:40 – 7:00 PM",
    name: "Tash Salas",
    role: "AI Researcher",
    topic: "Human Centered AI Principles and Pledge",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/tashsalas/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=hTkDc9KwZLE",
    videoUrlEmbed: "https://www.youtube.com/embed/hTkDc9KwZLE",
    description: ""
  },
  {
    date: "8/4/2025",
    time: "5:20 – 5:40 PM",
    name: "Franchesca Tamayo",
    role: "International Marketing Student, Baruch College",
    topic: "Making AI Accessible",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/franchesca-nevaeh-tamayo-4a7410293/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=OISac7BXrg8",
    videoUrlEmbed: "https://www.youtube.com/embed/OISac7BXrg8",
    description: ""
  },
  {
    date: "8/8/2025",
    time: "7:00 – 7:20 PM",
    name: "Jiayu Xu",
    role: "Master’s Student, Cornell Tech",
    topic: "The Future of AI",
    theme: "Armor",
    linkedinUrl: "https://www.linkedin.com/in/jiayu-xu-465354229/",
    talkUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=0JYLC5SFNHU",
    videoUrlEmbed: "https://www.youtube.com/embed/0JYLC5SFNHU",
    description: ""
  }
];



  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    company_name: "",
    email_address: "",
    linkedin_url: "",
    event_sheet: "Pale Blue Dot - August 2025",
    event_title: "Pale Blue Dot: Gen AI Research and Development",
    event_date: "8/4 - 8/8",
    event_time: "5 PM EST to 8 PM EST",
    event_dateTimeStart: "2025-08-04T17:00:00-04:00",
    event_dateTimeEnd: "2025-08-08T20:00:00-04:00",
    event_location: "Virtual"
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const scriptURL = "https://script.google.com/macros/s/AKfycbyWCk3hKiv0tAAIzapFi2mQ-wAtGFblIX-Bew5OxeSMyGQjVw3YPPsLR_AQaMCr1zawKw/exec"; // Replace with your Web App URL
  // const scriptURL = "https://script.google.com/macros/s/AKfycbyIlSXrM57J4VdUyHd1iAeGbfzGqFVyTvMmxzW-PcXI1l85pBSsQ7fe_2_b5eDCR9qhIw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmissionStatus("Success! Your registration was submitted.");
      setFormData((prev) => ({
        ...prev,
        first_name: "",
        last_name: "",
        job_title: "",
        company_name: "",
        email_address: "",
        linkedin_url: ""
      }));
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionStatus("Failed to submit. Please check your connection.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div>
      <div className="w-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="w-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Anote's Pale Blue Dot Launch Livestream
          </h1>

          {/* Mobile: 16:9, Desktop: ~21:9 */}
          <div className="w-full rounded-xl overflow-hidden aspect-video md:aspect-[21/9] md:px-[10%]">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/BXWrLQRiGzI?autoplay=1&mute=1&controls=1&modestbranding=1"
              title="Anote - Pale Blue Dot Launch"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>



        </div>
        {/* <div className="registration-container bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-4 mb-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Pale Blue Dot Registration</h2>
          <p className="text-sm text-gray-400 mb-6 text-center">
            Join our waitlist for the Pale Blue Dot, Gen AI Research and Development Launch in August, 2025.<br></br>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Job Title</label>
              <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Company Name</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
                                    <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
                        <div>
              <label className="block text-sm mb-1">LinkedIn URL</label>
              <input
                type="url"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <input type="hidden" name="event_sheet" value={formData.event_sheet} />
            <input type="hidden" name="event_title" value={formData.event_title} />
            <input type="hidden" name="event_date" value={formData.event_date} />
            <input type="hidden" name="event_time" value={formData.event_time} />
            <input type="hidden" name="event_dateTimeStart" value={formData.event_dateTimeStart} />
            <input type="hidden" name="event_dateTimeEnd" value={formData.event_dateTimeEnd} />
            <input type="hidden" name="event_location" value={formData.event_location} />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-[#28b8fb] text-white font-bold py-2 px-4 rounded-md focus:ring-4 focus:ring-blue-300"
            >
              Register Now
            </button>
          </form>
          {submissionStatus && (
            <p className="mt-4 text-center text-sm">{submissionStatus}</p>
          )}
          <p className="text-center mt-4 text-sm">
            Email{" "}
            <a href="mailto:nvidra@anote.ai" className="text-blue-400 underline">
              nvidra@anote.ai
            </a>{" "}
            for questions.
          </p>
        </div>
      </div> */}

      {/* <div className="w-screen bg-gray-900 mb-20">
        <div className="pt-10">
          <div className="text-white justify-center flex flex-col text-center pt-10">
            <div className="text-xl sm:text-2xl lg:text-4xl font-medium lg:font-bold font-['Helvetica_Neue']">
              Pale Blue Dot Agenda
            </div>
          </div>
          <div className="agenda-container md:mx-20">
            <table className="agenda-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Talk Topic</th>
                </tr>
              </thead>
              <tbody>
                {agendaItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <a href={item.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    </td>
                    <td>{item.role}</td>
                    <td>{item.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
      {/* <div className="FAQ flex flex-wrap">
                  <div className={"LP-Sample-Projects bg-gray-900 mx-[6%] "}>
                    {agendaItems.map((item, index) => (
                      <div key={index}>
                        <h1 className="TutorialHeader mb-3 bg-gray-900">
                          Talk {index + 1} - {item.topic}
                        </h1>
                        <div className="LP-Contact">
                          <AIDayVideoNew
                            title={item.name}
                            description={item.description}
                            capability={item.role}
                            sector={item.topic} // You can customize this if needed
                            type={item.role}
                            videoUrl={item.videoUrlEmbed}
                            slideUrl={item.videoUrl}
                            linkedinUrl={item.linkedinUrl}
                            company={item.company}
                          />
                          <hr className="Green-Line-New" style={{ width: "100%" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  </div> */}

                        <section id="launches" className="mx-auto max-w-7xl px-6 py-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center">Launch Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 pt-4">
          {launchItems.map((item, index) => (
            <div
              key={`launch-${index}`}
              className="group rounded-2xl bg-[#0B1220] border border-white/5 overflow-hidden hover:border-white/15 transition shadow-lg"
            >
                              {/* <h4 className="font-semibold leading-snug text-white text-center">{item.name}</h4> */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={item.videoUrlEmbed}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
                {/* <p className="mt-2 text-sm text-white/70 line-clamp-3">{item.description}</p> */}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {agendaItems.map((item, index) => (
            <div
              key={`launch-${index}`}
              className="group rounded-2xl bg-[#0B1220] border border-white/5 overflow-hidden hover:border-white/15 transition shadow-lg"
            >
                              {/* <h4 className="font-semibold leading-snug text-white text-center">{item.name}</h4> */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={item.videoUrlEmbed}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  preload="auto"
                  loading="lazy"
                />
              </div>
                {/* <p className="mt-2 text-sm text-white/70 line-clamp-3">{item.description}</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PaleBlueDot;

// DEPLOYMENTID: AKfycbyhU3jp5U_Y-LcANmdfMt9sowDjBeX14z-S7AYJRahjX2RB5KFn1AlNV7H_FOJoEALr