import Entity from "./base/entity";
import 
{
    Entity as Table, 
    Column 
} from "typeorm";

@Table()
export default class RestauranteCardapio extends Entity{
    @Column()
    nome: string

    //TODO: Fazer relacionamento com restaurante
    @Column()
    idRestaurante: number

    constructor(nome: string, idRestaurante: number) {
        super(0, new Date(), new Date());
        this.nome = nome;
        this.idRestaurante = idRestaurante;
    }
}