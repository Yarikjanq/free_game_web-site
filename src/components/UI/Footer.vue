<template>
  <footer
    class="bg-[darkslategrey] flex items-center justify-between px-[107px] py-[38px] mt-24 mb-6 max-[640px]:flex-col max-[640px]:py-[18px] max-[640px]:px-[17px]"
  >
    <div class="flex items-center gap-7 w-full">
      <img class="w-28" :src="logo" alt="" />
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-extrabold">FREE-TO-PLAY GAMES</h3>
        <p>Top Free Fantasy Games for PC and Browser In 2024!</p>
      </div>
    </div>
    <div class="flex flex-col gap-5 w-full">
      <p>Navigation</p>
      <ul>
        <li>List of games</li>
        <li>Popular</li>

        <li>New</li>
        <li>Genre</li>
        <li>Collections</li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import logo from "../../../public/favicon.jpg";
</script>
