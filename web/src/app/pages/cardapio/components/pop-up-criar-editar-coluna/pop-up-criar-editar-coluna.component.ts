import { Component } from '@angular/core';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-pop-up-criar-editar-coluna',
  templateUrl: './pop-up-criar-editar-coluna.component.html',
  styleUrls: ['./pop-up-criar-editar-coluna.component.css']
})
export class PopUpCriarEditarColunaComponent {


  constructor(
    private cardapioService: CardapioService
  ) { }

  nome: string = '';

  submitForm() {
    this.cardapioService.adicionarSessao({id: 1, nomeColuna: this.nome, produtos: []});
  }

}
