<template>
  <div class="recipe-step">
    <p>{{ step.description }}</p>
    <img :src="image.url" :alt="image.alt">
  </div>
</template>

<script>
export default {
  name: 'RecipeStep',
  props: {
    step: Object,
  },
  computed: {
    image() {
      return {
        url: `images/${this.step.imageUrl}`,
        alt: `Step ${this.step.stepNumber}`,
      };
    },
  },
};
</script>

<style lang="scss">
</style>
