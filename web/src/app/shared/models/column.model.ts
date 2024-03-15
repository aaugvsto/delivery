import { Pedido } from "./pedido.model";

export interface Column {
    nome: string,
    idStatus: number,
    pedidos: Pedido[],
}
