import express, { Express, Request, Response } from "express";
import { DataSource } from "typeorm";
import Restaurante from "../infra/data_access/entities/restaurante";
import Pedido from "../infra/data_access/entities/pedido";
import Cliente from "../infra/data_access/entities/cliente";
import RestauranteService from "../domain/services/restaurante.service";
import RestauranteRepository from "../infra/data_access/respositories/restaurante.repository";
import RestauranteController from "./controllers/restaurante.controller";

const AppDataSource = new DataSource({
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

AppDataSource.initialize().then(() => {
  console.log("Database initialized successfully!");
})
.catch((error) => {
  console.log("Database failed to initialize!");
  console.log(error);
});

const app: Express = express();
const port = process.env.PORT || 3000;

const router = express.Router();

const restauranteController = new RestauranteController(router, new RestauranteService(new RestauranteRepository(AppDataSource.getRepository(Restaurante))));

app.use(express.json());
app.use('/', restauranteController.getRoutes());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});