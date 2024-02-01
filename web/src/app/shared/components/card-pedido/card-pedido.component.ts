import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrls: ['./card-pedido.component.css']
})
export class CardPedidoComponent {

  @Input() id: number
  @Input() cliente: string 
  @Input() status: string
  
}
