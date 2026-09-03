(function(){
  const translations = {
    en: {
      'profile.title': 'Sr. SDET & AI Quality Engineer | 16+ YOE | Playwright, TypeScript, Python | Generative AI & LLM Evaluation, RAG | Fintech, Banking & Payments | LATAM, SPAIN & US',
      'nav.bio': 'Bio',
      'nav.certifications': 'Certifications',
      'nav.workhistory': 'Work History',
      'section.summaryTitle': 'Professional Summary',
      'section.summaryText': `<p>SDET, AI Quality Engineer, and Senior QA Automation Engineer with 16 years of engineering experience specializing in building scalable test infrastructure, LLM/AI evaluation frameworks, and embedding quality gates into CI/CD pipelines. Trilingual (English, Spanish, Portuguese) professional with 3+ years of experience in Generative AI validation (Prompt & Model Testing, AI Regression, Golden Datasets) alongside a proven track record of migrating enterprise organizations to full automated regression using Playwright, TypeScript, Python, and Contract Testing (Pact). Recognized for achieving near-zero defect escape rates, mitigating AI hallucinations/PII risks, and accelerating deployment frequencies across distributed global teams in Fintech, E-commerce, and SaaS sectors.</p><p>Global Experience: #Brazil #Panama #Peru #Colombia #Mexico #USA</p>`,
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
      'profile.title': 'Sr. SDET & AI Quality Engineer | 16+ YOE | Playwright, TypeScript, Python | Generative AI & LLM Evaluation, RAG | Fintech, Banking & Payments | LATAM, SPAIN & US',
      'nav.bio': 'Bio',
      'nav.certifications': 'Certificaciones',
      'nav.workhistory': 'Experiencia',
      'section.summaryTitle': 'Resumen Profesional',
      'section.summaryText': `<p>SDET, AI Quality Engineer y Senior QA Automation Engineer con 16 años de experiencia en ingeniería, especializado en la construcción de infraestructuras de pruebas escalables, frameworks de evaluación de IA/LLM y la integración de quality gates en pipelines CI/CD. Profesional trilingüe (inglés, español, portugués) con más de 3 años de experiencia en validación de Inteligencia Artificial Generativa (pruebas de prompts y modelos, regresión de IA, Golden Datasets), sumado a una trayectoria comprobada migrando organizaciones hacia una cobertura de regresión totalmente automatizada con Playwright, TypeScript, Python y pruebas de contratos (Pact). Reconocido por alcanzar tasas de escape de defectos cercanas a cero, mitigar alucinaciones de IA y riesgos de fuga de PII, y acelerar la frecuencia de despliegues para equipos globales distribuidos en los sectores Fintech, E-commerce y SaaS.</p><p>Experiencia Global: #Brazil #Panama #Peru #Colombia #Mexico #USA</p>`,
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
      'profile.title': 'Sr. SDET & AI Quality Engineer | 16+ YOE | Playwright, TypeScript, Python | Generative AI & LLM Evaluation, RAG | Fintech, Banking & Payments | LATAM, SPAIN & US',
      'nav.bio': 'Bio',
      'nav.certifications': 'Treinamentos',
      'nav.workhistory': 'Experiência',
      'section.summaryTitle': 'Resumo Profissional',
      'section.summaryText': `<p>SDET, AI Quality Engineer e Senior QA Automation Engineer com 16 anos de experiência em engenharia, especializado na construção de infraestruturas de testes escaláveis, frameworks de avaliação de IA/LLM e na integração de quality gates em pipelines CI/CD. Profissional trilíngue (inglês, espanhol, português) com mais de 3 anos de experiência em validação de Inteligência Artificial Generativa (testes de prompts e modelos, regressão de IA, Golden Datasets), somado a um histórico comprovado na migração de organizações para uma regressão totalmente automatizada utilizando Playwright, TypeScript, Python e testes de contrato (Pact). Reconhecido por alcançar taxas de escape de defeitos próximas de zero, mitigar alucinações de IA e riscos de vazamento de PII, e acelerar a frequência de implantações para equipes globais distribuídas nos setores de Fintech, E-commerce e SaaS</p><p>Experiência Global: #Brazil #Panama #Peru #Colombia #Mexico #USA</p>`,
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