<!-- 👇 Componente para renderizar el número de un dado -->
<script setup lang="ts">

defineProps<{ value: number }>()

</script>

<template>
  <span>{{ value }}</span>
</template>

<style scoped>
a {
  color: #42b983;
}
 
span {
  color: #000;
  margin: 0;
  font-size: 3em;
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
