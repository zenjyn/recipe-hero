<template>
  <div id="the-app">
    <header class="app-header">
      <h1>Recipe Hero</h1>
    </header>
    <main>
      <IngredientSearch
        :unselectedIngredients="unselectedIngredients"
        :selectedIngredients="selectedIngredients"
        @add-ingredient="addIngredient"
        @remove-ingredient="removeIngredient"
      />
      <ul class="recipes">
        <li v-for="recipe in filteredRecipes" :key="recipe.name">
          <RecipeCard :recipe="recipe" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import _ from 'lodash';
import IngredientSearch from '@/components/IngredientSearch.vue';
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'App',
  data() {
    return {
      recipes: [],
      selectedIngredients: [],
      error: null,
    };
  },
  components: {
    IngredientSearch,
    RecipeCard,
  },
  computed: {
    ingredients() {
      return _.uniq(this.recipes.flatMap((recipe) => recipe.ingredients));
    },
    unselectedIngredients() {
      return _.difference(this.ingredients, this.selectedIngredients);
    },
    filteredRecipes() {
      return this.recipes;
    },
  },
  methods: {
    addIngredient(ingredient) {
      this.selectedIngredients.push(ingredient);
    },
    removeIngredient(ingredient) {
      this.selectedIngredients = this.selectedIngredients
        .filter((selectedIngredient) => selectedIngredient !== ingredient);
    },
  },
  created() {
    fetch('http://localhost:8091/recipes')
      .then((response) => response.json())
      .then((response) => {
        this.recipes = response.recipes;
      })
      .catch((error) => {
        this.error = error.message;
      });
  },
};
</script>

<style lang="scss">
</style>
