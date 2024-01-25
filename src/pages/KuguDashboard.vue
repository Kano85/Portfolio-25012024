<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono"
  >
    <header />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[1.88rem] min-w-[26.31rem] max-w-full mq750:min-w-full"
      >
        <div
          class="self-stretch h-[39.88rem] relative bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden shrink-0"
        >
          <img
            class="absolute top-[calc(50%_-_285.5px)] left-[calc(50%_-_253px)] w-[31.63rem] h-[35.69rem] object-cover"
            loading="eager"
            alt=""
            src="/screenshot-20240124-at-2302@2x.png"
          />
        </div>
        <div
          class="self-stretch h-[39.88rem] relative shrink-0 flex items-center justify-center"
        >
          <img
            class="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(1.063)]"
            loading="eager"
            alt=""
            src="/frame-1000001771@2x.png"
          />
        </div>
        <div
          class="self-stretch h-[39.88rem] relative bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden shrink-0"
        >
          <img
            class="absolute top-[0.94rem] left-[-27.08rem] w-[92.06rem] h-[36rem] object-cover"
            loading="eager"
            alt=""
            src="/screenshot-20240124-at-2304@2x.png"
          />
        </div>
        <div
          class="self-stretch h-[39.88rem] relative shrink-0 flex items-center justify-center"
        >
          <img
            class="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(1.063)]"
            loading="eager"
            alt=""
            src="/frame-1000001773@2x.png"
          />
        </div>
        <div
          class="self-stretch h-[39.88rem] relative shrink-0 flex items-center justify-center"
        >
          <img
            class="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(1.063)]"
            loading="eager"
            alt=""
            src="/frame-1000001774@2x.png"
          />
        </div>
      </div>
      <frame
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
  import Header from "../components/Header.vue";
  import Frame from "../components/Frame.vue";

  export default defineComponent({
    name: "KuguDashboard",
    components: { Header, Frame },
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
