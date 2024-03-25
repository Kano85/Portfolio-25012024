<template>
  <div @click="navigateToUrl"
    class="flex-1 overflow-hidden flex flex-col items-start justify-end pt-[23.063rem] px-[1.25rem] pb-[1.25rem] box-border bg-[url('/background1-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[20.938rem] max-w-full text-left text-[1.875rem] text-base-white font-roboto-mono mq450:pt-[15rem] mq450:box-border cursor-pointer"
    :style="GalleryItemStyle">
    <img class="w-[35.188rem] h-[28.125rem] relative object-cover hidden max-w-full" alt="" :src="background11" />
    <div class="bg-red overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.625rem] z-[1]"
      :style="interactiveDesignElementsStyle">
      <h2 class="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.125rem] mq1050:text-[1.5rem]">
        {{ trainspot }}
      </h2>
    </div>
    <div
      class="bg-red overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[0.625rem] z-[1] text-[1rem]"
      :style="frameDivStyle">
      <div class="relative inline-block min-w-[5.438rem]" :style="divStyle">
        {{ prop }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GalleryItem",
  props: {
    background11: String,
    trainspot: String,
    prop: String,
    propBackgroundImage: String,
    propBackgroundColor: String,
    propBackgroundColor1: String,
    propMinWidth: [Object, Array, String, Number, Boolean],
    navigateUrl: String, // New prop for navigation URL
  },
  computed: {
    GalleryItemStyle() {
      return {
        backgroundImage: this.propBackgroundImage,
      };
    },
    interactiveDesignElementsStyle() {
      return {
        backgroundColor: this.propBackgroundColor,
      };
    },
    frameDivStyle() {
      return {
        backgroundColor: this.propBackgroundColor1,
      };
    },
    divStyle() {
      return {
        minWidth: this.propMinWidth,
      };
    },
  },
  methods: {
    navigateToUrl() {
      if (this.navigateUrl) {
        // Assuming you're using Vue Router for navigation
        this.$router.push(this.navigateUrl);
      }
    },
  },
});
</script>
