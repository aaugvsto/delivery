import Controller from "./base/base.controller";
import Restaurante from "../../infra/data_access/entities/restaurante";
import { IRouter } from "express";
import { CriarSessaoCardapioDTO } from "../../domain/dtos/criar-sessao-cardapio.dto";
import CardapioRestauranteSessao from "../../infra/data_access/entities/restaurante-cardapio-sessao";
import IRestauranteService from "../../domain/interfaces/iServices/iRestauranteService";
import IRestauranteCardapioService from "../../domain/interfaces/iServices/iRestauranteCardapioService";
import RestauranteCardapio from "../../infra/data_access/entities/restaurante-cardapio";
import { CriarCardapioDTO } from "../../domain/dtos/criar-cardapio";
import IRestauranteCardapioSessaoService from "../../domain/interfaces/iServices/iRestauranteCardapioSessaoService";
import RestauranteCardapioSessao from "../../infra/data_access/entities/restaurante-cardapio-sessao";

export default class RestauranteController extends Controller<Restaurante> {

    constructor(
        public router: IRouter,
        public service: IRestauranteService,
        public restauranteCardapioService: IRestauranteCardapioService,
        public restauranteCardapioSessaoService: IRestauranteCardapioSessaoService
    ) {
        super(router, service);
        this.setCustomRoutes();
    }

    setCustomRoutes = (): void => {
        this.router.post("/:id/cardapio", async (req, res) => {
            const idRestaurante = Number.parseInt(req.params.id);

            if(!idRestaurante) 
                return res.status(404);

            const dto: CriarSessaoCardapioDTO = req.body;

            const cardapio = this.restauranteCardapioService.createOrUpdate(
                new RestauranteCardapio(
                    dto.nome, 
                    idRestaurante
                )
            );

            return (await cardapio).id > 0 ? res.status(204) : res.status(200).json(cardapio);
        })

        this.router.post("/:id/cardapio/:idCardapio/criarSessaoCardapio/", async (req, res) => {
            const idRestaurante = Number.parseInt(req.params.id);
            const idCardapio = Number.parseInt(req.params.idCardapio);

            if(!idRestaurante || !idCardapio) 
                return res.status(404);

            const dto: CriarSessaoCardapioDTO = req.body;

            const sessaoCardapio = this.restauranteCardapioSessaoService.createOrUpdate(
                new RestauranteCardapioSessao(
                    dto.nome, 
                    idCardapio
                )
            );

            return !(await sessaoCardapio).id ? res.status(204) : res.status(200).json(sessaoCardapio);
        })
    }
}