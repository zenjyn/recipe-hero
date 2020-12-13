<template>
  <div class="recipe-card">
    <h2>{{ recipe.name }}</h2>
    <div class="recipe-description">
      <img :src="`images/${recipe.imageUrl}`" />
      <p>{{ recipe.description }}</p>
    </div>
    <RecipeStepIndicator
      :currentStep="currentStepNumber"
      :stepCount="recipe.steps.length"
      @set-step-number="setStepNumber"
    />
    <RecipeStep
      :description="currentStep.description"
      :imageUrl="currentStep.imageUrl"
      :stepNumber="currentStep.stepNumber"
    />
    <RecipeCommands
      :hasPrevious="hasPrevious"
      :hasNext="hasNext"
      @previous="previous"
      @next="next"
    />
  </div>
</template>

<script>
import RecipeCommands from '@/components/RecipeCommands.vue';
import RecipeStep from '@/components/RecipeStep.vue';
import RecipeStepIndicator from '@/components/RecipeStepIndicator.vue';

export default {
  name: 'RecipeCard',
  components: {
    RecipeCommands,
    RecipeStep,
    RecipeStepIndicator,
  },
  data() {
    return {
      currentStepNumber: 1,
    };
  },
  props: {
    recipe: Object,
  },
  computed: {
    currentStep() {
      return this.recipe.steps.find((step) => step.stepNumber === this.currentStepNumber);
    },
    hasPrevious() {
      return this.currentStepNumber > 1;
    },
    hasNext() {
      return this.currentStepNumber < this.recipe.steps.length;
    },
  },
  methods: {
    previous() {
      this.currentStepNumber -= 1;
    },
    next() {
      this.currentStepNumber += 1;
    },
    setStepNumber(stepNumber) {
      this.currentStepNumber = stepNumber;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.recipe-card {
  padding: $xl;
  box-shadow: 0 2px 2px $grey-7;
  margin-bottom: $xl;
  .recipe-description {
    display: flex;
    justify-content: space-between;
    > p {
      width: 50%;
      padding-left: $xl;
    }
    > img {
      width: 50%;
    }
  }
}
</style>
