/*
 * 👇 Pruebas del ShoppingCart
 */

import CartItemType from '../CartItemType';
import { ShoppingCart } from '../ShoppingCart'

class TestCandy extends CartItemType {
    priceCents() {
        return 999;
    }
    name() {
        return "TestCandy";
    }
}

/*
 * 🛎 Probar un ShoppingCart nuevo y vacío
 */

test("New cart has no items and 0 total", () => {
  /*
  * 🛎 ShoppingCart ahora es genérico
  */

  const cart = new ShoppingCart<TestCandy>();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

/*
 * 🛎 Probar agregar un item a un ShoppingCart
 */

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart<TestCandy>();
  const bigCandy = new TestCandy()
  const updatedCart = cart.addItem(bigCandy);
  expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(CartItemType.name);
  expect(updatedCart.items).toEqual([bigCandy]);
});

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart<TestCandy>();
  cart.addItem({
    priceCents: () => 100,
    name: () => "TestCandy candy"
  });
  expect(cart.total()).toBe(100);
});
