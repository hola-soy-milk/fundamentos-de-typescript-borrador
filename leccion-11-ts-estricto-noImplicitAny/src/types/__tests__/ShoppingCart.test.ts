/*
 * 👇 Pruebas del ShoppingCart
 */

import ShoppingCart from '../ShoppingCart'

/*
 * 🛎 Probar un ShoppingCart nuevo y vacío
 */

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

/*
 * 🛎 Probar agregar un item a un ShoppingCart
 */

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const updatedCart = cart.addItem({data: "value"});
  expect(updatedCart.items).toEqual([{
    data: "value"
  }]);
});

/*
 * 🛎 Probar el precio total de un ShoppingCart
 */

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
  cart.addItem({
    priceCents: () => 100
  });
  expect(cart.total()).toBe(100);
});
