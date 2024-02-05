<template>
  <!-- start general div -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[3.75rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[0.88rem] text-white font-roboto-mono">
    <Header1 trainspot="Trainspot" kursplannung="Kursplannung" kurskonfigurator="Kurskonfigurator" fRAMEWidth="28.31rem"
      :onWBSArrowIconClick="onWBSArrowIconClick" :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onFrameContainerClick="onFrameContainerClick" />
    <!-- Main element for the Images and the text -->
    <section
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full shrink-0 text-left text-[0.88rem] text-white font-roboto-mono lg:gap-[2.5rem] mq1050:flex-wrap mq750:gap-[1.25rem]">
      <!-- First left element just for Images-->
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[23.06rem] max-w-full mq450:min-w-full">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]">
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager" alt="" src="/20@2x.png" />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[32.94rem]"
            loading="eager" alt="" src="/11@2x.png" />
        </div>
        <b class="self-stretch relative">Introduction Layout</b>
        <div
          class="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]">
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager" alt="" src="/5@2x.png" />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager" alt="" src="/ak3@2x.png" />
        </div>
        <b class="self-stretch relative">Introduction Layout</b>
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]">
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33rem]"
            loading="eager" alt="" src="/group-853@2x.png" />
          <img
            class="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain min-w-[9.94rem] min-h-[33.06rem]"
            loading="eager" alt="" src="/mask-group@2x.png" />
        </div>
        <b class="self-stretch relative">List of Courses and Modules Layout</b>
        <div
          class="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[5rem] mq450:gap-[1.25rem] mq750:flex-wrap mq750:gap-[2.5rem]">
          <img class="h-[33.01rem] flex-1 relative max-w-full overflow-hidden object-contain min-w-[9.94rem]"
            loading="eager" alt="" src="/13@2x.png" />
          <img class="h-[32.35rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[9.94rem]"
            loading="eager" alt="" src="/frame-80@2x.png" />
        </div>
        <b class="self-stretch relative">Offer created Layout</b>
        <div class="w-[39.5rem] h-[9.63rem] flex flex-row items-center justify-center max-w-full">
          <img class="h-[9.03rem] w-[8rem] relative object-contain" loading="eager" alt="" src="/arrow-111.svg" />
        </div>
        <section class="w-[75rem] h-[20.25rem] flex flex-row items-start justify-start max-w-full">
          <img class="w-[35.5rem] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full" loading="eager"
            alt="" src="/frame-8561@2x.png" />
        </section>
        <div class="w-[75rem] flex flex-row items-start justify-start min-h-[1.75rem] max-w-full shrink-0">
          <b class="w-[35.5rem] relative inline-block shrink-0 max-w-full">Creation process Documentation</b>
        </div>
        <section class="w-[74.88rem] h-[20.38rem] flex flex-row items-start justify-start max-w-full">
          <div
            class="h-[19.74rem] w-[35.42rem] relative overflow-hidden shrink-0 bg-[url('/public/screenshot-20240125-at-1420@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <img class="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden" alt=""
              src="/screenshot-20240125-at-1420@2x.png" />
            <div class="absolute top-[2.4rem] left-[11.31rem] bg-white w-[4.14rem] h-[1.25rem] z-[1]" />
          </div>
        </section>
        <div class="w-[75rem] flex flex-row items-start justify-start min-h-[1.75rem] max-w-full shrink-0">
          <b class="w-[35.5rem] relative inline-block shrink-0 max-w-full">Creation process Documentation</b>
        </div>
      </div>

      <!-- End of left element just for Images-->
      <!-- Begin of right element just for Text-->
      <div
        class="w-[34.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full text-right text-[1rem] mq1050:flex-1 mq750:min-w-full">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.88rem]">
          <div class="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div class="w-[5.83rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2.56rem]">
              <img class="w-[5.21rem] h-[5.21rem] relative object-cover" loading="eager" alt="" src="/image-2@2x.png" />
              <img class="self-stretch h-[2.79rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="eager" alt="" src="/image-3@2x.png" />
            </div>
            <div class="h-[3.94rem] relative inline-block">
              <p class="m-0">
                <b class="font-roboto-mono">User story example:</b>
              </p>
              <p class="m-0">
                <span>&nbsp;</span>
              </p>
              <p class="m-0">
                <a class="text-[inherit]"
                  href="https://www.figma.com/file/7tKLHo6daiwnPize08vehE/portfolio-research-Figma?type=design&node-id=0-1&mode=design"
                  target="_blank">
                  <span>
                    <span class="[text-decoration:underline]">Figma link</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div class="self-stretch h-[74.25rem] relative text-[0.88rem] text-left inline-block">
            <p class="m-0">
              <b>Tool Overview </b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Purpose: </b>
                <span>The tool is designed to help users create a personalized
                  training program by selecting different educational components
                  or modules.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Functionality: </b>
                <span class="font-roboto-mono">Users can navigate through several steps, each allowing them to
                  make specific choices like the theme of the training, the
                  individual building blocks (modules) of the course, the overall
                  selection, and the duration.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">User Interaction: </b>
                <span class="font-roboto-mono">Actions include selecting options from dropdown menus, clicking
                  on buttons to navigate through steps, and the ability to
                  download or send their configurations via email.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Feedback: </b>
                <span class="font-roboto-mono">Users receive visual feedback throughout the process, including
                  highlights of current selections and steps, as well as the
                  ability to modify their choices or delete selected
                  modules.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>UX/UI Context</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>User-Centered Design: </b>
                <span>The configurator employs a mobile-first approach, ensuring that
                  the application is optimized for smartphone users. This shows a
                  deep understanding of current user access trends and a focus on
                  responsive design.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Design Process: </b>
                <span class="font-roboto-mono">The design process likely included user stories to inform the
                  functionality, demonstrating an understanding of user needs and
                  how they interact with the tool.</span>
                <b class="font-roboto-mono">&nbsp;</b>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Visual Design: </b>
                <span class="font-roboto-mono">The screenshots display a clean and intuitive interface, with
                  clear visual cues such as breadcrumbs for navigation and color
                  highlights to indicate the current step or selection.</span>
              </li>
              <li class="mb-[false]">
                <span class="font-roboto-mono">Problem-Solving: The tool solves the problem of course
                  customization, allowing users to easily create a training plan
                  that fits their individual needs and schedule.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Methods Used</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Design Thinking:</b>
                <span>This approach involves empathy with users, defining their
                  needs, ideating on solutions, prototyping, and testing. Your
                  design process shows evidence of these steps, particularly in
                  the development of user stories and the iterative design
                  reflected in the screenshots.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Prototyping: </b>
                <span class="font-roboto-mono">Before finalizing the design, prototypes were likely created to
                  visualize the interaction with the configurator. This step is
                  essential in identifying usability issues and gathering user
                  feedback.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Usability Testing: </b>
                <span class="font-roboto-mono">To refine the interface, usability testing was likely conducted
                  to ensure that users can navigate the configurator effectively
                  and that the tool meets their needs. This might have included
                  A/B testing different design elements or user flow.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">-Iterative Design:</b>
                <span class="font-roboto-mono">The design has likely gone through several iterations, each
                  informed by user feedback and testing results, to improve the
                  user experience and interface design.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
          </div>
        </div>
      </div>
      <!-- End of right element just for Text-->
    </section>
    <!-- End of Main element for the Images and the text -->
    <!-- Start Footer -->
    <footer class="w-full max-w-[75rem]">
      <div class="flex flex-row items-center lg:items-center justify-between gap-[1.25rem] w-full">
        <div>
          <p class="m-0 font-medium">Do you want to see more about this project?</p>
          <a href="https://www.figma.com/file/7tKLHo6daiwnPize08vehE/portfolio-research-Figma?type=design&node-id=0-1&mode=design"
            target="_blank" class="underline text-inherit m-0">Figma link to the Mockups</a>
        </div>
        <img src="/group-854.svg" alt="" class="h-[3.74rem] w-[3.74rem] cursor-pointer" @click="onGroupClick" />
      </div>
    </footer>
    <!-- End Footer -->
  </div>
  <!-- End general div -->
</template>
<script>
import { defineComponent } from "vue";
import Header1 from "../components/Header1.vue";

export default defineComponent({
  name: "Kurskonfigurator",
  components: {
    Header1
  },
  methods: {
    onWBSArrowIconClick() {
      this.$router.push("/");
    },
    onWBSArrowIcon1Click() {
      this.$router.push("/trainspot25012024");
    },
    onFrameContainerClick() {
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
