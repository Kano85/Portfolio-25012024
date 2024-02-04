<template>
  <div
    class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-left text-[3.13rem] text-white font-roboto-mono mq1050:flex-wrap"
    data-scroll-to="headerContainer"
  >
    <!-- Navigation bar with dynamic styling for responsiveness -->
    <nav
      class="m-0 w-[28.31rem] flex flex-row items-center justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] max-w-full whitespace-nowrap text-left text-[1rem] text-white font-roboto-mono mq450:gap-[1.5rem] mq750:flex-wrap"
      :style="frameNavStyle"
    >
      <!-- Back navigation item -->
      <div
        class="w-[5.13rem] flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
        @click="onWBSArrowIconClick"
      >
        <img
          class="h-[1.5rem] w-[1.5rem] relative object-contain min-h-[1.5rem]"
          loading="eager"
          alt="Back"
          src="/wbs-arrow@2x.png"
        />
        <div class="flex-1 relative font-medium">Back</div>
      </div>

      <!-- Trainspot navigation item -->
      <div
        class="flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
        @click="onWBSArrowIcon1Click"
        :style="fRAMEStyle"
      >
        <img
          class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
          loading="eager"
          alt="Trainspot"
          src="/wbs-arrow-1.svg"
        />
        <div class="relative font-medium">{{ trainspot }}</div>
      </div>

      <!-- Kursplannung navigation item -->
      <div
        class="flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
        @click="onFrameContainerClick"
        :style="frameDivStyle"
      >
        <div class="relative font-medium">{{ kursplannung }}</div>
        <img
          class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
          loading="eager"
          alt="Kursplannung"
          src="/wbs-arrow-2.svg"
        />
      </div>
    </nav>

    <!-- Page title -->
    <h1
      class="m-0 h-[4.13rem] relative text-inherit uppercase font-bold inline-block max-w-full mq1050:text-[2.5rem] mq450:text-[1.88rem]"
    >
      {{ kurskonfigurator }}
    </h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header1',
  props: {
    trainspot: String,
    kursplannung: String,
    kurskonfigurator: String,
    fRAMEWidth: [Object, Array, String, Number, Boolean],
    wBSArrowIconFlex: String,
    wBSArrowIconMinWidth: [Object, Array, String, Number, Boolean],
    kursplannungFlex: String,
    kursplannungMinWidth: [Object, Array, String, Number, Boolean],
    onWBSArrowIconClick: Function,
    onWBSArrowIcon1Click: Function,
    onFrameContainerClick: Function,
  },
  computed: {
    // Computes styles for the navigation based on component props
    frameNavStyle() {
      return {
        width: this.fRAMEWidth,
      };
    },
    fRAMEStyle() {
      return {
        flex: this.wBSArrowIconFlex,
        minWidth: this.wBSArrowIconMinWidth,
      };
    },
    frameDivStyle() {
      return {
        flex: this.kursplannungFlex,
        minWidth: this.kursplannungMinWidth,
      };
    },
  },
});
</script>
