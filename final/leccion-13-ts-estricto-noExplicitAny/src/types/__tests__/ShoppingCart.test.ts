import { Candy } from "../Candy";
import { ShoppingCart } from "../ShoppingCart";

class TestCandy extends Candy {
  name() {
    return "Test";
  }
  priceCents() {
    return 10;
  }
}

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const candy: Candy = new TestCandy();
  const updatedCart = cart.addItem(candy);
  expect(updatedCart.items).toEqual([candy]);
});

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
  const candy: Candy = new TestCandy();
  cart.addItem(candy);
  expect(cart.total()).toBe(10);
});
