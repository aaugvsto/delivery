import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardPedidoComponent } from './components/card-pedido/card-pedido.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardPedidoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
