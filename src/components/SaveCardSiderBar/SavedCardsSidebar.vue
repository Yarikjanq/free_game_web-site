<template>
  <div
    class="fixed right-0 text-black h-full sidebar z-10 w-[500px] rounded-s-xl max-[640px]:!w-full"
    :class="['sidebar', { 'sidebar-open': show_bar }]"
  >
    <h1 class="text-white text-center">BASKET</h1>
    <div class="flex justify-end p-2">
      <button @click="closeSidebar(false)" class="w-7 text-white">X</button>
    </div>
    <div
      class="flex flex-col gap-6 p-2 overflow-auto h-full no-scrollbar pb-20"
    >
      <div
        class="flex justify-between bg-[darkcyan] gap-14 rounded-xl"
        v-if="savedGames.length > 0"
        v-for="{ title, id, thumbnail, genre } in savedGames"
        :key="id"
      >
        <img :src="thumbnail" alt="img" class="w-[40%] rounded-s-xl" />
        <div class="flex w-full justify-between">
          <div class="flex flex-col w-28 gap-2">
            <p class="text-white">{{ title }}</p>
            <span class="p-[3px] rounded bg-red-600 w-max">{{ genre }}</span>
          </div>
          <button
            @click.stop="deletePost(id)"
            class="text-white mr-8 h-max relative top-4"
          >
            X
          </button>
        </div>
      </div>
      <div
        v-else
        class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-5"
      >
        EMPTY
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSaveGames } from "@/store/saveGames";
import { storeToRefs } from "pinia";
const deleteGames = useSaveGames();
const { savedGames } = storeToRefs(deleteGames);

const { show_bar } = defineProps({
  show_bar: Boolean,
});
const deletePost = (id: number) => {
  const gameToDelete = savedGames.value.find((game) => game.id === id);

  if (gameToDelete) {
    deleteGames.toggleGames(gameToDelete);
  }
};

const emit = defineEmits(["closeSidebar"]);
const closeSidebar = (show_bar) => {
  emit("closeSidebar", show_bar);
};
</script>
<style>
.sidebar {
  position: fixed;
  right: -9999px;
  top: 0;
  height: 100%;
  width: 500px;
  background-color: black;
  color: black;
  transition: right 0.3s ease;
  z-index: 10;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.sidebar-open {
  right: 0;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
