import { FindOptionsWhere, Repository } from "typeorm";
import Entity from "../../../infra/data_access/entities/base/entity";
import IService from "../../interfaces/iServices/base/iService";

export default abstract class Service<T extends Entity> implements IService<T>{

    constructor(protected _repository: Repository<T>) { }

    async createOrUpdate(entity: T): Promise<T> {
        if(!entity.id)
            entity.creationDate = new Date();

        entity.updateDate = new Date();

        await this._repository.save(entity)
        return entity
    }

    async delete(id: number): Promise<boolean> {
        let entityToRemove = await this.get(id);

        if (!entityToRemove) return false;

        await this._repository.remove(entityToRemove);
        return true;
    }

    async get(id: number): Promise<T | null> {
        return await this._repository.findOne({
            where: { 
                id: id 
            }  as FindOptionsWhere<T>
        });
    }

    async getAll(): Promise<T[]> {
        let itens = await this._repository.find();
        return itens;
    }
} 