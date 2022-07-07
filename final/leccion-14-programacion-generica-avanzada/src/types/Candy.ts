/*
 * 👇 Clase abstracta y subclases para los dulces. Tienen un nombre y precio.
 */

// ❗️ Candy pasa a ser subclase de CartItemType y le borramos las funciones
export abstract class Candy {
    abstract priceCents(): number;
    abstract name(): string;
}

class Chocolate extends Candy {
    priceCents() {
        return 99;
    }
    name() {
        return "Chocolate";
    }
}

class NotSoChocolate extends Candy {
    priceCents() {
        return 199;
    }
    name() {
        return "Caramelo";
    }
}

class ExtraChocolate extends Candy {
    priceCents() {
        return 499;
    }
    name() {
        return "Mazapán";
    }
}

export const availableCandies = [
    new Chocolate(),
    new NotSoChocolate(),
    new ExtraChocolate()
]