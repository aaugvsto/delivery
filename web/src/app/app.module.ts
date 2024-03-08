import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FramePageComponent } from './shared/components/frame-page/frame-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardPedidoComponent } from './shared/components/card-pedido/card-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FramePageComponent,
    DashboardComponent,
    CardPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
