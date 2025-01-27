<template>
  <div class="review">
    <div class="review__info-container">
      <div class="review__title">
        <img :src="icon" />
        <span>{{ title }}</span>
      </div>

      <div class="review__rating">
        <div class="review__rating_value">
          {{ roundedRating }}
        </div>

        <RatingStars :rating="roundedRating" />

        <span class="review__rating_count"
          >{{ reviewsCount }} {{ $t('labels.reviews') }}</span
        >
      </div>
    </div>

    <div class="buttons">
      <Button
        @click="redirectToGoogle"
        :variant="'secondary'"
        :class="'secondary'"
        >{{ $t('buttons.view') }}</Button
      >
      <Button
        @click="openModal = true"
        :variant="'primary'"
        :class="'primary'"
        >{{ $t('buttons.write') }}</Button
      >
    </div>
  </div>

  <ModalWindow
    v-if="openModal"
    @close="openModal = false"
    :rating="rating"
    :reviewsCount="reviewsCount"
  />
</template>

<script setup lang="ts">
import { toRefs, ref, computed } from 'vue';
import Button from '@/components/Button.vue';
import ModalWindow from '@/components/modals/ModalWindow.vue';
import RatingStars from '@/components/RatingStars.vue';

interface Props {
  rating: number;
  reviewsCount: number;
  icon: string;
  title: string;
}

const props = defineProps<Props>();
const { icon, title, rating, reviewsCount } = toRefs(props);

const openModal = ref(false);

const roundedRating = computed(() => Math.round(rating.value * 10) / 10);

const redirectToGoogle = () => {
  window.open(
    'https://www.google.com.ua/search?q=Grade+Education+Centre#lrd=0x40d4ce5eb49ca6cb:0x695a1601338efd48,1,,,,',
    '_blank'
  );
};
</script>

<style scoped lang="scss">
.review {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;

  @include mixins.onTablet {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__info-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include mixins.onTablet {
      gap: 10px;
    }

    @include mixins.onLaptop {
      flex-direction: row;
      gap: 50px;
    }
  }

  &__title {
    display: flex;
    gap: 20px;
    align-items: center;

    @include mixins.fontRules(18px, 500);

    @include mixins.onLaptop {
      @include mixins.fontRules(20px, 500);
    }
  }

  &__rating {
    display: flex;
    flex-wrap: wrap;

    @include mixins.onTablet {
      align-items: center;
      gap: 20px;
    }

    &_value {
      margin-right: 20px;
      @include mixins.fontRules(24px, 500);

      @include mixins.onTablet {
        margin-right: 0;
      }

      @include mixins.onLaptop {
        @include mixins.fontRules(36px, 500);
      }
    }

    &_stars {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &_count {
      margin-top: 6px;
      flex: 1 1 100%;
      @include mixins.fontRules(14px, 400, #798595);

      @include mixins.onTablet {
        flex: 1;
        margin-top: 0;
      }
    }
  }
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 268px;

  @include mixins.onTablet {
    flex-direction: row;
    max-width: 100%;
  }
}

.primary {
  @include mixins.onTablet {
    min-width: 109px;
  }
}

.secondary {
  @include mixins.onTablet {
    min-width: 132px;
  }
}
</style>
