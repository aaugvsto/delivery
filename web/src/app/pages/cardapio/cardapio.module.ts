import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopUpCriarEditarColunaComponent } from './components/pop-up-criar-editar-coluna/pop-up-criar-editar-coluna.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardapioComponent,
    PopUpCriarEditarColunaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
})
export class CardapioModule { }
