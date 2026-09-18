export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  details: string;
  team: string;
  technologies: string[];
  keyFeatures: string[];
  highlightedFeatures: {
    name: string;
    description: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    type: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  board?: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  status?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  type: 'certification' | 'workshop' | 'competition';
  categoryLabel?: string;
}

export const PERSONAL_INFO = {
  name: 'DIVYASHRI',
  title: 'Information Science & Engineering Student',
  subtitle: 'Frontend Developer',
  phone: '+91-9380785751',
  email: 'divyashrinayak5@gmail.com',
  github: 'https://github.com/Divyashri443',
  linkedin: 'https://www.linkedin.com/in/divyashri-aa9ba8296',
  location: 'Karnataka, India',
  summary:
    'Information Science & Engineering student passionate about frontend development, user-friendly web interfaces, JavaScript, React.js, and building practical web applications.',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    description: 'Core logic, object-oriented systems & algorithmic problem solving',
    skills: [
      { name: 'C', type: 'Language' },
      { name: 'Java', type: 'Language / OOP' },
    ],
  },
  {
    category: 'Web Development',
    description: 'Semantic markup, styling and client-side interactivity',
    skills: [
      { name: 'HTML', type: 'Structure' },
      { name: 'CSS', type: 'Styling & Layout' },
      { name: 'JavaScript', type: 'Scripting & Frontend' },
      { name: 'React.js', type: 'Frontend Library / UI' },
    ],
  },
  {
    category: 'Database',
    description: 'Structured query operations and document data management',
    skills: [
      { name: 'SQL', type: 'Relational Database' },
      { name: 'MongoDB', type: 'NoSQL Document Store' },
    ],
  },
  {
    category: 'Development Tools',
    description: 'Integrated development environments and scientific compute notebooks',
    skills: [
      { name: 'Eclipse IDE', type: 'Java IDE' },
      { name: 'Visual Studio Code', type: 'Code Editor' },
      { name: 'PyCharm', type: 'Python IDE' },
      { name: 'Code::Blocks', type: 'C/C++ IDE' },
      { name: 'Jupyter Notebook', type: 'Interactive Computing' },
    ],
  },
  {
    category: 'Office Tools',
    description: 'Professional documentation, presentations and numerical spreadsheets',
    skills: [
      { name: 'MS PowerPoint', type: 'Presentations' },
      { name: 'MS Word', type: 'Documentation' },
      { name: 'MS Excel', type: 'Spreadsheets & Data' },
    ],
  },
];

export const INTERNSHIP = {
  company: 'InnoByte Services',
  role: 'Full Stack Developer Intern',
  duration: 'November 2025',
  project: 'Blog API Project',
  architecture: 'RESTful Architecture & CRUD Operations',
  description:
    'Developed a Blog API project using RESTful architecture and implemented CRUD operations for efficient data handling. Gained practical exposure to backend development, debugging, and code optimization while improving problem-solving skills and teamwork.',
  keyHighlights: [
    'Developed a Blog API using RESTful architecture.',
    'Implemented create, retrieve, update, and delete operations for data handling.',
    'Gained practical experience in debugging and improving code quality.',
    'Improved problem-solving and teamwork through project development.',
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'careercore',
    title: 'CareerCore',
    subtitle: 'Placement Intelligence Platform',
    badge: 'AI-Driven Platform',
    team: 'Group of 4',
    description:
      'A full-stack placement intelligence platform developed as a group of 4 using React.js, Node.js, MongoDB, Python (ML), REST APIs, and JWT to connect students, faculty, and recruiters in a unified system.',
    details:
      'The platform calculates a dynamic Placement Readiness Score (PRS) using multiple parameters such as skills, projects, certifications, and assessments to evaluate student employability.',
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Python (ML)',
      'REST APIs',
      'JWT',
    ],
    keyFeatures: [
      'Personalized roadmap engine',
      'Skill gap analysis by comparing student profiles with industry requirements',
      'Digital portfolio builder with faculty verification',
      'Faculty dashboards to monitor student progress',
      'Data-driven decision support for placement activities',
    ],
    highlightedFeatures: [
      {
        name: 'Placement Readiness Score',
        description:
          'Dynamic multi-parameter algorithm assessing student employability based on verified skills, projects, certifications, and test assessments.',
      },
      {
        name: 'Skill Gap Analysis',
        description:
          'Automated comparative evaluation highlighting competencies required by target industry recruiters versus the student profile.',
      },
      {
        name: 'Roadmap Engine',
        description:
          'Tailored milestone generator that outlines step-by-step career milestones to close verified qualification deficits.',
      },
      {
        name: 'Digital Portfolio',
        description:
          'Centralized credentials showcase equipped with formal faculty verification workflows to validate candidate authenticity.',
      },
      {
        name: 'Faculty Dashboard',
        description:
          'Real-time administrative observatory empowering faculty to monitor student batch progress and provide placement decision support.',
      },
    ],
    githubUrl: 'https://github.com/Divyashri443',
    liveUrl: '#careercore',
  },
  {
    id: 'quizmaster',
    title: 'QuizMaster',
    subtitle: 'Web-Based Quiz Application',
    badge: 'Interactive Learning',
    team: 'Individual Project',
    description:
      'Developed an interactive web-based quiz application using React.js, HTML, CSS, and JavaScript to support student learning through category-based quizzes and self-assessment.',
    details:
      'Engineered with an intuitive modern frontend, strict validation mechanisms, and dynamic evaluation to create a seamless self-assessment experience.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    keyFeatures: [
      'Secure user authentication',
      'Validated login and registration',
      'Password validation',
      'Dynamic quiz engine',
      'Randomized questions',
      'Multiple quiz categories',
      'User-friendly interactive learning experience',
    ],
    highlightedFeatures: [
      {
        name: 'Authentication',
        description:
          'Robust client-side access control with field validation and password format verification protecting student test sessions.',
      },
      {
        name: 'Randomized Questions',
        description:
          'Algorithmic question shuffler ensuring every quiz attempt presents an unbiased, randomized assessment challenge.',
      },
      {
        name: 'Multiple Categories',
        description:
          'Categorized topical knowledge modules catering to varied subject domains and student self-assessment objectives.',
      },
      {
        name: 'Interactive Quiz Experience',
        description:
          'Instant scoring, responsive question navigation, clean countdown timers, and comprehensive performance feedback.',
      },
    ],
    githubUrl: 'https://github.com/Divyashri443',
    liveUrl: '#quizmaster',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering – Information Science & Engineering',
    institution: 'Mangalore Institute of Technology and Engineering',
    duration: '2023 – Present',
    scoreLabel: 'CGPA',
    scoreValue: '9.29',
    status: 'Currently Pursuing',
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'Government PU College, Bailur, Udupi',
    board: 'KSEAB',
    duration: '2023',
    scoreLabel: 'Percentage',
    scoreValue: '93.5%',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Government PU College, Bailur, Udupi',
    board: 'KSEEB',
    duration: '2021',
    scoreLabel: 'Percentage',
    scoreValue: '96.32%',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'coursera-java',
    title: 'Certified in Crash Course on Java',
    issuer: 'Coursera',
    type: 'certification',
    categoryLabel: 'Certification',
  },
  {
    id: 'nptel-datamining',
    title: 'NPTEL Certification – "DATA MINING"',
    issuer: 'Authorized by IIT Kharagpur',
    year: '2026',
    type: 'certification',
    categoryLabel: 'Certification',
  },
  {
    id: 'arduino-workshop',
    title: 'Hands-on Experience on Arduino UNO Workshop',
    issuer: 'Mangalore Institute of Technology & Engineering',
    year: 'May 2025',
    type: 'workshop',
    categoryLabel: 'Technical Workshop',
  },
  {
    id: 'genai-workshop',
    title: 'Generative AI Workshop',
    issuer: 'GrowthSchool',
    year: 'April 2026',
    type: 'workshop',
    categoryLabel: 'Workshop',
  },
  {
    id: 'tata-challenge',
    title: 'Tata Imagination Challenge',
    issuer: 'Tata Group',
    year: '2025',
    type: 'competition',
    categoryLabel: 'Competition',
  },
];
