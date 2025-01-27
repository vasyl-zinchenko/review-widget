import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRatingStore = defineStore('ratingStore', () => {
  interface reviewData {
    id: string;
    createdAt: string;
    rating: number;
    reviewsCount: number;
  }

  const reviewGoogleData = ref<reviewData | null>(null);

  const setReviewGoogleData = (data: reviewData) => {
    reviewGoogleData.value = data;
  };

  return { reviewGoogleData, setReviewGoogleData };
});
