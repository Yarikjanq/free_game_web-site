<template>
  <div class="bg-[darkslategray] py-7 flex justify-between">
    <img :src="logo" alt="" class="w-[57px]" />
    <div
      class="flex gap-10 items-center justify-center max-w-[830px] w-full justify-between"
    >
      <p class="">List of games</p>
      <p class="">Popular</p>
      <p class="">New</p>
      <p class="">genre</p>
      <p class="">Collections</p>
    </div>
    <img :src="logo_game" alt="" class="w-[57px]" />
  </div>
</template>
<script setup lang="ts">
import logo from "@/assets/images/logo.jpg";
import logo_game from "@/assets/images/logo_game.jpg";
</script>
