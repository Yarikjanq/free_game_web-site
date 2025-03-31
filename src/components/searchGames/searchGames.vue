<template>
  <div
    class="absolute z-10 overflow-auto max-h-[334px] top-16 max-[640px]:top-[72px] max-[640px]:w-full bg-black right-[84px] scrollbar left-0 rounded-xl"
    v-if="search_game.trim().length > 0 && games.length > 0"
  >
    <div
      class="flex items-center max-[640px]:p-2 p-3 cursor-pointer hover:bg-[darkgray] gap-[14%] rounded-xl"
      v-for="game in games"
      @click="emitShowId(game.title, game.id)"
    >
      <img
        :src="game.thumbnail"
        alt=""
        class="max-[640px]:w-[125px] w-[200px] rounded-xl"
      />
      <p class="max-[640px]:text-[13px] text-[20px] text-white">
        {{ game.title }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Game } from "@/types/Game";
const { games, search_game } = defineProps<{
  games: Game[];
  search_game: string;
}>();
const emit = defineEmits(["showId"]);
const emitShowId = (title: string, id: number) => {
  emit("showId", title, id);
};
</script>
<style scoped>
.scrollbar {
  scrollbar-width: none;
}
</style>
