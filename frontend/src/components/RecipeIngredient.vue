<template>
  <span>{{ ingredient }}</span>
  <FontAwesomeIcon @click.prevent="remove" icon="minus-circle" class="icon" />
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
      this.$emit('remove-ingredient', this.ingredient);
    },
  },
};
</script>

<style lang="scss">
</style>
