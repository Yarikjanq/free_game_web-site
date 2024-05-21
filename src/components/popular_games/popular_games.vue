<template>
  <div v-if="isLoading" class="min-h-full">
    <Loader />
  </div>
  <div v-else class="mt-10">
    <div class="flex items-center bg-[#0E54715E] rounded-3xl">
      <h1 class="max-w-[300px] w-full text-center text-xl font-black">
        POPULAR
      </h1>

      <img
        class="max-h-[350px] w-full rounded-3xl"
        :src="popular_img"
        alt="popular_img"
      />
    </div>
    <div class="flex flex-wrap">
      <Allgames :game_mod="paginatedData" />
    </div>
    <div class="flex justify-center mt-4">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GetPopular } from "@/hooks/GetPopular";
import { GetInfo } from "@/hooks/GetInfo";
import popular_img from "@/assets/images/popular.jpg";
import Loader from "@/components/UI/Loader.vue";
import Allgames from "@/components/games/Allgames.vue";
import { computed, ref } from "vue";
const { get_popular, isLoading } = GetPopular();
const currentPage = ref(1);
const itemsPerPage = 10;

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return get_popular.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(get_popular.value.length / itemsPerPage);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>
