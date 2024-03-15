import Controller from "./base/base.controller";
import Pedido from "../../infra/data_access/entities/pedido";
import { IRouter } from "express";
import IService from "../../domain/interfaces/iServices/base/iService";
import IPedidoService from "../../domain/interfaces/iServices/iPedidoService";

export default class PedidoController extends Controller<Pedido> {

    constructor(
        public router: IRouter,
        public service: IPedidoService
    ) {
        super(router, service);
        this.setCustomRoutes();
    }

    setCustomRoutes = (): void => {
        this.router.put("/:id/AtualizaStatus", async (req, res) => {
            const idPedido = Number.parseInt(req.params.id)

            if(!idPedido) 
                return res.status(404)

            const pedido = await this.service.AtualizaStatusPedido(idPedido);

            return !pedido ? res.status(204) : res.status(200).json(pedido)
        })
    }
}