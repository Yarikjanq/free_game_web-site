<template>
  <div v-if="loader_id" class="min-h-screen">
    <loader />
  </div>
  <div v-else class="flex mb-10 mt-10">
    <img class="object-cover" :src="game_id.thumbnail" alt="" />
    <div class="w-full flex flex-col gap-[10px] bg-[#0E54715E] py-5">
      <h1 class="text-center text-red-500 font-bold text-lg pb-5">
        {{ game_id.title }}
      </h1>
      <div class="grid grid-cols-2 gap-y-3 pl-5 pb-4">
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Data realize</li>
          <li class="text-white text-sm">{{ game_id.release_date }}</li>
        </ul>
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Genre</li>
          <li class="text-white text-sm">{{ game_id.genre }}</li>
        </ul>
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Developer</li>
          <li class="text-white text-sm">{{ game_id.developer }}</li>
        </ul>

        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Platform</li>
          <li class="text-white text-sm">{{ game_id.platform }}</li>
        </ul>
      </div>

      <div class="pl-5">
        <h1 class="text-red-500 font-bold text-lg pb-5">System requirements</h1>
        <div class="flex justify-between">
          <ul class="w-full grid grid-cols-2 gap-y-3">
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >OS:</span
                >
                <span class="text-sm">
                  {{ game_id.minimum_system_requirements?.os || "-" }}
                </span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Processor:</span
                >
                <span class="text-sm">{{
                  game_id.minimum_system_requirements?.processor || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Memory:</span
                >
                <span class="text-sm">{{
                  game_id.minimum_system_requirements?.memory || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Graphics:</span
                >
                <span class="text-sm">{{
                  game_id.minimum_system_requirements?.graphics || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Storage:</span
                >
                <span class="text-sm">{{
                  game_id.minimum_system_requirements?.storage || "-"
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#0E54715E] text-white p-8 rounded-3xl mb-10">
    {{ game_id.description }}
  </div>
  <div class="flex gap-7">
    <div class="" v-for="{ image, id } in game_id.screenshots" :key="id">
      <img class="w-full h-full rounded-3xl" :src="image" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import loader from "@/components/UI/Loader.vue";
const route = useRoute();
const store = useStore();

const game_id = computed(() => {
  return store.getters["game_id"];
});
const loader_id = computed(() => {
  return store.getters["isLoading_id"];
});
console.log(game_id.value);

onMounted(() => {
  const id = route.params.id;
  store.dispatch("fetchGameById", id);
});
</script>
