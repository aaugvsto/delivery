import { Router } from "express";
import IRestauranteService from "../../domain/interfaces/iServices/iRestauranteService";
import Restaurante from "../../infra/data_access/entities/restaurante";

export default class RestauranteController {

    constructor(
        private router: Router,
        private restauranteService: IRestauranteService,
        ) { }

    getRoutes = () => {
        this.router.get("/restaurantes", async (req, res) => {
            try {
                const restaurantes = await this.restauranteService.getAll();
                res.status(200).json(restaurantes);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        return this.router;
    }
}