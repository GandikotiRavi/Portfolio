/**
 * GANDIKOTA RAVI CHANDRA - 3D INTERACTIVE DEVELOPER PORTFOLIO
 * 3D Page Transition Engine & Cybernetic Visualizer
 */

document.addEventListener('DOMContentLoaded', () => {
  init3DCanvas();
  init3DPageTransitions();
  init3DCardTilt();
  initHeroParallax();
  initProjectFiltering();
  initCopyEmail();
  initContactForm();
  initMobileMenu();
});

/* ========================================================
   1. INTERACTIVE 3D PARTICLE CONSTELLATION & CYBER MESH
   ======================================================== */
function init3DCanvas() {
  const canvas = document.getElementById('cyber-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 3D Nodes setup
  const NUM_NODES = Math.min(110, Math.floor((width * height) / 12000));
  const nodes = [];
  const FOV = 420;

  let mouseX = 0;
  let mouseY = 0;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - width / 2) / (width / 2);
    mouseY = (e.clientY - height / 2) / (height / 2);
    targetRotY = mouseX * 0.45;
    targetRotX = -mouseY * 0.35;
  });

  for (let i = 0; i < NUM_NODES; i++) {
    nodes.push({
      x: (Math.random() - 0.5) * 1100,
      y: (Math.random() - 0.5) * 850,
      z: (Math.random() - 0.5) * 800,
      baseRadius: Math.random() * 2 + 1,
      colorType: Math.random() > 0.4 ? 'crimson' : Math.random() > 0.5 ? 'orange' : 'violet',
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      vz: (Math.random() - 0.5) * 0.6
    });
  }

  // Floating embers
  const embers = [];
  const NUM_EMBERS = 25;
  for (let i = 0; i < NUM_EMBERS; i++) {
    embers.push({
      x: width * 0.5 + (Math.random() - 0.5) * 400,
      y: height * 0.5 + Math.random() * 300,
      size: Math.random() * 2.5 + 0.8,
      speedY: Math.random() * 0.9 + 0.3,
      speedX: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.8 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Smooth lerp rotation based on mouse
    currentRotX += (targetRotX - currentRotX) * 0.05;
    currentRotY += (targetRotY - currentRotY) * 0.05;

    const cosX = Math.cos(currentRotX);
    const sinX = Math.sin(currentRotX);
    const cosY = Math.cos(currentRotY);
    const sinY = Math.sin(currentRotY);

    const projectedNodes = [];

    // Project 3D nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Drift in 3D
      node.x += node.vx;
      node.y += node.vy;
      node.z += node.vz;

      if (node.x > 550) node.x = -550;
      if (node.x < -550) node.x = 550;
      if (node.y > 450) node.y = -450;
      if (node.y < -450) node.y = 450;
      if (node.z > 400) node.z = -400;
      if (node.z < -400) node.z = 400;

      // 3D Rotation Y
      const x1 = node.x * cosY + node.z * sinY;
      const z1 = -node.x * sinY + node.z * cosY;

      // 3D Rotation X
      const y2 = node.y * cosX - z1 * sinX;
      const z2 = node.y * sinX + z1 * cosX;

      const scale = FOV / (FOV + z2 + 500);

      if (scale > 0) {
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y2 * scale;
        const radius = node.baseRadius * scale;
        const alpha = Math.max(0.1, Math.min(0.85, (z2 + 400) / 800));

        projectedNodes.push({
          x: projX,
          y: projY,
          radius,
          alpha,
          colorType: node.colorType,
          depth: z2
        });
      }
    }

    // Draw connection lines
    ctx.lineWidth = 0.8;
    for (let i = 0; i < projectedNodes.length; i++) {
      for (let j = i + 1; j < projectedNodes.length; j++) {
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const lineAlpha = (1 - dist / 115) * 0.18 * ((p1.alpha + p2.alpha) / 2);
          ctx.strokeStyle = `rgba(239, 68, 68, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Draw 3D nodes
    for (let i = 0; i < projectedNodes.length; i++) {
      const p = projectedNodes[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      let color = '239, 68, 68';
      if (p.colorType === 'orange') color = '249, 115, 22';
      if (p.colorType === 'violet') color = '139, 92, 246';

      ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
      ctx.shadowColor = `rgba(${color}, 0.8)`;
      ctx.shadowBlur = 8 * p.radius;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw floating embers
    for (let i = 0; i < embers.length; i++) {
      const ember = embers[i];
      ember.y -= ember.speedY;
      ember.x += ember.speedX;
      ember.alpha -= 0.002;

      if (ember.y < height * 0.2 || ember.alpha <= 0) {
        ember.y = height * 0.75 + Math.random() * 150;
        ember.x = width * 0.5 + (Math.random() - 0.5) * 450;
        ember.alpha = Math.random() * 0.7 + 0.3;
      }

      ctx.beginPath();
      ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(249, 115, 22, ${ember.alpha})`;
      ctx.shadowColor = 'rgba(239, 68, 68, 0.9)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ========================================================
   2. 3D PAGE TRANSITION ENGINE
   ======================================================== */
function init3DPageTransitions() {
  const pages = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  let currentPageId = 'home';
  let isTransitioning = false;

  const wipeOverlay = document.getElementById('cyber-wipe');
  const dockBtns = document.querySelectorAll('.dock-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  // Check URL Hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && pages.includes(hash)) {
    switchPage(hash, false);
  }

  function switchPage(targetPageId, animated = true) {
    if (!pages.includes(targetPageId)) return;
    if (targetPageId === currentPageId && !animated) return;
    if (isTransitioning) return;

    const currentIndex = pages.indexOf(currentPageId);
    const targetIndex = pages.indexOf(targetPageId);
    if (targetIndex === -1) return;

    const direction = targetIndex >= currentIndex ? 'next' : 'prev';
    const currentPageEl = document.getElementById(currentPageId);
    const targetPageEl = document.getElementById(targetPageId);

    if (!targetPageEl || !currentPageEl) return;

    if (!animated) {
      document.querySelectorAll('.section-page-3d').forEach((sec) => {
        sec.classList.remove('page-active', 'page-exit-left', 'page-enter-right', 'page-exit-right', 'page-enter-left');
      });
      targetPageEl.classList.add('page-active');
      currentPageId = targetPageId;
      updateActiveStates(targetPageId);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    isTransitioning = true;

    // Trigger Cyber Beam Wipe
    if (wipeOverlay) {
      wipeOverlay.classList.add('active');
    }

    // Set 3D Exit & Enter classes
    if (direction === 'next') {
      currentPageEl.classList.add('page-exit-left');
      targetPageEl.classList.add('page-enter-right');
    } else {
      currentPageEl.classList.add('page-exit-right');
      targetPageEl.classList.add('page-enter-left');
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Switch active states after half transition
    setTimeout(() => {
      currentPageEl.classList.remove('page-active');
      targetPageEl.classList.remove('page-enter-right', 'page-enter-left');
      targetPageEl.classList.add('page-active');

      currentPageId = targetPageId;
      updateActiveStates(targetPageId);

      // Update URL hash without jumping
      history.pushState(null, null, `#${targetPageId}`);
    }, 280);

    // Complete transition and cleanup
    setTimeout(() => {
      currentPageEl.classList.remove('page-exit-left', 'page-exit-right');
      if (wipeOverlay) {
        wipeOverlay.classList.remove('active');
      }
      isTransitioning = false;
    }, 750);
  }

  function updateActiveStates(activeId) {
    // Floating Dock Buttons
    dockBtns.forEach((btn) => {
      const page = btn.getAttribute('data-page');
      if (page === activeId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Top Navigation Links
    navLinks.forEach((link) => {
      const page = link.getAttribute('data-page') || link.getAttribute('href')?.replace('#', '');
      if (page === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Bind clicks on floating dock buttons
  dockBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.getAttribute('data-page');
      if (page) switchPage(page, true);
    });
  });

  // Bind clicks on top nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const page = link.getAttribute('data-page') || link.getAttribute('href')?.replace('#', '');
      if (page && pages.includes(page)) {
        e.preventDefault();
        switchPage(page, true);
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('open');
      }
    });
  });

  // Bind clicks on all internal links (logo, rotating badge, buttons)
  document.querySelectorAll('a[href^="#"], [data-page]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const page = el.getAttribute('data-page') || el.getAttribute('href')?.replace('#', '');
      if (page && pages.includes(page)) {
        e.preventDefault();
        switchPage(page, true);
      }
    });
  });

  // Keyboard Navigation: Arrow Keys and Number Keys 1-7
  window.addEventListener('keydown', (e) => {
    // Avoid interfering if focus is in an input or textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    const currentIndex = pages.indexOf(currentPageId);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % pages.length;
      switchPage(pages[nextIndex], true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
      switchPage(pages[prevIndex], true);
    } else if (e.key >= '1' && e.key <= '7') {
      const numIndex = parseInt(e.key, 10) - 1;
      if (pages[numIndex]) switchPage(pages[numIndex], true);
    }
  });

  // Listen to popstate for browser back/forward buttons
  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.replace('#', '') || 'home';
    switchPage(currentHash, true);
  });
}

/* ========================================================
   3. 3D INTERACTIVE TILT FOR CARDS WITH GLARE
   ======================================================== */
function init3DCardTilt() {
  const cards = document.querySelectorAll('.tilt-card-3d');

  cards.forEach((card) => {
    const glare = card.querySelector('.card-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.16) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ========================================================
   4. HERO PORTRAIT & HUD 3D PARALLAX
   ======================================================== */
function initHeroParallax() {
  const portrait = document.getElementById('hero-portrait');
  const hudPortal = document.querySelector('.hero-hud-portal');
  if (!portrait) return;

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    portrait.style.transform = `translate3d(${-normX * 14}px, ${-normY * 10}px, 0) scale(1.02)`;
    if (hudPortal) {
      hudPortal.style.transform = `translate(-50%, -50%) translate3d(${normX * 18}px, ${normY * 14}px, 0)`;
    }
  });
}

/* ========================================================
   5. PROJECT FILTERING
   ======================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ========================================================
   6. COPY EMAIL & TOAST NOTIFICATION
   ======================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'gandikotiravi649@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast('Email copied to clipboard!', '📋');
      })
      .catch(() => {
        showToast('Failed to copy email', '❌');
      });
  });
}

function showToast(message, icon = '✅') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  if (toastIcon) toastIcon.textContent = icon;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ========================================================
   7. CONTACT FORM SUBMISSION
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value || 'Friend';
    showToast(`Thank you, ${name}! Your message has been sent.`, '🚀');
    form.reset();
  });
}

/* ========================================================
   8. MOBILE NAVIGATION MENU
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggleBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  });
}
