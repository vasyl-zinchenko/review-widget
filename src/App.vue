<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import ReviewWidget from '@/components/ReviewWidget.vue';
import Header from '@/components/layouts/Header.vue';
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
