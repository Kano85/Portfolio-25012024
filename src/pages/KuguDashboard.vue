<template>
  <!-- Main container with styling -->
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start pt-[3.75rem] px-[3.75rem] pb-[3.69rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[1rem] text-white font-roboto-mono">
    <Header />
    <main
      class="w-[75rem] flex flex-row items-start justify-start gap-[5rem] max-w-full text-right text-[1rem] text-white font-roboto-mono lg:gap-[2.5rem] mq750:gap-[1.25rem] mq1050:flex-wrap">
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
        class="w-[29.5rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[29.5rem] max-w-full shrink-0 mq750:min-w-full mq1050:flex-1">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.94rem] mq750:gap-[0.94rem]">
          <div
            class="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.06rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
            <div
              class="h-[12.29rem] w-[9.69rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2.56rem] min-w-[9.69rem] mq450:flex-1">
              <!-- Logo and icons with proper `alt` text -->
              <img class="self-stretch h-[1.56rem] relative max-w-full overflow-hidden shrink-0" loading="eager"
                alt="Logo" src="/logowhite-1.svg" />
              <img class="w-[5.83rem] flex-1 relative max-h-full" loading="eager" alt="Group icon" src="/group-852.svg" />
              <!-- Additional elements omitted for brevity -->
            </div>
            <!-- User story example link -->
            <div class="h-[3.94rem] relative inline-block">
              <p class="m-0">
                <b class="font-roboto-mono">User story example:</b>
              </p>
              <p class="m-0">
                <a class="text-[inherit]" href="" target="_blank">
                  <span class="[text-decoration:underline]">Figma link</span>
                </a>
              </p>
            </div>
          </div>
          <!-- Placeholder text section -->
          <div class="self-stretch relative text-[0.88rem] text-left">Text comming !!</div>
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
