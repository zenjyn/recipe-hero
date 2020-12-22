<template>
  <div id="the-app">
    <header class="app-header">
      <h1>Recipe Hero</h1>
    </header>
    <main>
      <section class="ingredient-search">
        <h2>Search Recipes By Ingredient</h2>
        <form class="ingredient-picker">
          <select placeholder="Add an ingredient">
            <option disabled="">Pick an ingredient</option>
          </select>
          <button>
            <FontAwesomeIcon icon="plus" class="icon" />
          </button>
        </form>
        <ul class="ingredients">
          <li class="recipe-ingredient">
            <span>Eggs</span>
            <FontAwesomeIcon icon="minus-circle" class="icon" />
          </li>
          <li class="recipe-ingredient">
            <span>Bread</span>
            <FontAwesomeIcon icon="minus-circle" class="icon" />
          </li>
          <li class="recipe-ingredient">
            <span>Cheese</span>
            <FontAwesomeIcon icon="minus-circle" class="icon" />
          </li>
          <li class="recipe-ingredient">
            <span>Bacon</span>
            <FontAwesomeIcon icon="minus-circle" class="icon" />
          </li>
        </ul>
      </section>
      <ul class="recipes">
        <li v-for="recipe in filteredRecipes" :key="recipe.name">
          <RecipeCard :recipe="recipe" />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'App',
  data() {
    return {
      recipes: [],
      error: null,
    };
  },
  components: {
    FontAwesomeIcon,
    RecipeCard,
  },
  computed: {
    filteredRecipes() {
      return this.recipes;
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
