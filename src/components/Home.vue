<template>
  <div v-if="getAllGames.isLoading" class="min-h-screen">
    <loader />
  </div>
  <div v-else class="flex flex-col gap-24 px-6">
    <carousel :carousel="getAllGames.get_info" />

    <category :category="getAllGames.get_info" />
    <MainAllGames />
    <popular />
    <collections />
    <!-- <Allgames :game_mod="get_info" /> -->
  </div>
</template>

<script setup lang="ts">
import category from "@/components/games/category/category.vue";

import loader from "@/components/UI/Loader.vue";
import MainAllGames from "./games/MainAllGames.vue";
import carousel from "./carousel/carousel.vue";
import popular from "@/components/games/popular/popular.vue";
import collections from "@/components/games/collections/collections.vue";
import { useGetGames } from "@/hooks/GetInfo";

const getAllGames = useGetGames();
</script>
