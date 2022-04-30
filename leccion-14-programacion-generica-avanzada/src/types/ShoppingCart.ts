import type { Candy } from "./Candy";

export interface GroupedCartItem {
    name: string,
    priceCents: number,
    quantity: number
}

export class ShoppingCart {
    items?: Candy[];

    constructor() {
        this.items = [];
    }

    addItem(item: Candy) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

    groupedItems() {
        if (this.items) {
            return this.items.reduce((cartItems: GroupedCartItem[], item: Candy) => {
                let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
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
        } else {
            return [];
        }
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