<template>
  <div class="w-full h-[141px] relative">
    <img
      class="w-full h-full object-cover rounded-3xl"
      :src="allGames"
      alt=""
    />
    <div
      class="bg-black w-full absolute top-0 bottom-0 opacity-70 rounded-3xl"
    ></div>
    <div class="absolute bottom-1 left-0 right-0 text-center z-[1]">
      Full list of games
    </div>
  </div>
</template>
<script setup lang="ts">
import allGames from "@/assets/images/all-game.jpg";
</script>
