import { Produto } from "./produto.model";

export class SessaoCardapio {
    id: number;
    nomeColuna: string;
    produtos: Produto[];

    constructor(nomeColuna: string, produtos: Produto[]){
        this.id = -1;
        this.nomeColuna = nomeColuna;
        this.produtos = produtos ?? new Array<Produto>();
    }
}
