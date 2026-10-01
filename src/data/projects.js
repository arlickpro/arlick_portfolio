export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
];

export const projects = [
  {
    id: 'task-flow-pro',
    title: 'Task & Workflow Hub',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    shortDescription: 'Collaborative task management with drag-and-drop boards and real-time status tracking.',
    fullDescription: 'A full-stack task management app with a React dashboard, Node.js/Express REST API, and MongoDB for flexible task schema management.',
    imageGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    keyFeatures: [
      'Kanban board with draggable status columns',
      'JWT authentication & protected routes',
      'Filter by priority, deadline, and category',
      'Responsive dark & light mode interface'
    ],
    architecture: {
      client: 'React with Tailwind CSS and context state',
      server: 'Express.js RESTful API with validation middleware',
      database: 'MongoDB with Mongoose schemas'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  },
  {
    id: 'commerce-storefront',
    title: 'E-Commerce Storefront',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    shortDescription: 'Online store with product catalog, cart management, and order processing API.',
    fullDescription: 'A modern e-commerce app with product search, category filtering, persistent cart management, and a MySQL backend for products and orders.',
    imageGradient: 'from-cyan-600 via-teal-600 to-emerald-600',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Express.js', 'MySQL'],
    keyFeatures: [
      'Client-side product search & multi-criteria filters',
      'Cart with local storage persistence',
      'MySQL relational database for products & orders',
      'Optimized image loading & mobile checkout'
    ],
    architecture: {
      client: 'React SPA with utility-first Tailwind CSS',
      server: 'Node.js/Express for product catalogs and orders',
      database: 'MySQL relational schema with foreign key integrity'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  },
  {
    id: 'dev-analytics-dashboard',
    title: 'Developer Analytics Dashboard',
    category: 'frontend',
    categoryLabel: 'Frontend',
    shortDescription: 'Interactive dashboard with real-time metrics, charts, and configurable data tables.',
    fullDescription: 'A developer-focused analytics UI with reactive charts, metric cards with delta indicators, and quick filter controls.',
    imageGradient: 'from-purple-600 via-pink-600 to-rose-600',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    keyFeatures: [
      'Data visualization cards with dynamic trends',
      'Time-range filters (24h, 7d, 30d)',
      'Sortable & paginated data tables',
      'Glassmorphic dark-mode interface'
    ],
    architecture: {
      client: 'React with custom hooks for async data loading',
      server: 'Mock REST endpoints',
      database: 'Configurable JSON data structures'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  },
  {
    id: 'auth-vault-api',
    title: 'Auth & User Service API',
    category: 'backend',
    categoryLabel: 'Backend',
    shortDescription: 'REST API for user registration, encrypted login, JWT issuance, and role-based access.',
    fullDescription: 'A backend authentication microservice with bcrypt password hashing, JWT verification, rate limiting, and structured error responses.',
    imageGradient: 'from-amber-600 via-orange-600 to-red-600',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    keyFeatures: [
      'Bcrypt password hashing',
      'Stateless JWT tokens & verification middleware',
      'Input validation on all endpoints',
      'MySQL schema for user profiles & roles'
    ],
    architecture: {
      client: 'API consumer agnostic (web & mobile compatible)',
      server: 'Express.js with MVC pattern',
      database: 'MySQL with parameterized queries'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  },
  {
    id: 'corporate-portal',
    title: 'Business Showcase Portal',
    category: 'frontend',
    categoryLabel: 'Frontend',
    shortDescription: 'Responsive multi-section web portal with smooth navigation and contact flows.',
    fullDescription: 'A sleek corporate web app with smooth scrolling, animated hero, accessible UI, and fast performance across all devices.',
    imageGradient: 'from-emerald-600 via-teal-700 to-cyan-700',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML'],
    keyFeatures: [
      'Adaptive layouts for all screen sizes',
      'Micro-interactions & scroll spy navigation',
      'Semantic HTML5 & high accessibility',
      'Lightweight bundle, zero layout shifts'
    ],
    architecture: {
      client: 'React with Tailwind CSS and modern animations',
      server: 'Static web hosting ready',
      database: 'N/A'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  },
  {
    id: 'cloud-notes-api',
    title: 'Cloud Notes Backend API',
    category: 'backend',
    categoryLabel: 'Backend',
    shortDescription: 'RESTful API for note authoring, tagging, full-text search, and category management.',
    fullDescription: 'A server-side app for document creation, hierarchical tagging, search queries, and content revisions backed by MongoDB.',
    imageGradient: 'from-indigo-600 via-blue-600 to-cyan-600',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    keyFeatures: [
      'Full CRUD for documents and tags',
      'MongoDB text indexing for keyword search',
      'Paginated & sorted query results',
      'Structured JSON error responses'
    ],
    architecture: {
      client: 'Postman-tested REST endpoints',
      server: 'Express.js with modular routing',
      database: 'MongoDB with indexing on searchable fields'
    },
    demoUrl: null,
    githubUrl: null,
    isEditableSample: true,
  }
];
