<template>
  <header class="header">
    <div class="header__wrapper container">
      <button @click="setLocale('en')" :class="isActive('en')">English</button>
      <button @click="setLocale('ua')" :class="isActive('ua')">Українська</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { setLocale, locale } = useLocale();

const isActive = (lang: string) => (locale.value === lang ? 'active' : '');
</script>

<style scoped lang="scss">
.header {
  background-color: #333;

  &__wrapper {
    display: flex;
    justify-content: end;
    gap: 20px;
    padding: 8px 16px;
  }
}

button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.active {
  border-bottom: 2px solid white;
}
</style>
