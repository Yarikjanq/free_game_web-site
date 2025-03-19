<template>
  <div class="flex mt-7 gap-14">
    <div class="flex">
      <p>Platform:</p>
      <select
        @change="changePlatfrom"
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
    <div class="flex">
      <p>Sort By:</p>
      <select
        @change="changeSortBy"
        class="bg-black"
        v-model="selected_sort_by"
      >
        <option class="bg-black" disabled value="">Sort By</option>
        <option
          :value="system"
          v-for="{ system, name } in sort_by"
          :key="system"
        >
          {{ name }}
        </option>
      </select>
    </div>
  </div>
  <div class="flex flex-wrap mt-10 justify-center gap-7">
    <Allgames :game_mod="displayedData" />
  </div>
  <div ref="observer" class="w-full h-10"></div>
  <div v-if="useSaveGenge.isLoading" class="mt-4">
    <loader />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useGetGenre } from "@/hooks/GetGenre";
import loader from "@/components/UI/Loader.vue";
import Allgames from "@/components/games/Allgames.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const useSaveGenge = useGetGenre();

const displayedData = ref([]);
const observer = ref(null);
const currentPage = ref(1);
const itemsPerPage = 10;
const selected_genre = ref();
const selected_sort_by = ref();
const selected_plaftorm = ref();
const changeGenre = () => {
  currentPage.value = 1;
  displayedData.value = [];
  useSaveGenge
    .GetGenre(
      selected_plaftorm.value,
      selected_genre.value,
      selected_sort_by.value
    )
    .then(() => {
      updateDisplayedData();
    });
};
const changeSortBy = () => {
  currentPage.value = 1;
  displayedData.value = [];
  useSaveGenge
    .GetGenre(
      selected_plaftorm.value,
      selected_genre.value,
      selected_sort_by.value
    )
    .then(() => {
      updateDisplayedData();
    });
};
const changePlatfrom = () => {
  currentPage.value = 1;
  displayedData.value = [];
  useSaveGenge
    .GetGenre(
      selected_plaftorm.value,
      selected_genre.value,
      selected_sort_by.value
    )
    .then(() => {
      updateDisplayedData();
    });
};

const updateDisplayedData = () => {
  if (useSaveGenge.genre_data.length > 0) {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    displayedData.value = useSaveGenge.genre_data.slice(start, end);
  }
};

const loadMore = () => {
  if (useSaveGenge.genre_data.length > 0) {
    const start = currentPage.value * itemsPerPage;
    const end = start + itemsPerPage;
    const newItems = useSaveGenge.genre_data.slice(start, end);

    if (newItems.length > 0) {
      const uniqueItems = newItems.filter(
        (item) =>
          !displayedData.value.some(
            (displayedItem) => displayedItem.id === item.id
          )
      );

      if (uniqueItems.length > 0) {
        displayedData.value = displayedData.value.concat(uniqueItems);
        currentPage.value++;
      }
    }
  }
};

watch([useSaveGenge.genre_data], (newData) => {
  updateDisplayedData();
});
onMounted(async () => {
  const observerInstance = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !useSaveGenge.isLoading) {
      loadMore();
    }
  });
  if (observer.value) {
    observerInstance.observe(observer.value);
  }

  const genre = route.params.genre || "MMORPG";
  const platform = route.params.genre || "pc";
  const sort_by = route.params.genre || "relevance";
  selected_genre.value = genre;
  selected_plaftorm.value = platform;
  selected_sort_by.value = sort_by;

  await useSaveGenge.GetGenre(platform, genre, sort_by);

  updateDisplayedData();
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
const sort_by = [
  {
    system: "release-date",
    name: "Release Date",
  },

  {
    system: "popularity",
    name: "Popularity",
  },
  {
    system: "alphabetical",
    name: "Alphabetical ",
  },
  {
    system: "relevance",
    name: "Relevance ",
  },
];
</script>
