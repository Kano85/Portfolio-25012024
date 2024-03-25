<template>
  <section
    class="self-stretch bg-base-white overflow-hidden flex flex-col items-start justify-start py-[1.25rem] px-[2.5rem] box-border gap-[1.25rem] max-w-full text-left text-[3rem] text-white font-roboto-mono">
    <div class="self-stretch flex flex-row items-start justify-end">
      <h1
        class="m-0 relative text-inherit uppercase font-bold font-inherit mq450:text-[1.813rem] mq1050:text-[3rem] text-primary-main-1">
        My recent work
      </h1>
    </div>
    <div
      class="self-stretch flex flex-col items-start justify-start gap-[3.125rem] max-w-full mq450:gap-[3.125rem] mq750:gap-[1.563rem_3.125rem]">
      <!-- Row 1 -->
      <div
        class="self-stretch flex flex-row overflow-hidden flex-wrap items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.5rem_2.375rem] max-w-full mq750:gap-[2.5rem_1.188rem]">
        <GalleryItem navigateUrl="/trainspot25012024" background11="/background1-1@2x.png" trainspot="Trainspot"
          prop="2023-2024" />
        <GalleryItem navigateUrl="/kurskonfigurator25012024" background11="/gallery2a-1@2x.png"
          trainspot="Kurskonfigurator" prop="2022" propBackgroundImage="url('/gallery2a-1@2x.png')"
          propBackgroundColor="#efc500" propBackgroundColor1="#efc500" propMinWidth="2.438rem" />
      </div>
      <!-- Row 2 -->
      <div
        class="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.5rem_2.375rem] max-w-full mq750:gap-[2.5rem_1.188rem]">
        <GalleryItem navigateUrl="/kursplannung25012024" background11="/gallery4a-1@2x.png" trainspot="Kursplannung"
          prop="2021-2022" propBackgroundImage="url('/gallery4a-1@2x.png')" propBackgroundColor="#efc500"
          propBackgroundColor1="#efc500" propMinWidth="5.438rem" />
        <GalleryItem navigateUrl="/designsystem25012024" background11="/gallery3b-1@2x.png" trainspot="Design System"
          prop="2020-2023" propBackgroundImage="url('/gallery3b-1@2x.png')" propBackgroundColor="#ff2c00"
          propBackgroundColor1="#ff2c00" propMinWidth="5.438rem" />
      </div>
      <!-- Row 3 -->
      <div
        class="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.5rem_2.375rem] max-w-full mq750:gap-[2.5rem_1.188rem]">
        <GalleryItem navigateUrl="/trainerinmanagement25012024" background11="/gallery5a-1@2x.png"
          trainspot="Trainer:in Management" prop="2020-2021" propBackgroundImage="url('/gallery5a-1@2x.png')"
          propBackgroundColor="#ff2c00" propBackgroundColor1="#ff2c00" propMinWidth="5.438rem" />
        <GalleryItem navigateUrl="/kuguDashboard25012024" background11="/gallery6a@2x.png" trainspot="Kugu Dashboard"
          prop="2019" propBackgroundImage="url('/gallery6a@2x.png')" propBackgroundColor="#efc500"
          propBackgroundColor1="#efc500" propMinWidth="2.438rem" />
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import GalleryItem from "./GalleryItem.vue";

export default defineComponent({
  name: "MyRecentWork",
  components: { GalleryItem },
});
</script>