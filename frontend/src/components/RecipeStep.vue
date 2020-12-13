<template>
  <div class="recipe-step">
    <p>{{ description }}</p>
    <img :src="`/images/${imageUrl}`" :alt="`Step ${stepNumber}`" />
  </div>
</template>

<script>
export default {
  name: 'RecipeStep',
  props: {
    description: String,
    imageUrl: String,
    stepNumber: Number,
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";

.recipe-step {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  > img {
    width: 50%;
  }
  > p {
    width: 50%;
    padding-right: $xl;
  }
}
</style>
