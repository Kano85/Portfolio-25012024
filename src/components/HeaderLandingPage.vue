<template>
  <section
    :class="['self-stretch overflow-hidden flex flex-row items-start justify-start pt-[1.9rem] px-[2.5rem] pb-[1.913rem] box-border relative gap-[0.625rem] max-w-full text-left text-[5.625rem] text-primary-main-1 font-roboto-mono', { 'bg-light-gray-custom': isLargerScreen }]">
    <img class="h-full w-full absolute !m-[0] top-[0rem] right-0 bottom-[0rem] max-h-full object-cover z-[1]"
      :style="{ 'width': isLargerScreen ? '26.431rem' : '100%', 'right': isLargerScreen ? '12.019rem' : '0' }"
      loading="lazy" alt="" :src="imageSrc" />
    <div class="flex-1 overflow-hidden flex flex-col items-start justify-between min-h-[33.688rem] max-w-full z-[2]">
      <header
        class="self-stretch overflow-hidden flex flex-row items-end justify-between gap-[1.25rem] text-left text-[1rem] text-primary-main-1 font-roboto-mono">
        <div class="w-[9.813rem] flex flex-row items-end justify-start py-[0.375rem] px-[0rem] box-border gap-[2.5rem]">
          <div class="overflow-hidden flex flex-row items-start justify-end cursor-pointer" @click="onWorksClick">
            <div class="relative font-medium inline-block min-w-[3.063rem]">
              Works
            </div>
          </div>
          <div class="overflow-hidden flex flex-row items-start justify-end cursor-pointer"
            @click="onFrameContainer1Click">
            <div class="relative font-medium inline-block min-w-[4.25rem]">
              Contact
            </div>
          </div>
        </div>
        <div class="w-[6.063rem] flex flex-row items-start justify-start text-[2.5rem]">
          <h1 class="m-0 flex-1 relative text-inherit font-bold font-inherit whitespace-nowrap">
            Hi !
          </h1>
        </div>
      </header>
      <div class="self-stretch flex flex-row items-start justify-center max-w-full">
        <b class="flex-1 relative uppercase inline-block max-w-full mq450:text-[1.88rem] mq1050:text-[2.813rem]">
          <!-- Envuelve "Harold" en un <span> y aplica la clase aquí -->
          <p class="m-0"><span class="harold-cano">Harold</span></p>
          <p class="m-0">
            <span class="harold-cano">Cano</span>
            <span class="text-[5.588rem]"> </span>
          </p>
        </b>
      </div>


    </div>
  </section>
</template>
<script>
import { defineComponent, computed, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
  name: "HeaderLandingPage",
  setup() {
    const isLargerScreen = ref(window.innerWidth > 925);

    const updateScreenSize = () => {
      isLargerScreen.value = window.innerWidth > 925;
    };

    onMounted(() => {
      window.addEventListener('resize', updateScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenSize);
    });

    const imageSrc = computed(() => {
      return isLargerScreen.value ? '/cano0040-1@2x.png' : '/landingphoto-20.03.png';
    });

    return { imageSrc, isLargerScreen };
  },
  methods: {
    onWorksClick() {
      this.$emit('navigate', 'works');
    },
    onFrameContainer1Click() {
      this.$emit('navigate', 'contact');
    },
  },
});
</script>
<style>
/* Ajustes para "Harold Cano" en pantallas menores de 925px */
@media screen and (max-width: 925px) {
  .harold-cano {
    background-color: white;
    /* Aplica el color de fondo blanco */
    padding: 0.25rem;
    /* Añade algo de padding si es necesario */
  }
}
</style>