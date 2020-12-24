<template>
  <form
    @submit.prevent="addIngredient"
    class="ingredient-picker"
    v-if="showSelect"
  >
    <select v-model="selectedIngredient" placeholder="Add an ingredient">
      <option disabled selected="selected">Pick an ingredient</option>
      <option v-for="ingredient in ingredients"
        :key="ingredient"
        :value="ingredient">{{ ingredient }}</option>
    </select>
    <button>
      <FontAwesomeIcon icon="plus" class="icon" />
    </button>
  </form>
</template>

<script>
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'IngredientPicker',
  props: {
    ingredients: Array,
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      selectedIngredient: '',
    };
  },
  computed: {
    showSelect() {
      return !_.isEmpty(this.ingredients);
    },
  },
  methods: {
    addIngredient() {
      if (!_.isEmpty(this.selectedIngredient)) {
        this.$emit('add-ingredient', this.selectedIngredient);
        this.selectedIngredient = '';
      }
    },
  },
};
</script>

<style lang="scss">
.ingredient-picker {
  select {
    margin: 0;
  }
}
</style>
