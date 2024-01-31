<template>
  <div
    class="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.06rem] gap-[1.25rem] text-right text-[1rem] text-white font-roboto-mono mq450:flex-wrap"
    :style="arrowVectorStyle"
  >
    <div
      class="h-[8.48rem] w-[11.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2.56rem]"
      :style="creationDocFrameStyle"
    >
      <div
        class="overflow-hidden flex flex-row items-start justify-start pt-[0.06rem] pb-[0rem] pr-[0rem] pl-[0.06rem] gap-[0.56rem]"
        :style="logosWBSLargeStyle"
      >
        <img
          class="h-[2.03rem] w-[2.03rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/frame-587.svg"
        />
        <img
          class="h-[1.59rem] w-[3.56rem] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          :src="trainspotFrame"
        />
      </div>
      <div
        class="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start bg-[url('/public/link-frame@3x.png')] bg-cover bg-no-repeat bg-[top]"
        :style="introductionLayoutStyle"
      >
        <img
          class="self-stretch relative max-w-full overflow-hidden h-[3.88rem] shrink-0 object-cover hidden"
          alt=""
          :src="screenshot20240125At14341"
        />
      </div>
    </div>
    <div class="h-[3.94rem] relative inline-block">
      <p class="m-0">
        <b class="font-roboto-mono">User story example:</b>
      </p>
      <p class="m-0">
        <span>&nbsp;</span>
      </p>
      <p class="m-0">
        <a
          class="text-[inherit]"
          href="https://www.figma.com/file/7tKLHo6daiwnPize08vehE/portfolio-research-Figma?type=design&node-id=0-1&mode=design"
          target="_blank"
        >
          <span>
            <span class="[text-decoration:underline]">Figma link</span>
          </span>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ArrowVector",
    props: {
      trainspotFrame: { type: String },
      screenshot20240125At14341: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
      propBackgroundImage: { type: String },
    },
    computed: {
      arrowVectorStyle() {
        return {
          padding: this.propPadding,
        };
      },
      creationDocFrameStyle() {
        return {
          minWidth: this.propMinWidth,
        };
      },
      logosWBSLargeStyle() {
        return {
          padding: this.propPadding1,
        };
      },
      introductionLayoutStyle() {
        return {
          backgroundImage: this.propBackgroundImage,
        };
      },
    },
  });
</script>
