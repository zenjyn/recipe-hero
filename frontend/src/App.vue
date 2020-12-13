<template>
  <div id="the-app">
    <AppHeader />
    <main>
      <IngredientSearch
        :availableIngredients="availableIngredients"
        :selectedIngredients="selectedIngredients"
        @remove-ingredient="removeIngredient"
        @add-ingredient="addIngredient"
      />
      <ul
        class="recipes"
        v-if="matchingRecipes.length"
      >
        <li v-for="recipe in matchingRecipes" :key="recipe.name">
          <RecipeCard :recipe="recipe" />
        </li>
      </ul>
      <div v-else>
        <p>Please select the ingredients you have available to see the recipes you can make!</p>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import IngredientSearch from '@/components/IngredientSearch.vue';
import RecipeCard from '@/components/RecipeCard.vue';

import { uniq, difference } from 'lodash/fp';

export default {
  name: 'App',
  components: {
    AppHeader,
    IngredientSearch,
    RecipeCard,
  },
  data() {
    return {
      selectedIngredients: [],
      recipes: [],
    };
  },
  mounted() {
    fetch('http://localhost:8091/recipes')
      .then((response) => response.json())
      .then(({ recipes }) => {
        this.recipes = recipes;
      });
  },
  computed: {
    availableIngredients() {
      return difference(this.ingredients, this.selectedIngredients);
    },
    matchingRecipes() {
      return this.recipes
        .filter((recipe) => recipe.ingredients
          .every((recipeIngredient) => this.selectedIngredients
            .includes(recipeIngredient)));
    },
    ingredients() {
      const allIngredients = this.recipes.flatMap((recipe) => recipe.ingredients);
      return uniq(allIngredients);
    },
  },
  methods: {
    addIngredient(ingredient) {
      this.selectedIngredients = [
        ...this.selectedIngredients,
        ingredient,
      ];
    },
    removeIngredient(ingredient) {
      this.selectedIngredients = this.selectedIngredients
        .filter((selectedIngredient) => selectedIngredient !== ingredient);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_reset.scss";
@import "@/styles/_sizes.scss";

body {
  display: flex;
  justify-content: center;
}

#the-app {
  width: 800px;
  > main {
    margin-bottom: $xxxl;
  }
}
</style>
