import Restaurante from "../../infra/data_access/entities/restaurante";
import IRepository from "../interfaces/iRepositories/base/iRepository";
import IRestauranteService from "../interfaces/iServices/iRestauranteService";
import Service from "./base/service";

export default class RestauranteService extends Service<Restaurante> implements IRestauranteService{
    constructor(repository: IRepository<Restaurante>) {
        super(repository);
    }
}   