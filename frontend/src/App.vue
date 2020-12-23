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
          <li
            v-for="ingredient in ingredients"
            class="recipe-ingredient"
            :key="ingredient"
          >
            <RecipeIngredient @remove-ingredient="removeIngredient" :ingredient="ingredient" />
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
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import RecipeIngredient from '@/components/RecipeIngredient.vue';
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  name: 'App',
  data() {
    return {
      recipes: [],
      ingredients: ['eggs', 'Bread', 'cheese', 'baCon ', 'KEROSINE'],
      error: null,
    };
  },
  components: {
    FontAwesomeIcon,
    RecipeIngredient,
    RecipeCard,
  },
  computed: {
    filteredRecipes() {
      return this.recipes;
    },
  },
  methods: {
    removeIngredient(ingredient) {
      this.ingredients = _.pull(this.ingredients, ingredient);
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
