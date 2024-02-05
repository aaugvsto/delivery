import Controller from "./base/base.controller";
import IService from "../../domain/interfaces/iServices/base/iService";
import { IRouter } from "express";
import Cliente from "../../infra/data_access/entities/cliente";

export default class ClienteController extends Controller<Cliente> {

    constructor(
        router: IRouter,
        service: IService<Cliente>
    ) {
        super(router, service);
        this.setCustomRoutes();
    }

    setCustomRoutes = (): void => {
    }
}