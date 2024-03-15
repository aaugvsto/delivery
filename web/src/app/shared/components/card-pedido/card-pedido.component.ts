import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.css']
})
export class CardPedidoComponent {

  @Input() id: number
  @Input() cliente: string 
  @Input() status: number

  @Output() movePedido = new EventEmitter()
  
  constructor(private http: HttpClient){

  }

  moverPedido(){
    this.movePedido.emit();
  }
}
