import Pedido from "../../infra/data_access/entities/pedido";
import { Status } from "../enums/status.enum";
import IPedidoService from "../interfaces/iServices/iPedidoService";
import Service from "./base/service";

export default class PedidoService extends Service<Pedido> implements IPedidoService{

    async AtualizaStatusPedido(id: number): Promise<Pedido | null>{
        let pedido = await this.get(id)

        if(!pedido) return null;

        if(pedido.status != Status.Finalizado){
            pedido.status = this.ObtemNovoStatusPedido(pedido.status);
            this.createOrUpdate(pedido)
        }
        
        return pedido;
    }

    private ObtemNovoStatusPedido(status: number){
        return status 
        = 
        status == Status.Novo 
        ? 
        Status.EmPreparo 
        : 
        status == Status.EmPreparo 
        ? 
        Status.Enviado 
        :
        status == Status.Enviado
        ?
        Status.Finalizado
        :
        status;
    }
}   