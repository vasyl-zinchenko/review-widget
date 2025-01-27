<template>
  <ReviewWidget
    v-if="ratingStore.reviewGoogleData"
    :rating="ratingStore.reviewGoogleData.rating"
    :reviewsCount="ratingStore.reviewGoogleData.reviewsCount"
    :icon="googleIcon"
    :title="$t('labels.ourCustomersReviewsOnGoogle')"
  >
  </ReviewWidget>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ReviewWidget from '@/components/ReviewWidget.vue';
import googleIcon from '@/assets/google.svg';
import { useFetch } from '@/composables/useFetch';
import { useRatingStore } from '@/store/ratingStore';
const ratingStore = useRatingStore();

const { data, fetchData } = useFetch();

const loadReviews = async () => {
  await fetchData(
    'https://6793d56b5eae7e5c4d900b67.mockapi.io/api/review/google'
  );
  if (data.value) {
    ratingStore.setReviewGoogleData(data.value[0]);
  }
};

onMounted(() => {
  loadReviews();
});
</script>

<style scoped></style>
