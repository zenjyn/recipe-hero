<template>
  <div class="command-bar">
    <button
      @click="$emit('previous')"
      v-if="hasPrevious"
    >Previous</button>
    <!-- Placeholder to keep flex style -->
    <span v-else></span>

    <button
      @click="$emit('next')"
      v-if="hasNext"
    >Next</button>
    <!-- Placeholder to keep flex style -->
    <span v-else></span>
  </div>
</template>

<script>
export default {
  name: 'CommandBar',
  props: {
    hasPrevious: Boolean,
    hasNext: Boolean,
  },
};
</script>

<style lang="scss">
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

.command-bar {
  display: flex;
  justify-content: space-between;
  padding: $baseline 0;
  button {
    width: 100px;
    border: none;
    padding: $baseline;
    background-color: $grey-8;
    color: $primary-color-3;
    cursor: pointer;
    box-shadow: 0 2px 2px $grey-9;
    border-radius: $border-radius;
  }
}
</style>
