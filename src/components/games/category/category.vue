<template>
  <div class="">
    <p class="text-2xl font-bold pb-5 text-white flex items-center gap-2">
      Categories <img class="w-5" :src="icon" alt="" />
    </p>
    <Carousel
      class="carousel_categ"
      v-bind="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :transition="500"
    >
      <Slide v-for="({ genre, img }, index) in genre_game" :key="index">
        <div class="relative h-full w-full">
          <div
            class="carousel__item absolute bottom-3 font-medium left-0 right-0 z-[1] text-white text-xl"
          >
            {{ genre }}
          </div>
          <img class="h-full object-cover w-full" :src="img" alt="" />
          <div class="bg-black w-full absolute top-0 bottom-0 opacity-60"></div>
        </div>
      </Slide>
      <template class="asdasdasdsa" #addons>
        <Pagination class="button_category" />
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
import fantasy from "@/assets/images/fantasy.jpg";
import battle_royale from "@/assets/images/battle_royale.jpg";
import mmorpg from "@/assets/images/mmorpg.webp";
import mmoarpg from "@/assets/images/mmoarpg.jpg";
import fighting from "@/assets/images/fighting.avif";
import moba from "@/assets/images/moba.jpg";
import action_game from "@/assets/images/action_game.jpg";
import card_game from "@/assets/images/card_game.webp";
import card from "@/assets/images/card.avif";
import action from "@/assets/images/action.jpg";
import sport from "@/assets/images/sport.avif";
import racing from "@/assets/images/racing.avif";
import mmo from "@/assets/images/mmo.jpg";
import social from "@/assets/images/social.jpg";
import icon from "@/assets/images/right-arrow.svg";
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
  { genre: "Battle Royale", img: battle_royale },
  { genre: "MMORPG", img: mmorpg },
  { genre: "MMOARPG", img: mmoarpg },
  { genre: "Fighting", img: fighting },
  { genre: "MOBA", img: moba },
  { genre: "Action Game", img: action_game },
  { genre: "Card", img: card },
  { genre: "Action", img: action },
  { genre: "Sports", img: sport },
  { genre: "Racing", img: racing },
  { genre: "Card Game", img: card_game },
  { genre: "MMO", img: mmo },
  { genre: "Social", img: social },
  { genre: "Fantasy", img: fantasy },
]);
</script>

<style>
.carousel_categ .carousel__viewport .carousel__track {
  /* gap: 30px; */
  max-height: 350px;
  height: 100%;
}
.carousel_categ .carousel__viewport {
}
.carousel_categ .carousel__viewport .carousel__track .carousel__slide {
  /* width: 200px !important; */
  border: 3px solid cadetblue;
}
.button_category
  .carousel__pagination-item
  .carousel__pagination-button::after {
  height: 11px;
  width: 15px;
}
</style>
