<template>
  <div class="review__rating_stars">
    <img
      v-for="i in 5"
      @click="changeRating(i)"
      :key="i"
      :src="getStarType(i)"
      :alt="`Star ${i}`"
      class="review__star"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import filledStar from '@/assets/stars/filled-star.svg';
import emptyStar from '@/assets/stars/empty-star.svg';
import halfStar from '@/assets/stars/half-star.svg';

interface Props {
  rating: number;
  isChangeableRating?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  change: [value: number];
}>();

const { rating, isChangeableRating } = toRefs(props);

const getStarType = (starIndex: number): string => {
  if (rating.value >= starIndex) {
    return filledStar;
  } else if (rating.value > starIndex - 1) {
    return halfStar;
  } else {
    return emptyStar;
  }
};

const changeRating = (value) => {
  if (isChangeableRating.value) {
    emit('change', value);
  }
  return;
};
</script>
