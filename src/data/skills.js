export const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Tools & Workflow' },
];

export const skills = [
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    level: 'Core Framework',
    description: 'Component architecture, Hooks, State management, SPA development, Virtual DOM optimization',
    tag: 'Frontend',
    highlight: true,
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'Core Language',
    description: 'ES6+ features, Asynchronous JS (Promises, async/await), DOM manipulation, Event loop',
    tag: 'Frontend',
    highlight: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Styling & Design',
    description: 'Utility-first styling, Responsive layouts, Dark mode design, Custom design tokens',
    tag: 'Frontend',
    highlight: true,
  },
  {
    name: 'HTML',
    category: 'frontend',
    level: 'Web Standard',
    description: 'Semantic HTML5 structure, Accessibility (a11y), SEO-friendly markup',
    tag: 'Frontend',
    highlight: false,
  },
  {
    name: 'CSS',
    category: 'frontend',
    level: 'Styling',
    description: 'Flexbox, CSS Grid, Transitions, Keyframe animations, Responsive media queries',
    tag: 'Frontend',
    highlight: false,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Server Runtime',
    description: 'Non-blocking I/O runtime, npm package ecosystem, Server-side JavaScript architecture',
    tag: 'Backend',
    highlight: true,
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Backend Framework',
    description: 'RESTful API routing, Custom middleware, Request validation, Error handling pipelines',
    tag: 'Backend',
    highlight: true,
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    level: 'Relational Database',
    description: 'Relational schema design, SQL queries, Primary/Foreign keys, Data integrity & indexing',
    tag: 'Databases',
    highlight: true,
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 'NoSQL Document Store',
    description: 'Document collections, BSON schemas, Aggregation pipelines, CRUD operations',
    tag: 'Databases',
    highlight: true,
  },

  // Tools
  {
    name: 'REST APIs',
    category: 'tools',
    level: 'Architecture',
    description: 'HTTP methods, JSON payloads, Status codes, Authentication headers, Postman testing',
    tag: 'Tools',
    highlight: true,
  },
  {
    name: 'Git',
    category: 'tools',
    level: 'Version Control',
    description: 'Branch management, Commits, Merges, Conflict resolution, Version control workflows',
    tag: 'Tools',
    highlight: true,
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 'Collaboration',
    description: 'Remote repositories, Code hosting, Pull requests, Issue tracking',
    tag: 'Tools',
    highlight: false,
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 'Development Environment',
    description: 'Productivity configuration, Debugging, Extensions, Integrated terminal workflow',
    tag: 'Tools',
    highlight: false,
  },
];
