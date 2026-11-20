# Gandikota Ravi Chandra - Personal Portfolio Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

A modern, responsive, and visually attractive full-stack developer portfolio designed and built for **Gandikota Ravi Chandra**, showcasing technical expertise, real-world industry experience at **Thiranex**, academic background at **RMK College of Engineering and Technology (RMKCET)**, and core projects including **TransplantIQ**, **Hostel Management**, and **Student Management**.

---

## 🌟 Key Highlights & Design Upgrades

- **Attractive Modern Aesthetic**: Replaced basic monochrome styling with a radiant dark-mode glassmorphism theme, dynamic glowing gradients (indigo, violet, cyan, magenta), and smooth transitions.
- **TransplantIQ & Management Systems**: Prominently spotlights flagship projects:
  - **TransplantIQ**: Agentic AI-Powered Organ Transplant Coordination and Decision Support Platform ([View Code](https://github.com/GandikotiRavi/TransplantIQ)).
  - **Smart Hostel Management System**: End-to-end residential accommodation, room allocation, and occupancy tracking ([View Code](https://github.com/GandikotiRavi/Hostel-Management-System)).
  - **Academic Student Management System**: Centralized academic lifecycle, attendance tracking, and performance reporting ([View Code](https://github.com/GandikotiRavi)).
  - **Task Management Application (TaskFlow)**: Full-stack task organization and workflow tracker with real-time updates ([View Code](https://github.com/GandikotiRavi/Task-Management-Application)).
  - **Personal Portfolio Website**: Modern responsive developer portfolio with REST API integration and theme toggle ([View Code](https://github.com/GandikotiRavi/Portfolio)).
- **Available for Opportunities**: Actively seeking opportunities in **Web Development**, **Software Development**, and **Software Engineering** (Full-time & Internships).
- **Dark / Light Mode**: Built-in interactive theme switcher with persistence via `localStorage`.
- **Integrated Profile Photo**: High-resolution professional portrait featuring an animated glowing frame and status pills.
- **LinkedIn & Professional Experience**: Comprehensive highlights of experience as a **Full Stack Engineer at Thiranex** and academic status (B.Tech in Computer Science and Engineering, Class of 2027).
- **Interactive Project Filtering**: Filter projects seamlessly by category (All, Healthcare & AI, Management Systems, Full Stack Apps).
- **REST API Integration**: Dynamic client-server communication with an Express.js backend (`/api/projects` and `/api/profile`), with fallback data rendering.
- **Contact & Micro-Interactions**: Working contact form with instant toast feedback, one-click email copying, and social media links.
- **Mobile Responsive**: Fully responsive layout with mobile drawer navigation.

---

## 👨‍💻 About Developer

**Gandikota Ravi Chandra**
- **Headline**: Full Stack Engineer | Cloud Computing Enthusiast | Problem Solver
- **Education**: 
  - **B.E. (CSE - Cloud Computing)**: R.M.K. College of Engineering and Technology (RMKCET) (2023 - 2027) | *CGPA: 7.41 / 10.0*
  - **Intermediate (Class XII - MPC)**: Narayana Junior College (2021 - 2023) | *Marks: 91% (Distinction)*
  - **10th Standard (SSC)**: Narayana High School (2020 - 2021) | *Marks: 98% (Distinction)*
- **Experience**: 
  - Full Stack Development Intern at Thiranex (Jun 4 – Jul 3)
  - Web Development Intern at StaxTech (Jul 10 – Aug 10)
- **Contact**:
  - Phone: +91 8522093987
  - Email: [gandikotiravi649@gmail.com](mailto:gandikotiravi649@gmail.com) / [gandcs048@rmkcet.ac.in](mailto:gandcs048@rmkcet.ac.in)
  - Location: Nellore, Andhra Pradesh / Chennai, India
- **LinkedIn**: [linkedin.com/in/gandikotaravi/](https://www.linkedin.com/in/gandikotaravi/)
- **GitHub**: [github.com/GandikotiRavi](https://github.com/GandikotiRavi)

---

## 🛠️ Tech Stack

### Frontend
- **HTML5 & Modern CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism, animations, responsive design.
- **JavaScript (ES6+)**: Dynamic DOM manipulation, theme persistence, interactive filtering, clipboard API, and REST API consumption.
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).

### Backend
- **Node.js**: Asynchronous event-driven JavaScript runtime.
- **Express.js**: Lightweight web framework providing REST endpoints (`/api/projects`, `/api/profile`).
- **CORS**: Cross-origin resource sharing middleware.

---

## 📂 Project Structure

```
portfolio-website/
│
├── frontend/
│   ├── assets/
│   │   └── profile.jpg         # Profile photo
│   ├── index.html              # Modern, attractive portfolio markup
│   ├── style.css               # Radiant dark/light gradient & glassmorphism styles
│   └── script.js               # Theme toggle, API integration, filters, toasts
│
├── backend/
│   ├── server.js               # Express REST API server (/api/projects, /api/profile)
│   ├── package.json            # Node.js dependencies
│   └── package-lock.json
│
└── README.md
```

---

## 🚀 Running the Project

### Option 1: View Frontend Directly
Open `frontend/index.html` directly in any web browser. All sections, projects, and animations work out-of-the-box with built-in fallbacks.

### Option 2: Run Full Stack (Frontend + Backend)

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Express backend server:
   ```bash
   node server.js
   ```
   The backend will be running at `http://localhost:5000`.

4. Open `frontend/index.html` in your browser. The projects and profile will dynamically sync with the backend REST API!

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
