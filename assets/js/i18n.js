(function(){
  const translations = {
    en: {
      'profile.title': '16+ Senior SDET & QA Automation Architect | Playwright | TypeScript | Contract Testing (Pact) | CI/CD | AWS | AI Driven',
      'nav.bio': 'Bio',
      'nav.certifications': 'Certifications',
      'nav.workhistory': 'Work History',
      'section.summaryTitle': 'Professional Summary',
      'section.summaryText': `<p>Senior SDET and QA Automation Architect with 16 years of engineering experience specializing in building scalable test infrastructure and embedding quality gates into CI/CD pipelines.</p><p>Trilingual (English, Spanish, Portuguese) professional with a proven track record of migrating enterprise organizations to full automated regression using Playwright, TypeScript, and API contract testing (Pact). Recognized for reducing change failure rates and accelerating deployment frequencies across distributed global teams in the US, LatAm, and Brazil for the fintech, e-commerce, and banking sectors.</p>`,
      'section.educationTitle': 'Education',
      'edu.specialized': "Specialized Studies",
      'edu.bachelors': "Bachelor's Degree",
      'edu.certs': 'Certifications or Courses',
      'edu.cs': 'International Graduate Diploma in Project Management',
      'edu.it': 'Bachelor of Computer Engineering',
      'edu.university': 'Paulista University (UNIP), São Paulo, Brazil',
      'edu.posuniversity': 'ESAN Graduate School of Business, Lima, Peru',
      'edu.online': 'Online Platforms',
      'edu.skills': 'Various Tech Skills'
    },
    es: {
      'profile.title': '16+ Senior SDET & QA Automation Architect | Playwright | TypeScript | Contract Testing (Pact) | CI/CD | AWS | AI Driven',
      'nav.bio': 'Bio',
      'nav.certifications': 'Certificaciones',
      'nav.workhistory': 'Experiencia',
      'section.summaryTitle': 'Resumen Profesional',
      'section.summaryText': `<p>Senior SDET y QA Automation Architect con 16 años de experiencia en el diseño de infraestructuras de pruebas escalables y la integración de validaciones de calidad en pipelines CI/CD.</p><p>Profesional trilingüe (español, portugués, inglés) especializado en la migración de organizaciones hacia una cobertura de regresión totalmente automatizada mediante Playwright, TypeScript y pruebas de contratos (Pact). Historial comprobado en la reducción de tasas de fallos en producción (Change Failure Rate) y la aceleración de despliegues seguros para equipos distribuidos en EE.UU., LatAm y Brasil dentro de los sectores fintech, e-commerce y banca.</p>`,
      'section.educationTitle': 'Educación',
      'edu.specialized': 'Programa Ejecutivo Especializado',
      'edu.bachelors': 'Título Profesional',
      'edu.certs': 'Certificaciones o Cursos',
      'edu.cs': 'Diplomado Internacional en Gerencia de Proyectos',
      'edu.it': 'Ingeniería de Computación',
      'edu.university': 'Universidad Paulista, São Paulo, Brasil',
      'edu.posuniversity': 'ESAN Graduate School of Business, Lima, Perú',
      'edu.online': 'Plataformas en Línea',
      'edu.skills': 'Habilidades Técnicas Variadas'
    },
    pt: {
      'profile.title': '16+ Senior SDET & QA Automation Architect | Playwright | TypeScript | Contract Testing (Pact) | CI/CD | AWS | AI Driven',
      'nav.bio': 'Bio',
      'nav.certifications': 'Treinamentos',
      'nav.workhistory': 'Experiência',
      'section.summaryTitle': 'Resumo Profissional',
      'section.summaryText': `<p>Senior SDET e QA Automation Architect com 16 anos de experiência em engenharia, especializado na construção de infraestruturas de testes escaláveis e na incorporação de quality gates em pipelines CI/CD.</p><p>Profissional trilíngue (português, espanhol, inglês) com histórico comprovado de migrar organizações corporativas para testes de regressão totalmente automatizados utilizando Playwright, TypeScript e Contract Testing (Pact). Reconhecido por reduzir as taxas de falhas em produção e acelerar a frequência de implantações em equipes distribuídas globalmente nos EUA, América Latina e Brasil, atuando nos setores de fintech, e-commerce e bancário.</p>`,
      'section.educationTitle': 'Educação',
      'edu.specialized': 'Programa Executivo Especializado',
      'edu.bachelors': 'Bacharelado',
      'edu.certs': 'Treinamentos ou Cursos',
      'edu.cs': 'Diploma Internacional em Gestão de Projetos',
      'edu.it': 'Engenharia da Computação',
      'edu.university': 'Universidade Paulista (UNIP), São Paulo, Brasil',
      'edu.posuniversity': 'ESAN Graduate School of Business, Lima, Perú',
      'edu.online': 'Plataformas Online',
      'edu.skills': 'Habilidades Técnicas Diversas'
    }
  };

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val !== undefined) {
        // Permitir HTML en algunos textos largos
        if (key === 'section.summaryText') {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang.toLowerCase() === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  const stored = localStorage.getItem('lang');
  const browser = (navigator.language || 'en').slice(0,2).toLowerCase();
  const initial = stored || (['es','en','pt'].includes(browser) ? browser : 'en');
  applyTranslations(initial);

  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.lang-btn');
    if (!btn) return;
    const lang = btn.dataset.lang.toLowerCase();
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
  });

  // Theme toggle (dark / light)
  const themeStored = localStorage.getItem('theme');
  if (themeStored === 'dark') {
    document.body.classList.add('dark');
  }

  // Función para actualizar el ícono del tema
  function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
      const isDark = document.body.classList.contains('dark');
      themeIcon.classList.remove('fa-moon', 'fa-sun');
      themeIcon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
    }
  }

  // Actualizar ícono al cargar la página (con pequeño delay para Firefox)
  setTimeout(updateThemeIcon, 0);

  document.addEventListener('click', (ev) => {
    const tbtn = ev.target.closest('.theme-toggle');
    if (!tbtn) return;
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Actualizar ícono
    updateThemeIcon();
  });
})();