import { Pedido } from "./pedido";

export class Column {
    constructor(
        public nome: string,
        public pedidos: Pedido[],
    ) { }
}
