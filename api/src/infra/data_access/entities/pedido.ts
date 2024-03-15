import Entity from "./base/entity";
import 
{
    Entity as Table, 
    Column 
} from "typeorm";

@Table()
export default class Pedido extends Entity {

    @Column()
    nome: string;

    @Column()
    valor: number;

    @Column()
    data: Date;

    @Column()
    clienteId: number;

    @Column({nullable: true})
    status: number;

    constructor(id: number, cretionDate: Date, updateDate: Date, nome: string, valor: number, data: Date, clienteId: number, status: number) {
        super(id, cretionDate, updateDate);
        
        this.nome = nome;
        this.valor = valor;
        this.data = data;
        this.clienteId = clienteId;
        this.status = status;
    }
}