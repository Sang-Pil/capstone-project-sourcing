
// Define an array of placeholder project data
const placeholderProjects = [
    {
        title: "AI-Powered Sales Forecasting Tool",
        sponsor: "Innovate Inc.",
        description: "Develop a machine learning model to predict future sales trends based on historical data, market indicators, and economic factors.",
        keywords: ["Machine Learning", "Predictive Analytics", "Sales"],
    },
    {
        title: "Customer Churn Prediction System",
        sponsor: "Connectify",
        description: "Build a system to identify customers at risk of churning using behavioral data and sentiment analysis. The model will help in proactive customer retention.",
        keywords: ["Data Science", "NLP", "Customer Retention"],
    },
    {
        title: "Automated Document Summarization",
        sponsor: "LegalEase",
        description: "Create a tool that uses natural language processing to summarize long legal documents, saving time for legal professionals.",
        keywords: ["NLP", "Text Summarization", "Automation"],
    },
    {
        title: "Smart Inventory Management",
        sponsor: "SupplyChain Solutions",
        description: "Design an AI-driven inventory system that optimizes stock levels, predicts demand, and automates reordering processes.",
        keywords: ["AI", "Optimization", "Supply Chain"],
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
