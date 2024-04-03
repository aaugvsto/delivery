import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FramePageComponent } from './shared/pages/frame-page/frame-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetalhesDasboardComponent } from './pages/detalhes/detalhes.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: 'painel-pedidos', 
    component: DashboardComponent
  },
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: 'detalhes', component: DetalhesDasboardComponent},
      {path: 'cardapio', component: CardapioComponent},
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
