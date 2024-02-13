<template>
  <!-- this is the nav header   -->
  <div
    class="self-stretch flex flex-row items-center justify-between py-[0rem] px-[0rem] gap-[1.25rem] text-left text-[1rem] text-white font-roboto-mono mq750:flex-wrap">
    <div
      class="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] gap-[3rem] mq450:flex-wrap mq450:gap-[1.5rem]">
      <!-- Back button remains  -->
      <div class="w-[5.13rem] flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
        @click="onArrowInstanceContainerClick">
        <img class="h-[1.5rem] w-[1.5rem] object-contain" loading="eager" alt="" src="/wbs-arrow@2x.png" />
        <div class="font-medium">Back</div>
      </div>
      <!-- Kurskonfigurator button with icon on the right side -->
      <div class="flex flex-row items-center justify-end gap-[0.75rem] cursor-pointer" @click="onWBSArrowIcon1Click">
        <div class="relative font-medium">Kurskonfigurator</div>
        <img class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]" loading="eager" alt="" src="/wbs-arrow-2.svg" />
      </div>
    </div>
    <h1
      class="m-0 h-[4.13rem] relative text-[3.13rem] uppercase font-bold font-inherit inline-block mq450:text-[1.88rem] mq1050:text-[2.5rem]">
      Trainspot
    </h1>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header2",
  methods: {
    onArrowInstanceContainerClick() {
      this.$router.push("/");
    },
    onWBSArrowIcon1Click() {
      this.$router.push("/kurskonfigurator25012024");
    },
  },
});
</script>
