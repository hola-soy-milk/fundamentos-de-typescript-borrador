/*
 * 👇 Tipo para nuestro carrito
 */

// ❗️ Vamos a usar los GroupedCartItems para describir nuestros `groupedItems`
// ❗️ Las propiedades necesitan tipos
export interface GroupedCartItem {
  name: any;
  priceCents: any;
  quantity: any;
}

export class ShoppingCart {
// 🛎 Tenemos una propiedad opcional de items de carrito
// ❗️ Items necesitan un tipo (¡importado!)
  items?: any[];

  constructor() {
    this.items = [];
  }

// ❗️ Items necesitan un tipo (¡importado!)
  addItem(item: any) {
    if (this.items !== undefined) {
      this.items = [...this.items, item];
    }
    return this;
  }

// ❗️ Asignemos nuestro nuevo tipo
  groupedItems(): any[] {
    if (!this.items) {
      return [];
    }
    // ❗️ Necesitamos GroupedCartItem y nuestro item importado
    return this.items.reduce((cartItems: any[], item: any) => {
    // ❗️ Necesitamos GroupedCartItem y nuestro item importado
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
