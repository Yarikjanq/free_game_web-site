<template>
  <div class="border-b border-solid py-2 flex justify-between">
    <img
      @click="$router.push('/')"
      :src="logo"
      alt=""
      class="w-[57px] cursor-pointer"
    />
    <div
      class="flex items-center gap-10"
      :class="{ 'expandInpu-block-active': expand }"
    >
      <div
        class="flex gap-10 items-center max-w-[830px] w-full justify-between"
        :class="{ list_header: expand }"
      >
        <p
          @click="$router.push('/')"
          class="cursor-pointer"
          :class="{
            'underline decoration-2': $route.path === '/',
          }"
        >
          Home
        </p>
        <!-- <p @click="$router.push('/popular')" class="cursor-pointer">Popular</p> -->
        <p
          @click="$router.push('/filter')"
          class="cursor-pointer"
          :class="{
            'underline decoration-2': $route.path === '/filter' && !show_bar,
          }"
        >
          Filter
        </p>
        <div class="flex relative">
          <p
            @click="showBar"
            class="cursor-pointer save_game"
            :class="{ 'underline decoration-2': show_bar }"
          >
            Saved Games
          </p>
          <span
            v-if="savedGames.length > 0"
            class="absolute right-[-11px] top-[-8px]"
          >
            {{ savedGames.length }}
          </span>
        </div>
      </div>
      <div
        class="flex flex-col relative"
        :class="{ 'expandInpu-active': expand }"
      >
        <div class="flex gap-2 items-center">
          <img class="w-5" :src="search" alt="" />

          <input
            v-model="search_game"
            @click="expandInput"
            type="search"
            class="w-full search-input text-white rounded-xl"
            :class="{ 'expandInpu-input-active': expand }"
          />
          <div
            v-if="empty_input"
            class="absolute h-fit top-8 left-8 text-white font-extrabold w-max"
          >
            Could not find anything
          </div>
        </div>
        <searchGames
          @showId="showIdHandler"
          :search_game="search_game"
          :games="filteredGames"
        />
      </div>
    </div>
    <SavedCardsSiderBar :show_bar="show_bar" @closeSidebar="closeSidebar" />
  </div>
</template>
<script setup lang="ts">
import logo from "@/assets/images/logo.jpg";
import search from "@/assets/images/search.svg";
import searchGames from "../searchGames/searchGames.vue";
import { computed, ref } from "vue";
import { useGetGames } from "@/hooks/GetInfo";
import SavedCardsSiderBar from "../SaveCardSiderBar/SavedCardsSidebar.vue";
import { useSaveGames } from "@/store/saveGames";
import { storeToRefs } from "pinia";
import router from "@/router/router";

const savedGamesLenght = useSaveGames();
const { savedGames } = storeToRefs(savedGamesLenght);
const expand = ref(false);

const show_bar = ref(false);
const empty_input = ref(false);
const getAllGames = useGetGames();

const search_game = ref("");
const expandInput = () => {
  expand.value = true;
  document.addEventListener("click", handleOutsideClick);
};
const handleOutsideClick = (event) => {
  const inputElement = document.querySelector(".search-input");
  const inputScroll = document.querySelector(".scrollbar");
  if (
    search_game.value === "" &&
    inputElement &&
    !inputElement.contains(event.target)
  ) {
    expand.value = false;
  }
  if (
    inputElement &&
    !inputElement.contains(event.target) &&
    inputScroll &&
    !inputScroll.contains(event.target)
  ) {
    expand.value = false;
    search_game.value = "";
    document.removeEventListener("click", handleOutsideClick);
  }
};
const filteredGames = computed(() => {
  empty_input.value = false;
  if (search_game.value) {
    const searchTerm = search_game.value.toLowerCase();

    const filtered = getAllGames.get_info.filter((game) => {
      return game.title.toLowerCase().includes(searchTerm);
    });
    if (filtered.length === 0) {
      empty_input.value = true;
    }

    return filtered;
  } else {
    return getAllGames.get_info;
  }
});
const showIdHandler = (id: number, title: string) => {
  expand.value = false;
  search_game.value = "";
  router.push(`/${title}/${id}`);
};

const showBar = () => {
  show_bar.value = !show_bar.value;
};

const closeSidebar = (value) => {
  show_bar.value = value;
};
const handleOutsideClickBar = (event) => {
  const sidebar = document.querySelector(".sidebar-open");
  const save_game = document.querySelector(".save_game");
  // console.log(event.target);
  if (!sidebar?.contains(event.target) && !save_game?.contains(event.target)) {
    show_bar.value = false;
  }
};
document.addEventListener("click", handleOutsideClickBar);
</script>
<style scoped>
.expandInpu-active {
  /* position: absolute;
  right: 0;
  top: 24px;
  left: 85px; */
  width: 100%;
}
.expandInpu-block-active {
  width: 100%;
  padding-left: 30px;
}
.expandInpu-input-active {
  height: 40px;
  background: transparent;
  padding: 12px;
  outline: none;
}
.list_header {
  display: none;
}
</style>
