const translations = {
  pt: {
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    title: "Aluna de Engenharia de Software",
    subtitle: "Trabalho com projetos pessoais, com base sólida em Python, em busca de estágio em Inteligência Artificial.",
    cta: "Entre em contato",
    aboutText: "Sou estudante de Engenharia de Software na Uniamérica. Tenho experiência em Python, desenvolvimento web e estou me especializando em Inteligência Artificial.",
    projectsText: "Veja alguns dos meus projetos pessoais e colaborações em desenvolvimento.",
    contactText: "Entre em contato para oportunidades e colaborações."
  },
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    title: "Software Engineering Student",
    subtitle: "I work on personal projects with a solid foundation in Python, seeking an internship in Artificial Intelligence.",
    cta: "Get in touch",
    aboutText: "I am a Software Engineering student at Uniamérica. I have experience in Python, web development, and I am specializing in Artificial Intelligence.",
    projectsText: "Check out some of my personal projects and collaborations.",
    contactText: "Get in touch for opportunities and collaborations."
  },
  es: {
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    title: "Estudiante de Ingeniería de Software",
    subtitle: "Trabajo en proyectos personales con una base sólida en Python, buscando una pasantía en Inteligencia Artificial.",
    cta: "Ponte en contacto",
    aboutText: "Soy estudiante de Ingeniería de Software en Uniamérica. Tengo experiencia en Python, desarrollo web y me estoy especializando en Inteligencia Artificial.",
    projectsText: "Mira algunos de mis proyectos personales y colaboraciones.",
    contactText: "Ponte en contacto para oportunidades y colaboraciones."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
