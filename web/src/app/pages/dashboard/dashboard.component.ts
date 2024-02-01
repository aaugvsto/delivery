import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/shared/models/column';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public colunas: Column[] = [
    {
      nome: 'Novo',
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        }
      ]
    },
    {
      nome: 'Em preparação',
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        }
      ]
    },
    {
      nome: 'Enviado',
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        }
      ]
    },
    {
      nome: 'Entregue',
      pedidos: [
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        },
        {
          id: 1,
          cliente: 'João',
          status: 'Novo'
        }
      ]
    }
  ]

  constructor() { }
  
  ngOnInit(): void {
  }
}
