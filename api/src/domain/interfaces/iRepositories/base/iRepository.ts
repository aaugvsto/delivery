import Entity from "../../../../infra/data_access/entities/base/entity";

export default interface IRepository<T extends Entity>{
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: number): Promise<boolean>;
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
}