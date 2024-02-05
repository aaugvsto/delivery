import express, { Express } from "express";
import { DataSource } from "typeorm";
import RestauranteController from "./controllers/restaurante.controller";
import RestauranteService from "../domain/services/restaurante.service";
import Restaurante from "../infra/data_access/entities/restaurante";
import Pedido from "../infra/data_access/entities/pedido";
import Cliente from "../infra/data_access/entities/cliente";

export default class Startup {

    static Start = () => {
        const database = this.getDatabase();
        this.initDatabase(database);
        this.initRoutes(express(), database);
    }

    private static initDatabase(databaseEngine: DataSource){ 
        databaseEngine.initialize().then(() => {
            console.log("Database initialized successfully!");
          })
          .catch((error) => {
            console.log("Database failed to initialize!");
            console.log(error);
          });
    }

    private static initRoutes(routesEngine: Express, databaseEngine: DataSource){
        const port = process.env.PORT || 5454;
        const router = express.Router();

        const restauranteController = new RestauranteController(router, new RestauranteService(databaseEngine.getRepository(Restaurante)));

        routesEngine.use('/restaurantes', restauranteController.getRoutes());

        routesEngine.get("/", (req, res) => {
            res.status(200).json({ 
                app: "delivery-web-api",
                message: "Welcome to the delivery web api",
                version: "1.0.0"
            });
        });

        routesEngine.listen(port, () => {
            console.log(`[delivery-web-api]: Server is running at http://localhost:${port}`);
        });
    }

    private static getDatabase(): DataSource{
        return new DataSource({
            type: "sqlite",
            database: "test",
            entities: [
              Restaurante
              ,Pedido
              ,Cliente
            ],
            synchronize: true,
            logging: false,
          });
    }
}