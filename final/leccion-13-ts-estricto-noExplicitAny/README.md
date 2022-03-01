Objetivo: Ultilizar tipos estrictamente

Verificar: 

```
    $ npm run test
    $ npm run check
    $ npm run lint
```

En `./src/App.svelte`:

```
 <script lang="ts">
-       const addCartItem = (item: any) => {
+       const addCartItem = (item: Candy) => {
                cart = cart.addItem(item);
        }
```

En `./src/components/Cart.svelte`:

```
-  export let items: any[];
-  export let amount: any;
-  export let total: any;
+  export let items: GroupedCartItem[];
+  export let amount: number;
+  export let total: number;
```

En `./src/components/Menu.svelte`:

```
-  import {availableCandies} from '../types/Candy';
-  export let addCartItem: any;
+  import {availableCandies, Candy} from '../types/Candy';
+  export let addCartItem: (item: Candy) => void;
```

En `./src/models/Candy.ts`:

```
-  import {availableCandies} from '../types/Candy';
-  export let addCartItem: any;
+  import {availableCandies, Candy} from '../types/Candy';
+  export let addCartItem: (item: Candy) => void;
```

En `./src/models/ShoppingCart.ts`:

```
-export default class ShoppingCart {
-    items?: any[];
+import type { Candy } from "./Candy";
+
+export interface GroupedCartItem {
+    name: string,
+    priceCents: number,
+    quantity: number
+}
+
+export class ShoppingCart {
+    items?: Candy[];

     constructor() {
         this.items = [];
     }

-    addItem(item: any) {
+    addItem(item: Candy) {
         if (this.items !== undefined) {
             this.items = [...this.items, item]
         }
```

```
-            return Object.values(this.items.reduce((cartItem, item) => {
-                cartItem[item.name()] = cartItem[item.name()] || {
-                    name: item.name(),
-                    quantity: 0,
-                    priceCents: item.priceCents()
-                };
-                cartItem[item.name()].quantity += 1;
-                cartItem[item.name()].priceCents += item.priceCents();
-                return cartItem;
-            }, {}));
+            return this.items.reduce((cartItems: GroupedCartItem[], item: Candy) => {
+                let cartItem: GroupedCartItem | undefined = cartItems.find(e => e.name === item.name());
+                if (!cartItem) {
+                    cartItem = {
+                      name: item.name(),
+                      priceCents: item.priceCents(),
+                      quantity: 0,
+                    };
+                    cartItems.push(cartItem);
+                }
+                cartItem.quantity += 1;
+                cartItem.priceCents += item.priceCents();
+                return cartItems;
+            }, []);
```

En `./src/models/__tests__/ShoppingCart.test.ts`:

```
-import ShoppingCart from '../ShoppingCart'
+import { Candy } from '../Candy';
+import { ShoppingCart } from '../ShoppingCart'
+
+class Big extends Candy {
+    priceCents() {
+        return 999;
+    }
+    name() {
+        return "Big";
+    }
+}
```

```
-  const updatedCart = cart.addItem({data: "value"});
-  expect(updatedCart.items).toEqual([{
-    data: "value"
-  }]);
+  const bigCandy = new Big()
+  const updatedCart = cart.addItem(bigCandy);
+  expect(Object.getPrototypeOf(updatedCart.items![0].constructor).name).toEqual(Candy.name);
+  expect(updatedCart.items).toEqual([bigCandy]);
```

```
 test("Cart with item adds to total", () => {
   const cart = new ShoppingCart();
   cart.addItem({
-    priceCents: () => 100
+    priceCents: () => 100,
+    name: () => "Big marshmallow"
   });
   expect(cart.total()).toBe(100);
```