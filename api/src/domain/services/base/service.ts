import Entity from "../../../infra/data_access/entities/base/entity";
import IRepository from "../../interfaces/iRepositories/base/iRepository";
import IService from "../../interfaces/iServices/base/iService";

export default abstract class Service<T extends Entity> implements IService<T>{

    constructor(protected _repository: IRepository<T>) { }

    create(entity: T): Promise<T> {
        return this._repository.create(entity);
    }
    update(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<T[]> {
        return this._repository.getAll();
    }
} 