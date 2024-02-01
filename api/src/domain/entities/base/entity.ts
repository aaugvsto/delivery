export default abstract class Entity {
    constructor(
        public id: number,
        public cretionDate: Date,
        public updateDate: Date,
    ) {}
}