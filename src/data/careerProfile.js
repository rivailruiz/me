export const careerProfile = {
  sectionTitle: 'Professional Summary',
  icon: null,
  description: [
    'Senior Product & AI Systems Engineer building end-to-end, production systems across SaaS, cloud platforms, and LLM-powered products.',
    'Focused on system design and ownership: RAG architectures, LLM orchestration across providers, async pipelines, and reliable deployment/operations.',
    'Hands-on across backend + infrastructure, with experience shipping AI features from ingestion and indexing to inference and delivery channels.'
  ].map((p) => `<p>${p}</p>`).join('')
};

export default careerProfile;
