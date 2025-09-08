<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Metodologías centradas en el usuario'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: párrafo introductorio
    p Las metodologías centradas en el usuario, constituyen un conjunto estructurado de enfoques y procesos que priorizan sistemáticamente las necesidades, comportamientos y expectativas de los usuarios finales, durante todo el ciclo de desarrollo de productos digitales. Esta perspectiva metodológica trasciende la simple consideración del usuario como receptor pasivo del producto, transformándolo en el elemento articulador de todas las decisiones de diseño y desarrollo.

    // Bloque: bloque-img
    .bg-color-9.mb-0
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El fundamento conceptual de estas metodologías radica en la comprensión de que los productos digitales exitosos no emergen únicamente de la excelencia técnica, sino de la capacidad de crear soluciones que se conecten profundamente con las realidades cognitivas, emocionales y contextuales de sus usuarios.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.svg', alt='')

    // Bloque: img-bloque
    .bg-color-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/2.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Esta comprensión implica un cambio paradigmático en el proceso de desarrollo, donde la validación constante con usuarios reales se convierte en el mecanismo primario para orientar las decisiones de diseño. La aplicación rigurosa de estos principios, permite reducir significativamente los riesgos asociados con el desarrollo de productos que, aunque técnicamente sólidos, pueden fallar en el mercado, por no responder adecuadamente a las expectativas de los usuarios.

    // Bloque: iconobloque-imagen (usando iconobloque-texto-imagen)
    .row.mb-5
      .col-lg-8
        .bg-color-3.text-white.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto específico de esta temática, se abordarán cinco componentes fundamentales que estructuran el conocimiento sobre las metodologías centradas en el usuario. Los principios del diseño centrado en el usuario, proporcionarán el marco conceptual básico, mientras que las fases del proceso establecerán la secuencia metodológica para su implementación. La definición y comprensión de las necesidades del usuario constituirá el núcleo operativo de estas metodologías, complementado por las técnicas específicas de investigación de usuarios y la integración con metodologías ágiles contemporáneas.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")

    // Bloque: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Principios del diseño centrado en el usuario (UCD)

    p El diseño centrado en el usuario se fundamenta en principios rectores que establecen un marco conceptual riguroso para el desarrollo de productos digitales exitosos. Estos principios trascienden las consideraciones puramente técnicas para incorporar dimensiones humanas, cognitivas y contextuales que determinan la efectividad real de las soluciones tecnológicas. La aplicación sistemática de estos principios garantiza que cada elemento del producto final contribuya significativamente a la experiencia global del usuario, creando soluciones que no solo funcionan correctamente, sino que además generan satisfacción y engagement sostenido.

    // Bloque: slider-a (usando slyder-2)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1
              h5 Principios fundamentales del UCD
              p Los principios fundamentales del UCD incluyen la participación de los usuarios durante todo el proceso de desarrollo, la comprensión integral del contexto de uso, la evaluación continua del diseño a través de métodos empíricos, y la iteración constante basada en feedback real de usuarios. Torres Burriel enfatiza que estos principios deben integrarse de manera orgánica en el proceso de desarrollo, evitando que se conviertan en actividades complementarias o posteriores al desarrollo técnico. La efectividad de estos principios radica en su aplicación sistemática y consistente, donde cada decisión de diseño debe poder justificarse a través de evidencia empírica sobre el comportamiento y las preferencias de los usuarios objetivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en gestión empresarial
              p En el desarrollo de aplicaciones de gestión empresarial, la aplicación de estos principios se manifiesta a través de la investigación continua de los flujos de trabajo reales de los usuarios, la evaluación constante de la usabilidad de las interfaces desarrolladas, y la iteración basada en métricas de satisfacción y eficiencia de uso. Un sistema de gestión de inventarios, por ejemplo, debe diseñarse considerando no solo los requerimientos funcionales, sino también los patrones cognitivos de los usuarios, sus limitaciones de tiempo, y el contexto específico en el que utilizarán la aplicación.

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Identifique una aplicación móvil que utilice frecuentemente y evalúe cómo se manifiestan los principios del UCD en su diseño.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Seleccione la aplicación y documente tres interacciones principales que realiza con ella.
          .div(titulo="Paso 2")
            p Para cada interacción, identifique evidencias de participación del usuario en el diseño (por ejemplo, tutoriales contextuales, personalización de interfaces).
          .div(titulo="Paso 3")
            p Analice cómo la aplicación demuestra comprensión del contexto de uso (adaptación a diferentes dispositivos, consideración de limitaciones de tiempo).
          .div(titulo="Paso 4")
            p Evalúe la presencia de mecanismos de feedback y mejora continua (sistemas de rating, actualizaciones basadas en comentarios de usuarios).
          .div(titulo="Resultado esperado")
            p Un análisis estructurado que demuestre la presencia o ausencia de los principios UCD en una aplicación real, proporcionando una comprensión práctica de cómo estos principios se materializan en productos digitales exitosos.

    // Bloque: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Fases del proceso de diseño centrado en el usuario

    // Bloque: bloque-img
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El proceso de diseño centrado en el usuario, se estructura en fases secuenciales e iterativas que garantizan la incorporación sistemática de la perspectiva del usuario en cada etapa del desarrollo del producto. Estas fases constituyen una estructura metodológica (framework) que permite transformar insights sobre usuarios en decisiones concretas de diseño, asegurando que el producto final responda efectivamente a las necesidades y expectativas identificadas. La naturaleza iterativa de estas fases permite el refinamiento continuo del diseño basado en evidencia empírica creciente sobre el comportamiento de los usuarios.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/9.svg', alt='')

    // Bloque: slider-a (usando slyder-2)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-lg-1
              h5 Fases principales del proceso
              p Las fases principales incluyen la investigación y análisis de usuarios, la conceptualización y diseño de soluciones, el prototipado y evaluación, y la implementación con monitoreo continuo. Labrador y Márquez Moreno, destacan que cada fase debe generar entregables específicos que alimenten las fases subsiguientes, creando un flujo de información coherente que preserve la intención de diseño original mientras permite la adaptación basada en nuevos aprendizajes. La transición entre fases debe estar mediada por criterios de evaluación claros que permitan determinar cuándo se ha alcanzado el nivel de comprensión o refinamiento necesario para avanzar al siguiente nivel de desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en e-learning
              p En el desarrollo de plataformas de e-learning, estas fases se manifiestan a través de la investigación inicial sobre los hábitos de estudio de los usuarios objetivo, la conceptualización de interfaces que faciliten diferentes estilos de aprendizaje, la creación de prototipos que permitan evaluar la efectividad de los mecanismos de navegación y presentación de contenido, y la implementación con sistemas de analítica (analytics) que permitan monitorear continuamente el enganche y la efectividad educativa de la plataforma.

    // Bloque: párrafo simple
    p La documentación rigurosa de cada fase resulta fundamental para mantener la coherencia metodológica y permitir la replicabilidad del proceso en futuros proyectos. Esta documentación debe incluir no solo los resultados obtenidos, sino también las decisiones metodológicas tomadas, las limitaciones encontradas, y las lecciones aprendidas que puedan informar iteraciones futuras del proceso de diseño.

    // Bloque: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 #[strong Ejercicio práctico. ] Diseñe un plan de fases para el desarrollo de una aplicación de seguimiento de hábitos saludables.

        AcordionA(tipo="b").mb-0
          .div(titulo="Paso 1")
            p Defina los objetivos específicos de cada fase (investigación, conceptualización, prototipado, implementación).
          .div(titulo="Paso 2")
            p Establezca los entregables concretos para cada fase (por ejemplo, personas de usuario, wireframes, prototipos interactivos).
          .div(titulo="Paso 3")
            p Determine los criterios de evaluación que permitirán la transición entre fases.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 4")
            p Establezca los mecanismos de iteración y refinamiento para cada fase.
          .div(titulo="Paso 5")
            p Cree un cronograma realista que considere las interdependencias entre fases.
          .div(titulo="Resultado esperado")
            p Un plan metodológico completo que demuestre la comprensión práctica de cómo estructurar un proceso de diseño centrado en el usuario para un proyecto específico de ingeniería de software.

    // Bloque: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Definición y comprensión de las necesidades del usuario

    p La definición y comprensión de las necesidades del usuario es un pilar fundamental en el diseño de productos digitales centrados en las personas, ya que permite construir soluciones alineadas con los contextos reales de uso y con las expectativas explícitas e implícitas de quienes interactúan con ellas.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Definición y comprensión de las necesidades del usuario
            p.mb-4(data-aos="fade-right") En el PDF Definición y comprensión de las necesidades del usuario, se exploran enfoques y técnicas que permiten identificar motivaciones, frustraciones y aspiraciones, integrando dimensiones funcionales, emocionales y contextuales. Esta guía práctica proporciona herramientas para transformar la observación y el análisis en decisiones de diseño efectivas y basadas en evidencia.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición y comprensión de las necesidades del usuario

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')

    // Bloque: titulo-segundo
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Investigación de usuarios: entrevistas, encuestas, grupos focales

    p La investigación de usuarios constituye la metodología fundamental para obtener insights valiosos sobre el comportamiento, las necesidades, y las expectativas de los usuarios objetivo de un producto digital. Esta disciplina combina técnicas cuantitativas y cualitativas para construir una comprensión multidimensional de los usuarios, que trascienda las asunciones intuitivas y se base en evidencia empírica sólida. La efectividad de estas técnicas radica en su aplicación estratégica y complementaria, donde cada método contribuye perspectivas específicas que enriquecen el entendimiento global del usuario.

    // Bloque: infografia (usando infografia-1)
    .bg-full-width.bg-color-info.mb-0
      .px-4.px-md-5.pt-4.pt-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 972px;").mx-auto

              .bg-color-white.box-shadow.p-3(x="96%" y="26%" numero="+")
                h5 Entrevistas
                p Las entrevistas en profundidad, permiten explorar las motivaciones, frustraciones, y contextos específicos de uso con un nivel de detalle que revela insights cualitativos ricos y matizados.

              .bg-color-white.box-shadow.p-3(x="3.5%" y="51%" numero="+")
                h5 Encuestas
                p Las encuestas proporcionan datos cuantitativos que permiten validar hipótesis e identificar patrones a gran escala, mientras que los grupos focales facilitan la comprensión de dinámicas sociales y la generación de ideas a través de la interacción grupal.

    // Bloque: bg-full-color (usando bg-full-width sin icono)
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Fischer enfatiza que la selección de técnicas debe estar guiada por los objetivos específicos de investigación y las características del usuario objetivo, reconociendo que diferentes métodos, revelan distintos aspectos de la experiencia del usuario.

    // Bloque: img-bloque
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/15.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el desarrollo de aplicaciones de banca móvil, la investigación de usuarios podría incluir entrevistas detalladas sobre los hábitos financieros y las preocupaciones de seguridad de los usuarios, encuestas para cuantificar la frecuencia de uso de diferentes funcionalidades bancarias, y grupos focales para explorar las percepciones sobre nuevas características como pagos por proximidad o gestión de inversiones. Esta aproximación multidisciplinar permite diseñar experiencias que respondan tanto a las necesidades funcionales como a las expectativas emocionales de confianza y control, que caracterizan el sector financiero.

    // Bloque: p (párrafo simple)
    p La implementación efectiva de estas técnicas requiere competencias específicas en diseño de instrumentos de investigación, facilitación de sesiones, y análisis de datos cualitativos y cuantitativos. La calidad de los insights obtenidos, depende directamente de la rigurosidad metodológica aplicada en cada fase del proceso de investigación, desde la definición de objetivos, hasta la síntesis de hallazgos.

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Diseño un plan de investigación para una aplicación de domicilio de comida, dirigida a estudiantes universitarios.

    // Bloque: acordeon-img
    .row.align-items-start.mb-5
      .col-lg-8

        AcordionA(tipo="b").mb-5
          .div(titulo="Paso 1")
            p Defina tres objetivos específicos de investigación (por ejemplo, entender patrones de pedido, identificar barreras para el uso, evaluar preferencias de pago).
          .div(titulo="Paso 2")
            p Seleccione la técnica más apropiada para cada objetivo (entrevista, encuesta, o grupo focal).
          .div(titulo="Paso 3")
            p Desarrolle el protocolo específico para una de las técnicas seleccionadas, incluyendo preguntas claves y criterios de selección de participantes.
          .div(titulo="Paso 4")
            p Establezca los criterios de análisis que aplicará a los datos recolectados.
          .div(titulo="Paso 5")
            p Determine cómo integrará los insights de diferentes técnicas, en hallazgos coherentes.
          .div(titulo="Resultado esperado")
            p Un plan de investigación completo que demuestre la comprensión de cómo aplicar diferentes técnicas de investigación de usuarios, de manera complementaria y estratégica.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/17.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque: titulo-segundo
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Metodologías ágiles aplicadas a UX

    p La aplicación de metodologías ágiles al diseño de experiencia de usuario permite responder con mayor eficiencia a las necesidades cambiantes del mercado, sin perder de vista la comprensión profunda del usuario.

    // Bloque: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')

          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Metodologías ágiles aplicadas a UX
            p.mb-4(data-aos="fade-right") En el PDF Metodologías ágiles aplicadas a UX, se exploran estrategias para integrar los principios de diseño centrado en el usuario dentro de ciclos iterativos de desarrollo, manteniendo el equilibrio entre velocidad y calidad. Este recurso proporciona herramientas prácticas para adaptar procesos de investigación, diseño y validación a entornos ágiles, promoviendo la colaboración efectiva entre equipos de UX y desarrollo.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Metodologías ágiles aplicadas a UX

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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
