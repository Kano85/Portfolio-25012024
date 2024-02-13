<template>
  <!-- start general div -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[3.75rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[0.88rem] text-white font-roboto-mono">
    <!-- Header Component -->
    <Header1 trainspot="Kurskonfigurator" kursplannung="Design System" kurskonfigurator="KursPlannung" fRAMEWidth="unset"
      wBSArrowIconFlex="unset" wBSArrowIconMinWidth="unset" kursplannungFlex="unset" kursplannungMinWidth="unset"
      :onWBSArrowIconClick="onWBSArrowIconClick" :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onFrameContainerClick="onKursPlanningTextClick" />
    <!-- Main element for the Images and the text -->
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full text-right text-[1rem] text-white font-roboto-mono lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
      <!-- First left element just for Images-->
      <div
        class="flex-1 flex flex-col items-center justify-start gap-[0.63rem] min-w-[28.13rem] max-w-full text-left text-[0.88rem] text-white font-roboto-mono mq750:min-w-full">
        <img class="self-stretch h-[23.66rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240125-at-1702@2x.png" />
        <b class="self-stretch relative">How users worked before having the tool with Excel</b>
        <img class="self-stretch h-[19.87rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240126-at-1426@2x.png" />
        <b class="self-stretch relative">How users worked before having the tool with Excel</b>
        <div class="w-[39.5rem] h-[9.63rem] flex flex-row items-center justify-center max-w-full">
          <img class="w-[8rem] h-[9.03rem] relative object-contain" loading="eager" alt="" src="/arrow-11.svg" />
        </div>
        <img class="self-stretch h-[42.38rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/frame-600@2x.png" />
        <b class="self-stretch relative">Tool Layout Example </b>
        <img class="self-stretch h-[42.38rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/frame-601@2x.png" />
        <b class="self-stretch relative">Tool Layout Example </b>
        <img class="self-stretch h-[42.38rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/frame-599@2x.png" />
        <b class="self-stretch relative">Tool Layout Example </b>
        <img class="w-[41.19rem] relative max-h-full object-cover max-w-full" loading="eager" alt=""
          src="/frame-598@2x.png" />
        <b class="w-[43.28rem] relative inline-block shrink-0 max-w-full">Documentation Example of Modals for the Tool</b>
      </div>
      <!-- Right element just for Text -->
      <div
        class="w-[26.75rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[26.75rem] max-w-full mq750:min-w-full mq1050:flex-1">
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
                <a class="text-[inherit]" href="" target="_blank">
                  <span>
                    <span class="[text-decoration:underline]">Figma link</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div class="self-stretch relative text-[0.88rem] text-left">
            <p class="m-0">
              <b class="font-roboto-mono">Project Schedule Planning</b>
            </p>
            <p class="m-0">
              Transforming Course Scheduling From Excel
            </p>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Project Overview</b>
            </p>
            <p class="m-0">
              In Project KPL, my primary objective was to revolutionize the way
              course scheduling was handled. The goal was to transition from
              cumbersome Excel files to a sleek, automated tool, enhancing
              efficiency and user experience. This tool significantly reduced
              resource utilization and work time, offering simple yet powerful
              functionalities for colleagues in administration.
            </p>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>My Role and Responsibilities</b>
            </p>
            <p class="m-0">
              <span>As a UX/UI Designer, my responsibilities included:</span>
              <b class="font-roboto-mono">&nbsp;</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b class="font-roboto-mono">Analysis and Conceptualization:</b>
                <span>I started by diving deep into the existing Excel-based system
                  to understand its intricacies. This helped me conceptualize a
                  more efficient tool tailored to our specific needs.</span>
                <b class="font-roboto-mono">&nbsp;</b>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Design and Development of MVP:</b>
                <span class="font-roboto-mono">I led the design and initial development of the Minimum
                  Viable Product (MVP) for the course planning tool. The MVP
                  aimed to gather early feedback for iterative
                  improvements.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Stakeholder Collaboration:</b>
                <span class="font-roboto-mono">Working closely with stakeholders was key. I ensured that
                  their needs and insights were integral to the tool's
                  development, leading to a product that truly resonated with
                  its users.</span>
                <b class="font-roboto-mono">&nbsp;</b>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Feature Implementation:</b>
                <span class="font-roboto-mono">I focused on implementing versatile features like
                  module-level adjustments (reordering, cutting, holiday
                  insertion), and integration with Gantt Chart for comprehensive
                  course scheduling.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Challenges and Solutions</b>
            </p>
            <p class="m-0">
              This project was not without its challenges. Adapting to diverse
              user requirements and transforming complex Excel data into a
              user-friendly interface required innovative thinking and adaptable
              design strategies. My solution was a continuous cycle of feedback
              and redesign, ensuring the tool was both intuitive and powerful.
            </p>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Impact and Future Developments</b>
            </p>
            <p class="m-0">
              The KPL tool has already made significant strides in improving the
              efficiency of course scheduling. It's a crucial step toward laying
              the foundation for further advancements like trainer management
              and lesson group planning. As for the future, I'm looking at
              enhancing the tool with new features to simplify operation and
              boost planning efficiency.
            </p>
          </div>
        </div>
      </div>
    </main>
    <!-- End of Main element for the Images and the text -->
    <!-- Start Footer -->
    <footer class="w-full max-w-[75rem] mx-auto py-[0rem] px-[0rem]">
      <div class="flex flex-row items-center justify-between gap-[1.25rem]">
        <div>
          <p class="m-0 font-medium">Do you want to see more about this project?</p>
          <a href="" target="_blank" class="underline text-inherit">Figma link to the Mockups</a>
        </div>
        <img src="/group-854.svg" alt="" class="h-[3.74rem] w-[3.74rem] cursor-pointer" @click="onGroupClick" />
      </div>
    </footer>
    <!-- End Footer -->

  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header1 from "../components/Header1.vue";

export default defineComponent({
  name: "Kursplannung",
  components: { Header1 },
  methods: {
    onWBSArrowIconClick() {
      this.$router.push("/");
    },
    onWBSArrowIcon1Click() {
      this.$router.push("/kurskonfigurator25012024");
    },
    onKursPlanningTextClick() {
      this.$router.push("/designsystem25012024");
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
