import { defineStore } from 'pinia';
import type { ReviewData } from '@/types/models';
import { ref } from 'vue';

export const useRatingStore = defineStore('ratingStore', () => {
  const reviewGoogleData = ref<ReviewData | null>(null);

  const setReviewGoogleData = (data: ReviewData) => {
    reviewGoogleData.value = data;
  };

  return { reviewGoogleData, setReviewGoogleData };
});
