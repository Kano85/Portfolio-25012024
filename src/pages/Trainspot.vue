<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono"
  >
    <Header2 />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full shrink-0 lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[1.25rem] min-w-[26.31rem] max-w-full mq750:min-w-full"
      >
        <img
          class="self-stretch h-[26.21rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/dashboard-1440px@2x.png"
        />
        <img
          class="self-stretch h-[26.64rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/dashboard-1280px-draft-28@2x.png"
        />
        <img
          class="self-stretch h-[35.69rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/dashboard-1280px-draft-25@2x.png"
        />
        <img
          class="self-stretch h-[28.45rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/screenshot-20240125-at-1341-1@2x.png"
        />
        <img
          class="self-stretch h-[46.47rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/screenshot-20240125-at-1341-2@2x.png"
        />
        <img
          class="self-stretch h-[23.39rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/screenshot-20240125-at-1343-1@2x.png"
        />
      </div>
      <frame
        figmaLinkWidth="29.5rem"
        figmaLinkMinWidth="29.5rem"
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
  import Header2 from "../components/Header2.vue";
  import Frame from "../components/Frame.vue";

  export default defineComponent({
    name: "Trainspot",
    components: { Header2, Frame },
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
