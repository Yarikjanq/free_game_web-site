<template>
  <div>
    <div class="flex">
      <p>Platform:</p>
      <select
        @change="changePlafroms"
        class="bg-black"
        v-model="selected_plaftorm"
      >
        <option class="bg-black" disabled value="">Browse by genre</option>
        <option :value="system" v-for="{ name, system } in platforms">
          {{ name }}
        </option>
      </select>
    </div>
    <div class="flex">
      <p>Genre/Tag:</p>
      <select @change="changeGenre" class="bg-black" v-model="selected_genre">
        <option class="bg-black" disabled value="">Browse by genre</option>
        <option v-for="genre in genres">{{ genre }}</option>
      </select>
    </div>
  </div>
  <div class="flex flex-wrap">
    <Allgames :game_mod="displayedData" />
  </div>
  <div ref="observer" class="w-full h-10"></div>
  <div v-if="isLoading" class="mt-4">
    <loader />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useGetGenre } from "@/hooks/GetGenre";
import { useGetPlatform } from "@/hooks/GetGenre";
import loader from "@/components/UI/Loader.vue";
import Allgames from "@/components/games/Allgames.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { genre_data, isLoading, GetGenre } = useGetGenre();
const { plaftorm_data, GetPlatform } = useGetPlatform();
const displayedData = ref([]);
const observer = ref(null);
const currentPage = ref(1);
const itemsPerPage = 10;
const selected_genre = ref();
const selected_plaftorm = ref();
const changeGenre = () => {
  GetGenre(selected_genre.value);
};
const changePlafroms = () => {
  GetPlatform(selected_plaftorm.value);
};
const updateDisplayedData = () => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  displayedData.value = genre_data.value
    .slice(start, end)
    .concat(plaftorm_data.value.slice(start, end));
};

const loadMore = () => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  displayedData.value = displayedData.value.concat(
    genre_data.value.slice(start, end),
    plaftorm_data.value.slice(start, end)
  );
  currentPage.value++;
};

watch([genre_data, plaftorm_data], (newData) => {
  updateDisplayedData();
});

onMounted(() => {
  const observerInstance = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading.value) {
      loadMore();
    }
  });
  if (observer.value) {
    observerInstance.observe(observer.value);
  }

  const genre = route.params.genre || "MMORPG";
  GetGenre(genre);
  selected_genre.value = genre;
});
const genres = {
  mmorpg: "MMORPG",
  shooter: "Shooter",
  strategy: "Strategy",
  moba: "MOBA",
  racing: "Racing",
  sports: "Sports",
  social: "Social",
  sandbox: "Sandbox",
  openWorld: "Open-World",
  survival: "Survival",
  pvp: "PvP",
  pve: "PvE",
  pixel: "Pixel",
  voxel: "Voxel",
  zombie: "Zombie",
  turnBased: "Turn-Based",
  firstPerson: "First-Person",
  thirdPerson: "Third-Person",
  topDown: "Top-Down",
  tank: "Tank",
  space: "Space",
  sailing: "Sailing",
  sideScroller: "Side-Scroller",
  superhero: "Superhero",
  permadeath: "Permadeath",
  card: "Card",
  battleRoyale: "Battle-Royale",
  mmo: "MMO",
  mmofps: "MMOFPS",
  mmotps: "MMOTPS",
  threeD: "3D",
  twoD: "2D",
  anime: "Anime",
  fantasy: "Fantasy",
  sciFi: "Sci-Fi",
  fighting: "Fighting",
  actionRpg: "Action-RPG",
  action: "Action",
  military: "Military",
  martialArts: "Martial-Arts",
  flight: "Flight",
  lowSpec: "Low-Spec",
  towerDefense: "Tower-Defense",
  horror: "Horror",
  mmorts: "MMORTS",
};
const platforms = [
  {
    system: "pc",
    name: "Windows(PC)",
  },

  {
    system: "browser",
    name: "Browser(WEB)",
  },
  {
    system: "all",
    name: "Al Platforms",
  },
];
</script>
