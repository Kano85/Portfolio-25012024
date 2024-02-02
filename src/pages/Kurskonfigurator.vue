<template>
  <div
    class="w-full relative bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start py-[3.75rem] px-[1.25rem] box-border gap-[0.63rem] tracking-[normal] text-left text-[0.88rem] text-white font-roboto-mono"
  >
    <Header1
      trainspot="Trainspot"
      kursplannung="Kursplannung"
      kurskonfigurator="Kurskonfigurator"
      fRAMEWidth="28.31rem"
      :onWBSArrowIconClick="onWBSArrowIconClick"
      :onWBSArrowIcon1Click="onWBSArrowIcon1Click"
      :onFrameContainerClick="onFrameContainerClick"
    /><ListFrame />
    <div
      class="w-[39.5rem] h-[9.63rem] flex flex-row items-start justify-start max-w-full"
    >
      <img
        class="h-[9.03rem] w-[0rem] relative object-contain"
        loading="eager"
        alt=""
        src="/arrow-111.svg"
      />
    </div>
    <section
      class="w-[75rem] h-[20.25rem] flex flex-row items-start justify-start max-w-full"
    >
      <img
        class="w-[35.5rem] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full"
        loading="eager"
        alt=""
        src="/frame-8561@2x.png"
      />
    </section>
    <div
      class="w-[75rem] flex flex-row items-start justify-start min-h-[1.75rem] max-w-full shrink-0"
    >
      <b class="w-[35.5rem] relative inline-block shrink-0 max-w-full"
        >Creation process Documentation</b
      >
    </div>
    <section
      class="w-[74.88rem] h-[20.38rem] flex flex-row items-start justify-start max-w-full"
    >
      <div
        class="h-[19.74rem] w-[35.42rem] relative overflow-hidden shrink-0 bg-[url('/public/screenshot-20240125-at-1420@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"
      >
        <img
          class="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
          alt=""
          src="/screenshot-20240125-at-1420@2x.png"
        />
        <div
          class="absolute top-[2.4rem] left-[11.31rem] bg-white w-[4.14rem] h-[1.25rem] z-[1]"
        />
      </div>
    </section>
    <section
      class="w-[75rem] flex flex-col items-start justify-start gap-[0.63rem] max-w-full shrink-0 text-left text-[0.88rem] text-white font-roboto-mono"
    >
      <b class="w-[35.5rem] relative inline-block max-w-full"
        >Creation process Documentation</b
      >
      <div
        class="self-stretch flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1rem] mq750:flex-wrap"
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
    </section>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Header1 from "../components/Header1.vue";
  import ListFrame from "../components/ListFrame.vue";

  export default defineComponent({
    name: "Kurskonfigurator",
    components: { Header1, ListFrame },
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
