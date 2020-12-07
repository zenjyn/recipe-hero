<template>
  <section class="ingredient-search">
    <h2>Search Recipes By Ingredient</h2>
    <IngredientPicker
      :ingredients="availableIngredients"
      @add="addIngredient"
    />
    <ul class="ingredients">
      <RecipeIngredient
        v-for="ingredient in selectedIngredients"
        :key="ingredient"
        :ingredient="ingredient"
        @remove="removeIngredient"
      />
    </ul>
  </section>
</template>

<script>
import RecipeIngredient from '@/components/RecipeIngredient.vue';
import IngredientPicker from '@/components/IngredientPicker.vue';

export default {
  name: 'IngredientSearch',
  components: {
    RecipeIngredient,
    IngredientPicker,
  },
  props: {
    availableIngredients: Array,
    selectedIngredients: Array,
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
@import "@/styles/_sizes.scss";

.ingredient-search {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: $xl;
  .ingredients {
    width: 270px;
    list-style: disc inside;
  }
}
</style>
