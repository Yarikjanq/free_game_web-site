<template>
  <div class="">
    <div class="text-2xl font-bold pb-5 text-white">Categories ></div>
    <Carousel
      class="carousel_categ"
      v-bind="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide v-for="({ genre, img }, index) in genre_game" :key="index">
        <div class="relative h-full">
          <div
            class="carousel__item absolute bottom-3 font-medium left-0 right-0 z-[1] text-white text-xl"
          >
            {{ genre }}
          </div>
          <img class="h-full" :src="img" alt="" />
          <div class="bg-black w-full absolute top-0 bottom-0 opacity-70"></div>
        </div>
      </Slide>
      <template class="asdasdasdsa" #addons>
        <Pagination class="" />
        <Navigation class="!bg-white !h-[100px] !rounded-full" />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import shooter from "@/assets/images/shooter.jpg";
import Towerborne from "@/assets/images/Towerborne.jpg";
import action_rpg from "@/assets/images/action_rpg.jpg";
const props = defineProps<{
  category: string[];
}>();

const settings = ref({
  itemsToShow: 3,
  snapAlign: "center",
});
const breakpoints = {
  itemsToShow: 3,
  snapAlign: "center",
};
const genre_game = ref([
  { genre: "Shooter", img: shooter },
  { genre: "ARPG", img: Towerborne },
  { genre: "Action RPG", img: action_rpg },
  { genre: "Battle Royale", img: shooter },
  { genre: "MMORPG", img: shooter },
  { genre: "MMOARPG", img: shooter },
  { genre: "Fighting", img: shooter },
  { genre: "MOBA", img: shooter },
  { genre: "Action Game", img: shooter },
  { genre: "Card", img: shooter },
  { genre: "Action", img: shooter },
  { genre: "Sports", img: shooter },
  { genre: "Racing", img: shooter },
  { genre: "Card Game", img: shooter },
  { genre: "MMO", img: shooter },
  { genre: "Social", img: shooter },
  { genre: "Fantasy", img: shooter },
]);
</script>

<style>
.carousel_categ .carousel__viewport .carousel__track {
  gap: 0 !important;
}
</style>
