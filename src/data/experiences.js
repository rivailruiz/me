export const experiences = {
  sectionTitle: 'Experience',
  icon: null,
  description: null,
  list: [
    {
      title: 'CTO',
      company: 'FashionAI',
      description: [
        '<ul>',
        '<li>Owned the architecture and delivery of an AI-powered SaaS platform, spanning product systems, backend services, and infrastructure.</li>',
        '<li>Designed and implemented production RAG pipelines: ingestion → preprocessing → embeddings → retrieval → inference, using Qdrant as the vector store.</li>',
        '<li>Built and operated cloud-native microservices in Node.js and Python (FastAPI), containerized with Docker and deployed on Kubernetes (GKE/EKS).</li>',
        '<li>Established CI/CD and infrastructure automation to support reliable releases and scalable deployment of AI services.</li>',
        '</ul>'
      ].join(''),
      companyLink: 'https://generativecrm.com',
      date: '2024 - Present'
    },
    {
      title: 'Software Engineer, AI (Contract)',
      company: 'F2IT',
      description: [
        '<ul>',
        '<li>Designed and implemented a full RAG architecture using LlamaIndex, including document ingestion, vector indexing (Qdrant), and scalable query engines.</li>',
        '<li>Built a multi-provider LLM orchestration layer supporting OpenAI, Anthropic, and self-hosted vLLM models with per-bot configuration, dynamic prompts, telemetry, and fallback strategies.</li>',
        '<li>Architected an asynchronous WhatsApp → agent → LLM pipeline with ReAct-style tool execution and persistent memory backed by PostgreSQL.</li>',
        '<li>Resolved embedding compatibility and migration issues across models by validating dimensionality and managing vector collection changes.</li>',
        '</ul>'
      ].join(''),
      companyLink: 'https://f2it.com.br',
      date: '2023 - 2024'
    },
    {
      title: 'Full Stack Engineer',
      company: 'Prefeitura do Rio de Janeiro',
      description: [
        '<ul>',
        '<li>Built and evolved backend services in Node.js (NestJS), with a focus on reliability, scalability, and maintainable APIs.</li>',
        '<li>Collaborated on cloud-native delivery using Kubernetes and Google Cloud, supporting repeatable deployments and operational stability.</li>',
        '<li>Delivered React frontends and state management patterns to improve usability and ship product features end-to-end.</li>',
        '<li>Owned PostgreSQL data modeling and performance considerations in production workloads.</li>',
        '<li>Mentored junior developers through code reviews, system design discussions, and execution support.</li>',
        '</ul>'
      ].join(''),
      companyLink: 'https://prefeitura.rio',
      date: '2023 - 2024'
    },
    {
      title: 'Full Stack Developer',
      company: 'Grupo Soma',
      description: [
        '<ul>',
        '<li>Contributed to migrating a monolithic system to a microservices architecture, improving scalability and operational flexibility.</li>',
        '<li>Built backend services with Node.js (NestJS), Redis, Terraform, Google Cloud, and MySQL, balancing delivery speed with long-term maintainability.</li>',
        '<li>Delivered React features for an e-commerce platform, collaborating across backend and frontend to ship product changes.</li>',
        '</ul>'
      ].join(''),
      companyLink: 'https://www.somagrupo.com.br',
      date: '2022 - 2023'
    },
    {
      title: 'Full Stack Developer',
      company: 'Picoworkers',
      description: [
        '<ul>',
        '<li>Built and maintained core backend features in PHP and MySQL for a high-traffic marketplace product.</li>',
        '<li>Delivered new features and improvements with attention to reliability, correctness, and maintainability.</li>',
        '</ul>'
      ].join(''),
      companyLink: 'https://www.picoworkers.com/',
      date: '2019 - 2022'
    }
  ]
};

export default experiences;
