import Entity from "./base/entity";
import 
{
    Entity as Table, 
    Column 
} from "typeorm";

@Table()
export default class RestauranteCardapioSessao extends Entity{
    @Column()
    nome: string

    //TODO: Fazer relacionamento com restaurante
    @Column()
    idCarparpio: number

    constructor(nome: string, idCarparpio: number) {
        super(0, new Date(), new Date());
        this.nome = nome;
        this.idCarparpio = idCarparpio;
    }
}