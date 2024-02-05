import Entity from "./base/entity";
import 
{
    Entity as Table, 
    Column 
} from "typeorm";

@Table()
export default class Cliente extends Entity {
    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    senha: string

    constructor(id: number, cretionDate: Date, updateDate: Date, nome: string, email: string, telefone: string, senha: string) {
        super(id, cretionDate, updateDate);
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
    }
}