<template>
  <!-- Header Container with back and management buttons -->
  <div
    class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-roboto-mono mq1050:flex-wrap"
    data-scroll-to="headerContainer">
    <div
      class="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] max-w-full mq450:flex-wrap mq450:gap-[1.5rem]">
      <!-- Back button to navigate to the home page -->
      <div class="w-[5.13rem] flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
        @click="onWBSArrowIconClick">
        <img class="h-[1.5rem] w-[1.5rem] object-contain" loading="eager" alt="Back" src="/wbs-arrow@2x.png" />
        <div class="font-medium">Back</div>
      </div>
      <!-- Trainer:in Management button with navigation functionality -->
      <div class="flex flex-row items-center justify-end gap-[0.75rem] cursor-pointer" @click="onWBSArrowIcon1Click">
        <img class="h-[1.5rem] w-[1.5rem] object-contain" loading="eager" alt="Navigate" src="/wbs-arrow-1.svg" />
        <div class="relative font-medium">Trainer:in Management</div>
      </div>
    </div>
    <h1
      class="m-0 h-[4.13rem] relative text-[3.13rem] uppercase font-bold font-inherit inline-block max-w-full mq450:text-[1.88rem] mq1050:text-[2.5rem]">
      Kugu Dashboard
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  methods: {
    // Method to navigate back to the home page
    onWBSArrowIconClick() {
      this.$router.push("/");
    },
    // Method to navigate to the Trainer:in Management page
    onWBSArrowIcon1Click() {
      this.$router.push("/trainerinmanagement25012024");
    },
  },
});
</script>

<!-- <template>
  <div
    class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-roboto-mono mq1050:flex-wrap"
    data-scroll-to="headerContainer"
  >
    <div
      class="flex flex-row items-center justify-start py-[1.25rem] px-[0rem] box-border gap-[3rem] max-w-full mq450:flex-wrap mq450:gap-[1.5rem]"
    >
      <div
        class="w-[5.13rem] flex flex-row items-start justify-start gap-[0.75rem]"
      >
        <img
          class="h-[1.5rem] w-[1.5rem] relative object-contain min-h-[1.5rem] cursor-pointer"
          loading="eager"
          alt=""
          src="/wbs-arrow@2x.png"
          @click="onWBSArrowIconClick"
        />
        <div class="flex-1 relative font-medium">Back</div>
      </div>
      <div class="flex flex-row items-start justify-end gap-[0.75rem]">
        <img
          class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] cursor-pointer"
          loading="eager"
          alt=""
          src="/wbs-arrow-1.svg"
          @click="onWBSArrowIcon1Click"
        />
        <div class="relative font-medium">Trainer:in Management</div>
      </div>
    </div>
    <h1
      class="m-0 h-[4.13rem] relative text-[3.13rem] uppercase font-bold font-inherit inline-block max-w-full mq450:text-[1.88rem] mq1050:text-[2.5rem]"
    >
      Kugu Dashboard
    </h1>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header",
    methods: {
      onWBSArrowIconClick() {
        this.$router.push("/");
      },
      onWBSArrowIcon1Click() {
        this.$router.push("/trainerinmanagement25012024");
      },
    },
  });
</script> -->
