<template>
  <div v-if="isLoading" class="min-h-screen">
    <loader />
  </div>
  <div v-else class="flex mb-10 mt-10">
    <img class="object-cover" :src="get_id.thumbnail" alt="" />
    <div class="w-full flex flex-col gap-[10px] bg-[#0E54715E] py-5">
      <h1 class="text-center text-red-500 font-bold text-lg pb-5">
        {{ get_id.title }}
      </h1>
      <div class="grid grid-cols-2 gap-y-3 pl-5 pb-4">
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Data realize</li>
          <li class="text-white text-sm">
            {{ get_id.release_date }}
          </li>
        </ul>
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Genre</li>
          <li class="text-white text-sm">{{ get_id.genre }}</li>
        </ul>
        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Developer</li>
          <li class="text-white text-sm">{{ get_id.developer }}</li>
        </ul>

        <ul class="flex flex-col">
          <li class="text-[dimgrey] text-lg">Platform</li>
          <li class="text-white text-sm">{{ get_id.platform }}</li>
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
                  {{ get_id.minimum_system_requirements?.os || "-" }}
                </span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Processor:</span
                >
                <span class="text-sm">{{
                  get_id.minimum_system_requirements?.processor || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Memory:</span
                >
                <span class="text-sm">{{
                  getHeroId.get_id.minimum_system_requirements?.memory || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Graphics:</span
                >
                <span class="text-sm">{{
                  get_id.minimum_system_requirements?.graphics || "-"
                }}</span>
              </div>
            </li>
            <li>
              <div class="flex flex-col justify-between">
                <span class="font-semibold text-[dimgrey] text-[17px]"
                  >Storage:</span
                >
                <span class="text-sm">{{
                  getHeroId.get_id.minimum_system_requirements?.storage || "-"
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#0E54715E] text-white p-8 rounded-3xl mb-10">
    {{ getHeroId.get_id.description }}
  </div>
  <div class="flex gap-7">
    <div
      class=""
      v-for="{ image, id } in getHeroId.get_id.screenshots"
      :key="id"
    >
      <img
        @click="showLightbox(id)"
        class="w-full h-full rounded-3xl"
        :src="image"
        alt=""
      />
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="images"
      :index="currentIndex"
      @hide="handleHide"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useGetIdHeroes } from "@/hooks/GetHeroes";
import loader from "@/components/UI/Loader.vue";
import { storeToRefs } from "pinia";
import VueEasyLightbox from "vue-easy-lightbox";
const route = useRoute();

const getHeroId = useGetIdHeroes();
const { get_id, isLoading } = storeToRefs(getHeroId);

const visible = ref(false);
const images = ref({});
const currentIndex = ref(0);
const showLightbox = (id) => {
  images.value = get_id.value.screenshots.map((screenshot) => screenshot.image);

  currentIndex.value = get_id.value.screenshots.findIndex(
    (screenshot) => screenshot.id === id
  );
  visible.value = true;
};

const handleHide = () => {
  visible.value = false;
};
onMounted(() => {
  const id = route.params.id;

  if (typeof id === "number") {
    getHeroId.GetId(id);
  }
});
</script>
