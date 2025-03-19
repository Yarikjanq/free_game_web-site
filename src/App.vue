<template>
  <div>
    <Navbar />

    <router-view :key="$route.fullPath"></router-view>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/UI/Navbar.vue";
import Footer from "@/components/UI/Footer.vue";
</script>
<style scoped></style>
