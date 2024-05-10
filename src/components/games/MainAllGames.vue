<template>
  <div class="w-full h-[200px] relative">
    <img
      class="w-full h-full object-cover rounded-3xl"
      :src="allGames"
      alt=""
    />
    <div
      class="bg-black w-full absolute top-0 bottom-0 opacity-60 rounded-3xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center z-[1] text-white text-2xl font-semibold"
    >
      Full list of games
    </div>
  </div>
</template>
<script setup lang="ts">
import allGames from "@/assets/images/all-game.jpg";
</script>
