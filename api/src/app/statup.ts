import express, { Express } from "express";
import { DataSource } from "typeorm";
import RestauranteController from "./controllers/restaurante.controller";
import RestauranteService from "../domain/services/restaurante.service";
import Restaurante from "../infra/data_access/entities/restaurante";
import Pedido from "../infra/data_access/entities/pedido";
import Cliente from "../infra/data_access/entities/cliente";
import ClienteController from "./controllers/cliente.controller";
import PedidoController from "./controllers/pedido.controller";
import PedidoService from "../domain/services/pedido.service";
import ClienteService from "../domain/services/cliente.service.";
import cors from "cors";

export default class Startup {

    static Start = async () => {
        const database = this.getDatabase();
        await this.initDatabase(database);
        this.initRoutes(express(), database);
    }

    private static async initDatabase(databaseEngine: DataSource){ 
        await databaseEngine
            .initialize()
            .then(() => {
                console.log("Database initialized successfully!");
            })
            .catch((error) => {
                console.log("Database failed to initialize!");
                console.log(error);
            });
    }

    private static initRoutes(routesEngine: Express, databaseEngine: DataSource){
        const port = process.env.PORT || 5454;
        
        const clienteController = new ClienteController(express.Router(), new ClienteService(databaseEngine.getRepository(Cliente)));
        const pedidoController = new PedidoController(express.Router(), new PedidoService(databaseEngine.getRepository(Pedido)));
        const restauranteController = new RestauranteController(express.Router(), new RestauranteService(databaseEngine.getRepository(Restaurante)));

        routesEngine.use(cors());
        routesEngine.use(express.json())
        
        routesEngine.use('/restaurantes', restauranteController.getRoutes());
        routesEngine.use('/pedidos', pedidoController.getRoutes());
        routesEngine.use('/cliente', clienteController.getRoutes());

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
            database: "test.sqlite",
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