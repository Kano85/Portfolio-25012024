<template>
  <div
    class="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.06rem] box-border tracking-[normal]"
  >
    <Header3 />
    <section
      class="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start p-[1.25rem] box-border gap-[1.25rem] max-w-full shrink-0 text-left text-[1rem] text-primary-main-1 font-roboto-mono"
      data-scroll-to="about"
    >
      <h1
        class="m-0 w-[75rem] h-[3.31rem] relative text-[2.5rem] uppercase font-medium font-inherit inline-block max-w-full mq450:text-[1.5rem] mq925:text-[2rem]"
      >
        <span>UX/UI </span>
        <span class="text-red">Designer</span>
      </h1>
      <div
        class="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.25rem]"
      >
        <div class="relative font-medium">DE|EN|ES|CAT</div>
      </div>
      <div
        class="w-[75rem] h-[5.25rem] relative font-medium inline-block max-w-full"
      >
        "Enhance your project's UX/UI with a designer committed to a “User
        Center Design” and a strong design process. I excel at creating
        user-friendly designs that elevate user engagement. With my experience
        in collaborating effectively with management, developers, and
        stakeholders, coupled with my web development expertise in Vue.js, I am
        equipped to streamline the onboarding process for any project,
        regardless of complexity."
      </div>
    </section>
    <MyRecentWork />
    <section
      class="self-stretch bg-white overflow-hidden flex flex-col items-end justify-start py-[1.25rem] px-[2.5rem] gap-[1.25rem] text-left text-[1rem] text-primary-main-1 font-roboto-mono"
      data-scroll-to="contact"
    >
      <b
        class="h-[4.75rem] relative text-[3.59rem] uppercase inline-block mq450:text-[2.13rem] mq925:text-[2.88rem]"
        >Contact</b
      >
      <div
        class="h-[2.63rem] relative tracking-[0.01em] text-right inline-block"
      >
        <p class="m-0">hcanocardenas@gmail.com</p>
        <p class="m-0">+4917627744274</p>
      </div>
      <div class="relative font-medium">
        <a
          class="text-[inherit]"
          href="https://de.linkedin.com/"
          target="_blank"
        >
          <span class="[text-decoration:underline]">Linkedln</span>
        </a>
        |
        <a
          class="text-[inherit]"
          href="https://www.xing.com/profile/Harold_Cano"
          target="_blank"
        >
          <span class="[text-decoration:underline]">Xing</span>
        </a>
      </div>
    </section>
    <footer
      class="self-stretch bg-primary-main-1 overflow-hidden flex flex-col items-center justify-start p-[1.25rem] box-border gap-[1.25rem] min-h-[15.81rem] max-w-full shrink-0 text-left text-[2.5rem] text-white font-roboto-mono"
    >
      <h1
        class="m-0 w-[75rem] h-[3.31rem] relative text-inherit uppercase font-medium font-inherit inline-block max-w-full mq450:text-[1.5rem] mq925:text-[2rem]"
      >
        Empowering Your Vison with Functionality
      </h1>
      <div
        class="self-stretch flex flex-row items-start justify-between py-[0rem] px-[1.25rem] box-border gap-[1.25rem] max-w-full text-[1rem] mq925:flex-wrap"
      >
        <div class="h-[2.63rem] relative inline-block max-w-full">
          <p class="m-0">
            By the way, I built the Portfolio from scratch with Vue JS,
            Tailwind, Node JS.
          </p>
          <p class="m-0">
            <a
              class="text-[inherit]"
              href="https://github.com/Kano85"
              target="_blank"
            >
              <span class="[text-decoration:underline]"
                >https://github.com/Kano85</span
              >
            </a>
          </p>
        </div>
        <img
          class="h-[3.74rem] w-[3.74rem] relative cursor-pointer"
          loading="eager"
          alt=""
          src="/group-854.svg"
          :onClick="onGroupClick"
        />
      </div>
    </footer>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Header3 from "../components/Header3.vue";
  import MyRecentWork from "../components/MyRecentWork.vue";

  export default defineComponent({
    name: "Landingpage",
    components: { Header3, MyRecentWork },
    methods: {
      onGroupClick() {
        const anchor = document.querySelector("[data-scroll-to='header']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      },
    },
  });
</script>
