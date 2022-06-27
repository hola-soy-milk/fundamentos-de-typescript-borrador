/*
 * 👇 Tipo para nuestro carrito
 */

export default class ShoppingCart {
// 🛎 Tenemos una propiedad opcional de items de carrito
// ❗️ A `items` le falta tipo. Démosle `any`
    items?;

// 🛎 Crear un ShoppingCart con un arreglo de items vacío
    constructor() {
        this.items = [];
    }

// 🛎 Agregar un item
// ❗️ A `item` le falta tipo. Démosle `any`
    addItem(item) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

// 🛎 Agrupar los items de acuerdo a cuantos y su total
  groupedItems() {
    return Object.values(
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
        return this.items.length;
    }

// 🛎 El precio completo
    total() {
        return this.items.reduce((x, y) => x + y.priceCents(), 0);
    }
}