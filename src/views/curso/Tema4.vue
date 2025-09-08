<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Creación de usuarios (user persona)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: bloque-img
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La creación de usuarios constituye una metodología fundamental para humanizar y concretar los insights de investigación, transformando datos abstractos sobre usuarios en representaciones vividas y específicas, que guían las decisiones de diseño, de manera intuitiva y efectiva. Los usuarios trascienden la simple demografía para capturar motivaciones, comportamientos, contextos de uso, y aspiraciones que caracterizan a diferentes segmentos de usuarios, proporcionando una referencia constante que mantiene el enfoque centrado en el usuario, durante todo el proceso de desarrollo del producto.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')

    // Bloque: párrafo simple
    p.mb-5 El desarrollo de usuarios efectivos requiere un proceso riguroso que integre múltiples fuentes de datos de investigación, en narrativas #[strong coherentes y confiables] que representen fielmente las características de los usuarios reales.

    // Bloque: imagen-color-texto
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.p-4(data-aos="fade-left").mb-5
          p.mb-0 Esta metodología permite que equipos multidisciplinarios mantengan una comprensión compartida del usuario objetivo, facilitando la comunicación y la toma de decisiones colaborativa. La efectividad del usuario radica en su capacidad para generar empatía y comprensión profunda, transformando estadísticas impersonales en historias humanas, que motivan decisiones de diseño centradas en necesidades reales.

        p(data-aos="fade-left").mb-4 En esta sección, se explorarán cinco dimensiones críticas de la creación de usuarios que proporcionan las competencias necesarias para desarrollar representaciones de usuarios que sean tanto precisas como útiles, para el proceso de diseño.

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La definición conceptual de usuarios establecerá la estructura teórica, mientras que las técnicas específicas de creación, el establecimiento de escenarios de uso, el análisis de roles o necesidades, y la aplicación práctica para guiar decisiones completarán el espectro de competencias necesarias para implementar esta metodología efectivamente.

    // Bloque: titulo-segundo
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Definición de usuario y perfiles

    p Los usuarios constituyen representaciones semi-ficticias de personas reales basadas en investigación empírica que encapsulan características demográficas, comportamentales, motivacionales, y contextuales de segmentos específicos del público objetivo de un producto digital. Estas representaciones trascienden la simple segmentación demográfica para incorporar dimensiones psicográficas, tecnográficas, y situacionales que influyen en cómo diferentes tipos de usuarios interactúan con productos digitales. La efectividad de los usuarios radica en su capacidad para transformar datos de investigación en narrativas humanizadas que faciliten la empatía y la comprensión profunda del usuario por parte de equipos de desarrollo.

    // Bloque: slider-a (usando slyder-3)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7.order-lg-1
              h5 Síntesis de datos de investigación
              p La construcción de usuarios efectivos requiere la síntesis cuidadosa de múltiples fuentes de datos de investigación, incluyendo entrevistas cualitativas, datos de comportamiento, encuestas, y observaciones etnográficas, en representaciones coherentes que capturen tanto las similitudes como las diferencias significativas entre diferentes segmentos de usuarios. Torres Burriel enfatiza que los usuarios deben estar basadas en evidencia real y evitar estereotipos o asunciones no validadas, manteniendo un balance entre especificidad suficiente para guiar decisiones de diseño y generalidad apropiada para representar segmentos más amplios de usuarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en telemedicina
              p En el desarrollo de aplicaciones de telemedicina, las personas podrían incluir representaciones como: "María, médica de 45 años que trabaja en consulta privada y busca herramientas que le permitan brindar seguimiento remoto a pacientes crónicos sin comprometer la calidad de atención", o "Carlos, paciente de 65 años con diabetes que vive en zona rural y necesita monitoreo médico accesible, pero se siente intimidado por tecnologías complejas". Estas representaciones capturan no solo características demográficas sino también motivaciones, limitaciones, y contextos específicos que influyen en la experiencia con el producto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7.order-lg-1
              h5 Documentación efectiva
              p La documentación de usuarios debe incluir información suficiente para guiar decisiones de diseño específicas, incluyendo objetivos primarios y secundarios, frustraciones típicas, contextos de uso preferidos, competencias tecnológicas, y criterios de éxito. Esta documentación debe ser accesible y consultable para equipos de desarrollo, utilizando formatos visuales y narrativos que faciliten la referencia continua durante el proceso de diseño.

    // Bloque: bg-icono-texto (usando bg-full-icono-texto)
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Cree un usuario primario para una aplicación de gestión de finanzas familiares.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Defina las características demográficas básicas (edad, ocupación, situación familiar, nivel socioeconómico).
          .div(titulo="Paso 2")
            p Desarrolle el perfil psicográfico (valores, actitudes hacia el dinero, estilo de vida).
          .div(titulo="Paso 3")
            p Establezca el contexto tecnológico (dispositivos utilizados, competencias digitales, aplicaciones preferidas).
          .div(titulo="Paso 4")
            p Identifique motivaciones primarias para usar la aplicación y frustraciones con soluciones existentes.
          .div(titulo="Paso 5")
            p Cree una narrativa breve que integre todos estos elementos en una historia coherente y memorable.
          .div(titulo="Resultado esperado")
            p Un perfil de usuario primario creado y basado en evidencia que sirva como referencia efectiva para decisiones de diseño, demostrando la comprensión de cómo transformar datos de investigación en representaciones humanizadas del usuario.

    // Bloque: titulo-segundo
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Técnicas para crear usuarios a partir de datos de investigación

    p La transformación de datos de investigación, dispersos en usuarios coherentes y útiles, requiere la aplicación de técnicas sistemáticas de síntesis y análisis que permitan identificar patrones significativos, agrupar características similares, y construir narrativas representativas que capturen la diversidad real de la audiencia objetivo. Este proceso trasciende la simple compilación de características para involucrar análisis interpretativo que revele las relaciones subyacentes entre diferentes aspectos del comportamiento y las motivaciones del usuario.

    // Bloque: slider-a (usando slyder-3)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7.order-lg-1
              h5 Técnicas de análisis y síntesis
              p Las técnicas efectivas incluyen el análisis de segmentos(clúster) para identificar agrupaciones naturales en los datos, la creación de matrices de características que permitan visualizar patrones y diferencias entre segmentos, y el desarrollo de narrativas basadas en arquetipos que emergen del análisis de datos cualitativos. El proceso debe mantener fidelidad a los datos originales mientras crea representaciones que sean suficientemente específicas para guiar decisiones de diseño concretas. Fernández Casado destaca que esta síntesis requiere balance entre precisión empírica y utilidad práctica, evitando tanto la simplificación excesiva que resulta en personas genéricas como la sobre especificación que resulta en representaciones demasiado restrictivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en e-commerce B2B
              p En el desarrollo de plataformas de e-commerce B2B, las técnicas de creación de personas podrían incluir el análisis de patrones de compra para identificar diferentes tipos de decisores de compra, la síntesis de entrevistas para comprender motivaciones específicas de diferentes roles organizacionales, y la correlación de datos demográficos con comportamientos de uso para identificar segmentos significativos. Este análisis podría revelar personas como el "Comprador Estratégico" que prioriza características técnicas y compatibilidad con sistemas existentes, versus el "Gestor de Presupuesto" que se enfoca en consideraciones de costo y ROI.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/12.png")
            .col-lg-7.order-lg-1
              h5 Validación de personas creadas
              p La validación de personas creadas requiere verificación con datos adicionales y feedback de interesados que tengan contacto directo con usuarios reales. Esta validación debe confirmar que las personas creadas se conecten con experiencias reales y proporcionen una guía útil para decisiones de diseño específicas.

    // Bloque: bg-icono-texto (usando bg-full-icono-texto)
    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Desarrolle personas a partir de un dataset simulado de investigación para una aplicación de fitness.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Analice datos demográficos de 50 usuarios simulados para identificar 3-4 clúster naturales basados en edad, experiencia con fitness, y objetivos.
          .div(titulo="Paso 2")
            p Integre datos cualitativos simulados (motivaciones, barreras, preferencias) para cada clúster.
          .div(titulo="Paso 3")
            p Identifique las características distintivas que diferencian cada segmento.
          .div(titulo="Paso 4")
            p Desarrolle narrativas específicas para cada persona que integren datos cuantitativos y cualitativos.
          .div(titulo="Paso 5")
            p Valide las personas creadas verificando que capturen la diversidad presente en los datos originales.
          .div(titulo="Resultado esperado")
            p Un conjunto de 3-4 personas bien diferenciadas, que demuestren la comprensión de cómo extraer patrones significativos de datos de investigación y transformarlos en representaciones útiles del usuario.

    // Bloque: titulo-segundo
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Establecimiento de escenarios de uso basados en los perfiles de usuario

    p El establecimiento de escenarios de uso basados en perfiles de usuario permite visualizar cómo interactúan distintas personas con un producto digital en contextos reales y específicos.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Establecimiento de escenarios de uso basados en los perfiles de usuario
            p.mb-4(data-aos="fade-right") En el PDF Establecimiento de escenarios de uso basados en los perfiles de usuario, se analizan técnicas para construir narrativas detalladas que conecten las características del usuario con su experiencia en situaciones concretas, revelando necesidades, fricciones y oportunidades de mejora. Estos escenarios se convierten en una herramienta clave para orientar decisiones de diseño centradas en el usuario y adaptadas a la diversidad de situaciones de uso.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Establecimiento de escenarios de uso basados en los perfiles de usuario

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/15.png', alt='')

    // Bloque: titulo-segundo
    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Análisis de roles y necesidades específicas de los usuarios

    p El análisis de roles y necesidades específicas de los usuarios permite diseñar productos digitales que se adapten de forma precisa a las funciones, responsabilidades y expectativas de cada perfil involucrado.

    // Bloque: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/16.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis de roles y necesidades específicas de los usuarios
            p.mb-4(data-aos="fade-right") En el PDF Análisis de roles y necesidades específicas de los usuarios, se presentan estrategias para identificar y documentar cómo diferentes usuarios interactúan con el sistema, qué información requieren y cómo sus acciones afectan a otros roles. Este enfoque proporciona una base sólida para crear experiencias personalizadas que mantengan la coherencia general del producto, optimizando su utilidad y eficacia en contextos reales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de roles y necesidades específicas de los usuarios

    // Bloque: titulo-segundo
    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Aplicación de creación de usuarios para guiar decisiones de diseño

    p La aplicación efectiva de creación de usuarios para guiar decisiones de diseño, constituye la culminación del proceso de investigación, representa la transformación de perspectivas sobre usuarios en decisiones concretas de funcionalidad, interfaz, y experiencia que optimicen el valor entregado a usuarios reales. Esta aplicación trasciende la simple referencia a características de usuarios para involucrar evaluación sistemática de alternativas de diseño, a través de la perspectiva de diferentes personas, asegurando que cada decisión contribuya positivamente a la experiencia de los segmentos de usuarios primarios.

    // Bloque: slider-a (usando slyder-3)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/17.png")
            .col-lg-7.order-lg-1
              h5 Marco de trabajo para decisiones de diseño
              p El manejo de personas como herramienta de toma de decisiones requiere marcos de trabajo específicos que permitan evaluar características propuestas, diseños de interfaz, y patrones de interacción contra las necesidades, preferencias, y limitaciones de diferentes segmentos de usuarios. Este proceso debe considerar tanto la persona primaria que representa el usuario más importante para el éxito del producto, como personas secundarias que representan segmentos significativos que deben ser considerados sin comprometer la experiencia primaria. Pintos Fernández enfatiza que esta aplicación debe ser sistemática en lugar de improvisada, utilizando personas como punto de referencia consistente a lo largo del proceso de diseño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/18.png")
            .col-lg-7.order-lg-1
              h5 Aplicación en automatización del hogar
              p En el desarrollo de aplicaciones de automatización del hogar, las personas podrían guiar decisiones como el nivel de detalle técnico mostrado en interfaces (optimizado para personas "Entusiastas de la Tecnología" versus personas "Buscadoras de Comodidad"), la complejidad de reglas de automatización permitidas (reflejando diferentes niveles de experiencia técnica), los tipos de notificaciones y alertas implementadas (considerando diferentes niveles de tolerancia para interrupciones). Cada decisión de diseño debe evaluarse contra qué tan bien sirve a las necesidades primarias de cada persona relevante.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema4/19.png")
            .col-lg-7.order-lg-1
              h5 Documentación de decisiones
              p La documentación de decisiones de diseño guiadas por usuarios debe capturar no solo las decisiones tomadas, sino también la justificación basada en características de personas, creando un registro que facilite consistencia en decisiones futuras y permita evaluación de la efectividad de decisiones de diseño guiadas por personas a través de pruebas con usuarios y datos de uso del mundo real.

    // Bloque: bg-icono-texto (usando bg-full-icono-texto)
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Ejercicio práctico.] Cree usuarios para guiar decisiones de diseño en una aplicación de medición de calidad del aire.

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Considere dos personas distintas (activista ambiental, padre preocupado).
          .div(titulo="Paso 2")
            p Identifique tres decisiones de diseño específicas (nivel de detalle en visualización de datos, frecuencia de notificaciones, tipos de recomendaciones accionables).
          .div(titulo="Paso 3")
            p Para cada decisión, evalúe diferentes alternativas contra las necesidades y preferencias de cada persona.
          .div(titulo="Paso 4")
            p Documente las decisiones tomadas y la justificación basada en características de las personas.
          .div(titulo="Paso 5")
            p Establezca métricas que permitirán validar la efectividad de estas decisiones guiadas por personas.
          .div(titulo="Resultado esperado")
            p Un conjunto de decisiones de diseño documentadas que demuestren cómo los usuarios pueden guiar sistemáticamente decisiones concretas en el desarrollo de productos, mostrando conexión clara entre perspectivas de investigación de usuarios y resultados específicos de diseño.

    // Bloque: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-5 Las temáticas abordadas en esta unidad, constituyen los fundamentos conceptuales y metodológicos esenciales para cualquier profesional de la ingeniería de software que aspire a desarrollar productos digitales verdaderamente centrados en el usuario. La comprensión profunda de los principios del diseño centrado en el usuario, el dominio de las técnicas de investigación de usuarios, y la capacidad para crear y aplicar usuarios efectivos representan competencias diferenciadoras en un mercado tecnológico cada vez más competitivo y sofisticado.

        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 En el contexto laboral contemporáneo, estas competencias trascienden el ámbito específico del diseño UX para convertirse en habilidades transversales que enriquecen el perfil profesional del ingeniero de software. La capacidad para comprender profundamente a los usuarios, validar asunciones a través de investigación rigurosa, y tomar decisiones de desarrollo basadas en evidencia empírica constituye una ventaja competitiva fundamental que distingue a los profesionales que simplemente implementan requerimientos técnicos de aquellos que crean soluciones que generan valor real y sostenido.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/23.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La aplicación de estas metodologías en proyectos reales de ingeniería de software permite no solo mejorar la calidad de los productos desarrollados, sino también reducir significativamente los riesgos asociados con el desarrollo de soluciones que, aunque técnicamente excelentes, pueden fallar en el mercado por no responder adecuadamente a las necesidades y expectativas de los usuarios finales. Esta perspectiva centrada en el usuario se convierte en una garantía de relevancia y sostenibilidad para los productos digitales desarrollados, contribuyendo al éxito tanto para los usuarios como para las organizaciones que los desarrollan.

    // Bloque: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque: material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569" target="_blank" rel="noopener noreferrer") Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ccSS4C5GYxs" target="_blank" rel="noopener noreferrer") Mobiliza Academy. (2021). Las mejores metodologías ágiles para el Desarrollo de Software [video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema4,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
