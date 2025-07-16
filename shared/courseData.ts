import { Course } from "./api";

// Generate URL-friendly slug from course title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim(); // Remove leading/trailing whitespace
}

export const mockCourses: Course[] = [
  {
    id: "8",
    slug: "generative-ai-made-simple-for-everyone-in-business",
    title: "Generative AI Made Simple: For Everyone in Business",
    description:
      "Master AI tools like ChatGPT, Gemini, and more to boost productivity. Use AI to excel at office work, projects, research, and job hunting.",
    category: "Generative AI",
    duration: "5 weeks",
    difficulty: "Beginner",
    price: 34999,
    image:
      "https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Generative AI",
      "ChatGPT",
      "Gemini",
      "Prompt Engineering",
      "AI Productivity",
      "Job Hunting",
      "Excel & PPT with AI",
      "No-Code AI",
      "AI for Research",
      "Side Hustles",
      "Personal Branding",
      "Efficiency Hacks",
      "Hugging Face",
      "Stock Market with AI",
    ],
    instructor: "Miraj Godha",
    bio: "Ex-Oracle | RBS | Apple | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.8,
    students: 1500,
    featured: true,
    whatYouLearn: [
      "Understand Generative AI, tokens, and LLMs without any coding knowledge",
      "Master prompt engineering techniques to get the best responses from AI",
      "Use AI for daily office work like emails, presentations, reports, and data analysis",
      "Automate tasks using no-code AI tools to save time and effort",
      "Conduct market research, competitor analysis, and generate client-ready content",
      "Ace your job hunt by building optimized resumes, preparing for interviews, and negotiating offers",
      "Learn to code without prior coding knowledge using AI tools",
      "Build and launch your website and marketing material with AI in under an hour",
      "Boost productivity and efficiency across roles like business analysts, students, sales professionals, and more",
      "Use Hugging Face Spaces and leaderboards to discover top LLMs",
      "Analyze stock market news and generate trade ideas using LLMs",
    ],
    prerequisites: [
      "Basic computer and internet usage skills",
      "No prior coding or AI knowledge required",
      "Curiosity to explore how AI can help in business or career",
    ],
    faqs: [
      {
        question: "Do I need technical skills to join this course?",
        answer:
          "Not at all. This course is designed for non-technical professionals like students, housewives, MBAs, sales executives, and business analysts.",
      },
      {
        question: "Will I be able to apply AI in my current job?",
        answer:
          "Yes. You'll learn practical AI applications for tasks like writing emails, creating presentations, doing research, and automating repetitive work.",
      },
      {
        question: "What tools will be covered?",
        answer:
          "You'll use tools like ChatGPT, Gemini, Bard, Claude, Hugging Face, and various no-code platforms for content creation, coding, research, and automation.",
      },
      {
        question: "Can AI help me get a better job?",
        answer:
          "Absolutely. Learn how to use AI to build ATS-optimized resumes, search hidden job openings, personalize job applications, and negotiate better salaries.",
      },
      {
        question: "Is this course future-ready?",
        answer:
          "Yes, we update content regularly with the latest AI tools and trends, ensuring you're always ahead in the AI race.",
      },
    ],
    curriculum: [
      {
        module: "Module 1: AI Fundamentals for Business",
        lessons: [
          "Understanding generative AI and its business applications",
          "What are tokens and how they affect prompt output",
          "What is LLM, tokenization, and inference in simple terms",
          "Overview of popular AI tools: ChatGPT, Gemini, Claude, and more",
          "Setting up and getting started with AI platforms",
        ],
      },
      {
        module: "Module 2: Mastering ChatGPT for Daily Use",
        lessons: [
          "How ChatGPT works and what makes it powerful",
          "Best ways to use ChatGPT for professional and personal growth",
          "Limitations and hallucination handling in ChatGPT",
          "Useful browser extensions and tools to enhance ChatGPT",
          "Teach ChatGPT your tone, language, and goals",
        ],
      },
      {
        module: "Module 3: Prompt Engineering Mastery",
        lessons: [
          "Prompt engineering explained for non-tech users",
          "Prompt frameworks: what works and why",
          "Prompt priming and iterative prompting",
          "Teach me, ask for advice, and write-like-me prompts",
          "Advanced prompting for complex scenarios",
        ],
      },
      {
        module: "Module 4: AI for Productivity and Office Work",
        lessons: [
          "Summarizing text and information quickly",
          "Writing emails, documents, and memos with AI",
          "Using AI for presentations and speech prep",
          "Data analysis, Excel support, and automation",
          "Setting up AI-powered email auto-responders",
        ],
      },
      {
        module: "Module 5: AI for Research and Analysis",
        lessons: [
          "Generating research ideas and curating insights",
          "Fact-checking and validating information",
          "Understanding your audience with AI",
          "Market research and competitor analysis",
          "Creating detailed product and business writeups",
        ],
      },
      {
        module: "Module 6: AI for Career Growth & Job Hunting",
        lessons: [
          "Creating irresistible resumes using AI",
          "Writing cover letters and personalized applications",
          "Finding hidden job opportunities with LLMs",
          "Preparing for interviews using roleplay prompts",
          "Salary negotiation strategies and market benchmarking",
        ],
      },
      {
        module: "Module 7: Personal Branding with AI",
        lessons: [
          "Updating your CV to beat ATS filters",
          "Writing impactful LinkedIn posts",
          "Creating logos and pamphlets in minutes",
          "Improving your online presence using AI",
          "Reviewing and refining your work using ChatGPT",
        ],
      },
      {
        module: "Module 8: Build & Launch a Website in Under 30 Minutes",
        lessons: [
          "Using AI to define your business idea",
          "Generating website content instantly",
          "Building a no-code landing page",
          "Creating visuals like banners, icons, and CTAs",
          "Going live with minimal effort",
        ],
      },
      {
        module: "Module 9: Coding Using AI – Even If You're Not a Coder",
        lessons: [
          "Writing and debugging code using ChatGPT & Bard",
          "Generating code snippets for automation",
          "Converting logic into reusable functions",
          "Translating code from one language to another",
          "Developing no-code apps from scratch",
        ],
      },
      {
        module: "Module 10: Hugging Face for Everyone",
        lessons: [
          "Introduction to Hugging Face platform",
          "Using Hugging Face Spaces to try AI tools",
          "Exploring Hugging Face Leaderboards to find top models",
          "Discovering community models and sharing your own",
          "Useful free tools and hosted APIs for rapid experimentation",
        ],
      },
      {
        module: "Module 11: Using Hugging Face Models in Google Colab",
        lessons: [
          "Overview of Google Colab environment",
          "Loading and running Hugging Face models with minimal code",
          "Text generation and summarization using prebuilt models",
          "How to modify prompts and inputs in Colab",
          "Very high-level walkthrough for beginners—light coding, high results",
        ],
      },
      {
        module: "Module 12: Stock Market & Sentiment Analysis with AI",
        lessons: [
          "Using LLMs for stock market news understanding",
          "Sentiment analysis of financial headlines and social media",
          "Generating dummy trade ideas and narratives",
          "Risks and limitations of financial predictions from AI",
          "Visualizing stock trends and charts using AI prompts",
          "Understanding and summarizing company financials, annual reports in seconds",
        ],
      },
    ],
  },

  {
    id: "1",
    slug: "generative-ai-large-language-models-with-langchain-and-huggingface",
    title:
      "Generative AI & Large Language Models with Langchain and Huggingface",
    description:
      "Become an LLM Engineer: Build and deploy 8 LLM apps, mastering Generative AI, RAG, LoRA and AI Agents.",
    category: "Generative AI",
    duration: "12 weeks",
    difficulty: "Advanced",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
    tags: ["OpenAI", "LLM", "GPT", "AI", "Machine Learning"],
    instructor: "Dr. Rakesh Kumar",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.9,
    students: 1250,
    featured: true,
    whatYouLearn: [
      "Build and deploy large language models from scratch",
      "Master prompt engineering techniques for optimal AI responses",
      "Develop AI-powered applications using OpenAI APIs",
      "Understand transformer architecture and attention mechanisms",
      "Implement fine-tuning strategies for domain-specific models",
      "Create conversational AI and chatbot applications",
      "Handle AI safety, ethics, and responsible AI development",
      "Optimize model performance and cost-effectiveness",
      "Integrate AI capabilities into existing software systems",
      "Stay current with latest developments in generative AI",
    ],
    prerequisites: [
      "Solid programming experience in Python",
      "Understanding of machine learning fundamentals",
      "Familiarity with APIs and web development concepts",
      "Basic knowledge of neural networks and deep learning",
      "Experience with data manipulation libraries (pandas, numpy)",
    ],
    faqs: [
      {
        question: "Do I need prior experience with AI or machine learning?",
        answer:
          "Yes, this is an advanced course. You should have a solid understanding of machine learning fundamentals, neural networks, and experience with Python programming. We recommend completing a basic ML course first if you're new to the field.",
      },
      {
        question: "What AI tools and models will I learn to work with?",
        answer:
          "You'll work with OpenAI's GPT models, ChatGPT API, Claude, and other cutting-edge LLMs. You'll also learn to use frameworks like Hugging Face Transformers, LangChain, and various prompt engineering tools.",
      },
      {
        question: "Will I be able to build production-ready AI applications?",
        answer:
          "Absolutely! By the end of this course, you'll have built several AI-powered applications from scratch, learned deployment strategies, and understand how to scale AI solutions for production environments.",
      },
      {
        question:
          "How much does it cost to practice with OpenAI APIs during the course?",
        answer:
          "We provide API credits for practice during the course. Additionally, we'll teach you cost optimization strategies and how to use free tiers effectively. Most exercises can be completed with minimal API costs (under $10-20 total).",
      },
      {
        question: "Is this course updated with the latest AI developments?",
        answer:
          "Yes! Given the rapid pace of AI development, we update our content quarterly to include the latest models, techniques, and best practices. You'll also get lifetime access to these updates.",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to Generative AI",
        lessons: [
          "What is Generative AI and how it differs from traditional AI",
          "History and evolution of AI models",
          "Understanding neural networks and deep learning basics",
          "Overview of popular generative AI tools",
        ],
      },
      {
        module: "Module 2: Large Language Models (LLMs)",
        lessons: [
          "Introduction to LLMs: GPT, BERT, and Transformer architecture",
          "Understanding tokenization and embeddings",
          "How LLMs are trained and fine-tuned",
          "Exploring GPT-3, GPT-4, and their capabilities",
        ],
      },
      {
        module: "Module 3: Working with OpenAI APIs",
        lessons: [
          "Setting up OpenAI API and authentication",
          "Making API calls and handling responses",
          "Building your first AI-powered application",
          "Best practices for API usage and cost optimization",
        ],
      },
      {
        module: "Module 4: Prompt Engineering",
        lessons: [
          "The art and science of prompt engineering",
          "Advanced prompting techniques and strategies",
          "Chain-of-thought prompting and few-shot learning",
          "Building robust prompts for different use cases",
        ],
      },
      {
        module: "Module 5: Building AI Applications",
        lessons: [
          "Designing AI-powered chatbots and virtual assistants",
          "Integrating AI into web and mobile applications",
          "Building content generation tools",
          "Creating AI-powered data analysis tools",
        ],
      },
      {
        module: "Module 6: Advanced Topics and Future Trends",
        lessons: [
          "Multimodal AI: Combining text, images, and audio",
          "AI safety, ethics, and responsible AI development",
          "Future trends in generative AI",
          "Final project: Building a complete AI application",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "apache-spark-for-big-data-processing",
    title: "Apache Spark for Big Data Processing",
    description:
      "Learn distributed computing and big data processing with Apache Spark, PySpark, and real-world projects.",
    category: "Big Data",
    duration: "10 weeks",
    difficulty: "Intermediate",
    price: 39999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf6onpCieunkDS2lVEKNhs2nOyLZD6fH-rw&s?w=400&h=250&fit=crop&crop=center",
    tags: ["Apache Spark", "PySpark", "Big Data", "Scala"],
    instructor: "Mark Rodriguez",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.8,
    students: 890,
    featured: true,
    whatYouLearn: [
      "Design and implement distributed data processing pipelines",
      "Master Spark Core, RDDs, and DataFrame APIs",
      "Build real-time streaming applications with Spark Streaming",
      "Optimize Spark applications for performance and cost efficiency",
      "Work with large-scale datasets across distributed clusters",
      "Integrate Spark with Hadoop ecosystem and cloud platforms",
      "Implement ETL processes and data transformation workflows",
      "Use Spark SQL for complex analytical queries",
      "Apply machine learning algorithms using Spark MLlib",
      "Deploy and monitor Spark applications in production",
    ],
    prerequisites: [
      "Strong programming skills in Python or Scala",
      "Understanding of distributed systems concepts",
      "Experience with SQL and database technologies",
      "Basic knowledge of Linux/Unix command line",
      "Familiarity with data processing and ETL concepts",
    ],
    faqs: [
      {
        question: "Do I need access to a Hadoop cluster to practice Spark?",
        answer:
          "No, you don't need a full Hadoop cluster. We'll teach you how to set up Spark locally and use cloud platforms like AWS EMR, Databricks, or Google Cloud Dataproc for hands-on practice. We provide cloud credits for exercises.",
      },
      {
        question: "Should I learn Scala or Python for Spark development?",
        answer:
          "Both are covered in this course! While Spark is written in Scala, PySpark (Python API) is very popular and easier for most developers. We'll teach you both, focusing on PySpark initially and then covering Scala for advanced optimization scenarios.",
      },
      {
        question: "What size datasets will I work with during the course?",
        answer:
          "You'll start with smaller datasets (GBs) for learning concepts, then progress to larger datasets (TBs) using cloud platforms. Real-world projects include processing log files, IoT data streams, and large CSV/Parquet files.",
      },
      {
        question: "How is this different from other big data courses?",
        answer:
          "This course focuses specifically on Spark mastery with hands-on projects, performance optimization, and production deployment. You'll build complete data pipelines and learn from real-world scenarios, not just theoretical concepts.",
      },
      {
        question: "Will I learn about Spark performance tuning?",
        answer:
          "Yes! Performance optimization is a major focus. You'll learn about memory management, partitioning strategies, caching, broadcast variables, and how to troubleshoot common Spark performance issues in production environments.",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Big Data Fundamentals",
        lessons: [
          "Introduction to Big Data and its challenges",
          "Distributed computing concepts",
          "Hadoop ecosystem overview",
          "Setting up Spark development environment",
        ],
      },
      {
        module: "Module 2: Apache Spark Architecture",
        lessons: [
          "Spark architecture and core components",
          "Understanding RDDs (Resilient Distributed Datasets)",
          "Spark execution model and lazy evaluation",
          "Cluster managers and deployment modes",
        ],
      },
      {
        module: "Module 3: Spark Core and RDDs",
        lessons: [
          "Creating and manipulating RDDs",
          "Transformations and actions in Spark",
          "Caching and persistence strategies",
          "Spark programming with Scala and Python",
        ],
      },
      {
        module: "Module 4: Spark SQL and DataFrames",
        lessons: [
          "Introduction to Spark SQL and DataFrames",
          "Data sources and reading various file formats",
          "SQL queries and DataFrame operations",
          "User-defined functions (UDFs) and window functions",
        ],
      },
      {
        module: "Module 5: Spark Streaming",
        lessons: [
          "Real-time data processing with Spark Streaming",
          "Structured Streaming and continuous processing",
          "Integrating with Kafka and other streaming sources",
          "Building real-time analytics pipelines",
        ],
      },
      {
        module: "Module 6: Performance Optimization",
        lessons: [
          "Spark performance tuning best practices",
          "Memory management and garbage collection",
          "Partitioning strategies and data skew handling",
          "Real-world project: Building a complete data pipeline",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "apache-cassandra-for-distributed-systems",
    title: "Apache Cassandra for Distributed Systems",
    description:
      "Master distributed NoSQL databases with Cassandra for high-availability applications and scalable data solutions.",
    category: "NoSQL",
    duration: "8 weeks",
    difficulty: "Advanced",
    price: 59999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBKumrresBVx1fDmiP6FbbZFR0e4fi49KNA&s?w=400&h=250&fit=crop&crop=center",
    tags: ["Apache Cassandra", "NoSQL", "Distributed Systems", "CQL"],
    instructor: "Raj Jain",
    bio: "IITin | Ex-Apple | Oracle | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.7,
    students: 15600,
    featured: true,
    curriculum: [
      {
        module: "Module 1: NoSQL and Distributed Database Fundamentals",
        lessons: [
          "NoSQL vs SQL databases comparison",
          "CAP theorem and distributed system principles",
          "Introduction to Cassandra and its use cases",
          "Cassandra installation and cluster setup",
        ],
      },
      {
        module: "Module 2: Cassandra Architecture",
        lessons: [
          "Ring architecture and consistent hashing",
          "Replication strategies and data distribution",
          "Gossip protocol and failure detection",
          "Read and write paths in Cassandra",
        ],
      },
      {
        module: "Module 3: Data Modeling",
        lessons: [
          "Cassandra data modeling principles",
          "Designing tables for query patterns",
          "Primary keys, partition keys, and clustering columns",
          "Denormalization strategies and best practices",
        ],
      },
      {
        module: "Module 4: CQL (Cassandra Query Language)",
        lessons: [
          "CQL syntax and basic operations",
          "Creating keyspaces and tables",
          "Data types and collections in Cassandra",
          "Advanced CQL features and user-defined types",
        ],
      },
      {
        module: "Module 5: Performance and Operations",
        lessons: [
          "Performance tuning and optimization techniques",
          "Monitoring and metrics collection",
          "Backup and restore strategies",
          "Cluster maintenance and troubleshooting",
        ],
      },
      {
        module: "Module 6: Production Deployment",
        lessons: [
          "Production deployment strategies",
          "Security best practices and authentication",
          "Integration with applications and drivers",
          "Capstone project: Building a scalable application",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "elasticsearch-search-analytics",
    title: "Elasticsearch & Search Analytics",
    description:
      "Learn to build powerful search engines and analytics platforms with Elasticsearch, Kibana, and Logstash.",
    category: "Search & Analytics",
    duration: "6 weeks",
    difficulty: "Intermediate",
    price: 49999,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    tags: ["Elasticsearch", "Kibana", "Logstash", "Search"],
    instructor: "Raj Jain",
    bio: "IITin | Ex-Apple | Oracle | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.8,
    students: 112,
    featured: true,
    curriculum: [
      {
        module: "Module 1: Introduction to Elasticsearch",
        lessons: [
          "Search engine fundamentals and inverted index",
          "Elasticsearch architecture and concepts",
          "Installation and cluster configuration",
          "Basic CRUD operations and REST API",
        ],
      },
      {
        module: "Module 2: Indexing and Mapping",
        lessons: [
          "Document indexing and field mappings",
          "Analyzers, tokenizers, and text processing",
          "Dynamic vs explicit mapping strategies",
          "Index templates and lifecycle management",
        ],
      },
      {
        module: "Module 3: Search and Query DSL",
        lessons: [
          "Query DSL fundamentals and syntax",
          "Full-text search and relevance scoring",
          "Aggregations for analytics and reporting",
          "Advanced search features and filters",
        ],
      },
      {
        module: "Module 4: ELK Stack Integration",
        lessons: [
          "Introduction to Logstash for data ingestion",
          "Kibana for visualization and dashboards",
          "Building complete ELK stack pipelines",
          "Beats for data collection and shipping",
        ],
      },
      {
        module: "Module 5: Performance and Production",
        lessons: [
          "Performance optimization and tuning",
          "Monitoring and alerting strategies",
          "Scaling and cluster management",
          "Security and authentication setup",
        ],
      },
      {
        module: "Module 6: Real-world Applications",
        lessons: [
          "Building enterprise search solutions",
          "Log analytics and monitoring systems",
          "E-commerce search implementation",
          "Final project: Complete search platform",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "machine-learning-with-python-basics",
    title: "Machine Learning with Python (Basics)",
    description:
      "Complete machine learning course covering algorithms, model training, and deployment with scikit-learn.",
    category: "Machine Learning",
    duration: "10 weeks",
    difficulty: "Beginner",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    tags: ["Python", "scikit-learn", "TensorFlow", "Pandas"],
    instructor: "Dr. Alex Kumar",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.8,
    students: 456,
    curriculum: [
      {
        module: "Module 1: Python for Data Science",
        lessons: [
          "Python fundamentals for machine learning",
          "NumPy for numerical computing",
          "Pandas for data manipulation and analysis",
          "Matplotlib and Seaborn for data visualization",
        ],
      },
      {
        module: "Module 2: Machine Learning Fundamentals",
        lessons: [
          "Introduction to machine learning concepts",
          "Types of machine learning: supervised, unsupervised, reinforcement",
          "Data preprocessing and feature engineering",
          "Model evaluation and validation techniques",
        ],
      },
      {
        module: "Module 3: Supervised Learning Algorithms",
        lessons: [
          "Linear and logistic regression",
          "Decision trees and random forests",
          "Support vector machines (SVM)",
          "k-Nearest Neighbors (k-NN) algorithm",
        ],
      },
      {
        module: "Module 4: Unsupervised Learning",
        lessons: [
          "Clustering algorithms: K-means, hierarchical clustering",
          "Dimensionality reduction: PCA, t-SNE",
          "Association rule learning",
          "Anomaly detection techniques",
        ],
      },
      {
        module: "Module 5: Advanced Topics",
        lessons: [
          "Ensemble methods and boosting algorithms",
          "Introduction to neural networks",
          "Natural language processing basics",
          "Time series analysis and forecasting",
        ],
      },
      {
        module: "Module 6: Model Deployment",
        lessons: [
          "Model serialization and saving",
          "Building ML APIs with Flask/FastAPI",
          "Cloud deployment strategies",
          "Capstone project: End-to-end ML pipeline",
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "data-engineering-with-apache-airflow",
    title: "Data Engineering with Apache Airflow",
    description:
      "Build robust data pipelines and workflows using Apache Airflow and modern data engineering practices.",
    category: "Data Engineering",
    duration: "7 weeks",
    difficulty: "Intermediate",
    price: 37999,
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center",
    tags: ["Airflow", "ETL", "Python", "Data Pipelines"],
    instructor: "Lisa Wang",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.7,
    students: 213,
    curriculum: [
      {
        module: "Module 1: Data Engineering Fundamentals",
        lessons: [
          "Introduction to data engineering and ETL",
          "Data pipeline design principles",
          "Workflow orchestration concepts",
          "Setting up Apache Airflow environment",
        ],
      },
      {
        module: "Module 2: Airflow Core Concepts",
        lessons: [
          "DAGs (Directed Acyclic Graphs) and operators",
          "Tasks, dependencies, and scheduling",
          "Airflow architecture and components",
          "Creating your first data pipeline",
        ],
      },
      {
        module: "Module 3: Building Data Pipelines",
        lessons: [
          "Python operators and custom functions",
          "Database connections and SQL operators",
          "File processing and data transformation",
          "Error handling and retry mechanisms",
        ],
      },
      {
        module: "Module 4: Advanced Airflow Features",
        lessons: [
          "XComs for task communication",
          "Branching and conditional logic",
          "Templating and Jinja2 usage",
          "Dynamic DAG generation",
        ],
      },
      {
        module: "Module 5: Integration and Monitoring",
        lessons: [
          "Cloud platform integrations (AWS, GCP, Azure)",
          "Monitoring and alerting setup",
          "Performance optimization techniques",
          "Testing and debugging data pipelines",
        ],
      },
      {
        module: "Module 6: Production Best Practices",
        lessons: [
          "Production deployment strategies",
          "CI/CD for data pipelines",
          "Data quality and validation",
          "Final project: Enterprise data pipeline",
        ],
      },
    ],
  },
  {
    id: "7",
    slug: "hadoop-ecosystem-fundamentals",
    title: "Hadoop Ecosystem Fundamentals",
    description:
      "Learn the complete Hadoop ecosystem including HDFS, MapReduce, Hive, and HBase for big data processing.",
    category: "Big Data",
    duration: "8 weeks",
    difficulty: "Beginner",
    price: 28999,
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=250&fit=crop&crop=center",
    tags: ["Hadoop", "HDFS", "MapReduce", "Hive", "HBase"],
    instructor: "David Kim",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.4,
    students: 156,
    curriculum: [
      {
        module: "Module 1: Big Data and Hadoop Introduction",
        lessons: [
          "Understanding big data challenges and opportunities",
          "Introduction to Hadoop ecosystem",
          "Hadoop installation and cluster setup",
          "Hadoop architecture overview",
        ],
      },
      {
        module: "Module 2: HDFS (Hadoop Distributed File System)",
        lessons: [
          "HDFS architecture and design principles",
          "NameNode and DataNode components",
          "File operations and HDFS commands",
          "Replication and fault tolerance",
        ],
      },
      {
        module: "Module 3: MapReduce Programming",
        lessons: [
          "MapReduce programming model",
          "Writing Mapper and Reducer functions",
          "Job configuration and execution",
          "MapReduce optimization techniques",
        ],
      },
      {
        module: "Module 4: Hive Data Warehousing",
        lessons: [
          "Introduction to Hive and HiveQL",
          "Creating tables and loading data",
          "Partitioning and bucketing strategies",
          "Hive optimization and performance tuning",
        ],
      },
      {
        module: "Module 5: HBase NoSQL Database",
        lessons: [
          "HBase architecture and data model",
          "Creating and managing HBase tables",
          "HBase shell and Java API",
          "Integration with Hadoop ecosystem",
        ],
      },
      {
        module: "Module 6: Ecosystem Integration",
        lessons: [
          "Pig for data analysis and scripting",
          "Flume for data ingestion",
          "Sqoop for relational database integration",
          "Project: Building a complete big data solution",
        ],
      },
    ],
  },

  {
    id: "9",
    slug: "big-data-advanced-spark-course",
    title: "Big Data – Advanced Spark Course",
    description:
      "Master Apache Spark with hands-on training in RDDs, Spark SQL, Streaming, Scala, MLlib, and Kafka. Learn how to optimize Spark apps for speed and performance in real-world big data environments.",
    category: "Big Data",
    duration: "8 weeks",
    difficulty: "Advanced",
    price: 49999,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/500px-Apache_Spark_logo.svg.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Apache Spark",
      "Scala",
      "Spark SQL",
      "Kafka",
      "Spark Streaming",
      "Data Engineering",
      "DataFrames",
      "MLlib",
      "Big Data",
      "Performance Tuning",
      "YARN",
      "SBT",
    ],
    instructor: "Raj Jain",
    bio: "IITin | Ex-Apple | Oracle | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.6,
    students: 180,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Introduction to Big Data & Hadoop",
        lessons: [
          "Motivation for Big Data systems",
          "Limitations of traditional large-scale systems",
          "Overview of Hadoop ecosystem and HDFS",
          "YARN architecture and its role in modern data processing",
        ],
      },
      {
        module: "Module 2: File Formats & Compression Techniques",
        lessons: [
          "Compression types: Bzip, Gzip, LZO, Snappy",
          "Understanding Sequence files and Map files",
          "OLAP vs OLTP storage formats",
          "Column-oriented formats: RC, ORC, Parquet, Avro",
        ],
      },
      {
        module: "Module 3: Scala Programming for Spark",
        lessons: [
          "Getting started with Scala and IntelliJ setup",
          "Scala basics: functions, closures, traits, case classes",
          "Scala collections and exception handling",
          "Functional programming concepts in Scala",
        ],
      },
      {
        module: "Module 4: Working with SBT & Spark RDDs",
        lessons: [
          "Installing and using SBT",
          "Creating and building Scala projects",
          "Working with RDDs: map, flatMap, reduce",
          "Lazy evaluation, persistence, and pair RDD transformations",
        ],
      },
      {
        module: "Module 5: Spark Core & Application Deployment",
        lessons: [
          "Spark architecture and execution model",
          "Submitting Spark jobs via YARN",
          "Spark Web UI and logging",
          "Configuring Spark properties and optimizations",
        ],
      },
      {
        module: "Module 6: Spark SQL & DataFrames",
        lessons: [
          "Creating and manipulating DataFrames",
          "Why DataFrames: performance & internal optimizations",
          "Running SQL queries programmatically",
          "Loading data from Parquet, JSON, Hive, and RDDs",
        ],
      },
      {
        module: "Module 7: Spark Internals & Optimizations",
        lessons: [
          "Catalyst, Tungsten, AST, and execution plans",
          "Predicate pushdown, constant folding, and pruning",
          "Code generation models: Volcano vs WholeStage",
          "Spark statistics and cost-based optimization",
        ],
      },
      {
        module: "Module 8: Spark Streaming and Kafka Integration",
        lessons: [
          "Kafka fundamentals: topics, brokers, partitions",
          "Spark Streaming architecture and DStreams",
          "Window operations, watermarks, and triggers",
          "Connecting Spark with Kafka for real-time processing",
        ],
      },
      {
        module: "Module 9: Machine Learning & Graph Processing in Spark",
        lessons: [
          "Basics of Spark MLlib and ML pipelines",
          "Clustering (K-means), Regression, and ALS",
          "Frequent pattern mining and collaborative filtering",
          "Introduction to Graph processing with Spark GraphX",
        ],
      },
      {
        module: "Module 10: Hands-on Project and EMR Deployment",
        lessons: [
          "Project scoping and requirements discussion",
          "Solution architecture using Spark on EMR",
          "Deploying and monitoring applications on AWS EMR",
          "Problem-solving and code review sessions",
        ],
      },
    ],
  },
  {
    id: "10",
    slug: "data-engineering-using-databricks-on-aws-and-azure",
    title: "Data Engineering using Databricks on AWS and Azure",
    description:
      "Master end-to-end Data Engineering using Databricks across AWS and Azure. Learn Spark, Delta Lake, Structured Streaming, Databricks SQL, Auto Loader, and more.",
    category: "Data Engineering",
    duration: "10 weeks",
    difficulty: "Advanced",
    price: 42999,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Databricks",
      "Spark",
      "Delta Lake",
      "Streaming",
      "Data Engineering",
      "Azure",
      "AWS",
      "Databricks SQL",
      "Auto Loader",
      "Cloud Files",
      "ETL Pipelines",
    ],
    instructor: "Raj Jain",
    bio: "IITin | Ex-Apple | Oracle | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.7,
    students: 178,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Introduction to Databricks and Cloud Setup",
        lessons: [
          "What is Databricks and its ecosystem",
          "Getting started with Databricks on Azure and AWS",
          "Creating and managing clusters",
          "Using Databricks Notebooks and UI",
          "Setting up Databricks CLI and DBFS",
        ],
      },
      {
        module: "Module 2: Azure Essentials and ADLS Integration",
        lessons: [
          "Setting up Azure CLI and Resource Groups",
          "Creating and configuring ADLS storage accounts",
          "Uploading data into ADLS",
          "Mounting ADLS to Databricks clusters",
          "Validating and unmounting storage",
        ],
      },
      {
        module: "Module 3: Local Development & CLI Usage",
        lessons: [
          "Setting up Databricks Connect and PyCharm",
          "Integrating Glue Catalog and S3 buckets",
          "Using dbutils from IDEs",
          "Interacting with DBFS using Databricks CLI",
          "Cluster and job operations with CLI",
        ],
      },
      {
        module: "Module 4: Delta Lake on Databricks",
        lessons: [
          "Working with Delta tables using DataFrames",
          "Using Spark SQL to manage Delta tables",
          "CRUD operations on Delta tables",
          "Merge, upsert, snapshot recovery, and vacuum",
          "Delta Lake compaction and optimization",
        ],
      },
      {
        module: "Module 5: Building Data Engineering Pipelines",
        lessons: [
          "Batch processing with Spark",
          "Structured Streaming basics and windowing",
          "Incremental file processing with Auto Loader",
          "File discovery modes and comparison",
          "Streaming queries and handling late data",
        ],
      },
      {
        module: "Module 6: Deploying and Running Jobs",
        lessons: [
          "Creating and managing pools and job clusters",
          "Running jobs using Databricks UI, CLI, and APIs",
          "Notebook modularization and execution",
          "Monitoring and debugging Spark jobs",
          "Building production-ready applications",
        ],
      },
      {
        module: "Module 7: Databricks SQL and Analysis",
        lessons: [
          "Overview of Databricks SQL Platform",
          "Creating and running queries",
          "Developing dashboards and visualizations",
          "Working with metastore and tables",
          "External tables and data loading with COPY command",
        ],
      },
      {
        module: "Module 8: Advanced Streaming and Auto Loader",
        lessons: [
          "Using Spark Structured Streaming for incremental loads",
          "Trigger-based streaming with Delta format",
          "cloudFiles with directory listing vs file notifications",
          "GHArchive project and real-time ingestion",
          "S3 event handling and IAM role configuration",
        ],
      },
      {
        module: "Module 9: Cluster Management and Init Scripts",
        lessons: [
          "Accessing Databricks cluster terminal and SSH setup",
          "Installing software with init scripts",
          "Managing libraries and third-party integrations",
          "Best practices for cluster bootstrapping",
        ],
      },
    ],
  },
  {
    id: "11",
    slug: "trino-presto-essentials-for-data-engineers",
    title: "Trino (Presto) Essentials for Data Engineers",
    description:
      "Master Trino, the powerful distributed SQL engine, to query data across RDBMS, Hive, Iceberg, and more. Learn architecture, connectors, tuning, and integration with BI tools.",
    category: "Big Data",
    duration: "4 weeks",
    difficulty: "Intermediate",
    price: 30000,
    image:
      "https://dbdb.io/media/logos/trino.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Trino",
      "Presto",
      "Big Data",
      "SQL Engine",
      "Hive Connector",
      "Iceberg",
      "BI Integration",
      "Data Lakes",
      "Performance Tuning",
      "Distributed SQL",
    ],
    instructor: "Ravi Mehta",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.7,
    students: 101,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Trino Overview and Setup",
        lessons: [
          "Introduction and history of Trino, Presto, and Starburst",
          "Installation and configuration steps",
          "Running Trino using CLI and Web UI",
          "Connecting with JDBC and working with Trino CLI",
        ],
      },
      {
        module: "Module 2: Trino Architecture Deep Dive",
        lessons: [
          "Understanding coordinator, workers, and discovery service",
          "Query planning, optimization rules, and SPI",
          "Predicate pushdown and cross join elimination",
        ],
      },
      {
        module: "Module 3: Trino Connectors and Integrations",
        lessons: [
          "RDBMS, Hive, TPC-H, Iceberg, and MinIO connectors",
          "Difference between Hive and Iceberg",
          "Using ORC, Parquet, and Avro with connectors",
        ],
      },
      {
        module: "Module 4: SQL with Trino",
        lessons: [
          "Writing queries: SELECT, JOIN, GROUP BY, WITH, etc.",
          "Using catalogs, schemas, and system tables",
          "Creating and modifying tables and views",
        ],
      },
      {
        module: "Module 5: Advanced Trino Features and Tuning",
        lessons: [
          "Understanding query execution and table statistics",
          "Cost-based optimizations and memory management",
          "Spill to disk, distributed sort, and tuning parameters",
        ],
      },
      {
        module: "Module 6: Security and External Integrations",
        lessons: [
          "LDAP and password-based authentication",
          "Authorization and secure internal communication",
          "Connecting Trino to Tableau and DBeaver for analysis",
        ],
      },
    ],
  },
  {
    id: "12",
    slug: "apache-beam-build-portable-data-pipelines",
    title: "Apache Beam: Build Portable Data Pipelines",
    description:
      "Master Apache Beam to build unified batch and streaming pipelines. Learn to run jobs across Spark, Flink, and GCP Dataflow with hands-on projects and real-time use cases.",
    category: "Big Data",
    duration: "5 weeks",
    difficulty: "Intermediate",
    price: 30000,
    image:
      "https://i.postimg.cc/pL0sXhjd/Apache-Beams.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Apache Beam",
      "Dataflow",
      "Flink",
      "Spark",
      "BigQuery",
      "Streaming",
      "Batch Processing",
      "Portable Pipelines",
      "GCP",
      "Real-Time Analytics",
    ],
    instructor: "Ankur Bansal",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.6,
    students: 176,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Getting Started with Apache Beam",
        lessons: [
          "Introduction and architecture of Apache Beam",
          "Flow of Beam's programming model",
          "Key terminologies and installation",
        ],
      },
      {
        module: "Module 2: Core Concepts & Pipeline Structure",
        lessons: [
          "Batch vs Stream processing",
          "Beam pipeline structure and read/write transforms",
          "Create, Map, FlatMap, Filter, ParDo, CoGroupBy",
          "Composite transforms and branching pipelines",
        ],
      },
      {
        module: "Module 3: Side Inputs, Outputs, and Coders",
        lessons: [
          "Using side inputs in pipelines",
          "Handling additional outputs",
          "Data encoding, decoding, and coders",
          "Ensuring type safety with type hints",
        ],
      },
      {
        module: "Module 4: Real-Time Use Case - Bank Defaulters",
        lessons: [
          "Understanding the case study and dataset",
          "Pipeline to identify credit card payment skippers",
          "Pipeline for loan defaulters",
        ],
      },
      {
        module: "Module 5: Streaming Pipelines and Windows",
        lessons: [
          "Introduction to streaming and PubSub integration",
          "Creating and deploying a streaming pipeline on GCP",
          "Understanding Beam windows: Tumbling, Sliding, Session, Global",
          "Implementing watermarks and triggers for late data",
        ],
      },
      {
        module: "Module 6: Real-Time Use Case - Mobile Game Analysis",
        lessons: [
          "Player score tracking and weapon skill analysis pipeline",
          "Discussion on alternate datasets or business cases",
        ],
      },
      {
        module: "Module 7: Deploying on GCP and Writing to BigQuery",
        lessons: [
          "Creating pipeline options for GCP deployment",
          "Running Beam pipeline on Google Cloud Dataflow",
          "Creating and writing to BigQuery datasets and tables",
          "Building dashboards with BigQuery data",
        ],
      },
    ],
  },
  {
    id: "13",
    slug: "clickhouse-training-from-basics-to-cluster-design",
    title: "ClickHouse Training: From Basics to Cluster Design",
    description:
      "Master ClickHouse from fundamentals to advanced features. Learn distributed databases, engine internals, cluster architecture, real-time ingestion via Kafka, and query optimization with hands-on sessions.",
    category: "Databases",
    duration: "4 weeks",
    difficulty: "Intermediate",
    price: 24999,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*eLOL2_uQAumNfHRP.jpeg?w=400&h=250&fit=crop&crop=center",
    tags: [
      "ClickHouse",
      "Distributed Databases",
      "NoSQL",
      "Kafka Integration",
      "Real-Time Analytics",
      "Materialized Views",
      "Query Optimization",
      "Monitoring",
      "MergeTree",
      "SQL Analytics",
    ],
    instructor: "Aniket Mehra",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.7,
    students: 132,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Distributed Databases and NoSQL Concepts",
        lessons: [
          "Designing data-intensive applications",
          "Understanding data models and CAP theorem",
          "Birth of NoSQL and eventual consistency",
        ],
      },
      {
        module: "Module 2: ClickHouse Fundamentals",
        lessons: [
          "Introduction to ClickHouse",
          "ClickHouse architecture overview",
          "Understanding multi-node ClickHouse clusters",
        ],
      },
      {
        module: "Module 3: ClickHouse Engines and SQL Basics",
        lessons: [
          "Overview of ClickHouse engines",
          "MergeTree family: MergeTree, Replacing, Summing, Aggregating, Collapsing, Versioned, Graphite",
          "Log engines: StripeLog, Log, TinyLog",
          "Data types and ClickHouse SQL essentials",
        ],
      },
      {
        module: "Module 4: Distributed Queries and Advanced Features",
        lessons: [
          "Cluster design and distributed querying",
          "Table, aggregate, and window functions",
          "Materialized views and internal/external dictionaries",
        ],
      },
      {
        module: "Module 5: Kafka Integration and Optimization",
        lessons: [
          "Connecting ClickHouse with Kafka for real-time ingestion",
          "Using MySQL Engine, Lazy and Atomic databases",
          "Efficient schema design and data loading",
          "Query optimization, monitoring, and user access management",
        ],
      },
    ],
  },
  {
    id: "14",
    slug: "end-to-end-elk-stack-training-elasticsearch-logstash-kibana",
    title: "End-to-End ELK Stack Training (Elasticsearch, Logstash, Kibana)",
    description:
      "Master the ELK stack and learn how to build scalable log analytics and monitoring solutions. Understand search internals, data pipelines, tokenization, aggregations, and powerful Kibana dashboards through hands-on projects.",
    category: "DevOps & Monitoring",
    duration: "3 weeks",
    difficulty: "Intermediate",
    price: 32999,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*fYzWXRMv8Y0OGuqOV8amFA.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "ELK Stack",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "Search",
      "Monitoring",
      "Log Analysis",
      "Data Aggregation",
      "Dashboards",
      "Lucene",
      "DevOps Tools",
    ],
    instructor: "Amit Kaushik",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.6,
    students: 174,
    featured: false,
    curriculum: [
      {
        module: "Module 1: ELK Stack Overview",
        lessons: [
          "Advantages of the ELK Stack",
          "Reference architecture and working principle",
          "Introduction to Elasticsearch, Logstash, and Kibana",
        ],
      },
      {
        module: "Module 2: Elasticsearch Fundamentals",
        lessons: [
          "Introduction to Elasticsearch and Apache Lucene",
          "Installing and retrieving/searching documents",
          "Understanding components and layouts",
          "Domain Specific Language (DSL) usage",
        ],
      },
      {
        module: "Module 3: Deep Dive into Elasticsearch Search",
        lessons: [
          "Structured and full-text search",
          "Phrase, proximity, partial, and multi-field search",
          "Search highlighting and complicated queries",
        ],
      },
      {
        module: "Module 4: Tokenization and Language Processing",
        lessons: [
          "Token handling and text normalization",
          "Stemming, stopwords, synonyms, typos, and misspellings",
          "Improving search relevance and precision",
        ],
      },
      {
        module: "Module 5: Aggregations and Analysis",
        lessons: [
          "Basics of aggregations and filtering queries",
          "Time-based analysis and approximate aggregations",
          "Doc values and field data handling",
        ],
      },
      {
        module: "Module 6: Logstash for Data Ingestion",
        lessons: [
          "History of logs and installing Logstash",
          "Creating and stashing events",
          "Understanding Logstash plugins: input, output, filter, codec",
          "Execution model and pipeline methods",
        ],
      },
      {
        module: "Module 7: Visualization with Kibana",
        lessons: [
          "Kibana introduction and Discover feature",
          "Search analysis within Kibana",
          "Creating visualizations and building dashboards",
        ],
      },
      {
        module: "Module 8: ELK Pipeline & Final Project",
        lessons: [
          "Setting up the ELK platform",
          "End-to-end demo of ELK pipeline",
          "Hands-on project with real-world data",
        ],
      },
    ],
  },
  {
    id: "15",
    slug: "mastering-apache-kafka-from-fundamentals-to-advanced-streaming",
    title: "Mastering Apache Kafka: From Fundamentals to Advanced Streaming",
    description:
      "Deep dive into Apache Kafka's architecture, producers, consumers, schema management, security, and streaming. Learn hands-on Kafka development, ops, and scaling for real-time data pipelines.",
    category: "Data Engineering",
    duration: "5 weeks",
    difficulty: "Intermediate",
    price: 24999,
    image:
      "https://platform9.com/media/kafka.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Apache Kafka",
      "Kafka Streams",
      "Kafka Connect",
      "Producers & Consumers",
      "Schema Registry",
      "Kafka Security",
      "Streaming Data",
      "Real-Time Pipelines",
      "Kafka CLI",
      "Data Engineering",
    ],
    instructor: "Raj Jain",
    bio: "IITin | Ex-Apple | Oracle | Speaker at IITs & NITs | VP – AI, Generative AI & Data Engineering | Expert in LLMs, Big Data, ML, NoSQL, Analytics & Data Visualization",
    rating: 4.7,
    students: 201,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Kafka Fundamentals and Setup",
        lessons: [
          "Kafka architecture, ZooKeeper overview",
          "Concepts: brokers, partitions, replicas, consumers, producers",
          "Creating topics and consuming/producing messages from CLI",
          "Scaling writes, replication, and performance tuning",
        ],
      },
      {
        module: "Module 2: Kafka Producer Programming",
        lessons: [
          "Introduction to Java Producer API",
          "Topic and partition layout",
          "Kafka replica verification and producer configurations",
        ],
      },
      {
        module: "Module 3: Kafka Consumer Programming",
        lessons: [
          "Java Consumer API basics",
          "Consumer lag monitoring",
          "Failover behavior and leader elections",
        ],
      },
      {
        module: "Module 4: Deep Kafka Internals & Messaging Semantics",
        lessons: [
          "Kafka's disk and file structure",
          "Producer batching, compression, and async flush",
          "Consumer polling, offsets, and delivery semantics",
          "Quorum, ISRs, compaction, and failure scenarios",
        ],
      },
      {
        module: "Module 5: Advanced Kafka Producer Development",
        lessons: [
          "Batching by size/time, compression, async/sync modes",
          "Custom partitioning and routing logic",
          "Advanced tuning and configurations",
        ],
      },
      {
        module: "Module 6: Advanced Kafka Consumer Development",
        lessons: [
          "Handling at-most/at-least/exactly-once semantics",
          "Re-consuming, seeking, and rebalance listeners",
          "Partition assignment and offset strategies",
        ],
      },
      {
        module: "Module 7: Schema Management",
        lessons: [
          "Avro schemas and JSON flexibility",
          "Using the Schema Registry",
          "Schema validation and defensive producer/consumer setup",
        ],
      },
      {
        module: "Module 8: Kafka Security",
        lessons: [
          "SSL setup for encryption and authentication",
          "Keystore/truststore configuration",
          "SASL and Active Directory integration",
          "Securing ZooKeeper and brokers",
        ],
      },
      {
        module: "Module 9: Kafka Disaster Recovery",
        lessons: [
          "Replication strategy with MirrorMaker",
          "Rack-aware deployment",
          "High availability architecture tips",
        ],
      },
      {
        module: "Module 10: Kafka Cluster Administration & Monitoring",
        lessons: [
          "Cluster scaling and topic/partition management",
          "Monitoring lag, retention, and compaction",
          "Broker/zookeeper configs and CLI tools",
          "Kafka Migration Tool, Offset Checker, JMX usage",
        ],
      },
      {
        module: "Module 11: Kafka Connect",
        lessons: [
          "Kafka Connect basics and modes",
          "Connector setup, offset tracking, and config",
        ],
      },
      {
        module: "Module 12: Kafka Streams",
        lessons: [
          "Kafka Streams architecture",
          "Low-level API and DSL usage",
          "Building stateful and stateless stream applications",
        ],
      },
    ],
  },
  {
    id: "16",
    slug: "looker-data-exploration-lookml-mastery",
    title: "Looker: Data Exploration & LookML Mastery",
    description:
      "Hands-on Looker course covering everything from data exploration and visualization to LookML modeling, dashboards, and advanced analytics techniques. Build real-world BI use cases with Looker.",
    category: "Business Intelligence",
    duration: "3 weeks",
    difficulty: "Intermediate",
    price: 30000,
    image:
      "https://yt3.googleusercontent.com/46J5M53CFE1sJKFA4P7e-qE_FG0GL24gXD7mmJkrRnJHYDYQLQcHA8VW2mkmiecaA9OEfaOO6w=s160-c-k-c0x00ffffff-no-rj?w=400&h=250&fit=crop&crop=center",
    tags: [
      "Looker",
      "LookML",
      "Data Visualization",
      "Dashboards",
      "BI Tools",
      "Analytics",
      "Table Calculations",
      "SQL Runner",
      "Content Management",
      "Google Cloud",
    ],
    instructor: "Sakshi Iyer",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.6,
    students: 129,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Introduction to Looker",
        lessons: [
          "Looker interface overview",
          "Capabilities of Looker",
          "Navigating Looker components",
        ],
      },
      {
        module: "Module 2: Exploring Data and Creating Visuals",
        lessons: [
          "Building tables, bar charts, line charts, and area charts",
          "Developing scatter plots, funnel charts, and single-value visuals",
          "Creating box plot visualizations",
        ],
      },
      {
        module: "Module 3: Core Analytics in Looker",
        lessons: [
          "Dimensions, Measures, Filters, and Pivots explained",
          "Combining fields for analysis",
          "Filtering and reshaping data using pivots",
        ],
      },
      {
        module: "Module 4: LookML and Modeling Basics",
        lessons: [
          "Looker architecture overview",
          "Views, models, explores",
          "How Looker generates SQL",
          "Using SQL Runner",
          "Making and validating LookML changes",
          "View, model, join, and field parameters",
        ],
      },
      {
        module: "Module 5: Dashboards and Interactivity",
        lessons: [
          "Creating and managing dashboards",
          "Adding filters and custom visuals",
          "Delivering and sharing dashboard insights",
        ],
      },
      {
        module: "Module 6: Content and Folder Management",
        lessons: [
          "Organizing content with folders and boards",
          "Sharing curated content for stakeholders",
          "Centralizing insights across business topics",
        ],
      },
      {
        module: "Module 7: Advanced LookML & Calculations",
        lessons: [
          "Table calculations and offset functions",
          "Using derived tables and reusable LookML",
          "Conditional filters, template filters",
          "Filtering and parameterizing explores",
          "Validating content and adjusting filter suggestions",
        ],
      },
    ],
  },
  {
    id: "17",
    slug: "machine-learning-with-python-intermediate",
    title: "Machine Learning with Python (Intermediate)",
    description:
      "A comprehensive hands-on course covering end-to-end machine learning workflows using Python, from data prep and classical ML to deep learning with CNNs. Build real-world projects using scikit-learn, XGBoost, and TensorFlow/Keras.",
    category: "Machine Learning",
    duration: "5 weeks",
    difficulty: "Intermediate",
    price: 40000,
    image:
      "https://images.unsplash.com/photo-1581092160613-3e7b1e509f3a?q=80&w=400&h=250&fit=crop",
    tags: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "XGBoost",
      "Deep Learning",
      "Neural Networks",
      "CNN",
      "Pandas",
      "Data Visualization",
      "Classification",
      "Regression",
      "Clustering",
      "NLP",
      "Computer Vision",
    ],
    instructor: "Ravi Kumar",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.7,
    students: 281,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Getting Started with Anaconda",
        lessons: [
          "Installing Applications and Creating Environment",
          "Working with Error Messages",
          "Reading CSV and Seaborn Datasets",
          "Data Visualization Basics",
        ],
      },
      {
        module: "Module 2: Regression Techniques",
        lessons: [
          "EDA and Feature Selection",
          "Linear, Multiple & Robust Regression",
          "Polynomial and Regularized Regression",
          "Evaluating Model Performance",
          "Cross-Validation, Variance-Bias Tradeoff",
          "Learning Curves & Feature Importance",
        ],
      },
      {
        module: "Module 3: Classification Techniques",
        lessons: [
          "Logistic Regression, MNIST, SGD",
          "Confusion Matrix, Precision, Recall, F1",
          "Precision-Recall Tradeoff, ROC",
          "Stratified K-Fold and Evaluation",
        ],
      },
      {
        module: "Module 4: Support Vector Machines",
        lessons: [
          "SVM Fundamentals",
          "Linear, Polynomial, RBF Kernel",
          "Support Vector Regression",
        ],
      },
      {
        module: "Module 5: Decision Trees",
        lessons: [
          "Training and Visualizing Trees",
          "Tree Regression and Regularization",
          "Overfitting and Model Deployment",
        ],
      },
      {
        module: "Module 6: Ensemble Learning",
        lessons: [
          "Bagging and Random Forest",
          "Extra-Trees, AdaBoost, Gradient Boosting",
          "XGBoost and HR Analytics Project",
        ],
      },
      {
        module: "Module 7: k-Nearest Neighbors (kNN)",
        lessons: ["kNN Basics and Project: Cancer Detection"],
      },
      {
        module: "Module 8: Dimensionality Reduction",
        lessons: ["PCA, Kernel PCA, LDA vs PCA", "Projects: Wine & Abalone"],
      },
      {
        module: "Module 9: Clustering Techniques",
        lessons: ["k-Means Clustering"],
      },
      {
        module: "Module 10: Deep Learning with Python",
        lessons: [
          "Simple Neural Networks",
          "MNIST and Binary Classification",
          "NLP Project with Neural Networks",
        ],
      },
      {
        module: "Module 11: Foundations of Deep Learning",
        lessons: [
          "Neural Networks Overview",
          "Tensor Operations",
          "Backpropagation and Optimization",
          "Underfitting vs Overfitting",
          "ML Workflow and Categories",
        ],
      },
      {
        module: "Module 12: Computer Vision with CNNs",
        lessons: [
          "CNN Architecture",
          "Layer Types, Pooling, Flattening",
          "Training & Loading Models",
          "Data Augmentation, Transfer Learning",
          "Feature Extraction and SOTA Tools",
        ],
      },
    ],
  },
  {
    id: "18",
    slug: "art-of-choosing-the-correct-db-reliable-scalable-and-maintainable-applications",
    title:
      "Art of Choosing the Correct DB - Reliable, Scalable, and Maintainable Applications",
    description:
      "Explore the foundational principles and design trade-offs behind modern data systems. This course walks through reliability, scalability, data modeling, storage, replication, partitioning, consistency, and consensus, inspired by system design practices and distributed computing.",
    category: "System Design",
    duration: "4 weeks",
    difficulty: "Advanced",
    price: 11999,
    image:
      "https://images.unsplash.com/photo-1634225179283-c1000fbf8968?q=80&w=400&h=250&fit=crop",
    tags: [
      "System Design",
      "Scalability",
      "Reliability",
      "Distributed Systems",
      "CAP Theorem",
      "Data Models",
      "Transactions",
      "Partitioning",
      "Replication",
      "Consensus",
    ],
    instructor: "Ravi Kumar",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.8,
    students: 197,
    featured: false,
    curriculum: [
      {
        module: "Module 1: Principles of Reliable and Scalable Systems",
        lessons: [
          "Thinking About Data Systems",
          "Reliability: Hardware, Software, Human Faults",
          "Scalability and Maintainability",
          "Operability, Simplicity, Evolvability",
        ],
      },
      {
        module: "Module 2: Data Models and Query Languages",
        lessons: [
          "Relational vs Document Models",
          "Object-Relational Mismatch",
          "NoSQL and Modern Data Models",
          "Graph Models: Property Graphs, Cypher, SPARQL",
          "Declarative Queries, MapReduce",
        ],
      },
      {
        module: "Module 3: CAP Theorem and Consistency",
        lessons: [
          "Understanding CAP Theorem and Its Proof",
          "Latency vs Availability",
          "Eventual Consistency",
          "Scaling Relational Databases",
        ],
      },
      {
        module: "Module 4: Storage and Retrieval Internals",
        lessons: [
          "B-Trees, LSM Trees, SSTables, Indexing Structures",
          "OLTP vs OLAP",
          "Column-Oriented Storage",
          "Compression, Materialized Views, Data Cubes",
        ],
      },
      {
        module: "Module 5: Encoding, Evolution, and Dataflow",
        lessons: [
          "Data Encoding: JSON, XML, Thrift, Avro",
          "Schema Evolution and Serialization",
          "REST vs RPC, Message-Passing Models",
        ],
      },
      {
        module: "Module 6: Replication Strategies",
        lessons: [
          "Leader-Follower Replication",
          "Replication Lag and Consistency",
          "Multi-Leader Replication and Conflict Handling",
          "Leaderless Replication, Quorum Models",
        ],
      },
      {
        module: "Module 7: Partitioning and Sharding",
        lessons: [
          "Key Range vs Hash Partitioning",
          "Skewed Workloads and Hotspot Management",
          "Partitioned Secondary Indexes",
          "Rebalancing Strategies and Routing",
        ],
      },
      {
        module: "Module 8: Transactions and Isolation",
        lessons: [
          "ACID Transactions and Weak Isolation Levels",
          "Snapshot Isolation, Repeatable Read, Write Skew",
          "Serializability and 2PL, SSI",
        ],
      },
      {
        module: "Module 9: Challenges in Distributed Systems",
        lessons: [
          "Faults, Network Failures, Clocks, Pauses",
          "Synchronous vs Asynchronous Systems",
          "Truth, Byzantine Faults, and System Models",
        ],
      },
      {
        module: "Module 10: Consistency Models and Consensus",
        lessons: [
          "Linearizability and Implementation",
          "Ordering and Causality",
          "2PC and Atomic Commit",
          "Consensus Algorithms and Coordination Services",
        ],
      },
    ],
  },
  {
    id: "19",
    slug: "mongodb-the-ultimate-administration-developers-guide",
    title: "MongoDB – The Ultimate Administration & Developer's Guide",
    description:
      "Learn MongoDB 7.0 from scratch with hands-on administration, data modeling, performance tuning, replication, sharding, aggregation, and security management.",
    category: "NoSQL",
    duration: "6 weeks",
    difficulty: "Advanced",
    price: 24999,
    image:
      "https://studio3t.com/wp-content/uploads/2020/09/introduction-to-mongodb.png?w=400&h=250&fit=crop&crop=center",
    tags: [
      "MongoDB",
      "NoSQL",
      "Administration",
      "Performance Tuning",
      "Replication",
      "Sharding",
      "Security",
      "Aggregation",
      "Indexing",
      "Data Modeling",
    ],
    instructor: "Firoj Atar",
    bio: "Expert instructor with years of industry experience and proven track record in training professionals.",
    rating: 4.3,
    students: 190,
    featured: false,
    curriculum: [
      {
        module: "Module 1: MongoDB Fundamentals & Setup",
        lessons: [
          "Installing and using MongoDB 7.0 locally on Windows/Linux",
          "CRUD operations: create, read, update, delete",
          "Using Mongo Shell and drivers",
        ],
      },
      {
        module: "Module 2: Data Modeling & Schema",
        lessons: [
          "Flexible schema approach and data modeling best practices",
          "Schema validations and storage engines",
          "Index types and performance optimization with profiling and explain",
        ],
      },
      {
        module: "Module 3: Replication & High Availability",
        lessons: [
          "Replica set setup and high availability",
          "Read/write patterns, disaster recovery",
          "Management tools: mongodump, mongorestore, mongoexport/import, mongostat, mongotop",
        ],
      },
      {
        module: "Module 4: Sharding & Scalability",
        lessons: [
          "Horizontal scaling with sharding",
          "Shard key selection, balancing, and cluster administration",
          "Handling large data volumes in production",
        ],
      },
      {
        module: "Module 5: Performance & Aggregations",
        lessons: [
          "Aggregation framework and pipeline operators",
          "Efficient querying using indexes, collation",
          "Query tuning with explain and performance profiling",
        ],
      },
      {
        module: "Module 6: Security & Maintenance",
        lessons: [
          "Role-based access control and security features",
          "Backup, restore, and maintenance operations",
          "Monitoring and managing MongoDB tools",
        ],
      },
      {
        module: "Module 7: Atlas",
        lessons: [
          "Understanding Atlas and its features",
          "Atlas Query Optimization and Performance Tuning",
          "Atals UI understanding and user management",
        ],
      },
    ],
  },
];
