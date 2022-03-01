import {availableMarshmallows} from '../Marshmallow'

test("Retrieving all marshmallows for sale", () => {
  expect(availableMarshmallows.length).toBe(3);

  expect(availableMarshmallows[0].priceCents()).toBe(99);
  expect(availableMarshmallows[0].name()).toBe("Fluffy");
  expect(availableMarshmallows[1].priceCents()).toBe(199);
  expect(availableMarshmallows[1].name()).toBe("Not So Fluffy");
  expect(availableMarshmallows[2].priceCents()).toBe(499);
  expect(availableMarshmallows[2].name()).toBe("Extra Fluffy");
});