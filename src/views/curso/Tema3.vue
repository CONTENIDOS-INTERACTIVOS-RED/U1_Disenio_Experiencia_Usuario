<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Técnicas de investigación de usuarios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Las técnicas de investigación de usuarios constituyen una caja de herramientas fundamental que permite obtener comprensión profunda con evidencia empírica sobre el comportamiento, las necesidades, y las expectativas de los usuarios de productos digitales. Esta disciplina trasciende la intuición y las pasiones para establecer un desarrollo basado en datos que informe cada decisión de diseño y desarrollo. La maestría en estas técnicas determina la capacidad de crear productos que se conecten genuinamente con sus usuarios objetivo.

        .bg-color-11.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El dominio de las técnicas de investigación de usuarios, requiere comprensión tanto de los fundamentos metodológicos que subyacen a cada técnica como de las competencias prácticas necesarias para su implementación efectiva, en contextos reales de desarrollo de productos. Esta comprensión debe integrar perspectivas cuantitativas y cualitativas, reconociendo que diferentes tipos de preguntas de investigación requieren enfoques metodológicos específicos. La efectividad de estas técnicas radica en su aplicación estratégica y complementaria, donde la combinación inteligente de métodos permite construir una comprensión multidimensional del usuario.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")

    // Bloque: img-bloque
    .bg-color-3.text-white.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En esta sección se explorarán cinco dimensiones críticas de la investigación de usuarios que proporcionan las competencias necesarias para implementar procesos de investigación rigurosos y efectivos. Los métodos cualitativos y cuantitativos establecerán la estructura conceptual básica, mientras que las técnicas específicas de entrevistas, grupos focales, encuestas y cuestionarios proporcionarán herramientas prácticas. El análisis de datos de comportamiento y la evaluación de experiencia a través de datos reales completarán el espectro metodológico necesario para la investigación contemporánea de usuarios.

    // Bloque: titulo-segundo
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Métodos cualitativos y cuantitativos en UX

    p La investigación en experiencia de usuario, se fundamenta en la aplicación complementaria de métodos cualitativos y cuantitativos que proporcionan perspectivas distintas, pero igualmente valiosas sobre el comportamiento y las necesidades de los usuarios. Los métodos cualitativos permiten explorar el "por qué" y el "cómo" del comportamiento del usuario, revelando motivaciones profundas, contextos específicos, y insights matizados que explican los patrones observados. Los métodos cuantitativos, por su parte, permiten medir el "qué" y el "cuánto", proporcionando datos numéricos que validan hipótesis, identifican tendencias, y permiten tomar decisiones basadas en evidencia estadística robusta.

    // Bloque: slider-a (usando slyder-2)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-lg-1
              h5 Integración metodológica estratégica
              p La integración efectiva de ambos enfoques metodológicos permite construir una comprensión profunda del usuario que combine la profundidad de los insights cualitativos con la amplitud y confiabilidad de los datos cuantitativos. Torres Burriel enfatiza que esta integración debe ser estratégica, donde cada método se aplique en el momento apropiado del proceso de investigación para maximizar su valor. Los métodos cualitativos suelen ser más efectivos en las fases exploratorias del proyecto, mientras que los métodos cuantitativos resultan fundamentales para la validación y optimización de soluciones propuestas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-lg-1
              h5 Aplicación práctica en salud digital
              p En el desarrollo de aplicaciones de salud digital, los métodos cualitativos podrían incluir entrevistas en profundidad con pacientes para comprender sus experiencias con el sistema de salud, observaciones etnográficas de consultas médicas para identificar oportunidades de mejora, y análisis de diarios de usuarios para entender patrones de autocuidado. Los métodos cuantitativos complementarios incluirían encuestas a gran escala sobre satisfacción con servicios de salud, análisis de métricas de uso de aplicaciones existentes, y estudios A/B para evaluar la efectividad de diferentes interfaces de usuario.

    // Bloque: img-bloque
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/6.svg', alt='')
        .col-lg
          .p-4
            p.mb-4(data-aos="fade-up") La selección apropiada de métodos, debe considerar los recursos disponibles, el timeline del proyecto, las características de la población objetivo, y los objetivos específicos de investigación. Esta selección estratégica determina la calidad y utilidad de los insights obtenidos, así como su capacidad para informar decisiones de diseño efectivas.

            p.mb-0 #[strong Ejercicio práctico.] Desarrolle un plan de investigación mixto para una aplicación de fitness, dirigida a los adultos mayores.

    // Bloque: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8

        AcordionA(tipo="b").mb-5
          .div(titulo="Paso 1")
            p Identifique tres preguntas de investigación que requieren métodos cualitativos (por ejemplo, motivaciones para ejercitarse, barreras percibidas).
          .div(titulo="Paso 2")
            p Formule tres preguntas que requieren métodos cuantitativos (frecuencia de ejercicio, preferencias de actividades).
          .div(titulo="Paso 3")
            p Seleccione los métodos específicos más apropiados para cada pregunta.
          .div(titulo="Paso 4")
            p Determine la secuencia óptima de aplicación de estos métodos.
          .div(titulo="Paso 5")
            p Establezca cómo integrará los hallazgos cualitativos y cuantitativos en insights coherentes.
          .div(titulo="Resultado esperado")
            p Un plan de investigación que demuestre la comprensión de cómo combinar métodos cualitativos y cuantitativos, de manera complementaria, para obtener una visión integral del usuario objetivo.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque: titulo-segundo
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Entrevistas y grupos focales

    // Bloque: imagen-iconobloque 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las entrevistas y grupos focales constituyen técnicas cualitativas fundamentales que permiten obtener insights profundos sobre las experiencias, motivaciones, y perspectivas de los usuarios a través de la interacción directa y la exploración conversacional. Estas técnicas trascienden la superficie de los comportamientos observables para adentrarse en la comprensión de los factores subyacentes que determinan cómo y por qué los usuarios interactúan con los productos digitales, de maneras específicas. La efectividad de estas técnicas radica en su capacidad para revelar información rica y contextualizada, que sería difícil de obtener a través de métodos más estructurados.

    // Bloque: slider-a (usando slyder-3)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-lg-1
              h5 Entrevistas individuales vs grupos focales
              p Las entrevistas individuales proporcionan un espacio íntimo y confidencial que facilita la exploración detallada de experiencias personales, permitiendo que los participantes compartan información sensible o compleja sin la influencia de dinámicas grupales. Los grupos focales, por el contrario, aprovechan la interacción social para generar insights a través del diálogo, el debate, y la construcción colectiva de ideas, revelando perspectivas que emergen únicamente en contextos sociales. Fernández Casado destaca que ambas técnicas requieren competencias específicas de facilitación, que permitan crear ambientes de confianza y exploración, mientras se mantiene el foco en los objetivos de investigación específicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en plataformas educativas
              p En el desarrollo de plataformas educativas en línea, las entrevistas individuales con estudiantes podrían explorar sus estrategias de estudio personal, sus frustraciones con tecnologías educativas existentes, y sus aspiraciones de aprendizaje, a largo plazo. Los grupos focales complementarios con el mismo segmento de usuarios podrían revelar dinámicas sociales del aprendizaje, preferencias sobre características colaborativas, y consensos emergentes sobre funcionalidades deseadas que no habrían surgido en conversaciones individuales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7.order-lg-1
              h5 Preparación y análisis riguroso
              p La preparación rigurosa resulta fundamental para el éxito de estas técnicas, incluyendo el desarrollo de guías de entrevista flexibles pero estructuradas, la selección cuidadosa de participantes representativos, la creación de ambientes físicos y psicológicos que faciliten la apertura y la honestidad. La documentación y análisis posterior deben preservar la riqueza de los insights obtenidos, mientras extraen patrones y temas relevantes para las decisiones de diseño.

    // Bloque: bg-icono-texto (usando bg-full-icono-texto)
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Diseñe y conduzca una sesión de investigación para una aplicación de gestión financiera personal.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Desarrolle una guía de entrevista con 8-10 preguntas abiertas que exploren hábitos financieros, frustraciones con herramientas existentes, y expectativas.
          .div(titulo="Paso 2")
            p Defina los criterios de selección para 3 participantes de entrevistas individuales.
          .div(titulo="Paso 3")
            p Cree el protocolo para un grupo focal de 6-8 participantes, incluyendo actividades de warm-up y preguntas de discusión.
          .div(titulo="Paso 4")
            p Establezca el método de documentación (grabación, notas, observadores).
          .div(titulo="Paso 5")
            p Desarrolle la estructura de análisis que aplicará a los datos recolectados.
          .div(titulo="Resultado esperado")
            p Un protocolo completo de investigación cualitativa que demuestre la comprensión de cómo diseñar y facilitar entrevistas y grupos focales efectivos, para obtener insights profundos, sobre la experiencia del usuario.

    // Bloque: titulo-segundo
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Encuestas y cuestionarios: cómo diseñarlas y analizarlas

    p El uso de encuestas y cuestionarios en el diseño centrado en el usuario permite recolectar datos cuantitativos clave para comprender patrones, preferencias y percepciones en amplias poblaciones.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Encuestas y cuestionarios: cómo diseñarlas y analizarlas
            p.mb-4(data-aos="fade-right") En el PDF Encuestas y cuestionarios, se presentan principios y técnicas para construir instrumentos válidos, confiables y culturalmente adecuados, así como métodos para analizar sus resultados de forma rigurosa. Este recurso brinda las herramientas necesarias para transformar los datos obtenidos en decisiones de diseño fundamentadas y centradas en la experiencia real del usuario.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Encuestas y cuestionarios

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')

    // Bloque: titulo-segundo
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Análisis de datos de comportamiento: herramientas y métodos

    // Bloque: img-bloque
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/16.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El análisis de datos de comportamiento representa una metodología fundamental para comprender cómo los usuarios interactúan realmente con los productos digitales, proporcionando insights objetivos basados en acciones concretas, en lugar de percepciones declaradas. Esta aproximación permite identificar patrones de uso, puntos de fricción, y oportunidades de optimización, a través del análisis sistemático de métricas de interacción, navegación, y enganche. La efectividad de este análisis radica en su capacidad para revelar discrepancias entre lo que los usuarios dicen que hacen y lo que realmente hacen, proporcionando una perspectiva complementaria esencial, a los métodos de investigación tradicionales.

    // Bloque: slider-a (usando slyder-3)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7.order-lg-1
              h5 Herramientas de analítica contemporáneas
              p Las herramientas contemporáneas de analítica, permiten recopilar datos granulares sobre el comportamiento del usuario, incluyendo métricas de navegación, tiempo de permanencia, patrones de clics, tasas de conversión, y abandono de procesos. El análisis efectivo de estos datos requiere la definición previa de métricas claves de experiencia de usuario que estén alineadas con los objetivos del producto y las necesidades de los usuarios. Fischer destaca que la interpretación de estos datos debe considerar el contexto específico de uso y evitar conclusiones simplistas basadas únicamente en métricas cuantitativas, integrando insights cualitativos que permitan comprender las causas subyacentes de los patrones observados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en plataformas de streaming
              p En el desarrollo de plataformas de streaming de contenido, el análisis de datos de comportamiento, podría incluir el seguimiento de patrones de visualización, tasas de abandono en diferentes puntos del contenido, frecuencia de uso de funcionalidades específicas como búsqueda o recomendaciones, y correlaciones entre características del contenido y enganche del usuario. Este análisis permitiría optimizar algoritmos de recomendación, mejorar la organización del contenido, y personalizar la experiencia, basándose en preferencias comportamentales reales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7.order-lg-1
              h5 Implementación de sistemas de seguimiento
              p La implementación de sistemas de seguimiento (tracking) debe balancear la necesidad de datos relevantes con consideraciones de privacidad y rendimiento del producto. Esto requiere la selección cuidadosa de eventos a realizar seguimiento, la implementación de mecanismos de protección de datos, y el desarrollo de tableros (dashboards) que permitan monitorear continuamente, la salud de la experiencia del usuario, a través de métricas objetivas.

    // Bloque: bg-icono-texto (usando bg-full-icono-texto)
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Diseñe un sistema de análisis de comportamiento para una aplicación de productividad personal.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Identifique cinco métricas claves de comportamiento que proporcionarían insights sobre la efectividad de la aplicación (tiempo de uso diario, tareas complementarias, uso de funcionalidades específicas).
          .div(titulo="Paso 2")
            p Defina los eventos específicos que necesitan seguimiento, para calcular estas métricas.
          .div(titulo="Paso 3")
            p Establezca rangos de valores "saludables" para cada métrica, basándose en objetivos de experiencia del usuario.
          .div(titulo="Paso 4")
            p Diseñe un dashboard que permita monitorear estas métricas, de manera continua.
          .div(titulo="Paso 5")
            p Desarrolle hipótesis sobre qué cambios en el comportamiento, indicarían problemas específicos de usabilidad.
          .div(titulo="Resultado esperado")
            p Una estructura de análisis de comportamiento que demuestre la comprensión de cómo transformar datos de interacción en insights útiles, sobre la experiencia del usuario.

    // Bloque: titulo-segundo (corrijo el error tipográfico)
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Evaluación de la experiencia del usuario, a través de datos reales

    p La evaluación de la experiencia del usuario basada en datos reales permite validar la efectividad de un producto digital en condiciones auténticas de uso, más allá de los entornos controlados de prueba.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evaluación de la experiencia del usuario
            p.mb-4(data-aos="fade-right") En el PDF Evaluación de la experiencia del usuario, se presentan estrategias para definir, medir e interpretar métricas clave que reflejan la calidad de la interacción del usuario con el producto en su contexto cotidiano. Este enfoque proporciona una base sólida para la mejora continua, asegurando que las decisiones de diseño respondan a comportamientos reales y necesidades concretas de los usuarios.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación de la experiencia del usuario

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/22.png', alt='')

    // Bloque: material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1" target="_blank" rel="noopener noreferrer") Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9" target="_blank" rel="noopener noreferrer") Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487" target="_blank" rel="noopener noreferrer") Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/uzyRxNJKuSA" target="_blank" rel="noopener noreferrer") Software Guru. (2020, 5 de mayo). #SGVirtual 20.04 La importancia de crear User Personas y Escenarios. [Vídeo] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Eud5L5zISQg" target="_blank" rel="noopener noreferrer") Software Guru. (2019, 8 de junio). #EUXDay 2019: El rol de UX en la transformación digital: retos y prácticas - Victor M González. [Vídeo] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
