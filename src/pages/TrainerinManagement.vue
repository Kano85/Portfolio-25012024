<template>
  <!-- Start general div -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[3.75rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono">
    <Header1 trainspot="Design System" kursplannung="Kugu Dashboard" kurskonfigurator="Trainer:IN management"
      fRAMEWidth="32.13rem" wBSArrowIconFlex="1" wBSArrowIconMinWidth="6.69rem" kursplannungFlex="1"
      kursplannungMinWidth="6.94rem" :onWBSArrowIconClick="onWBSArrowIconClick"
      :onWBSArrowIcon1Click="onWBSArrowIcon1Click" :onFrameContainerClick="onFrameFrameContainerClick" />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full text-left text-[0.88rem] text-white font-roboto-mono lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[0.63rem] min-w-[26.31rem] max-w-full text-left text-[0.88rem] text-white font-roboto-mono mq750:min-w-full">
        <img class="self-stretch h-[41.73rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/quality-management@2x.png" />
        <b class="self-stretch relative">Tool Overview</b>
        <img class="self-stretch h-[33.33rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/c4@2x.png" />
        <b class="self-stretch relative">Tool Overview</b>
        <img class="self-stretch h-[18.77rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/frame-856@2x.png" />
        <b class="self-stretch relative">User Interview</b>
        <img class="self-stretch h-[19.25rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/frame-855@2x.png" />
        <b class="self-stretch relative">User Interview</b>
        <img class="self-stretch h-[22.89rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240124-at-2339-1@2x.png" />
        <b class="self-stretch relative">User Journey</b>
        <img class="self-stretch h-[21.16rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240124-at-2331-1@2x.png" />
        <b class="self-stretch relative">Example Tool Documentation “User Roles”</b>
      </div>
      <div
        class="w-[29.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[29.5rem] max-w-full mq750:min-w-full mq1050:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.88rem]">
          <div class="self-stretch h-[76.5rem] relative inline-block">
            <p class="m-0">
              <b>Tool Overview</b>
            </p>
            <p class="m-0">
              <b>Purpose: </b>
              <span>Streamlining the management of trainer data within an
                organization.</span>
            </p>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Key Features:</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>User Accessibility:</b>
                <span>Facilitates profile management and communication for various
                  roles like recruiters and schedulers.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Unified Database:</b>
                <span class="font-roboto-mono">Central repository for trainer data.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Data Export:</b>
                <span class="font-roboto-mono">Enables downloading trainer data into Excel.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Serial Email Functionality: </b>
                <span class="font-roboto-mono">Allows sending requests directly from the system.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Technical Advantages:</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Integration with myERP Systems</b>
              </li>
              <li class="mb-[false]">
                <b>Centralized Data Management</b>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <b>Impact</b>
            </p>
            <ul class="m-0 text-inherit pl-[1.36rem]">
              <li class="mb-[false]">
                <b>Efficiency and Accuracy: </b>
                <span class="font-roboto-mono">Simplifies data management processes.</span>
              </li>
              <li class="mb-[false]">
                <b class="font-roboto-mono">Scalability: </b>
                <span class="font-roboto-mono">Adaptable for future expansion or integration.</span>
              </li>
            </ul>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              This project represents a significant improvement in how trainer
              data is handled, combining efficiency with modern IT
              infrastructure.
            </p>
            <p class="m-0">
              <b>&nbsp;</b>
            </p>
            <p class="m-0">
              <span class="font-roboto-mono">&nbsp;</span>
              <b>UXUI Context</b>
            </p>
            <p class="m-0">
              As a UX/UI Designer, my role in the "Trainer Management" project
              involved applying user-centered design principles. The focus was
              on understanding user feedback about the previous product version
              and identifying essential functionalities. We used the Design
              Thinking Process and Human-Centered Design approaches,
              supplemented by user interviews, to gather these insights.
            </p>
            <p class="m-0">
              The project's primary goal was to redesign and integrate the
              application into a new ERP system. We were attentive to user
              feedback and needs throughout this process. To better understand
              how different users interacted with the app, we developed User
              Journeys, highlighting various roles, competencies, and
              interactions within the tool.
            </p>
            <p class="m-0">
              During the design phase, I contributed to defining user roles and
              states within the application. This included detailing access
              permissions and role interactions to ensure clear and effective
              user flow.
            </p>
            <p class="m-0">
              The development phase involved collaboration with Product Owners,
              Stakeholders, Users, and Frontend and Backend Teams. This
              collaboration was key in aligning the design with technical
              implementation. Part of this process included integrating new
              components from our previously developed design library and
              localizing the application into multiple languages to broaden its
              accessibility.
            </p>
            <p class="m-0">
              In summary, this project was an exercise in balancing user needs
              with practical design and development, resulting in a product that
              was both user-friendly and aligned with our new ERP system
              requirements.
            </p>
          </div>
        </div>
      </div>
    </main>
    <!-- Begin Footer  -->
    <footer class="w-full max-w-[75rem] mx-auto py-[0rem] px-[2.63rem]">
      <div class="flex flex-row items-center justify-between gap-[1.25rem]">
        <div>
          <p class="m-0 font-medium">Do you want to see more about this project?</p>
          <a href="https://www.figma.com/file/7tKLHo6daiwnPize08vehE/portfolio-research-Figma?type=design&node-id=0-1&mode=design"
            target="_blank" class="underline text-inherit">Figma link to the Mockups</a>
        </div>
        <img src="/group-854.svg" alt="" class="h-[3.74rem] w-[3.74rem] cursor-pointer" @click="onGroupClick" />
      </div>
    </footer>
    <!-- End Footer -->
  </div>
  <!-- Endd general div -->
</template>
<script>
import { defineComponent } from "vue";
import Header1 from "../components/Header1.vue";

export default defineComponent({
  name: "TrainerinManagement",
  components: {
    Header1
  },
  methods: {
    onWBSArrowIconClick() {
      this.$router.push("/");
    },
    onWBSArrowIcon1Click() {
      this.$router.push("/designsystem25012024");
    },
    onFrameFrameContainerClick() {
      this.$router.push("/kuguDashboard25012024");
    },
    onGroupClick() {
      const anchor = document.querySelector("[data-scroll-to='headerContainer']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
  },
});
</script>
