const canvas = document.getElementById("network-canvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const nodes = [];
const nodeCount = 70;

class Node {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#0ff";
    ctx.fill();
  }
}

for (let i = 0; i < nodeCount; i++) {
  nodes.push(new Node());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  nodes.forEach((node, i) => {
    node.update();
    node.draw();
    for (let j = i + 1; j < nodes.length; j++) {
      const other = nodes[j];
      const dx = node.x - other.x;
      const dy = node.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = "rgba(0,255,255,0.1)";
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const translations = {
  en: {
    tagline: "Software Engineering Student | Python Focused",
    aboutTitle: "About",
    aboutText: "Simplicity, creativity, and problem-solving. I develop custom solutions for challenges I encounter in my daily life.",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  pt: {
    tagline: "Estudante de Engenharia de Software | Com ênfase em Python",
    aboutTitle: "Sobre",
    aboutText: "Simplicidade, criatividade e resolução de problemas. Desenvolvo soluções próprias para os desafios que encontro no meu dia a dia.",
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
  },
  es: {
    tagline: "Estudiante de Ingeniería de Software | Enfoque en Python",
    aboutTitle: "Acerca de",
    aboutText: "Simplicidad, creatividad y resolución de problemas. Desarrollo soluciones propias para los desafíos que encuentro en mi día a día.",
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
  },
  fr: {
    tagline: "Étudiant en Génie Logiciel | Avec un focus sur Python",
    aboutTitle: "À propos",
    aboutText: "Simplicité, créativité et résolution de problèmes. Je développe mes propres solutions aux défis que je rencontre dans mon quotidien.",
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
  },
};

const langSelector = document.getElementById("language-selector");

langSelector.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.getElementById("tagline").innerText = translations[lang].tagline;
  document.querySelector("[data-key='aboutTitle']").innerText = translations[lang].aboutTitle;
  document.getElementById("about-text").innerText = translations[lang].aboutText;

  document.querySelector("[data-key='home']").innerText = translations[lang].home;
  document.querySelector("[data-key='about']").innerText = translations[lang].about;
  document.querySelector("[data-key='projects']").innerText = translations[lang].projects;
  document.querySelector("[data-key='contact']").innerText = translations[lang].contact;
});
