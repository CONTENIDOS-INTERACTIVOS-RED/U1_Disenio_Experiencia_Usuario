export default {
  tema4: {
    tema: '4. Creación de usuarios (user persona)',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre creación de usuarios y diseño centrado en el usuario.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto: '¿Qué significa diseño centrado en el usuario (DCU)?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Diseñar según el gusto del diseñador',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Diseñar exclusivamente para dispositivos móviles',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Diseñar considerando las necesidades, preferencias y limitaciones del usuario',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Diseñar según estándares técnicos únicamente',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El diseño centrado en el usuario considera las necesidades, preferencias y limitaciones del usuario.',
        mensaje_incorrecto:
          'Incorrecto. El DCU se enfoca en las necesidades, preferencias y limitaciones del usuario.',
      },
      {
        id: 2,
        texto:
          'Las metodologías centradas en el usuario solo se aplican al final del desarrollo.',
        imagen: '',
        barajarRespuestas: false,
        opciones: [
          {
            id: 'a',
            texto: 'Verdadero',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Falso',
            esCorrecta: true,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las metodologías centradas en el usuario se aplican durante todo el proceso de desarrollo.',
        mensaje_incorrecto:
          'Incorrecto. Las metodologías centradas en el usuario se aplican durante todo el proceso de desarrollo, no solo al final.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de estas opciones representa una técnica de investigación de usuarios?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Brainstorming interno',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Encuestas y entrevistas',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Código de barras',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Análisis de ventas',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las encuestas y entrevistas son técnicas fundamentales de investigación de usuarios.',
        mensaje_incorrecto:
          'Incorrecto. Las encuestas y entrevistas son técnicas de investigación de usuarios.',
      },
      {
        id: 4,
        texto:
          '¿Qué elemento representa a un usuario tipo, con sus metas y comportamientos?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Casos de uso',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'User persona',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Organigrama',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Sitemap',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Una user persona representa a un usuario tipo con sus metas y comportamientos.',
        mensaje_incorrecto:
          'Incorrecto. Una user persona es la representación de un usuario tipo con sus metas y comportamientos.',
      },
      {
        id: 5,
        texto: '¿Qué beneficio ofrece trabajar con user personas?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Disminuye el tiempo de desarrollo',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Reduce el tamaño de la interfaz',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejora la comprensión de las necesidades del usuario',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumenta el número de clics',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las user personas mejoran la comprensión de las necesidades del usuario.',
        mensaje_incorrecto:
          'Incorrecto. El principal beneficio es mejorar la comprensión de las necesidades del usuario.',
      },
    ],
  },
}
