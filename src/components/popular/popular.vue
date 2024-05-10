<template>
  <div class="max-w-[1200px] m-auto w-full">
    <p class="text-2xl font-bold pb-5 text-white flex items-center gap-2">
      Popular <img class="w-5" :src="icon" alt="" />
    </p>
    <div class="flex gap-10">
      <game_card :card_img="popular_games" />
    </div>
  </div>
</template>
<script setup lang="ts">
import icon from "@/assets/images/right-arrow.svg";
import game_card from "../CARD/game_card.vue";
import cyberpunk from "@/assets/images/сyberpunk.jpg";
import metro from "@/assets/images/metro.avif";
import fallout from "@/assets/images/fallout4.jpg";
import { ref } from "vue";
const popular_games = ref([
  { title: "Cyberpunk 2077", img: cyberpunk },
  { title: "Metro Exodus", img: metro },
  { title: "Fallout 4", img: fallout },
]);
</script>
