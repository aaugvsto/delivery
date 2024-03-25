import { Pedido } from "./pedido.model";

export interface Column {
    id: number,
    textoDeExibicao: string,
    pedidos: Pedido[],
}
