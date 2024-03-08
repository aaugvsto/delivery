import { IRouter } from "express";
import IService from "../../../domain/interfaces/iServices/base/iService";
import Entity from "../../../infra/data_access/entities/base/entity";
import IController from "../../../domain/interfaces/iController/base/iController";

export default abstract class Controller<T extends Entity> implements IController<T> {

    constructor(
        protected router: IRouter, 
        protected entityService: IService<T>
    ){
        this.setBaseRoutes();
    }

    setBaseRoutes = () => {
        this.router.get("/", async (req, res) => {
            try {
                let restaurantes = await this.entityService.getAll();
                res.status(200).json(restaurantes);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.post("/", async (req, res) => {
            try {
                let entity: T = req.body;
                await this.entityService.create(entity);
                res.status(200).json(entity);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.put("/", async (req, res) => {
            try {
                let restaurantes = await this.entityService.getAll();
                res.status(200).json(restaurantes);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.delete("/", async (req, res) => {
            try {
                let restaurantes = await this.entityService.getAll();
                res.status(200).json(restaurantes);
            } catch (error) {
                res.status(500).json(error);
            }
        });
    }

    abstract setCustomRoutes(): void;

    getRoutes = (): IRouter => {
        return this.router;
    }
}