import Entity from "./base/entity";

export default class Restaurante extends Entity{
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public endereco: string,
        public cretionDate: Date,
        public updateDate: Date,
    ) {
        super(id, cretionDate, updateDate);
    }
}