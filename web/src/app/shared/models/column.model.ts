import { Pedido } from "./pedido.model";

export interface Column {
    nome: string,
    pedidos: Pedido[],
}
