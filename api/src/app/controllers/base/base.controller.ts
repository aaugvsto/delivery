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
                const entities = await this.entityService.getAll();

                if(entities.length === 0)
                return res.status(204);

                return res.status(200).json(entities);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.post("/", async (req, res) => {
            try {
                let entity: T = req.body;

                if(entity.id)
                return res.status(400).json({message: "Não é permitido enviar um id na criação de um novo registro"});

                await this.entityService.createOrUpdate(entity);
                return res.status(200).json(entity);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.put("/", async (req, res) => {
            try {
                let entity: T = req.body;

                if(!entity.id)
                return res.status(400).json({message: "É necessário enviar um id para atualizar um registro"});

                await this.entityService.createOrUpdate(entity);
                return res.status(200).json(entity);
            } catch (error) {
                res.status(500).json(error);
            }
        });

        this.router.delete("/:id", async (req, res) => {
            try {
                if(!req.params.id)
                return res.status(400).json({message: "É necessário enviar um id para deletar um registro"});

                this.entityService.delete(Number.parseInt(req.params.id));
                return res.status(204);
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