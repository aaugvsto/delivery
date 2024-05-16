import CardapioRestauranteSessao from "../../../infra/data_access/entities/restaurante-cardapio-sessao";
import Restaurante from "../../../infra/data_access/entities/restaurante";
import IService from "./base/iService";

export default interface IRestauranteService extends IService<Restaurante> {
}
