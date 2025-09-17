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

    projectsTitle: "Read Around the World",
    projectsDesc:
      "A simple tool that selects a random country in the world and then finds a book written by an author from that country. The goal is to learn about a place through its literature.",
  },
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    aboutTitle: "Sobre",
    aboutText:
      "Simplicidade, criatividade e resolução de problemas. Desenvolvo soluções personalizadas para desafios que encontro no meu dia a dia.",

    projectsTitle: "Leia ao Redor do Mundo",
    projectsDesc:
      "Uma ferramenta simples que seleciona um país aleatório e encontra um livro escrito por um autor desse país. O objetivo é aprender sobre o lugar através da literatura.",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    aboutTitle: "Acerca de",
    aboutText:
      "Simplicidad, creatividad y resolución de problemas. Desarrollo soluciones personalizadas para los desafíos que encuentro en mi vida diaria.",

    projectsTitle: "Leer Alrededor del Mundo",
    projectsDesc:
      "Una herramienta que selecciona un país aleatorio y encuentra un libro escrito por un autor de ese país. El objetivo es conocer un lugar a través de su literatura.",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    aboutTitle: "À propos",
    aboutText:
      "Simplicité, créativité et résolution de problèmes. Je développe des solutions personnalisées aux défis que je rencontre dans ma vie quotidienne.",

    projectsTitle: "Lire Autour du Monde",
    projectsDesc:
      "Un outil simple qui sélectionne un pays aléatoire et trouve un livre écrit par un auteur de ce pays. L'objectif est de découvrir un lieu à travers sa littérature.",
  },
};


const langSelector = document.getElementById("language-selector");
langSelector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
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
