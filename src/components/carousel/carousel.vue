<template>
  <div class="pt-16">
    <Carousel
      :autoplay="3000"
      :transition="500"
      class="carousel_main"
      :wrap-around="true"
    >
      <Slide
        v-for="{ img, id, name, desc } in carousel_img.slice(0, 5)"
        :key="id"
      >
        <div class="relative w-full h-full">
          <img
            @click=""
            class="carousel__item max-h-[398px] w-full object-cover"
            :src="img"
            alt=""
          />

          <div class="bg-black w-full absolute top-0 bottom-0 opacity-60"></div>
          <div
            class="z-10 absolute flex flex-col items-start top-[35%] left-[15%] gap-3"
          >
            <span class="text-3xl font-black text-white">{{ name }}</span>
            <span class="text-start max-w-[500px] w-full text-white">{{
              desc
            }}</span>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination class="button_pag" />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import dota2 from "@/assets/images/dot.jpg";
import cs2 from "@/assets/images/cs2.jpg";
import GenshinImpact from "@/assets/images/GenshinImpact.jpg";
import pubg from "@/assets/images/pubg.avif";
import gta from "@/assets/images/gta.webp";
import { ref } from "vue";

const carousel_img = ref([
  {
    id: 1,
    name: "Dota 2",
    desc: "Valve's premiere competitive free to play MOBA.",
    img: dota2,
  },
  {
    id: 2,
    name: "Counter Strike 2",
    desc: "This is the largest technological leap in the history of the series, providing the game with new features and content for years to come.",
    img: cs2,
  },
  {
    id: 3,
    name: "Genshin Impact",
    desc: "Adventure role-playing game with an open world. You have to explore the magical world of Teyvat.",
    img: GenshinImpact,
  },
  {
    id: 4,
    name: "Pubg Battlegrounds",
    desc: "Is a battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor. Play free now!",
    img: pubg,
  },
  {
    id: 5,
    name: "Grand Theft Auto V",
    desc: "Pull off risky heists, take part in extreme stunt races, compete in unique adversarial modes and meet other players in various social spaces,",
    img: gta,
  },
]);
</script>
<style>
.carousel .carousel__viewport .carousel__track {
}
.button_pag .carousel__pagination-item .carousel__pagination-button::after {
  background: black;
  border-radius: 999px;
  height: 12px;
  border: 1px solid;
}
.button_pag
  .carousel__pagination-item
  .carousel__pagination-button--active::after {
  background: white;
}
.carousel_main .carousel__viewport {
  max-height: 320px;
  border-radius: 30px;
}
.carousel_main .carousel__viewport .carousel__track .carousel__slide {
  height: 320px;
}
</style>
