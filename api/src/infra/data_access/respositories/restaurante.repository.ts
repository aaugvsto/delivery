import Restaurante from "../entities/restaurante";
import { Repository as TypeOrmRepository } from "typeorm";
import Repository from "./base/repository";

export default class RestauranteRepository extends Repository<Restaurante> {
    constructor(private repository: TypeOrmRepository<Restaurante>) {
        super(repository);
    }
}