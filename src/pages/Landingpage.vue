<template>
  <div class="w-full overflow-hidden flex flex-col items-start pt-0 pb-0.5 box-border tracking-normal">
    <HeaderLandingPage @navigate="handleNavigation" />
    <About />
    <MyRecentWork data-scroll-to="works" />
    <section
      class="my-custom-mt self-stretch bg-white overflow-hidden flex flex-col items-end justify-start py-[1.25rem] px-[2.5rem] gap-[1.25rem] text-left text-[1rem] text-primary-main-1 font-roboto-mono"
      data-scroll-to="contact">
      <b class="h-[4.75rem] relative text-[3rem] uppercase inline-block mq450:text-[2rem] mq925:text-[3rem]">Contact</b>
      <div class="h-[2.63rem] relative tracking-[0.01em] text-right inline-block">
        <p class="m-0">hcanocardenas@gmail.com</p>
        <p class="m-0">+4917627744274</p>
      </div>
      <div class="relative font-medium">
        <a class="text-[inherit]" href="https://www.linkedin.com/in/harold-cano-cardenas-3a77a92b3" target="_blank">
          <span class="[text-decoration:underline]">Linkedin</span>
        </a>
        |
        <a class="text-[inherit]" href="https://www.xing.com/profile/Harold_Cano" target="_blank">
          <span class="[text-decoration:underline]">Xing</span>
        </a>
      </div>
    </section>
    <footer
      class="self-stretch bg-primary-main-1 overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-5 min-h-[15.81rem] max-w-full shrink-0 text-left text-white font-roboto-slab">
      <h1 class=" mb-36 text-left text-1.25rem inline-block ml-5 font-normal ">
        Empowering your vision with <span class="font-bold">Functionality</span>
      </h1>
      <div
        class="self-stretch flex flex-row items-start justify-between py-0 px-5 box-border gap-5 max-w-full text-[1.25rem] mq925:flex-wrap">
        <div class="relative inline-block max-w-full">
          <p class="m-0">By the way, I built the Portfolio from scratch with Vue JS, Tailwind, Firebase</p>
          <p class="m-0">
            <a class="text-inherit underline" href="https://github.com/Kano85" target="_blank">
              https://github.com/Kano85
            </a>
          </p>
        </div>
        <img class="h-[3.74rem] w-[3.74rem] relative cursor-pointer" loading="eager" alt="" src="/group-854.svg"
          @click="onGroupClick" />
      </div>
    </footer>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HeaderLandingPage from "../components/HeaderLandingPage.vue";
import About from "../components/About.vue";
import MyRecentWork from "../components/MyRecentWork.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    HeaderLandingPage,
    About,
    MyRecentWork
  },
  methods: {
    handleNavigation(section) {
      this.$nextTick(() => {
        const sectionElement = document.querySelector(`[data-scroll-to='${section}']`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      });
    },
    onGroupClick() {
      // Scrolls to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>
<style>
/* Estilos globales o específicos del componente */
.my-custom-mt {
  margin-top: 10rem;
  /* Margen por defecto para pantallas pequeñas */
}

@media (min-width: 926px) {

  /* Cambia a la pantalla más grande */
  .my-custom-mt {
    margin-top: 30rem;
    /* Aproximadamente 30px, ajusta según sea necesario */
  }
}
</style>
