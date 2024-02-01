import Entity from "./base/entity";

export default class Cliente extends Entity {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public senha: string,
        public cretionDate: Date,
        public updateDate: Date,
    ) {
        super(id, cretionDate, updateDate);
    }
}