import Controller from "./base/base.controller";
import Restaurante from "../../infra/data_access/entities/restaurante";
import IService from "../../domain/interfaces/iServices/base/iService";
import { IRouter } from "express";

export default class RestauranteController extends Controller<Restaurante> {

    constructor(
        router: IRouter,
        service: IService<Restaurante>
    ) {
        super(router, service);
        this.setCustomRoutes();
    }

    setCustomRoutes = (): void => {
    }
}