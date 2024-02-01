import { Router } from "express";
import IRestauranteService from "../../domain/interfaces/iServices/iRestauranteService";

export default class RestauranteController {
    constructor(
        private router: Router,
        public restauranteService: IRestauranteService
    ){}

    setRoutes(){
        this.router.get("/", async (req, res) => {
            try {
                const restaurantes = await this.restauranteService.getAll();
                res.status(200).json(restaurantes);
            } catch (error) {
                res.status(500).json(error);
            }
        });
    }
}