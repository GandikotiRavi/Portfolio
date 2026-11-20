const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const profile = {
  name: "Gandikota Ravi Chandra",
  headline: "Full Stack Engineer | Cloud Computing Enthusiast | Problem Solver",
  about: "Enthusiastic and driven Computer Science student at RMK College of Engineering and Technology (Class of 2027) with hands-on experience as a Full Stack Engineer at Thiranex. Creator of TransplantIQ, institutional management systems (Hostel Management & Student Management), and modern full-stack web applications. Skilled in developing responsive frontends, designing robust RESTful APIs, and implementing scalable cloud and database solutions.",
  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering (Cloud Computing)",
      institution: "R.M.K. College of Engineering and Technology (RMKCET)",
      location: "Chennai, Tamil Nadu, India",
      period: "2023 - 2027",
      score: "CGPA: 7.41 / 10.0",
      status: "Graduating 2027"
    },
    {
      degree: "Higher Secondary / Intermediate (Class XII)",
      field: "MPC (Mathematics, Physics & Chemistry)",
      institution: "Narayana Junior College",
      location: "Nellore, Andhra Pradesh",
      period: "2021 - 2023",
      score: "Marks: 91%",
      status: "First Class with Distinction (91%)"
    },
    {
      degree: "Secondary School Certificate (10th Standard / Class X)",
      field: "General Academic Curriculum",
      institution: "Narayana High School",
      location: "Nellore, Andhra Pradesh",
      period: "2020 - 2021",
      score: "Marks: 98%",
      status: "Outstanding Academic Excellence (98%)"
    }
  ],
  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Thiranex",
      period: "Jun 4 – Jul 3",
      highlights: [
        "Built and deployed a full-stack Task Management Application using React.js, Node.js, Express.js, and MongoDB.",
        "Centralized dashboard enabling users to create, assign, and track tasks with secure authentication and real-time status updates.",
        "Engineered RESTful APIs with Node.js and Express to power core business features."
      ]
    },
    {
      role: "Web Development Intern",
      company: "StaxTech",
      period: "Jul 10 – Aug 10",
      highlights: [
        "Developed a responsive e-commerce website using HTML, CSS, and JavaScript, including product listings and persistent cart storage via localStorage.",
        "Built an interactive quiz game with real-time countdown timer, dynamic questions, and scoring logic."
      ]
    }
  ],
  certifications: [
    "Microsoft Certified: SQL AI Developer Associate",
    "Oracle Certification",
    "Thiranex Full Stack Internship Certificate",
    "StaxTech Web Development Certificate"
  ],
  skills: {
    frontend: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ES6+)", "Responsive Web Design", "UI / UX Design", "DOM Manipulation", "CSS Grid & Flexbox"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "API Design", "CRUD Operations", "Middleware Architecture", "CORS Integration"],
    cloudAndTools: ["Git & GitHub", "Cloud Computing Basics", "Database Management", "VS Code", "Postman", "CI/CD Concepts", "NPM Package Management"]
  },
  contact: {
    email: "gandcs048@rmkcet.ac.in",
    github: "https://github.com/GandikotiRavi",
    linkedin: "https://www.linkedin.com/in/gandikotaravi/",
    location: "Chennai, India"
  }
};

const projects = [
  {
    id: 1,
    title: "TransplantIQ - Agentic AI Organ Transplant Coordination",
    category: "healthcare",
    badge: "Flagship / Healthcare AI",
    icon: "🫀",
    bannerStyle: "background: linear-gradient(135deg, rgba(236, 72, 153, 0.35), rgba(99, 102, 241, 0.4));",
    description: "An Agentic AI-powered organ transplant coordination and clinical decision support system (Db2Hack 2026). Features automated donor-recipient compatibility assessment, critical organ status & transit tracking, and clinical workflow synchronization.",
    technologies: ["Python", "Node.js", "Express.js", "Agentic AI", "RESTful APIs", "Modern UI/UX"],
    githubUrl: "https://github.com/GandikotiRavi/TransplantIQ",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Smart Hostel Management System",
    category: "management",
    badge: "Management System",
    icon: "🏢",
    bannerStyle: "background: linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(239, 68, 68, 0.4));",
    description: "An end-to-end residential accommodation platform designed for college campuses and hostels. Automates room allocation, resident onboarding, leave application approvals, maintenance complaint ticketing, and real-time room occupancy analytics.",
    technologies: ["JavaScript (ES6+)", "Node.js", "Express.js", "Database CRUD", "CSS3 Flexbox", "REST APIs"],
    githubUrl: "https://github.com/GandikotiRavi/Hostel-Management-System",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Academic Student Management System",
    category: "management",
    badge: "EdTech & Management",
    icon: "🎓",
    bannerStyle: "background: linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(6, 182, 212, 0.4));",
    description: "A centralized academic administration platform for educational institutions to manage complete student lifecycle records: course enrollment, semester attendance monitoring, internal assessment grading, and automated report card generation.",
    technologies: ["JavaScript", "Node.js", "Express.js", "REST APIs", "Database Management", "UI Dashboards"],
    githubUrl: "https://github.com/GandikotiRavi",
    liveUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Task Management Application (TaskFlow)",
    category: "webapps",
    badge: "Full Stack & Productivity",
    icon: "📝",
    bannerStyle: "background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.3));",
    description: "A comprehensive full-stack task management application enabling users to organize goals, categorize tasks by priority, update completion status, track deadlines, and persist records with secure authentication and real-time status updates.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/GandikotiRavi/Task-Management-Application",
    liveUrl: "#",
    featured: true
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    category: "webapps",
    badge: "Portfolio & Web App",
    icon: "🌐",
    bannerStyle: "background: linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(99, 102, 241, 0.35));",
    description: "A modern, responsive full-stack developer portfolio featuring glassmorphic design, dynamic REST API backend integration, custom dark/light theme switching, and interactive project showcases.",
    technologies: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ES6+)", "Node.js", "Express.js", "REST APIs"],
    githubUrl: "https://github.com/GandikotiRavi/Portfolio",
    liveUrl: "#",
    featured: true
  }
];

app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server active on http://localhost:${PORT}`);
});
