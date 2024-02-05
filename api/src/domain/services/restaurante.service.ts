import Restaurante from "../../infra/data_access/entities/restaurante";
import IRestauranteService from "../interfaces/iServices/iRestauranteService";
import Service from "./base/service";

export default class RestauranteService extends Service<Restaurante> implements IRestauranteService{
}   