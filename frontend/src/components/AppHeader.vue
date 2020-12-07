<template>
  <header class="app-header">
    <h1>Recipe Hero</h1>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
};
</script>

<style lang="scss">
@import "@/styles/_typography.scss";
@import "@/styles/_sizes.scss";

.app-header {
  padding: $xl 0;
  h1 {
    @include heading-font-1;
    text-align: center;
  }
}
</style>
