import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import type { Game } from "@/types/Game";

export const useSaveGames = defineStore("saveProductStore", () => {
  const savedGames = ref<Game[]>([]);

  const loadSavedGames = (): void => {
    const storedGames = localStorage.getItem("games");
    savedGames.value = storedGames ? JSON.parse(storedGames) : [];
  };

  const toggleGames = (game: Game): void => {
    const index = savedGames.value.findIndex((item) => item.id === game.id);

    if (index !== -1) {
      savedGames.value.splice(index, 1);
    } else {
      savedGames.value.push(game);
    }

    localStorage.setItem("games", JSON.stringify(savedGames.value));
  };

  onMounted(loadSavedGames);

  return {
    toggleGames,
    savedGames
  };
});
