import Pedido from "../../../infra/data_access/entities/pedido";
import IService from "./base/iService";

export default interface IPedidoService extends IService<Pedido> {
    AtualizaStatusPedido(id: number): Promise<Pedido | null>
}
