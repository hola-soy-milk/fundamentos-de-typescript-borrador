<!-- 👇 Componente para renderizar el lado de un dado -->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ faceValue: number }>()
</script>

<template>
  <div class="rim">
      <Face :value="faceValue" />
    </div>
</template>

<style scoped>
a {
  color: #42b983;
}

.rim {
  padding: 0.75em 2em;
  background-color: #ffffff;
  border-color: #000;
  border-radius: 1em;
  border-style: solid;
  }

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
