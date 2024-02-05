import Entity from "../../../entities/base/entity";

export default interface IService<T extends Entity>{
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: number): Promise<boolean>;
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
}