<template>
  <section
    class="self-stretch bg-white flex flex-row items-center justify-center relative gap-[0.63rem] max-w-full shrink-0 text-left text-[2.5rem] text-primary-main-1 font-roboto-mono"
    data-scroll-to="header"
  >
    <img
      class="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
      loading="eager"
      alt=""
      src="/main-1@2x.png"
    />
    <div
      class="flex-1 flex flex-row flex-wrap items-start justify-start pt-[1.88rem] px-[2.5rem] pb-[0.63rem] box-border [row-gap:20px] max-w-full z-[1]"
    >
      <div
        class="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16.81rem] min-w-[38rem] max-w-full mq925:gap-[8.38rem] mq925:min-w-full mq700:gap-[4.19rem]"
      >
        <div class="w-[6.06rem] flex flex-row items-center justify-center">
          <h1
            class="m-0 h-[3.31rem] flex-1 relative text-inherit font-medium font-inherit inline-block mq450:text-[1.5rem] mq925:text-[2rem]"
          >
            Hi !
          </h1>
        </div>
        <div
          class="self-stretch flex flex-row items-center justify-center max-w-full text-[5.63rem]"
        >
          <b
            class="h-[14.88rem] flex-1 relative uppercase inline-block max-w-full mq450:text-[1.69rem] mq925:text-[2.81rem]"
          >
            <p class="m-0">Harold</p>
            <p class="m-0">
              <span>Cano</span>
              <span class="text-[5.59rem]"> </span>
            </p>
          </b>
        </div>
      </div>
      <nav
        class="m-0 h-[2.56rem] w-[16.56rem] relative text-left text-[1rem] text-primary-main-1 font-roboto-mono"
      >
        <div
          class="absolute top-[0.63rem] left-[0rem] font-medium cursor-pointer"
          :onClick="onProfileTextClick"
        >
          Profile
        </div>
        <div
          class="absolute top-[0.63rem] left-[6.75rem] font-medium cursor-pointer"
          :onClick="onWorksTextClick"
        >
          Works
        </div>
        <div
          class="absolute top-[0.63rem] left-[12.31rem] font-medium cursor-pointer"
          :onClick="onContactTextClick"
        >
          Contact
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header3",
    methods: {
      onProfileTextClick() {
        const anchor = document.querySelector("[data-scroll-to='about']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onWorksTextClick() {
        const anchor = document.querySelector(
          "[data-scroll-to='myRecentWork']"
        );
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
      onContactTextClick() {
        const anchor = document.querySelector("[data-scroll-to='contact']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
