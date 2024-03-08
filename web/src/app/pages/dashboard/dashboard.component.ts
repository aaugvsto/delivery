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
  
  colunas: Column[] = [
    {
      nome: Status.Novo,
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.Novo
        }
      ]
    },
    {
      nome: Status.EmPreparo,
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.EmPreparo
        }
      ]
    },
    {
      nome: Status.Enviado,
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.Enviado
        },
      ]
    },
    {
      nome: Status.Finalizado,
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: Status.Finalizado
        }
      ]
    }
  ]

  popout$ = new BehaviorSubject<number>(0);

  constructor() { }
  
  ngOnInit(): void {
    console.log(this.colunas)
  }
}
