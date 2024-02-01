export default interface IService<T>{
    create(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: number): Promise<boolean>;
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
}