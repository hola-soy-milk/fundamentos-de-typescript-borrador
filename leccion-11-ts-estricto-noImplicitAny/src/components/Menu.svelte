<script lang="ts">
  import {availableCandies} from '../types/Candy';
  export let addCartItem;
</script>

<div class="flex">
{#each availableCandies as marshmallow}
    <button on:click={(_e) => addCartItem(marshmallow)}>
        {marshmallow.name()}<br>${marshmallow.priceCents() / 100.0}
    </button>
{/each}
</div>

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