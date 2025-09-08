export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Principios de diseño centrado en el usuario',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de retrospección efectiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías centradas en el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios del diseño centrado en el usuario (UCD)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fases del proceso de diseño centrado en el usuario',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Definición y comprensión de las necesidades del usuario',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Investigación de usuarios: entrevistas, encuestas, grupos focales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Metodologías ágiles aplicadas a UX',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas de investigación de usuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Métodos cualitativos y cuantitativos en UX',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Entrevistas y grupos focales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Encuestas y cuestionarios: cómo diseñarlas y analizarlas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Análisis de datos de comportamiento: herramientas y métodos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Evaluación de la experiencia del usuario, a través de datos reales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación de usuarios (user persona)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Definición de usuario y perfiles',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Técnicas para crear usuarios a partir de datos de investigación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Establecimiento de escenarios de uso basados en los perfiles de usuario',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Análisis de roles y necesidades específicas de los usuarios',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo:
              'Aplicación de creación de usuarios para guiar decisiones de diseño',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1',
    },
    {
      referencia:
        'Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938',
    },
    {
      referencia:
        'Software Guru. (2017, 6 de noviembre). UX Para Desarrolladores Una guía práctica. [Vídeo] YouTube.',
      link: 'https://youtu.be/wrrwV-_zLaY',
    },
    {
      referencia:
        'Software Guru. (2019, 8 de junio). #EUXDAY 2019: Integración de UX research en métodos ágiles - Elizabeth Guevara. [Vídeo] YouTube.',
      link: 'https://youtu.be/MSj9tC9Sp1s',
    },
    {
      referencia:
        'Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1',
    },
    {
      referencia:
        'Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9',
    },
    {
      referencia:
        'Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487',
    },
    {
      referencia:
        'Software Guru. (2020, 5 de mayo). #SGVirtual 20.04 La importancia de crear User Personas y Escenarios. [Vídeo] YouTube.',
      link: 'https://youtu.be/uzyRxNJKuSA',
    },
    {
      referencia:
        'Software Guru. (2019, 8 de junio). #EUXDay 2019: El rol de UX en la transformación digital: retos y prácticas - Victor M González. [Vídeo] YouTube.',
      link: 'https://youtu.be/Eud5L5zISQg',
    },
  ],
  glosario: [
    {
      termino: 'Analytics',
      significado:
        'Sistema de recopilación y análisis de datos que permite medir el comportamiento de los usuarios en productos digitales, proporcionando métricas objetivas sobre patrones de uso, navegación y enganche que informan decisiones de optimización de la experiencia del usuario.',
    },
    {
      termino: 'Benchmarks',
      significado:
        'Puntos de referencia o estándares de medición establecidos a partir de datos históricos o mejores prácticas de la industria que permiten evaluar el rendimiento de métricas específicas de experiencia del usuario y determinar objetivos realistas de mejora.',
    },
    {
      termino: 'Clusters',
      significado:
        'Agrupaciones naturales de datos que emergen del análisis estadístico y que permiten identificar segmentos de usuarios con características similares, facilitando la creación de personas representativas y la comprensión de patrones de comportamiento compartidos.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Interfaz visual que presenta de manera consolidada y comprensible las métricas clave de experiencia del usuario, permitiendo el monitoreo continuo del desempeño del producto y la identificación rápida de tendencias o problemas que requieren atención.',
    },
    {
      termino: 'Edge case',
      significado:
        'Situaciones extremas o poco comunes de uso de un producto que, aunque infrecuentes, pueden revelar limitaciones importantes del diseño y oportunidades críticas de mejora que no son evidentes en condiciones normales de uso.',
    },
    {
      termino: 'Engagement',
      significado:
        'Nivel de involucramiento y participación que demuestran los usuarios al interactuar con un producto digital, medido a través de métricas como tiempo de uso, frecuencia de interacción y profundidad de exploración de funcionalidades.',
    },
    {
      termino: 'Framework',
      significado:
        'Estructura conceptual o metodológica que proporciona un conjunto organizado de principios, procesos y herramientas para abordar de manera sistemática el diseño y desarrollo de experiencias de usuario, estableciendo un enfoque coherente y replicable.',
    },
    {
      termino: 'Insights',
      significado:
        'Comprensiones profundas y valiosas sobre el comportamiento, las motivaciones y las necesidades de los usuarios que emergen del análisis cuidadoso de datos de investigación y que proporcionan dirección clara para decisiones de diseño fundamentadas.',
    },
    {
      termino: 'Métricas',
      significado:
        'Medidas cuantificables específicas que permiten evaluar aspectos concretos de la experiencia del usuario, como eficiencia de uso, satisfacción, tasa de ejecución de tareas o frecuencia de errores, proporcionando evidencia objetiva sobre el desempeño del producto.',
    },
    {
      termino: 'Personas',
      significado:
        'Representaciones semi-ficticias de usuarios reales basadas en investigación empírica que encapsulan características demográficas, comportamentales, motivacionales y contextuales de segmentos específicos de la audiencia objetivo, facilitando la humanización del proceso de diseño.',
    },
    {
      termino: 'Psicográficas',
      significado:
        'Características relacionadas con los valores, actitudes, intereses, estilos de vida y personalidad de los usuarios que influyen en sus decisiones y comportamientos de uso, complementando la información demográfica tradicional para una comprensión más completa del usuario.',
    },
    {
      termino: 'ROI (Return on Investment)',
      significado:
        'Retorno sobre la inversión que mide la eficiencia económica de las inversiones realizadas en mejoras de experiencia de usuario, calculando la relación entre los beneficios obtenidos y los costos incurridos en iniciativas de UX.',
    },
    {
      termino: 'Sprints',
      significado:
        'Períodos cortos e iterativos de desarrollo utilizados en metodologías ágiles que permiten la entrega incremental de funcionalidades y la incorporación continua de feedback de usuarios, facilitando la adaptación rápida a cambios en requisitos o descubrimientos sobre necesidades del usuario.',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Todas las partes interesadas que tienen influencia o se ven afectadas por el desarrollo y éxito de un producto digital, incluyendo usuarios finales, equipos de desarrollo, directivos, inversores y otros grupos relevantes que deben considerarse en las decisiones de diseño.',
    },
    {
      termino: 'Tecnográficas',
      significado:
        'Características relacionadas con el nivel de adopción, competencia y preferencias tecnológicas de los usuarios, incluyendo dispositivos utilizados, familiaridad con interfaces digitales y patrones de consumo de tecnología que influyen en el diseño de experiencias apropiadas.',
    },
    {
      termino: 'Testing',
      significado:
        'Proceso sistemático de evaluación de productos digitales con usuarios reales para identificar problemas de usabilidad, validar decisiones de diseño y obtener evidencia empírica sobre la efectividad de la experiencia proporcionada antes de la implementación final.',
    },
    {
      termino: 'UCD (User-Centered Design)',
      significado:
        'Diseño centrado en el usuario que constituye una filosofía y metodología de desarrollo que prioriza sistemáticamente las necesidades, comportamientos y expectativas de los usuarios finales como el factor determinante en todas las decisiones de diseño y desarrollo de productos digitales.',
    },
    {
      termino: 'UX (User Experience)',
      significado:
        'Experiencia de usuario que abarca todos los aspectos de la interacción de una persona con un producto, servicio o sistema, incluyendo dimensiones funcionales, emocionales, estéticas y contextuales que determinan la percepción global de valor y satisfacción.',
    },
    {
      termino: 'Wireframes',
      significado:
        'Representaciones esquemáticas de bajo nivel de fidelidad que muestran la estructura, organización y funcionalidad básica de interfaces de usuario sin incluir elementos visuales detallados, permitiendo enfocar la atención en aspectos de usabilidad y arquitectura de información.',
    },
    {
      termino: 'Workflows',
      significado:
        'Secuencias específicas de pasos y decisiones que siguen los usuarios para completar tareas o alcanzar objetivos específicos dentro de un producto digital, proporcionando una comprensión detallada de los procesos que deben optimizarse para mejorar la eficiencia y satisfacción del usuario.',
    },
  ],
}
