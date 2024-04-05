import { Produto } from "./produto.model";

export interface SessaoCardapio {
    id: number,
    nomeColuna: string,
    produtos: Produto[],
}
