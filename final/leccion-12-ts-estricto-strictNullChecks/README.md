# Unidad 3, Lección 12: `strictNullChecks`

¡A la próxima! En esta lección activaremos el próximo modo estricto: `strictNullChecks`.

## 🐾 Primeros Pasos

### ¿Qué hace `strictNullChecks`?

Esta regla no permite tener inferencia de tipos. Por ejemplo:

```typescript
const animales = [
  { nombre: "Odie" },
  { nombre: "Garfield" },
];
 
const perrito = animales.find((animal: any) => animal.nombre === "Odie");
console.log(perrito.nombre);
```

Este código no se compilará con el error:

```bash
const perrito: {
    nombre: string;
} | undefined
Object is possibly 'undefined'
```

En este caso, vemos que el tipo de `perrito` es un tipo unión: `{ nombre: string } | undefined`.

Sin la regla activada, TypeScript ignorará el `undefined`.

### ¿Qué hacer al respecto?

Hemos trabajado antes con esta situación. Quizás ya tengas la solución en mente: ¡Guardias de tipos!

Arreglemos nuestro código:


```typescript
const animales = [
  { nombre: "Odie" },
  { nombre: "Garfield" },
];
 
const perrito = animales.find((animal: any) => animal.nombre === "Odie");
if (perrito) {
   console.log(perrito.nombre);
}
```

Ahora funciona sin problema.

## 🥅 Metas

En esta lección, vamos a mejorar nuestro código con la regla `strictNullChecks`.

## 🤸 Ejercicios

### 1. Arreglar las pruebas

Echar a andar `npm run test` nos entrega:

```bash

> svelte-app@1.0.0 test
> jest src

 PASS  src/types/__tests__/Candy.test.ts
 FAIL  src/types/__tests__/ShoppingCart.test.ts
  ● Test suite failed to run

    src/types/ShoppingCart.ts:16:30 - error TS2532: Object is possibly 'undefined'.

    16         return Object.values(this.items.reduce((cartItem, item) => {
                                    ~~~~~~~~~~
    src/types/ShoppingCart.ts:29:16 - error TS2532: Object is possibly 'undefined'.

    29         return this.items.length;
                      ~~~~~~~~~~
    src/types/ShoppingCart.ts:33:16 - error TS2532: Object is possibly 'undefined'.

    33         return this.items.reduce((x, y) => x + y.priceCents(), 0);
                      ~~~~~~~~~~

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.23 s
Ran all test suites matching /src/i
```

Todas las fallas estan situadas en `./src/types/ShoppingCart.ts`. Arreglémoslas con 

### 2. Adaptar la función `value`

El la lección anterior habíamos programado nuestro `DiceWrapper` a que tirase un numero entre 1 y 6 al azar en `value`. Ahora lo vamos a adaptar a ser entre 1 y el número de lados usando la palabra clave `this`.

### Crédito extra: Propiedad privada

En clases de TypeScript, podemos tener propiedades públicas y privadas usando las palabras claves `public` y `private. Volvámos a nuestro ejemplo de la clase `Perro`:

```typescript
class Perro {
   nombre: string;
   
   constructor(nombre: string) {
      this.nombre = nombre;
   }
}
```

Cambiémosla para que nombre sea una propiedad pública:

```typescript
class Perro {
   constructor(public nombre: string) {}
}
```

Este es equivalente al anterior. 

¡Se puede hacer con elementos privados tambien! 

Tratemos de cambiar la propiedad `sides` de la clase `DiceWrapper` a ser privada.

## 🤔 Reflexiones

- ¿Qué beneficio hay en que una propiedad sea pública?


Objetivo: Hacer pasar los strict null checks

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/models/ShoppingCart.ts`:

```
     groupedItems() {
-        return Object.values(this.items.reduce((cartItem, item) => {
-            cartItem[item.name()] = cartItem[item.name()] || {
-                name: item.name(),
-                quantity: 0,
-                priceCents: item.priceCents()
-            };
-            cartItem[item.name()].quantity += 1;
-            cartItem[item.name()].priceCents += item.priceCents();
-            return cartItem;
-        }, {}));
+        if (this.items) {
+            return Object.values(this.items.reduce((cartItem, item) => {
+                cartItem[item.name()] = cartItem[item.name()] || {
+                    name: item.name(),
+                    quantity: 0,
+                    priceCents: item.priceCents()
+                };
+                cartItem[item.name()].quantity += 1;
+                cartItem[item.name()].priceCents += item.priceCents();
+                return cartItem;
+            }, {}));
+        } else {
+            return [];
+        }
     }

     numberOfItems() {
-        return this.items.length;
+        return this.items ? this.items.length : 0;
     }

     total() {
-        return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        if (this.items) {
+            return this.items.reduce((x, y) => x + y.priceCents(), 0);
+        } else {
+            return 0;
+        }
     }
 }
```
