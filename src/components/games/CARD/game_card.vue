<template>
  <div
    v-for="({ img, title }, index) in card_img.slice(0, 3)"
    :key="index"
    class="relative w-full h-[525px]"
  >
    <img
      @click=""
      class="carousel__item max-h-[525px] w-full object-cover rounded-3xl h-full"
      :src="img"
      alt=""
    />

    <div
      class="bg-black w-full absolute top-0 bottom-0 opacity-60 rounded-3xl"
    ></div>
    <div
      class="z-10 absolute bottom-6 right-0 left-0 items-center selection: flex flex-col gap-3"
    >
      <p class="text-xl font-black text-white">{{ title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Collection {
  title: string;
  img: string;
}

const { card_img } = defineProps<{
  card_img: Collection[];
}>();
</script>
