import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnCardapio } from 'src/app/shared/models/columncardapio.model';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  
  colunas: ColumnCardapio[] = [
    {id: 1, nomeColuna: "Lanches", produtos: [ { id: 1, nome: 'Teste', descricao: 'Teste', preco: 10, ativo: true }, { id: 1, nome: 'Teste', descricao: 'Teste', preco: 10, ativo: true }, { id: 1, nome: 'Teste', descricao: 'Teste', preco: 10, ativo: true } ]},
    {id: 1, nomeColuna: "Bebidas", produtos: []},
    {id: 1, nomeColuna: "Acrescimos", produtos: []},
  ];

  constructor(private modalService: NgbModal) { }

  @ViewChild('myModal') myModal : any;

  openModal() {
      this.modalService.open(this.myModal);
  }
}
