# Unidad 3, Lección 14: Genéricos vuelven

¡Hemos llegado a la última lección! Que viaje.

Con esto, el último perfeccionamiento que me gustaría proponer es separar la conección fuerte entre un `ShoppingCart` y la clase `Candy`.

## 🐾 Primeros Pasos

### ¿Pero por qué?

¡Es ciertamente una buena pregunta! Por el momento, todo lo que vendemos en nuestra tienda de dulces son... ¡dulces!

¿Pero qué pasa si, digamos, en un par de meses nos va tan bien con nuestra tienda que quieremos vender otras cosas?

En este caso, ¡nuestro `ShoppingCart` ya no sirve tan bién! Por eso, vamos a generalisarlo con genéricos.

### ¿Qué ha cambiado en esta lección?

Lo más importante es que ahora tenemos una clase `./src/types/CartItemType.ts`:

```typescript
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}
```

## 🥅 Metas

En esta lección, vamos a usar genéricos con `ShoppingCart` para que sea cualquier tipo `CartItemType`.

## 🤸 Ejercicios

### 1. Arreglar las pruebas

Echar a andar `npm run test` nos entrega:

```bash
> svelte-app@1.0.0 test
> jest src

 PASS  src/types/__tests__/Candy.test.ts
 PASS  src/types/__tests__/ShoppingCart.test.ts

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.891 s, estimated 5 s
Ran all test suites matching /src/i.
```

Ah, bueno! Se ve bién.

### 2. Arreglar el linting

Correr `npm run lint` nos presenta:

```bash
> svelte-app@1.0.0 lint
> eslint . --ext .ts,.svelte


/Users/ramonh/coding/ts-course-draft/leccion-13-ts-estricto-noAny/src/types/Candy.ts
  2:28  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  3:22  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

/Users/ramonh/coding/ts-course-draft/leccion-13-ts-estricto-noAny/src/types/ShoppingCart.ts
   2:9   error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   3:15  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   4:13  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   8:11  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  14:17  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  21:19  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:42  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  25:55  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  26:21  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 11 problems (11 errors, 0 warnings)
```

Veamos `./src/types/Candy.ts`, hay errores en la línea 2 y 3, donde tenemos `any`. ¡El `priceCents` y `name` necesitan tipos!

Hagamos lo mismo en `./src/types/ShoppingCart.ts`. El `GroupedCartItem` tiene sus 3 propiedades con tipos `any`. Arreglémoslo!

De ahí, la clase `ShoppingCart` tiene una propiedad `items` con tipo `any[]`, pero sabemos que son una lista de `Candy`. Importémoslo y usémoslo! De ahí, todos los `any`s tendrán su tipo.

En la línea 28, tenemos: 

```typescript
let cartItem: any = cartItems.find(
```

Si reemplazamos `any` con `GroupedCartItem`, veremos que en realidad `find` nos da `GroupedCartItem` o `undefined`. ¡Este es un tipo combinado!

Ahora debe funcionar `npm run lint`, pero sin embargo...

### 3. Volver a las pruebas

Si echamos a andar `npm run test`...

```bash
> svelte-app@1.0.0 test
> jest src

 FAIL  src/types/__tests__/ShoppingCart.test.ts
  ● Test suite failed to run

    src/types/__tests__/ShoppingCart.test.ts:11:37 - error TS2345: Argument of type '{ data: string; }' is not assignable to parameter of type 'Candy'.
      Object literal may only specify known properties, and 'data' does not exist in type 'Candy'.

    11   const updatedCart = cart.addItem({data: "value"});
                                           ~~~~~~~~~~~~~
    src/types/__tests__/ShoppingCart.test.ts:19:16 - error TS2345: Argument of type '{ priceCents: () => number; }' is not assignable to parameter of type 'Candy'.
      Property 'name' is missing in type '{ priceCents: () => number; }' but required in type 'Candy'.

    19   cart.addItem({
                      ~
    20     priceCents: () => 100
       ~~~~~~~~~~~~~~~~~~~~~~~~~
    21   });
       ~~~

      src/types/Candy.ts:3:14
        3     abstract name(): string;
                       ~~~~
        'name' is declared here.

 PASS  src/types/__tests__/Candy.test.ts

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.874 s, estimated 3 s
Ran all test suites matching /src/i.
```

Debido a que cambiamos `addItem` en `ShoppingCart`, ¡ahora nuestros tests no funcionan! Agreguemos una clase en el test:

```typescript
class TestCandy extends Candy {
  name() {
    return "Test"
  }

  priceCents() {
    return 999;
  }
}
```

Por ejemplo, lo podemos usar en la segundo prueba:

```typescript
test("Adding item to cart successfully", () => {
  const cart = new ShoppingCart();
  const candy = new TestCandy();
  const updatedCart = cart.addItem(candy);
  expect(updatedCart.items).toEqual([candy]);
});
```

¡Ahora hagamoslo para la otra!

Ahora vamos a echar a andar todos los checks:

```bash
npm run test
npm run lint
npm run check
```

## 🤔 Reflecciones

- ¿Cuales son las ventajas de hacer linting?
- ¿Cual es la ventaja de prohibir el `any` explícito? 
- ¿Es bueno que la clase `ShoppingCart` dependa de `Candy`, que pasa si quieremos tener otras clases de productos?

Objetivo: Eliminar el uso del tipo Candy del ShoppingCart

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

Agregar `./src/models/CartItemType.ts`:

```
export default abstract class CartItemType {
    abstract priceCents(): number;
    abstract name(): string;
}
```

En `./src/App.svelte`:

```
-       let cart = new shoppingcart;
+       let cart = new shoppingcart<marshmallow>();
```

En `./src/models/Candy.ts`:

```
-export abstract class Candy {
-    abstract priceCents(): number;
-    abstract name(): string;
-}
+import CartItemType from "./CartItemType";
+
+export abstract class Candy extends CartItemType {}
```

En `./src/models/ShoppingCart.ts`:

```
-import type { Candy } from "./Candy";
+import type CartItemType from "./CartItemType";

 export interface GroupedCartItem {
     name: string,
@@ -6,14 +6,14 @@ export interface GroupedCartItem {
     quantity: number
 }

-export class ShoppingCart {
-    items?: Candy[];
+export class ShoppingCart<T extends CartItemType> {
+    items?: T[];

     constructor() {
         this.items = [];
     }

-    addItem(item: Candy) {
+    addItem(item: T) {
         if (this.items !== undefined) {
             this.items = [...this.items, item]
         }
@@ -22,7 +22,7 @@ export class ShoppingCart {

     groupedItems() {
         if (this.items) {
-            return this.items.reduce((cartItems: GroupedCartItem[], item: Candy) => {
+            return this.items.reduce((cartItems: GroupedCartItem[], item: T) => {
                 let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
                 if (!cartItem) {
                     cartItem = {
```

En `.src/models/__tests__/ShoppingCart.test.ts`:

```
 test("New cart has no items and 0 total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   expect(cart.total()).toBe(0);
   expect(cart.items).toEqual([]);
 });

 test("Adding item to cart successfully", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   const bigCandy = new Big()
   const updatedCart = cart.addItem(bigCandy);
   expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Candy.name);
@@ -25,7 +25,7 @@ test("Adding item to cart successfully", () => {
 });

 test("Cart with item adds to total", () => {
-  const cart = new ShoppingCart();
+  const cart = new ShoppingCart<Candy>();
   cart.addItem({
     priceCents: () => 100,
     name: () => "Big marshmallow"
```
