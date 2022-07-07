/*
 * 👇 Tipo genérico para nuestros items de carrito
 */

// ❗️ La meta es reemplazar Candy con CartItemType en el ShoppingCart
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}