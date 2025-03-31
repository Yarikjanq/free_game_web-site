<template>
  <div>
    <img
      @click="showBurger = !showBurger"
      class="h-8 w-8 bg-white hidden max-[630px]:block absolute right-3 top-5 z-10"
      :src="burger"
      alt=""
    />
  </div>
  <transition name="slide-fade">
    <div v-if="showBurger" class="bg-black absolute w-full h-full z-10">
      <div
        class="flex gap-10 max-w-[830px] w-full flex-col justify-center h-full items-center"
      >
        <p
          @click="$router.push('/').then(() => (showBurger = !showBurger))"
          class=""
        >
          Home
        </p>
        <p
          @click="
            $router.push('/filter').then(() => (showBurger = !showBurger))
          "
          class=""
        >
          Filter
        </p>
        <div class="flex relative">
          <p @click="showBar" class="save_game">Saved Games</p>
          <span
            v-if="savedGames.length > 0"
            class="absolute right-[-11px] top-[-8px]"
          >
            {{ savedGames.length }}
          </span>
        </div>
      </div>
      <span @click="showBurger = !showBurger" class="absolute top-3 right-6"
        >X</span
      >
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useSaveGames } from "@/store/saveGames";
import { storeToRefs } from "pinia";
import burger from "@/assets/images/burger.svg";
import { ref } from "vue";
const savedGamesLenght = useSaveGames();
const { savedGames } = storeToRefs(savedGamesLenght);
const emit = defineEmits(["showBar"]);
const showBar = () => {
  emit("showBar");
  showBurger.value = !showBurger.value;
};
const showBurger = ref(false);
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
