export interface GroupedCartItem {
  name: any;
  priceCents: any;
  quantity: any;
}

export class ShoppingCart {
  items?: any[];

  constructor() {
    this.items = [];
  }

  addItem(item: any) {
    if (this.items !== undefined) {
      this.items = [...this.items, item];
    }
    return this;
  }

  groupedItems(): any[] {
    if (!this.items) {
      return [];
    }
    return this.items.reduce((cartItems: any[], item: any) => {
      let cartItem: any = cartItems.find(
        (elem) => elem.name === item.name()
      );
      if (!cartItem) {
        cartItem = {
          name: item.name(),
          priceCents: item.priceCents(),
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
