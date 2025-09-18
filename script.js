const canvas = document.getElementById("network-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = 1.2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(100, 200, 200, 0.8)";
    ctx.fill();
  }
}

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      let dx = particles[a].x - particles[b].x;
      let dy = particles[a].y - particles[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(100, 200, 200, 0.1)";
        ctx.lineWidth = 1;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animate();

const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About",
    aboutText:
      "Simplicity, creativity, and problem-solving. I develop custom solutions for challenges I encounter in my daily life.",
    projectsTitle: "Read Around",
    projectsDesc:
      "A simple tool that selects a random country in the world and then finds a book written by an author from that country. The goal is to learn about a place through its literature.",
    heroTitle: "Brenda Cabral Chaves",
    heroTagline: "Software Engineering Student | Python Focused",
    schenginTitle: "Scheng.in (Upcoming)",
    schenginDesc:
      "Exploring the Schengen Area? Keep your trip stress-free. Scheng.in tracks your days and intelligently recommends how to avoid overstaying your visa."
  },
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    aboutTitle: "Sobre",
    aboutText:
      "Simplicidade, criatividade e resolução de problemas. Desenvolvo soluções personalizadas para desafios que encontro no meu dia a dia.",
    projectsTitle: "Read Around",
    projectsDesc:
      "Uma ferramenta simples que seleciona um país aleatório e encontra um livro escrito por um autor desse país. O objetivo é aprender sobre o lugar através da literatura.",
    heroTitle: "Brenda Cabral Chaves",
    heroTagline: "Estudante de Engenharia de Software | Foco em Python",
    schenginTitle: "Scheng.in (Em Breve)",
    schenginDesc:
      "Explorando o Espaço Schengen? Mantenha sua viagem tranquila. Scheng.in rastreia seus dias e recomenda como evitar ultrapassar o tempo do seu visto."
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    aboutTitle: "Acerca de",
    aboutText:
      "Simplicidad, creatividad y resolución de problemas. Desarrollo soluciones personalizadas para los desafíos que encuentro en mi vida diaria.",
    projectsTitle: "Read Around",
    projectsDesc:
      "Una herramienta simple que selecciona un país aleatorio y encuentra un libro escrito por un autor de ese país. El objetivo es aprender sobre un lugar a través de su literatura.",
    heroTitle: "Brenda Cabral Chaves",
    heroTagline: "Estudiante de Ingeniería de Software | Enfoque en Python",
    schenginTitle: "Scheng.in (Próximamente)",
    schenginDesc:
      "¿Explorando el Área Schengen? Mantén tu viaje libre de estrés. Scheng.in rastrea tus días y recomienda cómo evitar exceder tu visa."
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    aboutTitle: "À propos",
    aboutText:
      "Simplicité, créativité et résolution de problèmes. Je développe des solutions personnalisées aux défis que je rencontre dans ma vie quotidienne.",
    projectsTitle: "Read Around",
    projectsDesc:
      "Un outil simple qui sélectionne un pays au hasard et trouve un livre écrit par un auteur de ce pays. L'objectif est de découvrir un lieu à travers sa littérature.",
    heroTitle: "Brenda Cabral Chaves",
    heroTagline: "Étudiante en ingénierie logicielle | Axée sur Python",
    schenginTitle: "Scheng.in (À venir)",
    schenginDesc:
      "Vous explorez l'espace Schengen ? Gardez votre voyage sans stress. Scheng.in suit vos jours et recommande comment éviter de dépasser votre visa."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langSelector = document.getElementById("language-selector");
  
  setLanguage(langSelector.value || "en");

  langSelector.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.setAttribute("data-theme", "light");
    }

    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
});

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
