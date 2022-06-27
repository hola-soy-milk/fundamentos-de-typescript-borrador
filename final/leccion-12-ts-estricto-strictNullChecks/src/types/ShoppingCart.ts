/*
 * 👇 Tipo para nuestro carrito
 */

export default class ShoppingCart {
// 🛎 Tenemos una propiedad opcional de items de carrito
    items?: any[];

// 🛎 Crear un ShoppingCart con un arreglo de items vacío
    constructor() {
        this.items = [];
    }

// 🛎 Agregar un item
    addItem(item: any) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

// 🛎 Agrupar los items de acuerdo a cuantos y su total
  groupedItems() {
    if (!this.items) {
      return [];
    }
    return Object.values(
// ❗️ Agreguemos una guardia de tipo para `items`
      this.items.reduce((cartItem, item) => {
        cartItem[item.name()] = cartItem[item.name()] || {
          name: item.name(),
          quantity: 0,
          priceCents: 0,
        };
        cartItem[item.name()].quantity += 1;
        cartItem[item.name()].priceCents += item.priceCents();
        return cartItem;
      }, {})
    );
  }

// 🛎 Número de items
    numberOfItems() {
// ❗️ Agreguemos una guardia de tipo para `items`
    if (!this.items) {
      return 0;
    }
        return this.items.length;
    }

// 🛎 El precio completo
    total() {
// ❗️ Agreguemos una guardia de tipo para `items`
    if (!this.items) {
      return 0;
    }
        return this.items.reduce((x, y) => x + y.priceCents(), 0);
    }
}