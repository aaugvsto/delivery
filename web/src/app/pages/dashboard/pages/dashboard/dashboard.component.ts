import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Status } from 'src/app/shared/enums/status.enum';
import { Column } from 'src/app/shared/models/column.model';
import { environment } from 'src/enviroment/enviroment.dev';
import { ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';

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

  colunas$: BehaviorSubject<Column[]> = new BehaviorSubject<Column[]>(this.colunas)

  constructor(private http: HttpClient, private pedidoService: PedidosService){
  }

  ngOnInit(): void {

    this.colunas$
      .subscribe()

    this.pedidoService.getPedidos()
    .pipe(shareReplay())  
    .subscribe(pedidos => {
      let colunas = this.colunas;
      pedidos.forEach(element => {
        let coluna = colunas.find(c => c.idStatus === element.status);
        
        if(coluna)
          coluna.pedidos.push(element);
      });
      this.colunas$.next(colunas);
    })

  }

  onMovePedido(id: number){
    this.http
      .put(`${environment.apiUrl}/pedidos/${id}/AtualizaStatus`, null)
      .subscribe((res: any) => {
        let colunas = this.colunas;
        for(let i = 0; i < this.colunas.length; i++){
          for(let j = 0; j < this.colunas[i].pedidos.length; j++){
            if(this.colunas[i].pedidos[j].id === id){
              let pedido = colunas[i].pedidos[j];
              pedido.status = res.status;
              colunas[i + 1].pedidos.push(pedido);
              colunas[i].pedidos.splice(j, 1);
              return this.colunas$.next(colunas);
            }
          }
        }
      })
  }
}
