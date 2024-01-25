<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono"
  >
    <Header1
      trainspot="Kursplannung"
      kursplannung="Trainer:in Management"
      kurskonfigurator="Design system"
      frameWBSArrowTrainspotWidth="unset"
      wBSArrowIconFlex="unset"
      wBSArrowIconMinWidth="unset"
      kursplannungFlex="unset"
      kursplannungMinWidth="unset"
      :onWBSArrowIconClick="onWBSArrowIconClick"
      :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onMainFrameContainerClick="onDesignSystemTextClick"
    />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap"
    >
      <ScreenshotAtFrameScreenshot /><frame
        figmaLinkWidth="29.5rem"
        figmaLinkMinWidth="29.5rem"
        trainspotIsAToolCreatedByPadding="0rem 0.06rem 0rem 0rem"
        propHeight="41.63rem"
      />
    </main>
    <div
      class="self-stretch flex flex-row items-center justify-between py-[0rem] px-[0.63rem] box-border gap-[1.25rem] max-w-full mq750:flex-wrap"
    >
      <div
        class="h-[2.63rem] flex flex-row items-center justify-start max-w-full"
      >
        <div
          class="self-stretch flex flex-row items-start justify-end max-w-full"
        >
          <div class="self-stretch relative font-medium">
            <p class="m-0">Do you want to see more about this project ?</p>
            <p class="m-0">
              <a
                class="text-[inherit]"
                href="https://www.figma.com/file/7tKLHo6daiwnPize08vehE/portfolio-research-Figma?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <span class="[text-decoration:underline]"
                  >Figma link to the Mockups
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <img
        class="h-[3.74rem] w-[3.74rem] relative cursor-pointer"
        loading="eager"
        alt=""
        src="/group-854.svg"
        :onClick="onGroupClick"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Header1 from "../components/Header1.vue";
  import ScreenshotAtFrameScreenshot from "../components/ScreenshotAtFrameScreenshot.vue";
  import Frame from "../components/Frame.vue";

  export default defineComponent({
    name: "Designsystem",
    components: { Header1, ScreenshotAtFrameScreenshot, Frame },
    methods: {
      onWBSArrowIconClick() {
        this.$router.push("/kursplannung25012024");
      },
      onWBSArrowIcon1Click() {
        this.$router.push("/trainspot25012024");
      },
      onDesignSystemTextClick() {
        this.$router.push("/trainerinmanagement25012024");
      },
      onGroupClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='headerContainer']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
