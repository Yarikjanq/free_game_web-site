<template>
  <div v-if="isLoadings" class="min-h-screen">
    <loader />
  </div>
  <div v-else class="flex flex-col gap-24 px-6">
    <carousel :carousel="games" />

    <category :category="games" />
    <MainAllGames />
    <popular />
    <collections />
    <!-- <Allgames :game_mod="get_info" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import category from "@/components/games/category/category.vue";

import loader from "@/components/UI/Loader.vue";
import MainAllGames from "./games/MainAllGames.vue";
import carousel from "./carousel/carousel.vue";
import popular from "@/components/games/popular/popular.vue";
import { useStore } from "vuex";
import collections from "@/components/games/collections/collections.vue";

const games = computed(() => {
  return store.getters["games"];
});
const store = useStore();
const isLoadings = computed(() => {
  return store.getters["isLoading"];
});
</script>
