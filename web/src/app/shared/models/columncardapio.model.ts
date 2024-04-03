import { Produto } from "./produto.model";

export interface ColumnCardapio {
    id: number,
    nomeColuna: string,
    produtos: Produto[],
}
