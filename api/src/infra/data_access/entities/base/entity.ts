import 
{
     Entity as Table
    ,Column
    ,PrimaryGeneratedColumn
} from "typeorm";

@Table()
export default abstract class Entity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    creationDate: Date

    @Column()
    updateDate: Date

    constructor(id: number, creationDate: Date, updateDate: Date) {
        this.id = id;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}