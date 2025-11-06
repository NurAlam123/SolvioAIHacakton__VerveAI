export interface JobPostsCompany {
  name: string;
  icon: string;
  companyID: string;
}

export interface JobPosts {
  id: string;
  title: string;
  description: string;
  company: JobPostsCompany;
  salary: string;
  location: string;
  experience: string;
  createdAt: string;
  deadline: string;
  type: string;
  skills: Array<string>;
  tags: Array<string>;
  content: string;
}

export const jobPosts: JobPosts[] = [
  {
    id: "e3b0c442-98fc-43c1-b769-d4198c60f277",
    title: "Senior Machine Learning Engineer (Generative AI)",
    description:
      "Lead the development and deployment of next-generation Generative AI models focusing on large language models (LLMs) and diffusion models. Requires deep expertise in PyTorch and scalable deployment.",
    company: {
      name: "Synapse AI Labs",
      icon: "https://placehold.co/40x40/791bc0/ffffff?text=SL",
      companyID: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    },
    salary: "$180,000 - $220,000",
    location: "remote",
    experience: "5+ years",
    createdAt: "2025-10-28T10:00:00Z",
    deadline: "2025-12-31T23:59:59Z",
    type: "full-time",
    skills: ["PyTorch", "LLMs", "Generative AI", "AWS SageMaker", "Kubernetes"],
    tags: ["Hot", "Remote", "Senior"],
    content:
      "## Position: Senior ML Engineer (Generative AI)\n\n### About the Role\nSynapse AI Labs is seeking a visionary Senior Machine Learning Engineer to spearhead our Generative AI initiatives. You will work on foundational models that power our core products, requiring high-performance computing optimization and MLOps rigor.\n\n### Key Responsibilities\n* Design, train, and fine-tune large-scale Generative Models.\n* Optimize models for latency and throughput in production environments.\n* Collaborate with product teams to define AI-driven features.\n* Mentor junior engineers and champion best practices in ML engineering.\n\n### Qualifications\n* Proven experience with the full ML lifecycle in a production environment.\n* Expertise in **PyTorch** and distributed training frameworks.\n* Strong background in deep learning, particularly attention mechanisms and transformer architectures.\n* Bachelor's or Master's degree in Computer Science or related field.",
  },
  {
    id: "2d4e78b1-12a9-4f3b-8c5d-6e7a0f123456",
    title: "Junior Data Scientist (Predictive Analytics)",
    description:
      "A foundational role focused on cleaning, transforming, and modeling large datasets to uncover actionable insights for our clients in finance and health. Great opportunity for recent graduates.",
    company: {
      name: "Quantum Dynamics",
      icon: "https://placehold.co/40x40/00c2a2/1a1f2c?text=QD",
      companyID: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    },
    salary: "$85,000 - $105,000",
    location: "hybrid",
    experience: "0-2 years",
    createdAt: "2025-11-01T09:30:00Z",
    deadline: "2026-01-15T23:59:59Z",
    type: "full-time",
    skills: ["Python", "Pandas", "SQL", "Scikit-learn", "Data Visualization"],
    tags: ["New", "Entry-Level", "Hybrid"],
    content:
      "## Position: Junior Data Scientist (Predictive Analytics)\n\n### Your Mission\nJoin a fast-paced analytics team dedicated to turning raw data into strategic business decisions. You will be responsible for data quality, feature engineering, and building initial predictive models.\n\n### Day-to-Day Tasks\n* Develop and maintain ETL processes using Python and SQL.\n* Perform exploratory data analysis (EDA) to identify trends and anomalies.\n* Assist senior scientists with model validation and documentation.\n* Create compelling dashboards and reports using Tableau or Power BI.\n\n### Requirements\n* Proficiency in Python and fundamental data science libraries (NumPy, Pandas).\n* Familiarity with relational databases and writing complex SQL queries.\n* Excellent problem-solving skills and attention to detail.\n* Ability to commute to the San Francisco office 3 days a week.",
  },
  {
    id: "7f4c1e8a-0d92-4b7d-8e6f-a0c3b4d5e6f7",
    title: "AI Ethics & Policy Specialist",
    description:
      "Shape the ethical guidelines and governance frameworks for our AI products. Focus on fairness, transparency, and accountability across all deployed systems. Essential for regulatory compliance.",
    company: {
      name: "Veritas Solutions",
      icon: "https://placehold.co/40x40/5a647d/ffffff?text=VS",
      companyID: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
    },
    salary: "$130,000 - $160,000",
    location: "onsite",
    experience: "4+ years",
    createdAt: "2025-10-15T12:45:00Z",
    deadline: "2025-12-15T23:59:59Z",
    type: "flexible",
    skills: [
      "Ethics",
      "Policy Development",
      "Governance",
      "Legal Compliance",
      "Bias Detection",
    ],
    tags: ["Niche", "Policy", "Onsite"],
    content:
      "## Position: AI Ethics & Policy Specialist\n\n### The Opportunity\nVeritas Solutions is committed to responsible AI. We need an expert to bridge the gap between technical AI development and legal/ethical compliance. This role reports directly to the Chief Legal Officer.\n\n### Core Responsibilities\n* Develop and enforce company-wide AI ethics standards and documentation.\n* Conduct regular audits of deployed models for bias and explainability (XAI).\n* Stay current with global AI regulations (e.g., EU AI Act, various state laws).\n* Train engineering teams on ethical design principles.\n\n### Ideal Candidate\n* Background in law, philosophy, computer science, or public policy with a focus on technology.\n* Demonstrable experience translating complex regulatory requirements into actionable engineering guidance.\n* Strong presentation and written communication skills are paramount.\n* This is a primarily onsite role for crucial stakeholder collaboration.",
  },
  {
    id: "1b3f6e9c-4a2d-40e1-8f7b-c9d2a8e5f0g1",
    title: "Prompt Engineer & LLM Interaction Designer",
    description:
      "Pioneer the art and science of interacting with large language models. Develop, test, and optimize prompt structures for complex business workflows, maximizing model output quality and consistency.",
    company: {
      name: "AuraTech Innovations",
      icon: "https://placehold.co/40x40/791bc0/f3f4f6?text=AT",
      companyID: "d4e5f6a7-b8c9-0123-4567-890abcdef123",
    },
    salary: "$110,000 - $140,000",
    location: "remote",
    experience: "2+ years",
    createdAt: "2025-10-20T08:00:00Z",
    deadline: "2025-12-20T23:59:59Z",
    type: "full-time",
    skills: [
      "Prompt Engineering",
      "LLM APIs (OpenAI/Anthropic)",
      "NLP",
      "Python Scripting",
      "User Experience",
    ],
    tags: ["Trending", "Remote", "Innovation"],
    content:
      "## Position: Prompt Engineer & LLM Interaction Designer\n\n### The Frontier\nAuraTech is building the next generation of customer support and content creation tools powered by LLMs. As a Prompt Engineer, you are the crucial link between the model and the user.\n\n### Key Duties\n* Design and iterate on prompt templates for diverse use cases (summarization, translation, code generation).\n* Establish evaluation metrics and benchmarks for prompt performance.\n* Document successful prompt patterns and share best practices across engineering teams.\n* Work with UX designers to integrate prompt results seamlessly into the user interface.\n\n### What We're Looking For\n* A strong portfolio demonstrating complex prompt design and iterative refinement.\n* Familiarity with popular LLM ecosystems (e.g., GPT, Claude, Llama).\n* Excellent linguistic and logical reasoning capabilities.\n* Experience with JSON-Schema for structured model outputs is a plus.",
  },
  {
    id: "5c9a7b3d-1e0f-4b6c-8a9d-2f0e1d4c3b2a",
    title: "Robotics Software Developer (Computer Vision)",
    description:
      "Develop and maintain real-time computer vision algorithms for autonomous industrial robots. This role involves C++ and Python development directly on embedded systems and requires hands-on hardware interaction.",
    company: {
      name: "Global Robotics Inc.",
      icon: "https://placehold.co/40x40/00c2a2/111827?text=GR",
      companyID: "e5f6a7b8-c9d0-1234-5678-90abcdef1234",
    },
    salary: "$120,000 - $155,000",
    location: "onsite",
    experience: "3+ years",
    createdAt: "2025-09-10T14:00:00Z",
    deadline: "2025-12-01T23:59:59Z",
    type: "full-time",
    skills: ["C++", "ROS", "OpenCV", "Embedded Systems", "SLAM"],
    tags: ["Robotics", "Hardware", "Onsite"],
    content:
      "## Position: Robotics Software Developer (Computer Vision)\n\n### About Global Robotics\nWe build collaborative robots used in high-precision manufacturing. Your code ensures our robots 'see' and interact with the world accurately and safely.\n\n### What You'll Be Doing\n* Implementing and optimizing advanced computer vision algorithms (e.g., object detection, 3D perception) using OpenCV and PCL.\n* Integrating vision systems with the Robot Operating System (ROS).\n* Performing code review and ensuring high reliability on industrial hardware.\n* Occasional travel to manufacturing sites for system commissioning.\n\n### Required Skills\n* Expertise in **C++** and real-time operating systems.\n* Hands-on experience with camera calibration and sensor fusion.\n* Strong understanding of linear algebra and geometric transformations.\n* Comfortable working in a laboratory and hardware environment.",
  },
  {
    id: "9d6b5a1c-3e2f-4a0b-8d7c-1f2e3d4c5b6a",
    title: "MLOps Specialist (Cloud Infrastructure)",
    description:
      "Establish and manage the cloud infrastructure (AWS/GCP) necessary for continuous integration and deployment of hundreds of machine learning models. Focus on automation, monitoring, and scaling.",
    company: {
      name: "DataStream Corp.",
      icon: "https://placehold.co/40x40/5a647d/791bc0?text=DC",
      companyID: "f6a7b8c9-d0e1-2345-6789-0abcdef12345",
    },
    salary: "$145,000 - $185,000",
    location: "hybrid",
    experience: "4+ years",
    createdAt: "2025-11-05T11:20:00Z",
    deadline: "2026-01-30T23:59:59Z",
    type: "flexible",
    skills: [
      "MLOps",
      "Terraform",
      "Kubernetes",
      "AWS/GCP",
      "CI/CD",
      "Monitoring (Prometheus/Grafana)",
    ],
    tags: ["MLOps", "Cloud", "Automation"],
    content:
      "## Position: MLOps Specialist (Cloud Infrastructure)\n\n### The Challenge\nDataStream needs a robust, fully automated pipeline for deploying, monitoring, and managing our portfolio of predictive and generative models. You will own the infrastructure layer.\n\n### Your Deliverables\n* Design and implement end-to-end ML pipelines using tools like Kubeflow or Airflow.\n* Manage cloud resources using Infrastructure as Code (**Terraform**).\n* Implement model performance monitoring and alerting systems (e.g., drift, bias).\n* Ensure security and compliance across all model endpoints.\n\n### Why Join Us?\nThis role offers the flexibility of a 4-day on-site/1-day remote schedule and the chance to work with cutting-edge tools. We require deep experience with either AWS or GCP ML platforms (e.g., Vertex AI, SageMaker) and strong DevOps principles.",
  },
];
