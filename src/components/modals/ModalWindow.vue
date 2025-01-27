<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__content">
        <p class="modal__title">{{ $t('labels.newReview') }}</p>

        <RatingStars
          class="stars"
          :rating="newRating"
          @change="setRating"
          isChangeableRating
        />

        <form @submit.prevent="postReview">
          <div class="modal__field">
            <textarea
              v-model="description"
              id="description"
              class="modal__textarea"
              required
              :placeholder="$t('labels.shareYourImpressions')"
              rows="3"
            ></textarea>
          </div>

          <p class="error" v-if="error">
            {{ $t('labels.somethingWentWrong') }}
          </p>

          <div class="modal__actions">
            <Button @click="closeModal" :variant="'cancel'">
              {{ $t('buttons.cancel') }}
            </Button>

            <Button type="submit" :variant="'save'" :disabled="newRating === 0">
              {{ $t('buttons.publish') }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
import type { ReviewData } from '@/types/models';
import Button from '@/components/Button.vue';
import RatingStars from '@/components/RatingStars.vue';

import { useFetch } from '@/composables/useFetch';
import { useRatingStore } from '@/store/ratingStore';

interface Props {
  rating: number;
  reviewsCount: number;
}

const emits = defineEmits<{
  (e: 'close'): void;
}>();

const props = defineProps<Props>();
const { rating, reviewsCount } = toRefs(props);

const ratingStore = useRatingStore();
const { data, error, fetchData } = useFetch();

const description = ref('');
const newRating = ref(0);

const setRating = (value: number) => (newRating.value = value);

const closeModal = () => emits('close');

const postReview = async () => {
  const payload = {
    rating:
      (reviewsCount.value * rating.value + newRating.value) /
      (reviewsCount.value + 1),
    reviewsCount: reviewsCount.value + 1,
  };
  await fetchData(
    'https://6793d56b5eae7e5c4d900b67.mockapi.io/api/review/google/1',
    'PUT',
    payload
  );

  if (error.value) return;

  if (data.value) ratingStore.setReviewGoogleData(data.value as ReviewData);

  closeModal();
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(31, 41, 55, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: white;
    width: 100%;
    max-width: 640px;
    border-radius: 8px;
    padding: 24px;
    margin: 20px;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
  }

  &__field {
    margin-bottom: 16px;
  }

  &__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  &__textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 8px;
    resize: vertical;

    @include mixins.fontRules(14px, 500);
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
  }

  &__button {
    padding: 8px 16px;
    border-radius: 4px;

    &--cancel {
      background-color: #e5e7eb;
      color: #374151;
      border: none;
    }

    &--submit {
      background-color: #3b82f6;
      color: white;
      border: none;
    }
  }
}

.stars {
  cursor: pointer;
}

.error {
  color: red;
}
</style>
