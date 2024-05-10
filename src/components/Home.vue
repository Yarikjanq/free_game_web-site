<template>
  <div v-if="isLoading">
    <loader />
  </div>
  <div v-else class="flex flex-col gap-24">
    <carousel :carousel="get_info" />

    <category :category="get_info" />
    <MainAllGames />
    <popular />
    <collections />
    <!-- <Allgames :game_mod="get_info" /> -->
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
import popular from "./popular/popular.vue";
import collections from "./collections/collections.vue";
const { isLoading, get_info } = GetInfo();
const { get_id } = GetId();
const some_hero = ref("");
</script>
