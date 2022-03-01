# Unidad 2, Lección 10: Guardias de Tipos

¡A continuación, vamos a agregarle aún más seguridad a nuestra aplicación!

Vamos a aprender sobre propiedades opcionales, tipos unión e intersección, y guardias de tipos.

## 🐾 Primeros Pasos

### ¿Qué son propiedades opcionales?

TypeScript nos permite declarar propiedades que posiblemente no existan al inicializarse. Por ejemplo, en nuestra clase `Persona`:

```typescript
class Persona {
   edad?: number;
   
   constructor(public nombre: string) {}
}
```

Aquí podemos ver que la clase tiene una propiedad `nombre`, pero la de `edad` tiene un signo de interrogación. Esto quiere decir que es una propiedad opcional. Puede ser de tipo `number` o `undefined. O sea, si creamos una instancia de `Persona`, no requiere que se defina una edad. Por ejemplo:

```typescript 
const humano: Persona = new Persona("Mirabel");
humano.edad = 15;
console.log(humano.edad < 100); // => Object is possibly 'undefined'.
```

Este error nos indica que tenemos que asegurarnos que `humano.edad` tenga un valor. 

### Guardias de tipos

Volvamos a nuestro ejemplo de chequear que Mirabel tenga menos de 100 años de edad. Podemos usar una guardia de tipo, o sea che

Bueno además permitirnos tener esa opcionalidad, también nos protegemos al usar estas propiedades:

```typescript
if (humano.edad) {
   console.log(humano.edad < 100); // => 15
}
```

Con esta, podemos tener por seguro que la edad se haya definido.

### ¿Qué ha cambiado en esta lección?

Lo principal se encuentra en `./src/types/Dice.ts` en la línea 2:

```typescript
die?: Die;
```

Si tratamos de construir la aplicación con el comando:

   $ npm run build
   
Veremos que falla con un error:

```bash
> dice-game@0.0.0 build
> vue-tsc --noEmit && vite build

src/types/Dice.ts:12:12 - error TS2532: Object is possibly 'undefined'.

12     return this.die.value();
              ~~~~~~~~


Found 1 error.
```

## 🥅 Metas

En esta lección, vamos a arreglar nuestra aplicación usando una guardia de tipo.

## 🤸 Ejercicios

### 1. ¿Qué pasa si no hay lado de dado?

En el caso donde `die` sea undefined, lanzemos un error que diga "Imposible no tener lado de dado". Lanzar un error es igual que en JavaScript:

```typescript
throw new Error(message);
```

### Credito extra

¡Pongámos nuestra nueva propiedad opcional en práctica!

Cambiemos la firma de nuestra función `dieForValue` en la línea 15:

```typescript
  private dieForValue(value: number): Die | undefined {
```

El valor de retorno de `dieForValue` ahora puede ser de tipo `Die` o `undefined`. Esto se llama un **tipo unión**.

Ahora podemos cambiarlo a que el `switch` por defecto retorne un `undefined`.
