/*
 * 👇 Tipo para nuestro carrito
 */

import type { Candy } from "./Candy";

// ❗️ Vamos a usar los GroupedCartItems para describir nuestros `groupedItems`
// ❗️ Las propiedades necesitan tipos
export interface GroupedCartItem {
  name: string;
  priceCents: number;
  quantity: number;
}

export class ShoppingCart {
// 🛎 Tenemos una propiedad opcional de items de carrito
// ❗️ Items necesitan un tipo (¡importado!)
  items?: Candy[];

  constructor() {
    this.items = [];
  }

// ❗️ Items necesitan un tipo (¡importado!)
  addItem(item: Candy) {
    if (this.items !== undefined) {
      this.items = [...this.items, item];
    }
    return this;
  }

// ❗️ Asignemos nuestro nuevo tipo
  groupedItems(): GroupedCartItem[] {
    if (!this.items) {
      return [];
    }
    // ❗️ Necesitamos GroupedCartItem y nuestro item importado
    return this.items.reduce((cartItems: GroupedCartItem[], item: Candy) => {
      let cartItem = cartItems.find(
        (elem) => elem.name === item.name()
      );
      if (!cartItem) {
        cartItem = {
          name: item.name(),
          priceCents: 0,
          quantity: 0,
        };
        cartItems.push(cartItem);
      }
      cartItem.quantity += 1;
      cartItem.priceCents += item.priceCents();
      return cartItems;
    }, []);
  }

  numberOfItems() {
    return this.items ? this.items.length : 0;
  }

  total() {
    if (this.items) {
      return this.items.reduce((x, y) => x + y.priceCents(), 0);
    } else {
      return 0;
    }
  }
}
