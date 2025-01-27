<template>
  <button class="button" :class="variant"><slot /></button>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  variant: 'secondary' | 'primary' | 'save' | 'cancel';
}

const props = defineProps<Props>();
const { variant } = toRefs(props);
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: 150ms;
  border: 1px solid #c2dde5;

  @include mixins.fontRules(14px, 500);
}

.save {
  background: linear-gradient(90deg, #677ed1 0%, #1786ac 100%);
  color: white;
}

.cancel {
  background: linear-gradient(90deg, #cdced3 0%, #a5bbc3 100%);
}

.secondary {
  background: linear-gradient(#e6f7f5 100%, #f8fcfc 100%);
}

.primary {
  background: linear-gradient(90deg, #3cb9a0 0%, #1786ac 100%);
  color: white;
}

.button:not([disabled]):hover {
  background: linear-gradient(90deg, #36a8a0 0%, #36a8a0 100%);
  color: white;
}

button:disabled {
  background: gray;
  cursor: not-allowed;
}
</style>
