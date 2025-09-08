<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Técnicas de retrospección efectiva'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: bloque-img
      .bg-color-11.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El diseño centrado en el usuario, representa un enfoque fundamental que revoluciona la manera en que se conciben y desarrollan, en la actualidad, los productos digitales. Esta perspectiva metodológica coloca al usuario como el elemento central del proceso de diseño, garantizando que cada decisión tomada durante el desarrollo del producto responda directamente a las necesidades, expectativas y comportamientos reales de quienes finalmente interactuarán con la solución tecnológica. En el contexto de la Ingeniería de Software, esta aproximación se convierte en un diferenciador crítico que determina el éxito o fracaso de las aplicaciones y sistemas desarrollados.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/1.svg', alt='')

      // Bloque: imagen-texto-color  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La comprensión profunda de los principios del diseño centrado en el usuario, permite desarrollar soluciones tecnológicas que no solo funcionen correctamente desde el punto de vista técnico, sino que además generen experiencias significativas y satisfactorias para los usuarios finales. Esta dualidad entre funcionalidad técnica y experiencia humana, constituye el núcleo de la disciplina UX, donde cada elemento del diseño debe justificarse a través de evidencia empírica, sobre el comportamiento y las preferencias de los usuarios. El dominio de estas metodologías resulta esencial para cualquier profesional de la ingeniería de software, que aspire a crear productos digitales verdaderamente exitosos en el mercado actual.
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 A lo largo de esta unidad, se explorará de manera integral, el ecosistema metodológico que sustenta el diseño centrado en el usuario, desde las técnicas de investigación más fundamentales hasta las herramientas específicas, como la creación de personas usuarios. Esta aproximación sistemática permitirá desarrollar las competencias necesarias para implementar procesos de diseño basados en evidencia, donde cada decisión de diseño esté respaldada por datos concretos sobre el comportamiento y las necesidades de los usuarios. La integración de estos conocimientos con las competencias técnicas propias de la ingeniería de software constituye la base para el desarrollo de productos digitales excepcionales.


      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/wrrwV-_zLaY" target="_blank" rel="noopener noreferrer") Software Guru. (2017, 6 de noviembre). UX Para Desarrolladores Una guía práctica. [Vídeo] YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/MSj9tC9Sp1s" target="_blank" rel="noopener noreferrer") Software Guru. (2019, 8 de junio). #EUXDAY 2019: Integración de UX research en métodos ágiles - Elizabeth Guevara. [Vídeo] YouTube.


            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
