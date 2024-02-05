import Pedido from "../../infra/data_access/entities/pedido";
import IPedidoService from "../interfaces/iServices/iPedidoService";
import Service from "./base/service";

export default class PedidoService extends Service<Pedido> implements IPedidoService{

}   