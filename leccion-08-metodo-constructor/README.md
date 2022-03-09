# Unidad 2, Lección 08: Constructores

Seguro que ya te habrás pasado un buen rato jugando a los dados 😄

Vamos a cambiar nuestro juego un poco para que pueda jugarse con dados de distintos números de lados.

## 🐾 Primeros Pasos

Veamos qué es lo que ha cambiado en `./src/App.vue`, específicamente en la línea 7:

```typescript
const roll = () => Array.from({length: 4}, () => new DieWrapper(6));
```

Aquí vemos que le pasamos un 6 a cada nuevo `DieWrapper`!Esta será la cantidad de lados que tendrá cada dado!

## 🥅 Metas

En esta lección vamos a modificar nuestra clase `DieWrapper` para que acepte una cantidad de lados `sides` y lo ultilice como el máximo valor al tirarlo.

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

En la lección anterior habíamos programado nuestro `DiceWrapper` para que tirase al azar un número entre 1 y 6 y lo guardará en `value`. Ahora lo vamos a adaptar a será entre 1 y el número de lados usando la palabra clave `this`.

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

Cambiémos el código para que `nombre` sea una propiedad pública:

```typescript
class Perro {
   constructor(public nombre: string) {}
}
```

Este es equivalente al anterior 

¡Se puede hacer con elementos privados tambien!

Tratemos de cambiar la propiedad `sides` de la clase `DiceWrapper` a privada.

## 🤔 Reflexiones

- ¿Qué beneficio hay en que una propiedad sea pública?
