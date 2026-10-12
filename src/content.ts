export const profile = {
  linkedin: 'https://www.linkedin.com/in/yilin-elsa-wang-4264ab192/',
  github: 'https://github.com/ElsaYilinWang',
  project: 'https://github.com/ElsaYilinWang/rfq_ai_project',
  cv: `${import.meta.env.BASE_URL}YilinWang_AI_1012.pdf`,
};
export const capabilities = [
  { name: 'Build', description: 'A solid foundation before the model.', items: ['Python', 'FastAPI', 'SQL / SQLAlchemy', 'REST APIs', 'Docker'] },
  { name: 'Applied AI', description: 'Reasoning where the rules run out.', items: ['Structured LLM outputs', 'Tool-calling agents', 'LangGraph', 'Semantic search', 'Document extraction'] },
  { name: 'Reliability', description: 'Make every decision reviewable.', items: ['Human-in-the-loop workflows', 'Evaluation harnesses', 'pytest / CI/CD', 'Tracing and observability'] },
  { name: 'Enterprise', description: 'Stay close to the actual problem.', items: ['Technical troubleshooting', 'Root-cause analysis', 'Workflow design', 'SaaS support', 'Cross-functional communication'] },
];
export const experience = [
  { company: 'DECI Limited', role: 'Procurement Engineer', date: 'Jun 2025 — Jun 2026', location: 'Limerick, Ireland', text: 'Owned end-to-end industrial sourcing workflows across multiple client accounts. Recurring problems around incomplete information, supplier discovery and technical review became the starting requirements for the RFQ AI Workflow.', evidence: ['8 client accounts', '~200 RFQs / month', '20+ new suppliers'], tools: 'SAP Ariba · Excel · SharePoint · Industrial procurement' },
  { company: 'Kaleris / Navis', role: 'Associate Support Engineer', date: 'Feb 2021 — May 2023', location: 'United States', text: 'Provided customer-facing Tier-2 support for enterprise container terminal operating systems. Investigated issues, verified data with SQL, reproduced defects and coordinated resolution across development, QA, product and regional support.', evidence: ['45+ cases / month', '<10% escalation rate'], tools: 'SQL · Jira · Salesforce · Troubleshooting · Root-cause analysis' },
];
export const education = [
  { school: 'University of Limerick', degree: 'MSc Software Development: International Systems', detail: 'First Class Honours', date: '2023 — 2025' },
  { school: 'University of California, Berkeley', degree: 'MEng Industrial Engineering & Operations Research', detail: 'United States', date: '2019 — 2020' },
  { school: 'Wuhan University', degree: 'BSc Logistics Management', detail: 'China', date: '2015 — 2019' },
];
