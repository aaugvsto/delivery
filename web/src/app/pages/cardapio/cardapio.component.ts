import { Component, OnInit } from '@angular/core';
import { CardapioService } from './services/cardapio.service';
import { Observable } from 'rxjs';
import { SessaoCardapio } from 'src/app/shared/models/sessao-cardapio.model';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  colunas: SessaoCardapio[];
  loading: boolean = true;

  constructor(
    public cardapioService: CardapioService
  ){}

  ngOnInit(): void {
    this.cardapioService.getColunas();

    this.cardapioService.colunas$
      .subscribe((valor: SessaoCardapio[]) => {
        this.colunas = valor;
        console.log(this.colunas);
      });
  }

  openPopUpCriarEditarColuna() {
    this.cardapioService.openPopUpCriarEditarSessao();
  }
}
