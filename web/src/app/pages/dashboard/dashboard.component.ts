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
  
  colunas$: BehaviorSubject<Column[]> = new BehaviorSubject<Column[]>([
    { id: Status.Novo,        textoDeExibicao: "Novo",       pedidos: [] },
    { id: Status.EmPreparo,   textoDeExibicao: "Em preparo", pedidos: [] },
    { id: Status.Enviado,     textoDeExibicao: "Enviado",    pedidos: [] },
    { id: Status.Finalizado,  textoDeExibicao: "Finalizado", pedidos: [] }
  ]);

  constructor(private http: HttpClient, private pedidoService: PedidosService){
  }

  ngOnInit() {
    this.getPedidoDashboard();
    setInterval(() => this.getPedidoDashboard(), 5000)
  }

  onMovePedido(id: number){
    this.http
      .put(`${environment.apiUrl}/pedidos/${id}/AtualizaStatus`, null)
      .subscribe((res: any) => {

        let colunas = this.colunas$.getValue();
        for(let i = 0; i < colunas.length; i++){
          for(let j = 0; j < colunas[i].pedidos.length; j++){
            if(colunas[i].pedidos[j].id === id){
              let pedido = colunas[i].pedidos[j];
              pedido.status = res.status;
              colunas[i + 1].pedidos.push(pedido);
              colunas[i].pedidos.splice(j, 1);
              return this.colunas$.next([...colunas]);
            }
          }
        }
        
      })
  }

  getPedidoDashboard = async () : Promise<void> => {
    this.pedidoService.getPedidos()  
    .subscribe(pedidos => {
      let colunas = this.colunas$.getValue();
      
      pedidos.forEach(pedido => {
        let coluna = colunas.find(c => c.id === pedido.status);

        let jaExiste = coluna!.pedidos.find(p => p.id === pedido.id);
        if(coluna && !jaExiste)
        coluna.pedidos.push(pedido);
      });
      
      this.colunas$.next(colunas);
    })
  }
}
