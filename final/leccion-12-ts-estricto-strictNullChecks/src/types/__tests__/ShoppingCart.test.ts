import ShoppingCart from "../ShoppingCart";

test("New cart has no items and 0 total", () => {
  const cart = new ShoppingCart();
  expect(cart.total()).toBe(0);
  expect(cart.items).toEqual([]);
});

test("New cart with undefined items has 0 total", () => {
  const cart = new ShoppingCart();
  cart.items = undefined;
  expect(cart.total()).toEqual(0);
});

test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const updatedCart = cart.addItem({ data: "value" });
  expect(updatedCart.items).toEqual([
    {
      data: "value",
    },
  ]);
});

test("Cart with item adds to total", () => {
  const cart = new ShoppingCart();
  cart.addItem({
    priceCents: () => 100,
  });
  expect(cart.total()).toBe(100);
});
