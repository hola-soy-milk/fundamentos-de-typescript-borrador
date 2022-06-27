<script lang="ts">
/*
 * 👇 Componente para los dulces disponibles
 */

  import {availableCandies} from '../types/Candy';
// ❗️ A `addCartItem` le falta tipo. Démosles `any`.
  export let addCartItem;
</script>

<div class="flex">
<!-- 🛎 Realizar un bucle sobre los dulces disponibles y renderizar botones para ellos -->
{#each availableCandies as candy}
    <button on:click={(_e) => addCartItem(candy)}>
        {candy.name()}<br>${candy.priceCents() / 100.0}
    </button>
{/each}
</div>

<!-- 🛎 Estilos para nuestro componente -->
  
<style>
  .flex {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 75%;
    justify-content: space-between;
    justify-items: center;
    gap: 6px;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: var(--background-color);
    background-color: var(--primary-color);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }
  button:focus {
    border: 2px solid #ff3e00;
  }
  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>