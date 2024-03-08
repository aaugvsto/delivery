import Entity from "../../../../infra/data_access/entities/base/entity";

export default interface IService<T extends Entity>{
    createOrUpdate(entity: T): Promise<T>;
    delete(id: number): Promise<boolean>;
    get(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
}