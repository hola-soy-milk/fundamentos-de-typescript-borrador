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

Todas las fallas estan situadas en `./src/types/ShoppingCart.ts`. ¡Arreglémoslas con guardias!

### 2. Arreglar el linting

Correr `npm run lint` nos presenta:

```bash
> svelte-app@1.0.0 lint
> eslint . --ext .ts
```

Ah, bueno! Se ve bién.

### 3. Arreglar el check

Correr `npm run check` nos presenta:

```bash

> svelte-app@1.0.0 check
> svelte-check --tsconfig ./tsconfig.json


====================================
Loading svelte-check in workspace: /home/ramonh/coding/ts-course-draft/leccion-11-ts-estricto-noImplicitAny
Getting Svelte diagnostics...

====================================
svelte-check found 0 errors, 0 warnings, and 0 hints
```

¡Ah, ya! También funciona.
