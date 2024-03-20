import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Status } from 'src/app/shared/enums/status.enum';
import { Column } from 'src/app/shared/models/column.model';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  
  colunas: Column[] = [
    {
      idStatus: Status.Novo,
      nome: "Novo",
      pedidos: [
      ]
    },
    {
      idStatus: Status.EmPreparo,
      nome: "Em preparo",
      pedidos: [
      ]
    },
    {
      idStatus: Status.Enviado,
      nome: "Enviado",
      pedidos: [
      ]
    },
    {
      idStatus: Status.Finalizado,
      nome: "Finalizado",
      pedidos: [
      ]
    }
  ]

  constructor(private http: HttpClient, private pedidoService: PedidosService){
  }

  ngOnInit(): void {

    this.pedidoService.getPedidos().subscribe(pedidos => {
      pedidos.forEach(element => {
        let coluna = this.colunas.find(c => c.idStatus === element.status);
        
        if(coluna)
          coluna.pedidos.push(element);
      });
    })

  }

  onMovePedido(id: number){
    this.http
      .put(`http://localhost:5454/pedidos/${id}/AtualizaStatus`, null)
      .pipe(shareReplay())
      .subscribe((res: any) => {
        let pedido : Pedido | undefined;

        for(let i = 0; i < this.colunas.length; i++){
          let coluna = this.colunas[i];

          if(!pedido){
            pedido = coluna.pedidos.find(p => p.id === id);
          }
            
          if(pedido){
            coluna.pedidos = coluna.pedidos.filter(p => p.id !== id);
          }

          if(pedido && coluna.idStatus === res.status){
            pedido.status = res.status;
            coluna.pedidos.push(pedido);
            break;
          }
        }

      })
  }
}
