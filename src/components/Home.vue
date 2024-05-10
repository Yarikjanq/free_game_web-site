<template>
  <div v-if="isLoading">
    <loader />
  </div>
  <div v-else>
    <carousel :carousel="get_info" />
    <div class="flex flex-wrap gap-5 justify-center">
      <category :category="get_info" />
      <MainAllGames />

      <!-- <Allgames :game_mod="get_info" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import category from "./category/category.vue";
import { GetId } from "@/hooks/GetHeroes";
import { GetInfo } from "@/hooks/GetInfo";
import Allgames from "./games/Allgames.vue";
import loader from "@/components/UI/Loader.vue";
import MainAllGames from "./games/MainAllGames.vue";
import carousel from "./carousel/carousel.vue";
const { isLoading, get_info } = GetInfo();
const { get_id } = GetId();
const some_hero = ref("");
</script>
