<script lang="ts">
/*
 * 👇 Componente para los items en el carrito.
 */
  import type { GroupedCartItem } from "../types/ShoppingCart";

  export let items: GroupedCartItem[];
  export let amount: number;
  export let total: number;
</script>

{#if items.length}
  <table>
    <tr>
      <th>Name</th>
      <th>Amount</th>
      <th>Price</th>
    </tr>
    {#each items as row}
      <tr>
        <td>{row.name}</td>
        <td>{row.quantity}</td>
        <td class="price">${row.priceCents / 100.0}</td>
      </tr>
    {/each}
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>{amount}</strong></td>
      <td class="price"><strong>${total / 100.0}</strong></td>
    </tr>
  </table>
{/if}

<!-- 🛎 Estilos para nuestro componente -->
  
<style>
    table {
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    th {
        background-color: black;
        color: white;
    }
    td {
        text-align: left;
    }
    td.price {
        text-align: right;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 1em;
    }
</style>
