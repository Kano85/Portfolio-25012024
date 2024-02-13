<template>
  <section
    class="self-stretch bg-white overflow-hidden flex flex-col items-end justify-center py-[1.25rem] px-[2.5rem] box-border gap-[1.25rem] max-w-full shrink-0 text-left text-[3.13rem] text-primary-main-1 font-roboto-mono"
    data-scroll-to="myRecentWork">
    <h1
      class="m-0 h-[4.13rem] relative text-inherit uppercase font-bold font-inherit inline-block max-w-full mq450:text-[1.88rem] mq925:text-[2.5rem]">
      My recent work
    </h1>
    <!-- Group 1 -->
    <GroupOfHorizontalCards :cardData="cardsGroup1" @cardClick="onCardClick" />
    <!-- Group 2 -->
    <GroupOfHorizontalCards :cardData="cardsGroup2" @cardClick="onCardClick" />
    <!-- Group 3 -->
    <GroupOfHorizontalCards :cardData="cardsGroup3" @cardClick="onCardClick" />
  </section>
</template>

<script>
import { defineComponent } from "vue";
import GroupOfHorizontalCards from "./GroupOfHorizontalCards.vue";

export default defineComponent({
  name: "MyRecentWork",
  components: { GroupOfHorizontalCards },
  data() {
    return {
      cardsGroup1: [
        // Assuming each group has similar structure, adjust accordingly
        {
          image: "/frame-589.png",
          title: "Trainspot",
          label: "2023-2024",
          url: "/trainspot25012024",
          propHeight: "28.13rem"
        },
        {
          image: "/frame-5893@2x.png",
          title: "Kurskonfigurator",
          label: "2022",
          url: "/kurskonfigurator25012024",
          propHeight: "28.13rem"
        }
      ],
      cardsGroup2: [
        {
          image: "/gallery-card@2x.png",
          title: "Design System",
          label: "UIUX, 2020-2023",
          url: "/designsystem25012024",
          propHeight: "28.13rem"
        },
        {
          image: "/frame-590.png",
          title: "Kursplannung",
          label: "2021-2022",
          url: "/kursplannung25012024",
          propHeight: "28.13rem"
        }
      ],
      cardsGroup3: [
        {
          image: "/frame-855@2x.png",
          title: "Trainer:in Management",
          label: "2020-2021",
          url: "/trainerinmanagement25012024",
          propHeight: "28.13rem"
        },
        {
          image: "/frame-10000017711@2x.png",
          title: "Kugu Dashboard",
          label: "UI, Art Direction",
          url: "/kuguDashboard25012024",
          propHeight: "28.13rem"
        }
      ],
    };
  },
  methods: {
    onCardClick(url) {
      this.$router.push(url);
    }
  }
});
</script>
