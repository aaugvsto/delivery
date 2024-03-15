import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment.dev';
import { Pedido } from '../shared/models/pedido.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(public http: HttpClient) { }


  getPedidos(): Observable<Pedido[]> {
    return this.http.get(environment.apiUrl + '/pedidos').pipe(
      map((res: any) => res as Pedido[])
    );
  }
}
