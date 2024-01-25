<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono"
  >
    <Header1
      trainspot="Trainspot"
      kursplannung="Kursplannung"
      kurskonfigurator="Kurskonfigurator"
      frameWBSArrowTrainspotWidth="28.31rem"
      :onWBSArrowIconClick="onWBSArrowIconClick"
      :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onMainFrameContainerClick="onKursplanningFrameContainerClick"
    />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full shrink-0 text-right text-[1rem] text-white font-roboto-mono lg:gap-[2.5rem] mq1050:flex-wrap mq750:gap-[1.25rem]"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[3.75rem] min-w-[23.06rem] max-w-full mq450:min-w-full mq750:gap-[1.88rem]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]"
        >
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager"
            alt=""
            src="/20@2x.png"
          />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[32.94rem]"
            loading="eager"
            alt=""
            src="/11@2x.png"
          />
        </div>
        <div
          class="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]"
        >
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager"
            alt=""
            src="/5@2x.png"
          />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager"
            alt=""
            src="/ak3@2x.png"
          />
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]"
        >
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33rem]"
            loading="eager"
            alt=""
            src="/group-853@2x.png"
          />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div
          class="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]"
        >
          <img
            class="h-[33.01rem] flex-1 relative max-w-full overflow-hidden object-contain min-w-[9.94rem]"
            loading="eager"
            alt=""
            src="/13@2x.png"
          />
          <img
            class="h-[32.35rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[9.94rem]"
            loading="eager"
            alt=""
            src="/frame-80@2x.png"
          />
        </div>
      </div>
      <div
        class="w-[34.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full mq1050:flex-1 mq750:min-w-full"
      >
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[0.63rem]"
        >
          <div
            class="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[4.56rem] gap-[1.25rem] mq450:flex-wrap"
          >
            <div
              class="h-[3.88rem] w-[11.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start bg-[url('/public/link-frame@3x.png')] bg-cover bg-no-repeat bg-[top]"
            >
              <img
                class="self-stretch relative max-w-full overflow-hidden h-[3.88rem] shrink-0 object-cover hidden"
                alt=""
                src="/screenshot-20240125-at-1434-1@2x.png"
              />
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
          <div
            class="self-stretch h-[74.25rem] relative text-[0.88rem] text-left inline-block"
          >
            <p class="m-0">
              <b>Overview of the Configurator  </b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Purpose: </b>
                <span
                  >The tool is designed to help users create a personalized
                  training program by selecting different educational components
                  or modules. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Functionality: </b>
                <span class="font-roboto-mono"
                  >Users can navigate through several steps, each allowing them
                  to make specific choices like the theme of the training, the
                  individual building blocks (modules) of the course, the
                  overall selection, and the duration. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">User Interaction: </b>
                <span class="font-roboto-mono"
                  >Actions include selecting options from dropdown menus,
                  clicking on buttons to navigate through steps, and the ability
                  to download or send their configurations via email. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Feedback: </b>
                <span class="font-roboto-mono"
                  >Users receive visual feedback throughout the process,
                  including highlights of current selections and steps, as well
                  as the ability to modify their choices or delete selected
                  modules.</span
                >
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>UX/UI Context </b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>User-Centered Design: </b>
                <span
                  >The configurator employs a mobile-first approach, ensuring
                  that the application is optimized for smartphone users. This
                  shows a deep understanding of current user access trends and a
                  focus on responsive design. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Design Process: </b>
                <span class="font-roboto-mono"
                  >The design process likely included user stories to inform the
                  functionality, demonstrating an understanding of user needs
                  and how they interact with the tool.</span
                >
                <b class="font-roboto-mono">&nbsp;</b>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Visual Design: </b>
                <span class="font-roboto-mono"
                  >The screenshots display a clean and intuitive interface, with
                  clear visual cues such as breadcrumbs for navigation and color
                  highlights to indicate the current step or selection. </span
                >
              </li>
              <li class="mb-[false]">
                <span class="font-roboto-mono"
                  >Problem-Solving: The tool solves the problem of course
                  customization, allowing users to easily create a training plan
                  that fits their individual needs and schedule.</span
                >
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Methods Used </b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Design Thinking:</b>
                <span
                  >This approach involves empathy with users, defining their
                  needs, ideating on solutions, prototyping, and testing. Your
                  design process shows evidence of these steps, particularly in
                  the development of user stories and the iterative design
                  reflected in the screenshots. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Prototyping: </b>
                <span class="font-roboto-mono"
                  >Before finalizing the design, prototypes were likely created
                  to visualize the interaction with the configurator. This step
                  is essential in identifying usability issues and gathering
                  user feedback. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Usability Testing: </b>
                <span class="font-roboto-mono"
                  >To refine the interface, usability testing was likely
                  conducted to ensure that users can navigate the configurator
                  effectively and that the tool meets their needs. This might
                  have included A/B testing different design elements or user
                  flow. </span
                >
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">-Iterative Design:</b>
                <span class="font-roboto-mono"
                  >The design has likely gone through several iterations, each
                  informed by user feedback and testing results, to improve the
                  user experience and interface design.</span
                >
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
          </div>
        </div>
      </div>
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

  export default defineComponent({
    name: "Kurskonfigurator",
    components: { Header1 },
    methods: {
      onWBSArrowIconClick() {
        this.$router.push("/landingpage25012024");
      },
      onWBSArrowIcon1Click() {
        this.$router.push("/trainspot25012024");
      },
      onKursplanningFrameContainerClick() {
        this.$router.push("/kursplannung25012024");
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
