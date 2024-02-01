import Entity from "./base/entity";

export default class Pedido extends Entity {
    constructor(
        public id: number,
        public nome: string,
        public valor: number,
        public data: Date,
        public clienteId: number,
        public cretionDate: Date,
        public updateDate: Date,
    ) {
        super(id, cretionDate, updateDate);
    }
}