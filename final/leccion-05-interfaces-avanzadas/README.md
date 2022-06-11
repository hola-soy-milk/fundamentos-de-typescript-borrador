# Unidad 1, Lección 5: Interfaces Avanzadas

## 🐾 Primeros Pasos

En `./src/App.tsx` verás un cambio de estructura en un `Post` en la línea 15: 

```typescript
setPosts([{
      id: posts.length + 1,
      sender: {
        id: posts.length + 1,
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date,
    }]);
```

Ahora un `Post` consiste de una propiedad `sender`!

## 🥅 Metas

En esta lección, vamos a:
- Crear una nueva interfaz llamada `Sender`
- Integrarla en un `Post`

## 🤸 Ejercicios

### 1. Nueva interfaz para `Sender`

En el nuevo archivo `./src/types/Sender.ts` exporta una nueva interfaz Sender con 3 propiedades **sin asignarles tipo**.

🤔 ¿Cuáles son?

### 2. Integra el `Sender` en el `Post`

Volvamos a `./src/types/Post.ts`, donde integraremos una propiedad `sender` que reemplazará `name` y `handle`.

### Crédito extra: Prop Types

Ahora mismo las propiedades del `Sender` son `any` de manera implícita. ¿Qué tipos tendrán?

## 🤔 Reflexiones

- ¿Podemos combinar clases de JavaScript con interfaces?
