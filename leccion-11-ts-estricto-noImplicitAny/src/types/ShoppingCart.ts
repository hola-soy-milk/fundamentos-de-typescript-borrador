export default class ShoppingCart {
    items?;

    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (this.items !== undefined) {
            this.items = [...this.items, item]
        }
        return this;
    }

    groupedItems() {
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
    }

    numberOfItems() {
        return this.items.length;
    }

    total() {
        return this.items.reduce((x, y) => x + y.priceCents(), 0);
    }
}