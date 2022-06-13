<!-- 👇 Componente principal de nuestra aplicación Vue.
      Usa una serie de tipos `Dice` para tirar los dados y mirar el puntuaje -->
<script setup lang="ts">
import { ref } from 'vue'
import Dice from './types/Dice'
// ❗️ ¡Ojo! Ahora el crear nuevas instancias de `Dice` tiene un parametro
const roll = () => Array.from({length: 4}, () => new Dice(6));
// 🛎 Con `ref`, Vue nos permite controlar un valor. En este caso, es un arreglo de 4 dados
const dice = ref(roll());
</script>

<template>
<div id="game">
  <h1 class="top">¡Juguemos al 21!</h1>
  <div class="grid center">
    <!-- 🛎 Renderizar los dados con el componente `Die` -->
    <Die :key="die" v-for="die in dice" :faceValue="die.value()"/>
  </div>
  <h1>
    <!-- 🛎 Usar los dados para mostrar el puntuaje -->
    {{dice.reduce((sum, die) => sum + die.value(), 0)}}
    <!-- 🛎 Usar el puntuaje para mostrar si uno ganó o perdió -->
    <span v-if="dice.reduce((sum, die) => sum + die.value(), 0) < 21">🎉</span>
    <span v-else>😥</span>
  </h1>
  <button type="button" @click="dice = roll()">Tirar los dados</button>
  </div>
</template>

<style>
body, html, #app {
  height: 100%;
  width: 100%;
  background-color: #f0eeef;
  margin: 0;
  }
#game {
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
