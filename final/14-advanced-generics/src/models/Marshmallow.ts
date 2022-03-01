import CartItemType from "./CartItemType";

export abstract class Marshmallow extends CartItemType {}

class Fluffy extends Marshmallow {
    priceCents() {
        return 99;
    }
    name() {
        return "Fluffy";
    }
}

class NotSoFluffy extends Marshmallow {
    priceCents() {
        return 199;
    }
    name() {
        return "Not So Fluffy";
    }
}

class ExtraFluffy extends Marshmallow {
    priceCents() {
        return 499;
    }
    name() {
        return "Extra Fluffy";
    }
}

export const availableMarshmallows = [
    new Fluffy(),
    new NotSoFluffy(),
    new ExtraFluffy()
]