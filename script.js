const themeToggle = document.getElementById('themeToggle');
const languageSwitcher = document.getElementById('languageSwitcher');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Translations
const translations = {
  en: {
    name: "Brenda dos Santos Cabral Chaves",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    title: "Software Engineering Student",
    subtitle: "Focused on Python, personal projects, and seeking an internship in Artificial Intelligence.",
    cta: "Get in touch",
    aboutText: "I am a Software Engineering student at Uniamérica University with a solid foundation in Python. I am passionate about Artificial Intelligence and developing projects that solve real-world problems.",
    readAround: "A Python-based project hosted at brecketline.me/read-around. This project explores digital reading experiences and collaborative learning.",
    contactText: "If you'd like to collaborate or discuss opportunities, feel free to reach out.",
    emailMe: "Email Me"
  },
  pt: {
    name: "Brenda dos Santos Cabral Chaves",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    title: "Estudante de Engenharia de Software",
    subtitle: "Focada em Python, projetos pessoais e em busca de estágio em Inteligência Artificial.",
    cta: "Entre em contato",
    aboutText: "Sou estudante de Engenharia de Software na Universidade Uniamérica com uma base sólida em Python. Tenho paixão por Inteligência Artificial e pelo desenvolvimento de projetos que resolvem problemas reais.",
    readAround: "Um projeto em Python hospedado em brecketline.me/read-around. Este projeto explora experiências de leitura digital e aprendizado colaborativo.",
    contactText: "Se quiser colaborar ou discutir oportunidades, entre em contato.",
    emailMe: "Me envie um email"
  },
  es: {
    name: "Brenda dos Santos Cabral Chaves",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    title: "Estudiante de Ingeniería de Software",
    subtitle: "Enfocada en Python, proyectos personales y en busca de una pasantía en Inteligencia Artificial.",
    cta: "Contáctame",
    aboutText: "Soy estudiante de Ingeniería de Software en la Universidad Uniamérica con una sólida base en Python. Me apasiona la Inteligencia Artificial y el desarrollo de proyectos que resuelven problemas reales.",
    readAround: "Un proyecto en Python alojado en brecketline.me/read-around. Este proyecto explora experiencias de lectura digital y aprendizaje colaborativo.",
    contactText: "Si deseas colaborar o discutir oportunidades, no dudes en contactarme.",
    emailMe: "Envíame un correo"
  }
};

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
languageSwitcher.value = savedLang;
applyTranslations(savedLang);

// Change language
languageSwitcher.addEventListener('change', (e) => {
  const lang = e.target.value;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
});

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
