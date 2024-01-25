<template>
  <section
    class="self-stretch bg-white overflow-hidden flex flex-col items-end justify-center py-[1.25rem] px-[2.5rem] box-border gap-[1.25rem] max-w-full shrink-0 text-left text-[3.13rem] text-primary-main-1 font-roboto-mono"
    data-scroll-to="myRecentWork"
  >
    <h1
      class="m-0 h-[4.13rem] relative text-inherit uppercase font-bold font-inherit inline-block max-w-full mq450:text-[1.88rem] mq925:text-[2.5rem]"
    >
      My recent work
    </h1>
    <GroupOfHorizontalCards
      frame5891="/frame-589-1@2x.png"
      trainspot="Trainspot"
      uIUXFrames="2023-2024"
      frame5893="/frame-5893@2x.png"
      kurskonfigurator="Kurskonfigurator"
      uIArtDirection="2022"
      propHeight="28.13rem"
      propHeight1="28.13rem"
      :onGalleryCardContainerClick="onGalleryCardContainerClick"
      :onGalleryCardContainer1Click="onGalleryCardContainer1Click"
    /><GroupOfHorizontalCards
      frame5891="/gallery-card@2x.png"
      trainspot="Design System"
      uIUXFrames="UIUX, 2020-2023"
      frame5893="/frame-590@2x.png"
      kurskonfigurator="Kurskplannung"
      uIArtDirection="2021-2022"
      propHeight="27.71rem"
      propHeight1="27.71rem"
    /><GroupOfHorizontalCards
      frame5891="/frame-855@2x.png"
      trainspot="Trainer:in Management"
      uIUXFrames="2020-2021"
      frame5893="/frame-10000017711@2x.png"
      kurskonfigurator="Kugu Dashboard"
      uIArtDirection="UI, Art drection"
      propHeight="28.13rem"
      propHeight1="28.13rem"
    />
  </section>
</template>
<script>
  import { defineComponent } from "vue";
  import GroupOfHorizontalCards from "./GroupOfHorizontalCards.vue";

  export default defineComponent({
    name: "MyRecentWork",
    components: { GroupOfHorizontalCards },
    methods: {
      onGalleryCardContainerClick() {
        this.$router.push("/trainspot25012024");
      },
      onGalleryCardContainer1Click() {
        this.$router.push("/kurskonfigurator25012024");
      },
    },
  });
</script>
