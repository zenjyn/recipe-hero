<template>
  <div class="recipe-card">
    <h2>{{ recipe.name }}</h2>
    <div class="recipe-description">
      <img :src="image.url">
      <p>{{ description }}</p>
    </div>
    <RecipeStepIndicator :numberOfSteps="numberOfSteps" :activeStep="activeStep" />
    <RecipeStep :step="currentStep" />
    <div class="command-bar">
      <button v-if="activeStep > 1" @click="previousStep">Previous</button>
      <span v-else></span>
      <button v-if="activeStep < numberOfSteps" @click="nextStep">Next</button>
    </div>
  </div>
</template>

<script>
import RecipeStepIndicator from '@/components/RecipeStepIndicator.vue';
import RecipeStep from '@/components/RecipeStep.vue';

export default {
  name: 'RecipeCard',
  components: {
    RecipeStepIndicator,
    RecipeStep,
  },
  props: {
    recipe: Object,
  },
  data() {
    return {
      activeStep: 1,
    };
  },
  computed: {
    image() {
      return {
        url: `images/${this.recipe.imageUrl}`,
      };
    },
    numberOfSteps() {
      return this.recipe.steps.length;
    },
    currentStep() {
      return this.recipe.steps[this.activeStep - 1];
    },
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.numberOfSteps) {
        this.activeStep += 1;
      }
    },
    previousStep() {
      if (this.activeStep > 1) {
        this.activeStep -= 1;
      }
    },
  },
};
</script>

<style lang="scss">
</style>
