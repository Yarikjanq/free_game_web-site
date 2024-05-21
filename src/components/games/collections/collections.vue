<template>
  <div class="max-w-[1200px] m-auto w-full">
    <p class="text-2xl font-bold pb-5 text-white flex items-center gap-2">
      Collections <img class="w-5" :src="icon" alt="" />
    </p>
    <div class="flex gap-10">
      <game_card :card_img="popular_games" />
    </div>
  </div>
</template>
<script setup lang="ts">
import icon from "@/assets/images/right-arrow.svg";
import game_card from "@/components//games/CARD/game_card.vue";
import team from "@/assets/images/team.jpg";
import open_world from "@/assets/images/open-world.jpg";
import zombi from "@/assets/images/zombi.jpg";
import { ref } from "vue";
const popular_games = ref([
  { title: "Games for two", img: team },
  { title: "Open world", img: open_world },
  { title: "Zombie games", img: zombi },
]);
</script>
