<script lang="ts">
	import Cart from './components/Cart.svelte';
	import Menu from './components/Menu.svelte'
	import type { Candy } from './types/Candy';
	import { ShoppingCart } from './types/ShoppingCart'
	let cart = new ShoppingCart<Candy>();

	const addCartItem = (item: Candy) => {
		cart = cart.addItem(item);
	}
  </script>
  
  <main>
	<h1>Tienda de dulces!</h1>
  
	<Menu addCartItem={addCartItem}/>
	<Cart items={cart.groupedItems()} amount={cart.numberOfItems()} total={cart.total()} />
  </main>
  
  <style>
	:root {
	  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	main {
	  text-align: center;
	  padding: 1em;
	  margin: 0 auto;
	}
	h1 {
	  color: var(--primary-color);
	  text-transform: uppercase;
	  font-size: 4rem;
	  font-weight: 100;
	  line-height: 1.1;
	  margin: 2rem 0;
	  max-width: 14rem;
	}
	@media (min-width: 480px) {
	  h1 {
		max-width: none;
	  }
	}
  </style>