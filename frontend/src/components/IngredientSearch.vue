<template>
  <section class="ingredient-search">
    <h2>Search Recipes By Ingredient</h2>
    <IngredientPicker
      :ingredients="unselectedIngredients"
      @add-ingredient="addIngredient" />
    <ul class="ingredients">
      <li
        v-for="ingredient in selectedIngredients"
        class="recipe-ingredient"
        :key="ingredient"
      >
        <RecipeIngredient @remove-ingredient="removeIngredient" :ingredient="ingredient" />
      </li>
    </ul>
  </section>
</template>

<script>
import IngredientPicker from '@/components/IngredientPicker.vue';
import RecipeIngredient from '@/components/RecipeIngredient.vue';

export default {
  name: 'App',
  props: {
    unselectedIngredients: Array,
    selectedIngredients: Array,
  },
  components: {
    IngredientPicker,
    RecipeIngredient,
  },
  methods: {
    addIngredient(ingredient) {
      this.$emit('add-ingredient', ingredient);
    },
    removeIngredient(ingredient) {
      this.$emit('remove-ingredient', ingredient);
    },
  },
};
</script>

<style lang="scss">
</style>
