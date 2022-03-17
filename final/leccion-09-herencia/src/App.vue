<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import DieWrapper from './types/Dice'
import Die from './components/Die.vue'
const roll = () => Array.from({length: 4}, () => new DieWrapper(8));
const dice = ref(roll());
</script>

<template>
  <h1 class="top">¡Juguemos al 21!</h1>
  <div class="grid center">
    <Die v-for="die in dice" :faceValue="die.value()"/>
  </div>
  <h1>
    {{dice.reduce((sum, die) => sum + die.value(), 0)}}
    <span v-if="dice.reduce((sum, die) => sum + die.value(), 0) < 21">🎉</span>
    <span v-else>😥</span>
  </h1>
  <button type="button" @click="dice = roll()">Tirar los dados</button>
</template>

<style>
body, html {
  height: 100%;
  width: 100%;
  background-color: #f0eeef;
  margin: 0;
  }
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #025b0e;
}
.top {
  margin-top: 60px;
  }
button {
  background-color: #fd7c84;
  color: #f0eeef;
  border: none;
  font-size: 2em;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  margin: 0;
  }
button:hover {
  filter: brightness(115%);
  }
button:active {
  filter: brightness(85%);
  }
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 4em;
  }
}

.center {
  justify-items: center;
}
</style>
