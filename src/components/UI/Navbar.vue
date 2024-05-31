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
        <p @click="$router.push('/')" class="cursor-pointer">Home</p>
        <p @click="$router.push('/popular')" class="cursor-pointer">Popular</p>
        <p @click="$router.push('/filter')" class="cursor-pointer">Filter</p>
        <div class="flex relative">
          <p @click="showBar" class="cursor-pointer save_game">Saved Games</p>
          <span
            class="absolute right-[-11px] top-[-8px]"
            v-if="saved_games.length > 0"
          >
            {{ saved_games.length }}
          </span>
        </div>
      </div>
      <div class="flex flex-col" :class="{ 'expandInpu-active': expand }">
        <div class="flex gap-2 items-center">
          <img class="w-5" :src="search" alt="" />

          <input
            v-model="search_game"
            @click="expandInput"
            type="search"
            class="w-full search-input text-white rounded-xl"
            :class="{ 'expandInpu-input-active': expand }"
          />
        </div>
        <searchGames
          @showId="showIdHandler"
          :search_game="search_game"
          :games="filteredGames"
        />
      </div>
    </div>
    <SavedCardsSiderBar v-show="show_bar" />
  </div>
</template>
<script setup lang="ts">
import logo from "@/assets/images/logo.jpg";
import search from "@/assets/images/search.svg";
import searchGames from "../searchGames/searchGames.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SavedCardsSiderBar from "../SaveCardSiderBar/SavedCardsSidebar.vue";
const router = useRouter();
const expand = ref(false);
const store = useStore();
const show_bar = ref(false);
const games = computed(() => {
  return store.getters["games"];
});

onMounted(() => {
  store.dispatch("fetchGames");
});
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
  if (search_game.value) {
    const searchTerm = search_game.value.toLowerCase();
    return games.value.filter((game) => {
      return game.title.toLowerCase().includes(searchTerm);
    });
  } else {
    return games.value;
  }
});
const showIdHandler = (id: number, title: string) => {
  expand.value = false;
  search_game.value = "";
  store.dispatch("fetchGameById", id).then(() => {
    router.push(`/${title}/${id}`);
  });
};
const saved_games = computed(() => {
  return store.getters["save_game"];
});

const showBar = () => {
  show_bar.value = !show_bar.value;
};
const handleOutsideClickBar = (event) => {
  const sidebar = document.querySelector(".sidebard");
  const save_game = document.querySelector(".save_game");
  console.log(event.target);
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
