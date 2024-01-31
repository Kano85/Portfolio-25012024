<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[0.88rem] text-white font-roboto-mono"
  >
    <Header2 />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full shrink-0 lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap"
    >
      <LandingPageSection />
      <div
        class="w-[29.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[29.5rem] max-w-full mq750:min-w-full mq1050:flex-1"
      >
        <ScreenshotGroup />
      </div>
    </main>
    <div
      class="w-[75rem] flex flex-col items-start justify-start gap-[0.63rem] max-w-full shrink-0"
    >
      <b class="w-[40.5rem] relative inline-block max-w-full"
        >User Journey Example
      </b>
      <div
        class="self-stretch flex flex-row items-center justify-between py-[0rem] px-[0.63rem] box-border gap-[1.25rem] max-w-full text-[1rem] mq750:flex-wrap"
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
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Header2 from "../components/Header2.vue";
  import LandingPageSection from "../components/LandingPageSection.vue";
  import ScreenshotGroup from "../components/ScreenshotGroup.vue";

  export default defineComponent({
    name: "Trainspot",
    components: { Header2, LandingPageSection, ScreenshotGroup },
    methods: {
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
