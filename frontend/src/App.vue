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
      <ul class="recipes">
        <li>
          <div class="recipe">
            <h2>Framed Egg</h2>
            <div class="recipe-description">
              <img src="http://images.ctfassets.net/lzukox2jf57a/2dNsFfLGBObs34qjRcT4z1/5d5bb8d73feb03fa1b2b950d891bcde1/egg-in-frame-web.jpg?fm=jpg&fl=progressive&q=90" alt="Step 1" />
              <p>
                Egg in frame or toad in the hole—whatever you choose to call it,
                this recipe is a super fun way to spruce up the classic eggs and
                toast breakfast. Leave the yolks slightly runny so you can dip those
                crusty cutouts and sop up all the golden goodness on your plate!
              </p>
            </div>
            <ul class="steps">
              <li>1</li>
              <li class="active">2</li>
              <li>3</li>
            </ul>
            <div class="step">
              <p>
                Heat a large nonstick skillet over medium-low heat. Lightly coat with olive oil.
              </p>
              <img src="https://youngwomenshealth.org/wp-content/uploads/2015/03/cooking.jpg" alt="Step 1" />
            </div>
            <div class="commands">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import IngredientSearch from '@/components/IngredientSearch.vue';

import { difference } from 'lodash/fp';

export default {
  name: 'App',
  components: {
    AppHeader,
    IngredientSearch,
  },
  data() {
    return {
      ingredients: ['Bread', 'Eggs'],
      selectedIngredients: [],
    };
  },
  computed: {
    availableIngredients() {
      return difference(this.ingredients, this.selectedIngredients);
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
@import "@/styles/_typography.scss";
@import "@/styles/_sizes.scss";
@import "@/styles/_colors.scss";

body {
  display: flex;
  justify-content: center;
}

#the-app {
  width: 600px;
  header, main {
    width: 100%;
  }
  main {
    margin-bottom: $xxxl;
  }
  img {
    border-radius: $border-radius;
  }
  h2 {
    @include heading-font-2;
  }
  .steps {
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
    margin: $baseline 0;
    > li {
      padding: $small;
      &.active {
        background-color: $primary-color-5;
        color: $white;
        font-weight: 700;
        border-radius: $border-radius;
      }
    }
  }
  .recipe {
    padding: $xl;
    box-shadow: 0 2px 2px $grey-7;
    .recipe-description {
      display: flex;
      justify-content: space-between;
      > p {
        width: 50%;
        padding: 0 $baseline;
      }
      > img {
        width: 50%;
      }
    }
    .step {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      > img {
        width: 50%;
      }
      > p {
        width: 50%;
      }
    }
    .commands {
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
  }
}
</style>
