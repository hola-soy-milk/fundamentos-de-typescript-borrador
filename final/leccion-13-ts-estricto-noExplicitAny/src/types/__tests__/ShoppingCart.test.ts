/*
 * 👇 Pruebas del ShoppingCart
 */

import { Candy } from '../Candy';
import { ShoppingCart } from '../ShoppingCart'

// ❗️ Ahora que ShoppingCart usa `Candy` necesitamos usar nuestra propia subclase

class TestCandy extends Candy {
  name() {
    return "Test"
  }

  priceCents() {
    return 100;
  }
}

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
// ❗️ Este no es un Candy! Creemos una instancia de TestCandy
  const candy = new TestCandy()
  const updatedCart = cart.addItem(candy);
  expect(updatedCart.items).toEqual([candy]);
});

/*
 * 🛎 Probar el precio total de un ShoppingCart
 */

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
// ❗️ Este no es un Candy! Creemos una instancia de TestCandy
const candy = new TestCandy();
  cart.addItem(candy);
  expect(cart.total()).toBe(100);
});
