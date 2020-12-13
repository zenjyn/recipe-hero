<template>
  <ul class="recipe-step-indicator">
    <li
      v-for="step in steps"
      :key="step.count"
      :class="{ active: step.isActive }"
      @click="$emit('set-step-number', step.count)"
    >{{ step.count }}</li>
  </ul>
</template>

<script>
import { times } from 'lodash/fp';

export default {
  name: 'RecipeStepIndicator',
  props: {
    currentStep: Number,
    stepCount: Number,
  },
  computed: {
    steps() {
      return times((index) => {
        const count = index + 1;
        return count === this.currentStep
          ? { count, isActive: true }
          : { count };
      })(this.stepCount);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.recipe-step-indicator {
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
  margin: $baseline 0;
  > li {
    padding: $small;
    &.active {
      background-color: $primary-color-5;
      color: $white;
      font-weight: 700;
      border-radius: $border-radius;
    }
  }
}
</style>
