<template>
  <div>
    <Navbar />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/UI/Navbar.vue";
import Footer from "./components/UI/Footer.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isLoading = computed(() => {
  return store.getters["isLoading"];
});
</script>
<style scoped></style>
