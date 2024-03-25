<template>
  <section
    class="self-stretch bg-base-white overflow-hidden flex flex-col items-start justify-start py-[1.25rem] px-[2.5rem] box-border gap-[1.25rem] max-w-full text-left text-[3rem] text-primary-main-1 font-roboto-mono">
    <div class="self-stretch flex flex-row items-start justify-start max-w-full">
      <h1
        class="m-0 w-[75rem] h-[3.313rem] relative text-[3rem] uppercase inline-block max-w-full mq925:text-[2rem] mq450:text-[1.5rem]">
        <span class="font-normal">UX/UI </span> <!-- Explicitly set to font-normal -->
        <span class="text-red font-bold">Designer</span>
      </h1>
    </div>
    <div class="flex flex-row items-start justify-start text-[1rem]">
      <div class="relative font-medium">DE|EN|ES|CAT|JS</div>
    </div>
    <div
      class="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[9.375rem] px-[0rem] pb-[24.375rem] box-border gap-[24.375rem] max-w-full text-right  text-[1.5rem] font-roboto-slab lg:gap-[24.188rem_24.375rem] lg:pt-[6.063rem] lg:pb-[15.813rem] lg:box-border mq450:gap-[12.5rem_24.375rem] mq750:gap-[6.063rem_24.375rem] mq750:pt-[3.938rem] mq750:pb-[10.25rem] mq750:box-border">
      <div
        class="self-stretch overflow-hidden flex flex-col items-end justify-start max-w-full mq450:gap-[4.438rem_17.688rem] mq1050:gap-[8.813rem_17.688rem]">
        <h3
          class="m-0 w-[49.894rem] relative text-inherit inline-block max-w-full font-normal font-roboto-slab mq450:text-[1.188rem]">
          <p class="m-0">
            Enhance your project's UX/UI with a designer committed to a
          </p>
          <p class="m-0">
            <span class="font-bold">User Center Design</span>
            <span> and a strong </span>
            <span class="font-bold">Design Process</span>.
          </p>
        </h3>
      </div>
      <div
        class="w-[60.438rem] flex flex-col items-start justify-start gap-[4.25rem] max-w-full text-left text-[2rem] mq750:gap-[1.063rem_4.25rem] mq1050:gap-[2.125rem_4.25rem]">
        <div class="flex flex-col items-start justify-end gap-[0.5rem] max-w-full">
          <h1
            class="m-0 relative text-inherit tracking-[-0.05em] font-normal font-inherit mq450:text-[1.375rem] mq1050:text-[1.813rem]">
            I excel at creating user-friendly designs that
          </h1>
          <div class="flex flex-row items-center justify-end gap-[0.5rem] max-w-full mq750:flex-wrap">
            <h1
              class="m-0 relative text-inherit tracking-[-0.05em] font-normal inline-block max-w-full font-inherit mq450:text-[1.375rem] mq1050:text-[1.813rem]">
              <span>elevate </span>
              <b class="font-bold">user engagement </b>
            </h1>
            <div class="h-[1.5rem] flex flex-row items-end justify-end gap-[0.5rem]">
              <img class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]" loading="lazy" alt="" src="/star.svg" />
              <img class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]" loading="lazy" alt="" src="/star.svg" />
              <img class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]" loading="lazy" alt="" src="/star.svg" />
              <img class="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]" loading="lazy" alt="" src="/star-half.svg" />
            </div>
          </div>
        </div>
        <div
          class="self-stretch overflow-hidden flex flex-row items-start justify-start py-[0rem] px-[4.938rem] box-border max-w-full text-[1.25rem] mq1050:pl-[2.438rem] mq1050:pr-[2.438rem] mq1050:box-border">
          <div class="flex-1 relative inline-block max-w-full mq450:text-[1rem]">
            “With my experience in collaborating effectively with management,
            developers, and stakeholders, coupled with my web development
            expertise in Vue.js, I am equipped to streamline the onboarding
            process for any project, regardless of complexity”
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>
