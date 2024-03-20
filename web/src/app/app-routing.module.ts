import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/pages/login.component';
import { FramePageComponent } from './shared/components/frame-page/frame-page.component';
import { DashboardComponent } from './pages/dashboard/pages/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FramePageComponent,
    children: [ {path: '', component: DashboardComponent} ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
