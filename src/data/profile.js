const profile = {
  name: 'Alexander Ruiz',
  title: 'Senior Product & AI Systems Engineer',
  mail: 'ruizalexander@id.uff.br',
  phoneNumber: '+55 (21) 96656-2279',
  website: '',
  linkedin: 'linkedin.com/in/rivailruiz',
  github: 'github.com/rivailruiz',
  imagePath: 'profile.jpg',
  twitter: null,
  educationDetails: {
    sectionTitle: '',
    list: [
      { name: 'Computer Science', school: 'Universidade Federal Fluminense', date: '2015-2020' }
    ]
  },
  languages: {
    sectionTitle: 'Languages',
    list: [
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Professional' },
      { name: 'Spanish', level: 'Beginner' }
    ]
  },
  interests: {
    // Rendered in the sidebar as a compact skills list.
    list: [
      'AI Systems: LLMs, RAG, embeddings, vector search (Qdrant), vLLM',
      'Backend: Python (FastAPI), Node.js (NestJS), PHP, Golang',
      'Data: PostgreSQL, MongoDB, Redis, MySQL/MariaDB',
      'Infra/Cloud: Docker, Kubernetes, Terraform, AWS, Google Cloud',
      'Architecture: microservices, async pipelines, API design (REST/GraphQL)',
      'Delivery: CI/CD, observability/telemetry, production operations'
    ]
  }
};

export default profile;
