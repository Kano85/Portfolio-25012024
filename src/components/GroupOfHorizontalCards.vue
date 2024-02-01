
<template>
  <div
    class="self-stretch flex flex-row flex-wrap items-center justify-start gap-[2.5rem] max-w-full text-left text-[1rem] text-primary-main-1 font-roboto-mono mq700:gap-[1.25rem]"
  >
    <div
      v-for="(card, index) in cardData"
      :key="index"
      class="flex-1 flex flex-col items-start justify-start gap-[0.63rem] min-w-[22.94rem] max-w-full cursor-pointer"
      @click="handleCardClick(card.url)"
    >
      <img
        :src="card.image"
        class="self-stretch h-[28.13rem] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        :style="{ height: card.propHeight }"
      />
      <div
        class="self-stretch flex flex-row flex-wrap items-center justify-between gap-[1.25rem]"
      >
        <b class="relative">{{ card.title }}</b>
        <div class="relative">{{ card.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GroupOfHorizontalCards',
  props: {
    cardData: {
      type: Array,
      required: true,
      validator(value) {
        // Optional: validate the structure of each object in the array
        return value.every(card => 
          typeof card.image === 'string' &&
          typeof card.title === 'string' &&
          typeof card.label === 'string' &&
          typeof card.url === 'string' &&
          typeof card.propHeight === 'string'
        );
      }
    },
  },
  methods: {
    handleCardClick(url) {
      this.$emit('cardClick', url);
    }
  }
});
</script>
