export abstract class Candy {
    abstract priceCents();
    abstract name();
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