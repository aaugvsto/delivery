import IRepository from "../../../../domain/interfaces/iRepositories/base/iRepository";
import { Repository as TypeOrmRepository } from "typeorm";
import Entity from "../../entities/base/entity";

export default abstract class Repository<T extends Entity> implements IRepository<T>{

    constructor(protected _repository: TypeOrmRepository<T>) { }

    create(entity: T): Promise<T> {
        return this._repository.save(entity);
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
        return this._repository.find();
    }
}