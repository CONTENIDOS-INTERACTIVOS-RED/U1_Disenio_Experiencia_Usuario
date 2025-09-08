<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Introducción'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: imagen-iconobloque-texto 4:8
      .row.mb-5
        .col-lg-4.d-none.d-lg-block
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El diseño centrado en el usuario constituye el paradigma fundamental que transforma la manera en que se conciben, desarrollan y evalúan los productos digitales en la era contemporánea. Esta unidad temática explora los principios metodológicos que sitúan al usuario como el elemento articulador de todas las decisiones de diseño, trascendiendo las consideraciones puramente técnicas para incorporar dimensiones humanas que determinan el éxito real de las soluciones tecnológicas. En el contexto de la Ingeniería de Software, estos principios representan la diferencia crítica entre productos que simplemente funcionan frente a productos que generan experiencias excepcionales y valor sostenido para sus usuarios.
          p(data-aos="fade-left") Al finalizar esta unidad, será capaz de describir los fundamentos de la experiencia de usuario, su importancia en la creación de interfaces intuitivas y accesibles. Esta competencia le permitirá comprender cómo los principios del diseño centrado en el usuario se traducen en metodologías específicas de investigación, análisis y representación que informan decisiones concretas de desarrollo. Desarrollará la capacidad para aplicar técnicas sistemáticas de investigación de usuarios y crear representaciones efectivas que guíen el proceso de diseño hacia soluciones que respondan genuinamente a las necesidades y expectativas de los usuarios objetivo.

      // Bloque: bloque-img
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-4(data-aos="fade-up") El dominio de los principios de diseño, #[strong centrado en el usuario], se ha convertido en una competencia diferenciadora fundamental para los profesionales de la ingeniería de software en un mercado tecnológico cada vez más competitivo y sofisticado.
              p.mb-0(data-aos="fade-up") Las organizaciones contemporáneas reconocen que el éxito de sus productos digitales depende no solo de la excelencia técnica, sino de su capacidad para crear experiencias que se conecten profundamente con los usuarios reales. Esta perspectiva centrada en el usuario reduce significativamente los riesgos de desarrollo de productos que, aunque técnicamente sólidos, pueden fallar en el mercado por no responder adecuadamente a las necesidades de su público objetivo, garantizando la relevancia y sostenibilidad de las soluciones desarrolladas.
          .col-lg-auto
            figure
              img(src='@/assets/curso/intro/3.svg', alt='')

      // Bloque: título simple
      p(data-aos="fade-left").mb-2 Esta unidad se estructura en tres componentes complementarios que proporcionan una comprensión integral del diseño centrado en el usuario:

      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.py-5
          // Bloque: tarjetas-boton
          div.row.justify-content-center.align-items-stretch
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-2.text-center #[strong Metodologías]
                p.mb-0.text-center Las metodologías centradas en el usuario, establecen el marco conceptual y procesal fundamental, explorando principios, fases, investigación básica e integración con enfoques ágiles contemporáneos.

            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-2.text-center #[strong Técnicas]
                p.mb-0.text-center Las técnicas de investigación de usuarios desarrollan las competencias metodológicas específicas, abarcando métodos cualitativos y cuantitativos, entrevistas, grupos focales, encuestas y análisis de datos comportamentales.

            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/intro/6.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.mb-2.text-center #[strong Creación]
                p.mb-0.text-center La creación de usuarios completa el espectro de competencias, proporcionando herramientas para transformar insights de investigación en representaciones útiles que guíen decisiones concretas de diseño y desarrollo.

      // Bloque: imagen-color
      .row.mb-0.text-white
        .col-lg-8
          .bg-color-3.p-4.py-lg-5(data-aos="fade-left").mb-4
            p.mb-0 Se espera que mantenga un enfoque analítico durante el desarrollo de esta unidad, relacionando continuamente los conceptos teóricos con aplicaciones prácticas en contextos reales de ingeniería de software. La participación en las actividades propuestas resultará fundamental para consolidar la comprensión de las metodologías presentadas y desarrollar las competencias necesarias para su aplicación efectiva. Es recomendable que posea conocimientos básicos sobre procesos de desarrollo de software y principios de usabilidad, aunque estos conceptos se contextualizarán durante el desarrollo de los contenidos para garantizar una comprensión profunda independientemente del nivel de experiencia previa en diseño de experiencia de usuario.
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
