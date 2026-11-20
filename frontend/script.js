/**
 * GANDIKOTA RAVI CHANDRA - PORTFOLIO INTERACTIVITY
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbarScroll();
  initMobileMenu();
  initProjectFiltering();
  initCopyEmail();
  initContactForm();
  loadProjects();
  initScrollSpy();
});

/* ========================================================
   THEME TOGGLE (Dark / Light Mode)
   ======================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme} mode!`, '🎨');
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ========================================================
   NAVBAR SCROLL BEHAVIOR & SCROLLSPY
   ======================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ========================================================
   MOBILE NAVIGATION MENU
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggleBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.textContent = '☰';
    });
  });
}

/* ========================================================
   PROJECT FILTERING
   ======================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const projectCards = document.querySelectorAll('.project-card');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ========================================================
   PROJECT LOADER & BACKEND API INTEGRATION
   ======================================================== */
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "TransplantIQ - Agentic AI Organ Transplant Coordination",
    category: "healthcare",
    badge: "Flagship / Healthcare AI",
    icon: "🫀",
    bannerStyle: "background: linear-gradient(135deg, rgba(236, 72, 153, 0.35), rgba(99, 102, 241, 0.4));",
    description: "An Agentic AI-powered organ transplant coordination and clinical decision support system (Db2Hack 2026). Features automated donor-recipient compatibility assessment, critical organ status & transit tracking, and clinical workflow synchronization.",
    technologies: ["Python", "Node.js", "Express.js", "Agentic AI", "RESTful APIs", "Modern UI/UX"],
    githubUrl: "https://github.com/GandikotiRavi/TransplantIQ"
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
    githubUrl: "https://github.com/GandikotiRavi/Hostel-Management-System"
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
    githubUrl: "https://github.com/GandikotiRavi"
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
    githubUrl: "https://github.com/GandikotiRavi/Task-Management-Application"
  }
];

function loadProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  fetch('http://localhost:5000/api/projects')
    .then(res => {
      if (!res.ok) throw new Error('Network response error');
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        renderProjects(data, container);
      }
    })
    .catch(err => {
      console.log('Backend server offline or running in client mode; displaying full project catalog:', err.message);
      renderProjects(FALLBACK_PROJECTS, container);
    });
}

function renderProjects(projectsList, container) {
  const iconMap = {
    healthcare: '🫀',
    management: '🏢',
    webapps: '📝'
  };

  const gradientMap = {
    healthcare: 'linear-gradient(135deg, rgba(236, 72, 153, 0.35), rgba(99, 102, 241, 0.4))',
    management: 'linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(239, 68, 68, 0.4))',
    webapps: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.3))'
  };

  container.innerHTML = projectsList.map(project => {
    const icon = project.icon || iconMap[project.category] || '💻';
    const bannerStyle = project.bannerStyle || `background: ${gradientMap[project.category] || gradientMap.webapps};`;
    const techTags = (project.technologies || []).map(t => `<span class="tech-pill">${t}</span>`).join('');
    const badge = project.badge || (project.category ? project.category.toUpperCase() : 'PROJECT');

    return `
      <div class="project-card" data-category="${project.category || 'webapps'}">
        <div class="project-card-banner" style="${bannerStyle}">
          <span class="project-banner-icon">${icon}</span>
          <span class="project-category-badge">${badge}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description || 'Full stack software solution engineered with modern best practices.'}</p>
          <div class="project-tech-stack">
            ${techTags}
          </div>
          <div class="project-card-footer">
            <a href="${project.githubUrl || 'https://github.com/GandikotiRavi'}" target="_blank" rel="noopener noreferrer" class="project-link">
              <span>View Code & Repo</span> →
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
}

/* ========================================================
   COPY EMAIL CLIPBOARD
   ======================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailLink = document.getElementById('email-link');

  if (!copyBtn || !emailLink) return;

  copyBtn.addEventListener('click', () => {
    const email = emailLink.textContent.trim();
    navigator.clipboard.writeText(email)
      .then(() => {
        showToast('Email address copied to clipboard!', '📋');
      })
      .catch(() => {
        showToast('Failed to copy email', '❌');
      });
  });
}

/* ========================================================
   CONTACT FORM SUBMISSION
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();

    // Show immediate positive feedback
    showToast(`Thank you, ${name || 'friend'}! Your message has been sent.`, '🚀');
    form.reset();
  });
}

/* ========================================================
   TOAST NOTIFICATION HELPER
   ======================================================== */
let toastTimeout;
function showToast(message, icon = '✅') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast) return;

  toastMsg.textContent = message;
  toastIcon.textContent = icon;

  toast.classList.add('show');
  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
