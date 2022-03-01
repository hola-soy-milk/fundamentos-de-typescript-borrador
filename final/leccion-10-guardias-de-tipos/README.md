Objetivo: Usar guard clauses para proteger codigo inestable

En `./src/models/Dice.ts`:

```
   value(): number {
-    return this.die.value();
+    if (this.die instanceof Die) {
+      return this.die.value();
+    }
+    return 0;
   }
```

Credito extra: Multiple types

```
       case 8:
         return new EightDie();
       default:
-        return new OneDie();
+        return undefined;
     }
   }
 }
```