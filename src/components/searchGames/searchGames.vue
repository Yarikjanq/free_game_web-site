<template>
  <div
    class="absolute z-10 overflow-auto h-[334px] top-16"
    v-if="search_game.trim().length > 0"
  >
    <div v-for="game in games">
      {{ game.title }}
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  games: string[];
  search_game: string;
}>();
</script>
