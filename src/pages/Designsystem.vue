<template>
  <!-- start general div -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[3.75rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono">
    <!-- Header Component -->
    <Header1 trainspot="Kursplannung" kursplannung="Trainer:in Management" kurskonfigurator="Design system"
      fRAMEWidth="unset" wBSArrowIconFlex="unset" wBSArrowIconMinWidth="unset" kursplannungFlex="unset"
      kursplannungMinWidth="unset" :onWBSArrowIconClick="onWBSArrowIconClick" :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onFrameContainerClick="onFrameContainer2Click" />
    <!-- Main element for the Images and the text -->
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full text-left text-[0.88rem] text-white font-roboto-mono lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[0.63rem] min-w-[26.31rem] max-w-full mq750:min-w-full">
        <div
          class="self-stretch h-[39.88rem] relative bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden shrink-0">
          <img class="absolute top-[calc(50%_-_285.5px)] left-[calc(50%_-_253px)] w-[31.63rem] h-[35.69rem] object-cover"
            loading="eager" alt="" src="/screenshot-20240124-at-2302@2x.png" />
        </div>
        <b class="self-stretch relative">Figma files for Design System</b>
        <div class="self-stretch h-[39.88rem] relative shrink-0 flex items-center justify-center">
          <img
            class="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(1.063)]"
            loading="eager" alt="" src="/frame-1000001774@2x.png" />
        </div>
        <b class="self-stretch relative">Figma files for Design System</b>
        <div
          class="self-stretch bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden flex flex-row items-end justify-end max-w-full">
          <div class="h-[39.88rem] w-[74.69rem] relative overflow-hidden">
            <img class="absolute top-0 left-0 w-full h-full object-cover" src="/group-856.png" alt="" loading="eager" />
            <input
              class="[border:none] [outline:none] bg-white absolute top-[9.04rem] left-[22.23rem] w-[6.07rem] h-[1.9rem] z-[1]"
              type="text" />
          </div>
        </div>
        <b class="self-stretch relative">Kanban Board for Design System creation</b>
        <div
          class="self-stretch h-[39.88rem] relative bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden shrink-0">
          <img class="absolute top-[0.94rem] left-[-27.08rem] w-[92.06rem] h-[36rem] object-cover" loading="eager" alt=""
            src="/screenshot-20240124-at-2304@2x.png" />
        </div>
        <b class="self-stretch relative">Documentation Design system</b>
        <div
          class="self-stretch h-[39.88rem] bg-gainsboro shadow-[0px_0px_20px_rgba(0,_0,_0,_0.07)] overflow-hidden shrink-0 flex flex-row items-end justify-end max-w-full">
          <div class="h-[39.88rem] w-[74.69rem] relative overflow-hidden">
            <img class="absolute top-0 left-0 w-full h-full object-cover" src="/group-855.png" alt="" loading="eager" />
            <div class="absolute top-[1.68rem] left-[17.49rem] bg-white w-[2.2rem] h-[2.23rem] z-[1]" />
            <input
              class="[border:none] [outline:none] bg-white absolute top-[2.79rem] left-[30.11rem] w-[9.86rem] h-[1.56rem] z-[1]"
              type="text" />
          </div>
        </div>
        <b class="self-stretch relative">Documentation guidelines </b>
      </div>
      <div
        class="w-[29.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[29.5rem] max-w-full text-right text-[1rem] mq750:min-w-full mq1050:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.88rem]">
          <div class="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div class="w-[8.2rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2.56rem]">
              <img class="w-[8.20rem] h-[2.81rem] relative object-cover" loading="eager" alt=""
                src="/frame-5881528.png" />
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
          <div class="self-stretch h-[74.25rem] relative text-[0.88rem] text-left inline-block">
            <p class="m-0"><b>Starting Point:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Frameworks Used: </b> Began with Bootstrap and Material-UI to leverage proven
                design components and principles.</li>
              <li class="mb-[false]"><b>Evolution: </b> Transitioned from these frameworks to develop a fully independent
                design system tailored to unique needs.</li>
            </ul>

            <p class="m-0"><b>Design Guides Creation:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Comprehensive Guides: </b> Developed detailed guides focusing on both visual
                elements and user flows, such as saving logic.</li>
              <li class="mb-[false]"><b>Purpose: </b> Ensured every interaction was consistent, intuitive, and harmonious,
                improving the user experience and efficiency.</li>
            </ul>

            <p class="m-0"><b>Content and Consistency:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Wording Harmonization: </b> Focused on creating consistent content, especially in
                wording across platforms.</li>
              <li class="mb-[false]"><b>Tools Used: </b> Utilized Confluence as a single source of truth to ensure clarity
                and consistency in communication.</li>
            </ul>

            <p class="m-0"><b>Management and Organization:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Team Leadership: </b> Led a small team to manage the design system's evolution
                with a clear backlog and task management.</li>
              <li class="mb-[false]"><b>Integration with Marketing: </b> Worked closely with marketing to ensure the
                design system aligned with business strategies.</li>
            </ul>

            <p class="m-0"><b>Communication:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Collaboration Tools: </b> Used Slack for ongoing communication between developers,
                management, and stakeholders.</li>
              <li class="mb-[false]"><b>Outcome: </b> Fostered a collaborative environment crucial for refining the
                library to meet organizational needs.</li>
            </ul>

            <p class="m-0"><b>Overall Impact:</b></p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]"><b>Beyond a Design System: </b> Developed a comprehensive ecosystem supporting design
                consistency, efficiency, and collaboration.</li>
              <li class="mb-[false]"><b>Strategic Alignment: </b> Ensured the system not only met technical and user needs
                but also aligned with broader business objectives.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <!-- End of Main element for the Images and the text -->
    <!-- Start Footer -->
    <footer class="w-full max-w-[75rem] mx-auto py-[0rem] px-[2.63rem]">
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
  <!-- End general div -->
</template>

<script>
import { defineComponent } from "vue";
import Header1 from "../components/Header1.vue";

export default defineComponent({
  name: "Designsystem",
  components: { Header1 },
  methods: {
    onWBSArrowIconClick() {
      this.$router.push("/");
    },
    onWBSArrowIcon1Click() {
      this.$router.push("/kursplannung25012024");
    },
    onFrameContainer2Click() {
      this.$router.push("/trainerinmanagement25012024");
    },
    onGroupClick() {
      // Smooth scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>
