# Unidad 2, Lección 08: Constructores

Seguro que ya habrás pasado un buen rato jugando a los dados 😄

Vamos a cambiar nuestro juego un póco para que pueda jugarse con dados distintos números de lados.

## 🐾 Primeros Pasos

Veamos qué es lo que ha cambiado en `./src/App.vue`, específicamente en la línea 7:

```typescript
const roll = () => Array.from({length: 4}, () => new DieWrapper(6));
```

Aquí vemos que le pasamos un 6 a cada nuevo `DieWrapper`! Esté sera la cantidad de lados que tendrá cada dado.

## 🥅 Metas

En esta lección vamos a modificar nuestra clase `DieWrapper` para que acepte una cantidad de lados `sides` y lo ultilice para el máximo valor de tirarlo.

## 🤸 Ejercicios

### 1. La propiedad `sides`

Una clase puede tener propiedades tal como en JavaScript:

```typescript
class Perro {
   nombre: string;
   
   constructor(nombre: string) {
      this.nombre = nombre;
   }
}
```

Agreguémosle una propiedad a `DiceWrapper` llamada `sides` que será del tipo `number`.

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
