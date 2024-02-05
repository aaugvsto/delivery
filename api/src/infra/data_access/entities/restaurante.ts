import Entity from "./base/entity";
import 
{
    Entity as Table, 
    Column 
} from "typeorm";

@Table()
export default class Restaurante extends Entity{

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    endereco: string
        
    constructor(id: number, creationDate: Date, updateDate: Date, nome: string, email: string, telefone: string, endereco: string) {
        super(id, creationDate, updateDate);
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}