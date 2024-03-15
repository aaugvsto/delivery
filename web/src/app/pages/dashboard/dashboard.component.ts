import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Status } from 'src/app/shared/enums/status.enum';
import { Column } from 'src/app/shared/models/column.model';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  colunas = [
    {
      idStatus: Status.Novo,
      nome: "Novo",
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.Novo
        },
        {
          id: 7,
          cliente: 'João',
          status: Status.Novo
        }
      ]
    },
    {
      idStatus: Status.EmPreparo,
      nome: "Em preparo",
      pedidos: [
        {
          id: 2,
          cliente: 'João',
          status: Status.EmPreparo
        }
      ]
    },
    {
      idStatus: Status.Enviado,
      nome: "Enviado",
      pedidos: [
        {
          id: 3,
          cliente: 'João',
          status: Status.Enviado
        },
      ]
    },
    {
      idStatus: Status.Finalizado,
      nome: "Finalizado",
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.Finalizado
        }
      ]
    }
  ]
  colunas$ = new BehaviorSubject<Column[]>(this.colunas);

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.colunas$.subscribe();
  }

  onMovePedido(id: number){
    this.http.
      put(`http://localhost:5454/pedidos/${id}/AtualizaStatus`, null)
      .subscribe((res: any) => {

        // let colunas = this.colunas;

        // let indexPedido = this.colunas
        //   .find(x => x.idStatus == (res.status - 1))
        //   ?.pedidos.findIndex(x => x.id == id)

        // let pedido = this.colunas
        // .find(x => x.idStatus == (res.status - 1))
        // ?.pedidos[indexPedido!]

        //   colunas
        //   .find(x => x.idStatus == (res.status - 1))
        //   ?.pedidos.splice(pedidoIndex!, 0)

      })
  }
}
