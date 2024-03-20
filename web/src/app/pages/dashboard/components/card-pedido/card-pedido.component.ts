import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../../../../shared/models/pedido.model';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html'
})
export class CardPedidoComponent {

  @Input() pedido: Pedido;

  @Output() movePedido = new EventEmitter()
  
  constructor(private http: HttpClient){

  }

  moverPedido(){
    this.movePedido.emit();
  }
}
