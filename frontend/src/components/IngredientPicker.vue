<template>
  <form
    class="ingredient-picker"
    @submit.prevent="add"
  >
    <select
      placeholder="Add an ingredient"
      v-model="selectedIngredient"
    >
      <option disabled>Pick an ingredient</option>
      <option
        v-for="ingredient in ingredients"
        :key="ingredient"
        :value="ingredient"
        >{{ ingredient }}</option>
    </select>
    <button><FontAwesomeIcon icon="plus" /></button>
  </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'IngredientPicker',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      selectedIngredient: this.ingredients[0],
    };
  },
  props: {
    ingredients: Array,
  },
  methods: {
    add() {
      this.$emit('add', this.selectedIngredient);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.ingredient-picker {
  border-radius: $border-radius;
  border: 1px solid $grey-8;
  select, button {
    border: none;
    height: 100%;
  }
  select {
    padding: $small;
    margin-bottom: $baseline;
    width: 100%;
    width: 250px;
  }
  button {
    cursor: pointer;
    background-color: $primary-color-5;
    color: $white;
    padding: $baseline;
    border-radius-top-right: $border-radius;
    border-radius-bottom-right: $border-radius;
  }
}
</style>
