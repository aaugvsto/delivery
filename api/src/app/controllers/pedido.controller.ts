import Controller from "./base/base.controller";
import Pedido from "../../infra/data_access/entities/pedido";
import { IRouter } from "express";
import IService from "../../domain/interfaces/iServices/base/iService";

export default class PedidoController extends Controller<Pedido> {

    constructor(
        router: IRouter,
        service: IService<Pedido>
    ) {
        super(router, service);
        this.setCustomRoutes();
    }

    setCustomRoutes = (): void => {
    }
}