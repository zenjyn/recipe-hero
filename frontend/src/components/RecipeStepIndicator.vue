<template>
  <ul class="recipe-step-indicator">
    <li
      v-for="step in numberOfSteps"
      :key="step"
      :class="{ active: step === activeStep }"
    >{{ step }}</li>
  </ul>
</template>

<script>
export default {
  name: 'RecipeStepIndicator',
  props: {
    numberOfSteps: Number,
    activeStep: Number,
  },
};
</script>

<style lang="scss">
</style>
