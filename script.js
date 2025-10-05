(() => {
  
  const canvas = document.getElementById("network-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

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
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.hypot(dx, dy);
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
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
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

    initParticles();
    animate();

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 150);
    });
  }


  const translations = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    de: {
      home: "Startseite",
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("language-selector");
    if (langSelector) {
      setLanguage(langSelector.value || "en");
      langSelector.addEventListener("change", (e) => setLanguage(e.target.value));
    }
  });
})();

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
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About me",
    aboutText:
      "I’m a software engineering student with a background in customer service and tourism, where I learned to solve problems quickly, adapt to new environments, and work seamlessly with diverse teams. In 2023, I shifted my focus to technology, studying Python and building my foundation in JavaScript, HTML, and CSS. Today, I’m channeling those skills into software projects that emphasize simplicity, creativity, and reliable solutions.\nFluent in four languages and with experience living and working across five countries, I bring a global perspective to my work and the ability to learn and adapt at speed. Whether as part of a trainee team or through collaboration, my goal is to create efficient solutions without sacrificing quality and to keep growing as a developer who delivers results you can trust.",
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
    about: "Sobre mim",
    projects: "Projetos",
    contact: "Contato",
    aboutTitle: "Sobre mim",
    aboutText:
      "Sou estudante de Engenharia de Software, com experiência prévia em atendimento ao cliente e turismo, áreas nas quais desenvolvi a capacidade de resolver problemas com rapidez, adaptar-me a diferentes contextos e colaborar de forma natural com equipes diversas. Em 2023, decidi direcionar meu foco para a tecnologia, iniciando meus estudos em Python e consolidando a base em JavaScript, HTML e CSS. Hoje, aplico essas competências em projetos de software que valorizam a simplicidade, a criatividade e a confiabilidade.\nFluente em quatro idiomas e com vivência profissional em cinco países, trago uma visão global ao meu trabalho e a facilidade de aprender e me adaptar com agilidade. Seja atuando em um time de trainee ou em colaboração direta, meu objetivo é criar soluções eficientes sem abrir mão da qualidade, além de evoluir constantemente como desenvolvedora, entregando resultados sólidos e de confiança.",
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
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    aboutTitle: "Sobre mí",
    aboutText:
      "Soy estudiante de Ingeniería de Software con experiencia en atención al cliente y turismo, sectores donde aprendí a resolver problemas con rapidez, adaptarme a entornos nuevos y trabajar en perfecta sintonía con equipos diversos. En 2023, decidí enfocar mi camino en la tecnología, iniciando estudios en Python y consolidando mis bases en JavaScript, HTML y CSS. Hoy pongo en práctica esas habilidades en proyectos de software que priorizan la sencillez, la creatividad y la fiabilidad.\nCon dominio de cuatro idiomas y experiencia viviendo y trabajando en cinco países, aporto una perspectiva global y una gran capacidad de aprendizaje y adaptación. Ya sea formando parte de un equipo de prácticas o colaborando en proyectos conjuntos, mi meta es crear soluciones eficientes sin renunciar a la calidad, y seguir creciendo como desarrolladora que ofrece resultados en los que se puede confiar.",
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
    about: "À propos de moi",
    projects: "Projets",
    contact: "Contact",
    aboutTitle: "À propos de moi",
    aboutText:
      "Je suis étudiante en ingénierie logicielle, avec une expérience préalable dans le service client et le tourisme, domaines où j’ai appris à résoudre des problèmes rapidement, à m’adapter à de nouveaux environnements et à collaborer naturellement avec des équipes variées. En 2023, j’ai choisi de réorienter mon parcours vers la technologie, en commençant par l’étude de Python et en consolidant mes bases en JavaScript, HTML et CSS. Aujourd’hui, je mets ces compétences au service de projets logiciels qui privilégient la simplicité, la créativité et la fiabilité.\nMaîtrisant quatre langues et ayant vécu et travaillé dans cinq pays, j’apporte à mon travail une perspective internationale ainsi qu’une grande capacité d’apprentissage et d’adaptation. Que ce soit au sein d’une équipe de stagiaires ou dans le cadre d’une collaboration, mon objectif est de développer des solutions efficaces sans jamais compromettre la qualité, tout en continuant à évoluer comme développeuse capable de livrer des résultats fiables.",
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
