import Service from "./base/service";
import Cliente from "../../infra/data_access/entities/cliente";
import IClienteService from "../interfaces/iServices/iClienteService";

export default class ClienteService extends Service<Cliente> implements IClienteService{
}   