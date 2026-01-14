export const experiences = {
  sectionTitle: '',
  icon: null,
  description: null,
  list: [
    {
      title: 'Full Stack Developer',
      company: 'Picoworkers',
      description: 'In my role as a Full Stack Developer, I primarily worked with PHP and MySQL on the backend. I actively contributed to the development of new features and maintenance of existing ones.',
      companyLink: 'https://www.picoworkers.com/',
      date: '2019 - 2022'
    },
    {
      title: 'Full Stack Developer',
      company: 'Grupo Soma',
      description: ' I worked as a Full Stack Developer at Grupo Soma, where I specialized in utilizing Node.js, Nest.js, Redis, Terraform, Google Cloud, and MySQL. During my tenure, I primarily focused on successfully migrating a monolithic application to a microservices architecture resulting in improved scalability, performance and leading to a significant reduction in infrastructure costs. However, I also had the opportunity to contribute to the frontend development using React, specifically for an ecommerce platform. While my main expertise lies in the backend, I successfully utilized React to build and implement various features, enhancing the platform\'s user interface and overall functionality. ',
      companyLink: 'https://www.somagrupo.com.br',
      date: '2022 - 2023'
    },
    {
      title: 'Full Stack Developer',
      company: 'Prefeitura do Rio de Janeiro',
      description: "In my role as a Full Stack Engineer at the Prefeitura do Rio de Janeiro, I'm deeply involved in crafting and refining advanced tech solutions. My day-to-day revolves around a diverse set of responsibilities, all aimed at ensuring our software meets the highest standards. <br> At the heart of my work lies the backend development using Node.js and the NestJS framework. It's here that I lay the foundation for our applications, ensuring they're not just functional but also scalable and reliable. Working hand-in-hand with our DevOps team, I dive into Kubernetes and Google Cloud Platform, ensuring our deployments are seamless and efficient. <br><br> On the frontend, I'm passionate about crafting intuitive user experiences with React. Whether it's utilizing Redux for state management or diving into React Hooks for added functionality, I'm always looking for ways to elevate our interfaces. <br> <br>Database management is another key aspect of my role, with PostgreSQL being our tool of choice. Ensuring data integrity and performance is crucial, and I take great care in maintaining our databases. <br> But perhaps the most rewarding part of my job is mentoring our junior developers. Being able to share my knowledge and watch them grow not only as developers but as individuals is truly fulfilling.",
      companyLink: 'https://prefeitura.rio',
      date: '2023 - 2024'
    },
    {
      title: 'Software Engineer AI (temporary contract)',
      company: 'F2IT',
      description: 'Designed and implemented a full Retrieval-Augmented Generation (RAG) architecture using LlamaIndex, including document ingestion, vector indexing with Qdrant, and asynchronous query engines for scalable semantic search. <br><br> Built a multi-provider LLM management system supporting OpenAI, Anthropic, and self-hosted vLLM models, with per-bot configuration, dynamic prompts, token-level telemetry, and intelligent fallback strategies. <br><br> Architected an asynchronous messaging pipeline (WhatsApp → Bot → LLM) using ReAct-style agents, persistent memory backed by PostgreSQL, and optimized inference with fine-tuned Qwen models running on vLLM. <br><br> Implemented end-to-end WhatsApp Business API onboarding via Meta APIs, including number registration, webhook handling, automated routing, and session-based chat context. <br><br> Solved embedding compatibility challenges across models (e.g. BGE-M3), implementing dynamic validation and migration for 1024-dimensional vector collections. <br><br> Stack: Python (LlamaIndex, FastAPI), Laravel (PHP), PostgreSQL, Qdrant Vector DB, vLLM, Docker; integrations with Meta Business API, multiple LLM providers, and messaging systems.',
      companyLink: 'https://f2it.com.br',
      date: '2023 - 2024'
    },
    {
      title: 'CTO',
      company: 'FashionAI',
      description: 'As the Co-Founder and CTO of FashionAI, I lead all technology-related aspects of the company, driving innovation across our AI-powered SaaS platforms. My responsibilities include overseeing generative and agentic AI development, managing DevOps practices, building CI/CD pipelines, and ensuring robust, scalable cloud infrastructure. I actively contribute to coding, working with a microservices architecture built in Node.js and Python (FastAPI). <br><br> Our stack includes Dockerized services deployed on Kubernetes across GKE (Google Cloud Platform) and EKS (AWS), supported by PostgreSQL, MongoDB, and Qdrant. I design and implement Retrieval-Augmented Generation (RAG) pipelines, combining semantic search with LLMs to deliver grounded, context-aware responses in production. This includes building data ingestion, preprocessing, and embedding pipelines, storing vectors in Qdrant, and retrieving context at query time to power use cases such as product search, recommendations, CRM insights, and personalization. <br><br> I also architect agentic AI systems for SaaS workflows, enabling LLMs to perform reasoning, tool execution, memory handling, and orchestration. I have conducted proofs of concept using LangChain and LangGraph to model agent workflows and graph-based execution, later internalizing optimized implementations for production. This role combines hands-on technical leadership with strategic ownership of AI architecture, infrastructure, and delivery.',
      companyLink: 'https://generativecrm.com',
      date: '2024 - present',
    }

  ]
};

experiences.list = experiences.list.reverse();

export default experiences;
