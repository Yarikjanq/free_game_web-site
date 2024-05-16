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
import { ref, onMounted, watch, computed } from "vue";
import category from "./category/category.vue";
import { GetId } from "@/hooks/GetHeroes";
import { GetInfo } from "@/hooks/GetInfo";
import Allgames from "./games/Allgames.vue";
import loader from "@/components/UI/Loader.vue";
import MainAllGames from "./games/MainAllGames.vue";
import carousel from "./carousel/carousel.vue";
import popular from "./popular/popular.vue";
import { useStore } from "vuex";
import collections from "./collections/collections.vue";
import Footer from "./UI/Footer.vue";
const games = computed(() => {
  return store.getters["games"];
});
const store = useStore();
const isLoadings = computed(() => {
  return store.getters["isLoading"];
});
const { get_id } = GetId();
const some_hero = ref("");
</script>
