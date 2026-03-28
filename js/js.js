  // ── THEME TOGGLE ──
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  let isDark = true;

  toggle.addEventListener('click', () => {
    isDark = !isDark;
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☽' : '○';
  });

  // ── HAMBURGER MENU ──
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });

  function closeMobile() {
    ham.classList.remove('open');
    menu.classList.remove('open');
  }

  // ── SCROLL REVEAL ──
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // ── CUSTOM CURSOR ──
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'var(--text)';
      ring.style.opacity = '0.8';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'var(--text2)';
      ring.style.opacity = '0.5';
    });
  });

  // Hide custom cursor on touch devices
  if ('ontouchstart' in window) {
    dot.style.display = 'none';
    ring.style.display = 'none';
  }