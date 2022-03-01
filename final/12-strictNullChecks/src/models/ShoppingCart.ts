export default class ShoppingCart {
    items?: any[];

    constructor() {
        this.items = [];
    }

    addItem(item: any) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

    groupedItems() {
        if (this.items) {
            return Object.values(this.items.reduce((cartItem, item) => {
                cartItem[item.name()] = cartItem[item.name()] || {
                    name: item.name(),
                    quantity: 0,
                    priceCents: item.priceCents()
                };
                cartItem[item.name()].quantity += 1;
                cartItem[item.name()].priceCents += item.priceCents();
                return cartItem;
            }, {}));
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