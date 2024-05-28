<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Выберите один из вариантов</option>
      <option>А</option>
      <option>Б</option>
      <option>В</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGetGenre } from "@/hooks/GetGenre";
import { useRoute } from "vue-router";
const route = useRoute();
const { genre_data, isLoading, GetGenre } = useGetGenre();

onMounted(() => {
  if (route.params.genre) {
    console.log(route.params.genre);

    GetGenre(route.params.genre);
  }
});

const selected = ref("");
</script>
