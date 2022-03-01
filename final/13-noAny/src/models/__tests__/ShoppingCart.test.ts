import { Marshmallow } from '../Marshmallow';
import { ShoppingCart } from '../ShoppingCart'

class Big extends Marshmallow {
    priceCents() {
        return 999;
    }
    name() {
        return "Big";
    }
}

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const bigMarshmallow = new Big()
  const updatedCart = cart.addItem(bigMarshmallow);
  expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Marshmallow.name);
  expect(updatedCart.items).toEqual([bigMarshmallow]);
});

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
  cart.addItem({
    priceCents: () => 100,
    name: () => "Big marshmallow"
  });
  expect(cart.total()).toBe(100);
});
