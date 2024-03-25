<template>
  <!-- Main container with styling -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start pt-[3.75rem] px-[3.75rem] pb-[3.69rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono">
    <Header />
    <main
      class="w-[80rem] flex flex-row items-start justify-start gap-[5rem] max-w-full text-right text-[1rem] text-white font-roboto-mono lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
      <!-- Left column for images -->
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[1.88rem] min-w-[26.31rem] max-w-full shrink-0 mq750:min-w-full">
        <img class="self-stretch h-[19.56rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/Unbenannt-csv-notificacions.png" />
        <img class="self-stretch h-[19.56rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/Unbenannt-csv2-notificacions.png" />
        <img class="self-stretch h-[25.32rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/mgm02@2x.png" />
        <img class="self-stretch h-[38.02rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240126-at-1548@2x.png" />
        <img class="self-stretch h-[59.56rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240126-at-1548-1@2x.png" />
        <img class="self-stretch h-[31.28rem] relative max-w-full overflow-hidden shrink-0 object-cover" loading="eager"
          alt="" src="/screenshot-20240126-at-1549@2x.png" />
      </div>
      <!-- Right column for content -->
      <div
        class="w-[34.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full text-right text-[1rem] mq1050:flex-1 mq750:min-w-full">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.88rem]">
          <div class="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div class="w-[10.2rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2.56rem]">
              <img class="w-[10.20rem] h-[2.41rem] relative object-cover" loading="eager" alt="" src="/logo-kg.png" />
              <img class="w-[10.20rem] h-[2.81rem] relative object-cover" loading="eager" alt="" src="/logo-csv.png" />
              <!-- <img class="self-stretch h-[5.79rem] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="eager" alt="" src="/frame-5881528.png" /> -->
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
            <div class="m-0">
              <p><b>In a brief yet impactful collaboration with Kugu Home, a leader in smart home and energy efficiency
                  solutions, I contributed my UX/UI design expertise to a pivotal project. Kugu Home is on a mission to
                  revolutionize our living environments, making them more connected, efficient, and sustainable. My role,
                  although concise in duration, was deeply focused on two main aspects:</b></p>
            </div>
            <p class="m-0">
              <span>&nbsp;</span>
            </p>
            <p class="m-0"><b>Prototyping for B2B Billing Dashboards</b></p>
            <div class="m-0 text-inherit pl-[1.36rem]">
              I was tasked with designing prototypes for B2B billing dashboards. The goal was to simplify and streamline
              the way businesses interact with billing information, enhancing accessibility and clarity. This effort was
              crucial for enabling clients to manage and understand their energy costs more effectively. Despite the short
              timeframe, my work laid the groundwork for a user-friendly interface that promises to significantly aid
              businesses in the energy sector.
            </div>
            <p class="m-0">
              <span>&nbsp;</span>
            </p>
            <p class="m-0"><b>UX/UI Analysis for an Energy Efficiency App</b></p>
            <div class="m-0 text-inherit pl-[1.36rem]">
              Additionally, I conducted a focused UX/UI analysis for key performance indicators (KPIs) related to a
              submetering app aimed at energy efficiency. This analysis was key to pinpointing user interaction patterns,
              identifying improvement opportunities, and optimizing the app's design for better usability and
              effectiveness in promoting energy management.
            </div>
            <p class="m-0">
              <span>&nbsp;</span>
            </p>
            <p class="m-0"><b>VueJS Dashboard Development</b></p>
            <div class="m-0 text-inherit pl-[1.36rem]">
              The culmination of my efforts was the initiation of a desktop dashboard developed with VueJS. This task
              allowed me to apply my design insights directly into a tangible product, creating a central hub for users to
              manage their energy usage. Despite the project's brief nature, this development phase was a vital step
              towards realizing an intuitive and dynamic user interface.
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer with project link and image/button to scroll to top -->
    <footer class="w-full max-w-[75rem] mx-auto py-[0rem] px-[2.63rem]">
      <div class="flex flex-row items-center justify-between gap-[1.25rem]">
        <div>
          <p class="m-0 font-medium">Do you want to see more about this project?</p>
          <a href="" target="_blank" class="underline text-inherit">Figma link to the Mockups</a>
        </div>
        <img src="/group-854.svg" alt="Scroll to top" class="h-[3.74rem] w-[3.74rem] cursor-pointer"
          @click="onGroupClick" />
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue'; // Only import used components

export default defineComponent({
  name: 'KuguDashboard',
  components: { Header }, // Only include the components that are used
  methods: {
    onGroupClick() {
      // Method to scroll to the top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>
