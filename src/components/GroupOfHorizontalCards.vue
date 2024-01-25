<template>
  <div
    class="self-stretch flex flex-row flex-wrap items-center justify-start gap-[2.5rem] max-w-full text-left text-[1rem] text-primary-main-1 font-roboto-mono mq700:gap-[1.25rem]"
  >
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[0.63rem] min-w-[22.94rem] max-w-full cursor-pointer"
      @click="onGalleryCardContainerClick"
    >
      <img
        class="self-stretch h-[28.13rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="eager"
        alt=""
        :src="frame5891"
        :style="frame5891Style"
      />
      <div
        class="self-stretch flex flex-row flex-wrap items-center justify-between gap-[1.25rem]"
      >
        <b class="relative">{{trainspot}}</b>
        <div class="relative">{{uIUXFrames}}</div>
      </div>
    </div>
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[0.63rem] min-w-[23.63rem] max-w-full cursor-pointer"
      @click="onGalleryCardContainer1Click"
    >
      <img
        class="self-stretch h-[28.13rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        :src="frame5893"
        :style="frame5893IconStyle"
      />
      <div
        class="self-stretch flex flex-row flex-wrap items-center justify-between gap-[1.25rem]"
      >
        <b class="relative">{{kurskonfigurator}}</b>
        <div class="relative">{{uIArtDirection}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "GroupOfHorizontalCards",
    props: {
      frame5891: { type: String },
      trainspot: { type: String },
      uIUXFrames: { type: String },
      frame5893: { type: String },
      kurskonfigurator: { type: String },
      uIArtDirection: { type: String },
      propHeight: { type: [Object, Array, String, Number, Boolean] },
      propHeight1: { type: [Object, Array, String, Number, Boolean] },
      onGalleryCardContainerClick: { type: Function },
      onGalleryCardContainer1Click: { type: Function },
    },
    computed: {
      frame5891Style() {
        return {
          height: this.propHeight,
        };
      },
      frame5893IconStyle() {
        return {
          height: this.propHeight1,
        };
      },
    },
  });
</script>
