import { Candy } from '../Candy';
import { ShoppingCart } from '../ShoppingCart'

class Big extends Candy {
    priceCents() {
        return 999;
    }
    name() {
        return "Big";
    }
}

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart<Big>();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart<Big>();
  const bigCandy = new Big()
  const updatedCart = cart.addItem(bigCandy);
  expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Candy.name);
  expect(updatedCart.items).toEqual([bigCandy]);
});

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart<Big>();
  cart.addItem({
    priceCents: () => 100,
    name: () => "Big marshmallow"
  });
  expect(cart.total()).toBe(100);
});
