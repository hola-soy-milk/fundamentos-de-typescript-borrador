/*
 * 👇 Pruebas de los dulces
 */

import { availableCandies } from "../Candy";

/*
 * 🛎 Probar los dulces disponibles
 */

test("Retrieving all candies for sale", () => {
  expect(availableCandies.length).toBe(3);

  expect(availableCandies[0].priceCents()).toBe(99);
  expect(availableCandies[0].name()).toBe("Chocolate");
  expect(availableCandies[1].priceCents()).toBe(199);
  expect(availableCandies[1].name()).toBe("Caramelo");
  expect(availableCandies[2].priceCents()).toBe(499);
  expect(availableCandies[2].name()).toBe("Mazapán");
});
