import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    ButtonComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule
    
  ],
  exports: [
    ButtonComponent,
    LoadingComponent,
  ]
})
export class SharedModule { }
