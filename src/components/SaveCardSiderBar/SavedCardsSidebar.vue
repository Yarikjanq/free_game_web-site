<template>
  <div
    class="fixed right-0 bg-white text-black h-full sidebard z-10 w-[500px] overflow-auto"
  >
    <div v-if="saved_games.length > 0">
      {{ saved_games }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "vuex";
const store = useStore();
const saved_games = computed(() => {
  return store.getters["save_game"];
});
</script>
