# Unidad 1, Lección 2: Activar TypeScript

Ahora que instalamos TypeScript, ¡es hora de empezar a usarlo!

El comportamiento de TypeScript se define con el archivo de configuración `tsconfig.json`, donde podemos definir, por ejemplo; a que clase de JavaScript compilamos, que extensiones de archivos incluimos, etc.  

## 🥅 Metas

- Configurar nuestra aplicación para que use TypeScript

## 🤸 Ejercicios

### 1. Renombrar archivos `.js` a `.ts`

Debido a que TypeScript es un superconjunto de JavaScript, no nos afectará cambiar las extensiones de los archivos.

### 2. Renombrar archivos `.jsx` a `.tsx`

Si no conoces `JSX`, ¡no te preocupes! Son archivos especiales que se usan a menudo con React. No es requisito conocer JSX para este curso. 

> ¡Por cierto, te recomiendo el [curso de Matías para aprender React](https://www.escuelafrontend.com/react)!

### 3. Generar `tsconfig.json`

Al instalar el paquete de TypeScript, nos da acceso a la herramienta CLI `tsc`. La podemos usar para generar el archivo de configuración:

    $ ./node_modules/.bin/tsc --init
    
Esto creará el archivo `tsconfig.json`. Cambiémoslo para que el modo estricto no esté activado. En la línea 77:

```json
    "strict": false, 
```

Nuestra última tarea será activar el modo react para la configuración. Agreguemos esta línea dentro de `"compilerOptions"`:

```json
    "jsx": "react",
```

## 🤔 Reflexiones

- ¿Cómo es que podemos agarrar JS existente y usarlo en archivos TS? 
- ¿Qué pasa si cambiamos el modo estricto de vuelta a `true`?
