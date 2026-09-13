

export const profile = {
  name: "Nihal Aftab Patel",
  title: "Data Scientist / AI Engineer",
  location: "Dubai, United Arab Emirates",
  email: "nihal1999patel@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nihal-aftab-patel/" },
    { label: "GitHub", href: "https://github.com/nihalpatel99" },
  ],
};

export const summary =
  "At Simulation Software Limited, I contribute to data-driven solutions as a Data Scientist, leveraging my expertise in Python, automation, and data analysis. My technical acumen was honed through academic and professional experiences, including developing innovative solutions to optimize workflows and reduce manual efforts." +
  "Holder of MSc. in Data Science degree at Heriot-Watt University, I gained advanced knowledge in data science methodologies. My prior experience at Emerson allowed me to streamline logistics and procurement workflows using tools like Power Automate and Power BI, saving significant manual effort. I aim to continue delivering impactful solutions that enhance efficiency and drive innovation.";

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI & LLM Engineering",
    items: ["Large Language Models", "Agentic AI", "RAG Pipelines", "AI Agents", "Agentic AI", "Tool Calling", "Generative AI, Prompt Engineering"],
  },
  {
    category: "Frameworks & Tools",
    items: ["LangChain", "LangGraph", "Autogen", "Claude Code", "Qwen", "Gemma", "OpenAI", "MCP", "Streamlit", "Jupyter Notebook"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "PyTorch", "Statistical Modelling", "Model Deployment", "Model Evaluation", "TinyVGG", "MLflow", "MLOps", "Azure ML", "Azure Workspace", "Azure Compute Instance"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "REST API", "SQL", "Qdrant", "Pinecone", "ChromaDB", "SerpApi"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Git/GitHub", "Microsoft Azure", "Azure OpenAI", "Microsoft Foundry", "Azure Blob Storage", "CI/CD", "GitHub Actions"],
  },
   {
    category: "Reporting & BI",
    items: ["Power BI", "Databricks","DAX", "Power Query", "Excel", "Power BI Service", "Dashboard", "KPI Reporting", "Business Intelligence"],
  },
  {
    category: "Data Analytics",
    items: ["Excel", "PySpark", "Pandas", "NumPy", "Matplotlib", "A/B Testing", "Exploratory Data Analysis", "Data Visualization", "Data Transformation", "Data Cleaning"]
  },
  {
    category: "Process Automation",
    items: ["ETL Processes", "Data Validation", "Process Automation"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "TimescaleDB", "Oracle", "MS SQL Server"]
  }
];

export const experience: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Data Scientist",
    company: "Simulation Software Limited",
    period: "Oct 2025 — Present",
    bullets: [
      "Designed, built, and deployed a production Agentic AI RAG system which includes query routing, sub-question decomposition, cross-encoder ranking and gated reflection as features reducing manual documentation lookup time by 84%.",
      "Directed AI coding agents (Claude Code) to accelerate development, owning architecture, code quality and maintainability across the project.",
       "Built and deployed a production XGBoost model for time series anomaly detection from feature engineering to deployment, improving detection accuracy by 80% and 20% reduction in false positives.",
       "Debugged and resolved issues across application, model and infrastructure layers including LLM backend and hardware compatibility for production quality.",
       "Inegrated AI capabilities into backend services using FastAPI and Qdrant, ensuring reliable, production-grade AI workflows."
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Emerson FZE",
    period: "Aug 2024 — Jul 2025",
    bullets: [
      "Built and automated Power BI KPI dashboards using DAX and Power Query, saving 400+ hours annually.",
      "Built a Python automation tool using Tkinter and Regex to extract and structure data from unstructured PDFs by cutting processing time by 90%.",
       "Ran A/B tests on reporting layouts, applying data-driven decisions that improved engagement by 60%.",
       "Ensured data integrity by validating invoice and payment records, resolving 10+ discrepancies per month in coordination with finance and procurement teams."
    ],
  },
  {
    role: "SWE Intern",
    company: "IO21",
    period: "Oct 2021 — Dec 2021",
    bullets: [
      "Collaborated with 6-person cross-functional team using Agile/Scrum improving stakeholder UX outcomes by 50%."
    ],
  }
];

export const projects: {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}[] = [
  {
    name: "MCP Flight-Map Server",
    description: "Commissioned 2 MCP servers on flight availability and street map queries with SerpApi on Claude Cowork Desktop.\n" +
 "Responses were generated with list of flights and map from airport to destination and vice versa, reducing manual hours by 1 hour per day.",
    tech: ["MCP", "SerpApi", "Claude Desktop"],
    link: "https://github.com/nihalpatel99/mcp-flight-map",
  },
  {
    name: "Aircraft Maintenance Assistant on Azure AI Foundry",
    description: " Deployed Azure OpenAI gpt-5-mini model via Azure Endpoint for aircraft diagnosis and repair report generation on Azure Resource Group.\n" +
 "Integrated with Streamlit UI for flight maintenance team reducing manual checking by 30 hours per week.",
    tech: ["Azure OpenAI", "Microsoft Foundry", "Streamlit"],
    link: "https://github.com/nihalpatel99/aircraft-maintenance-assistant",
  },
  {
    name: "CardiologyRAG",
    description: "Designed and deployed an end-to-end AI software cardiology assistant with FastAPI, Python and C# WinForms desktop client, achieving 2 seconds response latency via LangGraph and Groq’s low-latency inference API.\n" +
 "Integrated a multi-tool ReAct loop across 3 live knowledge sources (PubMed, Tavily, Wikipedia) reducing manual medical literature lookup time by 70%.",
    tech: ["FastAPI", "Python", "Windows C# Form", "LangGraph", "Groq", "ReAct", "Tavily Search"],
    link: "https://github.com/nihalpatel99/langgraph-rag-cardioilogy",
  },

  {
    name: "UAEVisaBot",
    description: "Built an Agentic RAG chatbot using LangChain, GPT-4o and ChromaDB vector store (500+ indexed chunks) to deliver grounded, hallucination-reduced UAE visa answers with real-time streaming.\n" +
 "Engineered a dual-model embedding pipeline with Ollama and OpenAI, maintaining semantic retrieval accuracy across 150+ government document pages.",
    tech: ["LangChain", "GPT-4o", "RAG", "ChromaDB", "Ollama", "OpenAI"],
    link: "https://github.com/nihalpatel99/uae-visa-rag-langchain-v1",
  },

  {
    name: "Legacy Flight Planner",
    description: "Architected AI agent web application with Microsoft AutoGen multi-agent orchestration framework of 4 autonomous agents (flight search, visa verification, cost planning, proxy orchestration) to resolve complex travel queries in a single end-to-end pipeline reducing manual research time by an estimated 70% per query.\n" +
 "Integrated Tavily web search into a GPT-4o powered agent workflow, enabling live discovery of vintage aircraft routes across 7 continents with response accuracy by grounding answers in up-to-date web results streamed directly to Streamlit user interface (UI).",
    tech: ["Microsoft Autogen", "AI Agents", "Agentic AI", "Tavily Search", "OpenAI", "GPT-4o", "Streamlit"],
    link: "https://github.com/nihalpatel99/legacy-flight-autogen",
  },

    {
    name: "PyTorch Road Quality Classification",
    description: "Built an end-to-end road surface quality classifier in PyTorch (TinyVGG CNN) trained on 5,000+ labeled images across 6 quality classes, with a full data pipeline (transforms, augmentation, ImageFolder datasets) in Jupyter.\n" +
 "Instrumented model evaluation with MLflow experiment tracking — logging per-image predictions, confidence metrics, and result tables — for reproducible testing across model versions.\n"  +
 "Shipped an interactive Streamlit app enabling non-technical users to upload a road image and get real-time quality predictions with per-class confidence scores..\n",
    tech: ["PyTorch", "CNN", "TinyVGG", "Streamlit", "MLflow"],
    link: "https://github.com/nihalpatel99/road-quality-classify",
  },

     {
    name: "ADNOC Stock Analysis — Databricks Project",
    description: "Engineered SQL and Pyspark\n" +
 "to clean and transform multi year ADNOC stoc dataset for financial reporting.\n"  +
 "Conducted time series analysis and revealed 2021 as best performance year driven by 47% in trading volume and a single day spike of 36% on January 4, 2021. Return volality for ramadan was 10% less than regular periods.\n" +
 "Modeled ramadan vs. regular periods volatility patterns that uncovered 10% reduction in price fluctuation during ramadan compared to trading periods.\n",
    tech: ["PySpark", "SQL", "Databricks"],
    link: "https://github.com/nihalpatel99/adnoc-stock-analysis",
  },

     {
    name: "IKEA Product Sales Analysis with Azure ML",
    description: "Built RandomForest classifier preidcting \n" +
 "IKEA product sellable on over 400K products, achieving 92% accuracy and 0.96 F1-score.\n"  +
 "Tracked 100+ estimator experiments with MLflow and resolved an Azure ML /logged-models incompatibility via local logging workaround gaining hands on experience on Azure ML.\n" +
 "Shipped streamlit UI with 6 user inputs, delivering real time predictions with confidence scores.\n",
    tech: ["Azure ML", "Azure Workspace", "Jupyter Notebook", "Azure Compute Instance", "Streamlit", "MLOps", "MLflow"],
    link: "https://github.com/nihalpatel99/ikea-analysis",
  },

  


  {
    name: "Other Projects",
    description: "Other Projects",
    tech: ["Other"],
    link: "https://github.com/nihalpatel99/portfolio/tree/main",
  },
];

export const education: {
  school: string;
  degree: string;
  period: string;
}[] = [
  {
    school: "Heriot Watt University Dubai Campus",
    degree: "MSc. Data Science",
    period: "2022 — 2024",
  },
  {
    school: "Manipal Academy of Higher Education Dubai Campus",
    degree: "BTech in Computer Science and Engineering",
    period: "2019 - 2024",
  }
];

export const certifications: {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}[] = [
  {
    name: "Academy Accreditation - AI Agent Fundamentals",
    issuer: "Databricks",
    date: "Sep 2026",
    link: "https://credentials.databricks.com/9c702d70-65cb-4b53-a120-07e4d1bbbc72#acc.SPVNQwyH",
  },
  {
    name: "Certificate of completion: Claude Platform 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    link: "https://verify.skilljar.com/c/g5m8i478zphs",
  },
  {
    name: "Certificate of completion: Claude code 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    link: "https://verify.skilljar.com/c/5vkwks35km79",
  },
  {
    name: "Certificate of completion: Claude 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    link: "https://verify.skilljar.com/c/86qknnvb6pqj",
  },
  {
    name: "LangChain- Develop LLM powered applications with LangChain",
    issuer: "Udemy",
    date: "Jul 2024",
    link: "https://www.udemy.com/certificate/UC-598fc781-86b5-4fea-b391-374baaa447f7/",
  },
  {
    name: "Tata Group - Data Visualisation: Empowering Business Job Simulation",
    issuer: "Forage",
    date: "Jun 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_HYc6bNYubzpFJ9fKX_1717414928455_completion_certificate.pdf",
  },
  {
    name: "British Airways - Data Science Job Simulation",
    issuer: "Forage",
    date: "Jun 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_HYc6bNYubzpFJ9fKX_1717326095732_completion_certificate.pdf",
  },
  {
    name: "Cognizant - Artificial Intelligence Job Simulation",
    issuer: "Forage",
    date: "May 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_HYc6bNYubzpFJ9fKX_1716970420185_completion_certificate.pdf",
  },
  {
    name: "PwC Switzerland - Power BI Job Simulation",
    issuer: "Forage",
    date: "May 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_HYc6bNYubzpFJ9fKX_1716834530521_completion_certificate.pdf",
  },
  {
    name: "BCG - GenAI Job Simulation",
    issuer: "Forage",
    date: "May 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_HYc6bNYubzpFJ9fKX_1716633669975_completion_certificate.pdf",
  },
  {
    name: "Accenture North America - Data Analytics and Visualization Job Simulation",
    issuer: "Forage",
    date: "May 2024",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_HYc6bNYubzpFJ9fKX_1716561157864_completion_certificate.pdf",
  },
];
