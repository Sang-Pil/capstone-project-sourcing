
// Define an array of placeholder project data
const placeholderProjects = [
    {
        title: "Designing Agentic AI Workflows for Human-Centered Childcare Operations",
        sponsor: "Various Sponsors (Childcare Network)",
        description: "Designing Agentic AI Workflows for Human-Centered Childcare Operations.",
        keywords: ["Process mapping", "agentic AI design", "workflow automation", "prompt engineering", "stakeholder communication for AI implementation"],
    },
    {
        title: "Designing Intelligent Audit and Supplier Evaluation Agents for Inventory Management Solutions",
        sponsor: "Various Sponsors (Business Consulting)",
        description: "Designing Intelligent Audit and Supplier Evaluation Agents for Inventory Management Solutions.",
        keywords: ["Machine learning model development", "natural-language processing for audit data", "agentic AI workflow design", "process automation", "prompt engineering for business applications"],
    },
    {
        title: "AI Framework for Legal Document Automation",
        sponsor: "Various Sponsors (Justice/Technology System)",
        description: "Proposal 1. AI Framework for Legal Document Automation.",
        keywords: ["AI workflow design", "natural language processing (NLP) and document intelligence", "data governance and ethical AI practices", "business process mapping and improvement", "stakeholder and change management", "AI strategy and implementation planning"],
    },
    {
        title: "OCR for court forms",
        sponsor: "Various Sponsors (Justice/Technology System)",
        description: "Proposal 2. OCR for court forms (Video: https://www.youtube.com/watch?v=993egZITt1I).",
        keywords: ["Data preprocessing and wrangling", "text analytics and NLP fundamentals", "model evaluation and performance metrics for OCR", "process automation analytics", "business insight communication and visualization"],
    },
    {
        title: "Designing AI-Driven Athlete–Brand Matching and Content Personalization Systems for the NIL Ecosystem",
        sponsor: "Various Sponsors (Design and Analysis)",
        description: "Designing AI-Driven Athlete–Brand Matching and Content Personalization Systems for the NIL Ecosystem.",
        keywords: ["Natural language processing", "recommender systems", "AI workflow automation", "prompt engineering", "cloud platform deployment (AWS, Azure, or IBM)"],
    },
    {
        title: "AI-driven R&O Causal Modeling: Causal Reasoning and Counterfactual Forecasting with Generative AI in Industrial Operations",
        sponsor: "Various Sponsors (Industrial Tech.)",
        description: "AI-driven R&O Causal Modeling: Causal Reasoning and Counterfactual Forecasting with Generative AI in Industrial Operations.",
        keywords: ["Causal inference modeling", "generative AI (LLMs, diffusion models)", "prompt engineering", "Python (DoWhy, LangChain, PyTorch)", "synthetic data generation", "explainable AI and visualization for industrial applications"],
    },
    {
        title: "Generative AI System for Automated Repair Disposition Reports",
        sponsor: "Various Sponsors (Industrial Tech.)",
        description: "Generative AI System for Automated Repair Disposition Reports.",
        keywords: ["Prompt engineering", "fine-tuning LLMs (OpenAI, Gemini, or Claude)", "text summarization (Video on related OCR concepts: https://www.youtube.com/watch?v=993egZITt1I)", "Python/NLP (LangChain, Hugging Face)", "domain adaptation for technical documentation with AI"],
    },
    {
        title: "Multi-Agent AI System for Supply Chain Quality Monitoring",
        sponsor: "Various Sponsors (Industrial Tech.)",
        description: "Multi-Agent AI System for Supply Chain Quality Monitoring.",
        keywords: ["Agentic AI workflow design", "prompt engineering", "computer vision modeling", "NLP (text summarization and anomaly explanation)", "orchestration frameworks (LangChain, OpenDevin, or CrewAI)", "MLOps integration for supply chain AI"],
    },
    {
        title: "Optimizing Fee Schedule Contracts via ML/AI",
        sponsor: "Various Sponsors (Dental Concern)",
        description: "Optimizing Fee Schedule Contracts via ML/AI.",
        keywords: ["Machine learning and predictive modeling", "data engineering and integration", "statistical and financial analysis", "healthcare reimbursement domain knowledge", "pricing and revenue optimization", "AI framework design", "ability to translate analytical insights into strategic payor-negotiation recommendations"],
    },
    {
        title: "Internal Programmatic LLM Documentation Support Copilot/GPT Build",
        sponsor: "Various Sponsors (Higher Ed Impl.)",
        description: "Internal Programmatic LLM Documentation Support Copilot/GPT Build.",
        keywords: ["Prompt engineering", "LLM application design (OpenAI/Gemini/Claude)", "AI workflow automation", "Python programming", "user interface prototyping for AI tools"],
    },
    {
        title: "Multi-Language NLP Models for OSINT",
        sponsor: "Various Sponsors (AI-driven OSINT)",
        description: "Multi-Language NLP Models for OSINT.",
        keywords: ["NER modeling and evaluation", "sequence labeling (spaCy, BERT-based)", "knowledge graph design", "Elasticsearch/NoSQL integration", "agentic AI workflow automation for intelligence platforms"],
    },
    {
        title: "Growth Engineering: Agentic AI Outreach & Lead-Cluster Segmentation",
        sponsor: "Various Sponsors (Email Marketing)",
        description: "Growth Engineering: Agentic AI Outreach & Lead-Cluster Segmentation.",
        keywords: ["Agentic AI workflow design", "automation architecture", "unstructured data analytics", "vector databases and embeddings", "clustering and unsupervised learning", "prompt and context engineering", "data preprocessing and SQL", "CRM and GTM integration", "web scraping automation", "ML experimentation", "process mapping", "UX prototyping", "stakeholder communication"],
    },
    {
        title: "Longitudinal NLP/LLM-Driven Analysis of Pancreatic Cancer Incidence in IPMN Patients on MR: AI/NLP System Design and Automation",
        sponsor: "Various Sponsors (Health Care)",
        description: "Longitudinal NLP/LLM-Driven Analysis of Pancreatic Cancer Incidence in IPMN Patients on MR: AI/NLP System Design and Automation.",
        keywords: ["Natural language processing (NLP) and large language models (LLMs)", "prompt engineering and fine-tuning", "data preprocessing and annotation for unstructured text", "AI model evaluation and performance metrics", "ethical and compliant AI data handling in healthcare"],
    },
    {
        title: "AI-Assisted Bids & Proposals Copilot for Federal Contracting: Opportunity Identification and Bids & Proposals",
        sponsor: "Various Sponsors (Federal Contracting)",
        description: "AI-Assisted Bids & Proposals Copilot for Federal Contracting: Opportunity Identification and Bids & Proposals.",
        keywords: ["Agentic AI workflow design", "LLM orchestration", "model integration", "explainable AI", "AI ethics and risk management for federal applications"],
    },
    {
        title: "Ethical and Explainable AI Use-Cases for Workforce Augmentation in Federal Contracting: Supporting “safe and ethical workforce AI-literacy”",
        sponsor: "Various Sponsors (Federal Contracting)",
        description: "Ethical and Explainable AI Use-Cases for Workforce Augmentation in Federal Contracting: Supporting “safe and ethical workforce AI-literacy”.",
        keywords: ["Responsible AI design", "LLM integration", "explainable AI", "prompt engineering", "governance and risk modeling", "AI ethics framework development for federal workforce"],
    },
    {
        title: "AI Innovation Copilot for Marketing and Operations",
        sponsor: "Various Sponsors (Digital Marketing)",
        description: "AI Innovation Copilot for Marketing and Operations.",
        keywords: ["Prompt engineering", "LLM application design (OpenAI/Anthropic APIs)", "workflow automation", "Python (LangChain, pandas, scikit-learn)", "AI evaluation and deployment strategy for marketing"],
    },
    {
        title: "Identifying High-Impact Copilot Use Cases to Support Grantmaking Operations",
        sponsor: "Various Sponsors (Foundation)",
        description: "Identifying High-Impact Copilot Use Cases to Support Grantmaking Operations. Analysis Problem: How can Copilot and related AI tools be used effectively to reduce administrative burden, improve communication efficiency, and support program and grantmaking teams in their day-to-day work?",
        keywords: ["Analysis Problem", "Copilot and related AI tools", "administrative burden reduction", "communication efficiency improvement", "program and grantmaking team support"],
    },
    {
        title: "Agentic AI Insights Platform",
        sponsor: "Various Sponsors (Software Dev.)",
        description: "Agentic AI Insights Platform.",
        keywords: ["Agentic AI workflow design", "multi-agent system architecture", "RAG pipeline development", "vector databases and embeddings", "enterprise data integration", "secure API orchestration", "natural-language insights generation", "dashboarding and KPI analytics", "HR/ATS recommender modeling", "role-based access and AI governance", "process mapping and stakeholder communication"],
    },
    {
        title: "Exploring AI-Enhanced Workforce Development: Unifying Virtual Reality Learning Data to Correlate Training Performance with Job Outcomes",
        sponsor: "Various Sponsors (Education/Training)",
        description: "Exploring AI-Enhanced Workforce Development: Unifying Virtual Reality Learning Data to Correlate Training Performance with Job Outcomes.",
        keywords: ["AI and data analytics with adaptive learning design", "XR systems and multi-agent framework development", "business strategy and workflow codification", "ethical and transparent human-AI interaction design", "data visualization communication and project management"],
    },
    {
        title: "AI-driven Personalization and Recommender Systems for Health Insights",
        sponsor: "Various Sponsors (Health Care)",
        description: "AI-driven Personalization and Recommender Systems for Health Insights.",
        keywords: ["AI-driven personalization and recommender systems", "sentiment and emotion analysis (NLP)", "predictive behavioral analytics", "adaptive learning and gamification design", "ethical and human-centered AI design for health applications"],
    },
    {
        title: "Predictive Analytics System for Smart City Operations",
        sponsor: "Various Sponsors (Public Sector)",
        description: "Predictive Analytics System for Smart City Operations.",
        keywords: ["Descriptive and predictive analytics", "geospatial analysis and GIS integration", "time-series modeling and early-warning detection", "clustering and related-request pattern mining", "data preprocessing and integration across city systems", "dashboarding and visualization for operational insights", "machine-learning model evaluation", "resource-prioritization analytics", "stakeholder communication"],
    },
];

// Web Component for Project Cards
class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const sponsor = this.getAttribute('sponsor');
        const description = this.getAttribute('description');
        const keywords = this.getAttribute('keywords').split(',');

        this.shadowRoot.innerHTML = `
            <style>
                .project-card {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                    padding: 1.5rem;
                    transition: transform 0.3s, box-shadow 0.3s;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 28px rgba(0,0,0,0.15);
                }
                h3 {
                    font-family: var(--font-heading);
                    color: var(--asu-maroon);
                    margin-top: 0;
                    font-size: 1.4rem;
                }
                p {
                    font-size: 1rem;
                    flex-grow: 1;
                }
                .sponsor {
                    font-weight: bold;
                    color: var(--text-dark);
                    margin-bottom: 1rem;
                }
                .keywords {
                    margin-top: 1rem;
                }
                .keyword {
                    display: inline-block;
                    background-color: var(--asu-gold);
                    color: var(--text-dark);
                    padding: 0.3rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.8rem;
                    margin-right: 0.5rem;
                    margin-bottom: 0.5rem;
                }
            </style>
            <div class="project-card">
                <h3>${title}</h3>
                <p class="sponsor">Sponsored by: ${sponsor}</p>
                <p>${description}</p>
                <div class="keywords">
                    ${keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);

// Populate project listings when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('project-grid');

    placeholderProjects.forEach(project => {
        // Create and append project card
        const projectCard = document.createElement('project-card');
        projectCard.setAttribute('title', project.title);
        projectCard.setAttribute('sponsor', project.sponsor);
        projectCard.setAttribute('description', project.description);
        projectCard.setAttribute('keywords', project.keywords.join(','));
        projectGrid.appendChild(projectCard);
    });
});
