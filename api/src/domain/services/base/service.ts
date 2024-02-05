import { Repository } from "typeorm";
import Entity from "../../../infra/data_access/entities/base/entity";
import IService from "../../interfaces/iServices/base/iService";

export default abstract class Service<T extends Entity> implements IService<T>{

    constructor(protected _repository: Repository<T>) { }

    create(entity: T): Promise<T> {
        throw new Error("Method not implemented.");
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
    async getAll(): Promise<T[]> {    
        
        let itens = await this._repository.find();
        return itens;
    }
} 