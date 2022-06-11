/*
 * 👇 Definición del interfaz `Sender`
 * 
 * ❗️ Exportemos una nueva interfaz Sender con 3 propiedades **sin asignarles tipo**.
 *
 *
 * ❗️ Crédito extra: Ahora mismo las propiedades del `Sender` son `any` de manera implícita. ¿Qué tipos tendrán?
 */

export interface Sender {
    handle: string,
    id: number,
    name: string
}