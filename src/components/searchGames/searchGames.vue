<template>
  <div
    class="absolute z-10 overflow-auto h-[334px] top-20 bg-black right-[84px] left-[84px] scrollbar"
    v-if="search_game.trim().length > 0 && games.length > 0"
  >
    <div
      class="flex items-center p-3 cursor-pointer hover:bg-[darkgray] gap-[14%] rounded-xl"
      v-for="game in games"
      @click="emitShowId(game.title, game.id)"
    >
      <img :src="game.thumbnail" alt="" class="w-[200px] rounded-xl" />
      <p class="text-[20px] text-white">{{ game.title }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps<{
  games: string[];
  search_game: string;
}>();
const emit = defineEmits(["showId"]);
const emitShowId = (id: number, title: string) => {
  emit("showId", title, id);
};
</script>
<style scoped>
.scrollbar {
  scrollbar-width: none;
}
</style>
