<template>
  <div
    class=""
    v-for="{
      title,
      id,
      thumbnail,
      short_description,
      platform,
      genre,
    } in game_mod"
    :key="id"
  >
    <div
      @click="showId(id, title)"
      class="bg-[cadetblue] max-w-[271px] cursor-pointer"
    >
      <div>
        <img :src="thumbnail" alt="" />
      </div>
      <div class="flex flex-col px-5 py-3 gap-4">
        <div class="flex justify-between items-center gap-[10px]">
          <span
            class="text-xl font-extrabold text-black whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {{ title }}</span
          >
          <span class="bg-green-600 rounded-[2px] px-[4px] font-semibold"
            >FREE</span
          >
        </div>
        <span
          class="whitespace-nowrap overflow-hidden text-ellipsis text-black font-normal"
        >
          {{ short_description }}</span
        >
        <div class="flex justify-between items-center">
          <div
            :class="isSavedGames(id) ? 'border-red-700' : 'border-green-600'"
            class="cursor-pointer flex solid border-[3px]"
          >
            <div
              @click.stop="show_id(id)"
              :class="
                isSavedGames(id)
                  ? 'hover-svg-bg hover-bg__active text-red-700'
                  : 'text-green-600'
              "
              class="hover-svg font-extrabold"
            >
              {{ isSavedGames(id) ? "DELETE" : "ADD" }}
            </div>
          </div>

          <div
            @click.stop
            class="flex justify-end items-center gap-3 cursor-default"
          >
            <span class="p-[3px] rounded bg-red-600" v-if="genre">{{
              genre
            }}</span>
            <span
              class="flex gap-2 items-center"
              v-if="Array.isArray(image_platform(platform))"
            >
              <span
                v-for="(image, index) in image_platform(platform)"
                :key="index"
                class="max-w-[20px]"
              >
                <img :src="image" alt="" :title="title_images(image)" />
              </span>
            </span>
            <span v-else class="max-w-[20px]">
              <img
                :src="image_platform(platform)"
                alt=""
                :title="getImages(platform)"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import windows from "@/assets/images/windows-icon.webp";
import chrome from "@/assets/images/web.svg";
import { computed } from "vue";
import { useSaveGames } from "@/store/saveGames";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import type { Game } from "@/types/Game";
const router = useRouter();

const saveAllGames = useSaveGames();
const { savedGames } = storeToRefs(saveAllGames);

const asd = computed(() => savedGames.value);
console.log(asd);

const props = defineProps<{
  game_mod: Game[];
}>();

const image_platform = (platform: any) => {
  if (platform === "PC (Windows)") {
    return windows;
  } else if (platform === "Web Browser") {
    return chrome;
  } else if (platform === "PC (Windows), Web Browser") {
    return [windows, chrome];
  }
};
const title_images = (image: any) => {
  if (image === windows) {
    return "PC (Windows)";
  } else if (image === chrome) {
    return "Web Browser";
  }
};
const getImages = (image: any) => {
  if (image === "PC (Windows)") {
    return "PC (Windows)";
  } else if (image === "Web Browser") {
    return "Web Browser";
  }
};

const isSavedGames = (game) => {
  return savedGames.value.some((games) => games.id === game);
};

const showId = (id: number, title: string) => {
  router.push(`/${title}/${id}`);
};

const show_id = (id: number) => {
  const qwe = props.game_mod?.find((post) => post.id === id);
  saveAllGames.toggleGames(qwe);
};
</script>
<style>
/* .hover-svg:hover {
  fill: red;
} */
.saved-card {
  background-color: cadetblue;
}
.hover-svg-bg {
  fill: red;
}
/* .hover-bg__active:hover {
  fill: black;
} */
</style>
