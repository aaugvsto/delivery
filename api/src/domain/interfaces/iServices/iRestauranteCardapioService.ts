import RestauranteCardapio from "../../../infra/data_access/entities/restaurante-cardapio";
import IService from "./base/iService";

export default interface IRestauranteCardapioService extends IService<RestauranteCardapio> {
    adicionarSessaoCardapio(sessaoCardapio: RestauranteCardapio): Promise<RestauranteCardapio>;
    adicionarProdutoSessaoCardapio(): Promise<RestauranteCardapio>;
}
