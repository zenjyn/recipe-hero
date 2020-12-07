<template>
  <li class="recipe-ingredient">
    <span>{{ingredient}}</span>
    <FontAwesomeIcon
      class="icon"
      icon="minus-circle"
      @click="remove"
    />
  </li>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'RecipeIngredient',
  props: {
    ingredient: String,
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    remove() {
      this.$emit('remove', this.ingredient);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.recipe-ingredient {
  border-radius: $border-radius;
  padding: $small 0;
  display: flex;
  justify-content: space-between;
  .icon {
    color: $grey-5;
    cursor: pointer;
  }
}
</style>
