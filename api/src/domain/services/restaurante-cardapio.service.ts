import RestauranteCardapio from "../../infra/data_access/entities/restaurante-cardapio";
import IRestauranteCardapioService from "../interfaces/iServices/iRestauranteCardapioService";
import Service from "./base/service";

export default class RestauranteCardapioService extends Service<RestauranteCardapio> implements IRestauranteCardapioService{
    adicionarSessaoCardapio(sessaoCardapio: RestauranteCardapio): Promise<RestauranteCardapio> {
        throw new Error("Method not implemented.");
    }
    adicionarProdutoSessaoCardapio(): Promise<RestauranteCardapio> {
        throw new Error("Method not implemented.");
    }
}   