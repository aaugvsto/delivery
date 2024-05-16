import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SessaoCardapio } from 'src/app/shared/models/sessao-cardapio.model';
import { PopUpCriarEditarColunaComponent } from '../components/pop-up-criar-editar-coluna/pop-up-criar-editar-coluna.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {

  private colunasSubject: BehaviorSubject<SessaoCardapio[]> = new BehaviorSubject<SessaoCardapio[]>([]);
  public colunas$: Observable<SessaoCardapio[]> = this.colunasSubject.asObservable();

  constructor(
    private modalService: NgbModal
  ){}


  openPopUpCriarEditarSessao() {
    this.modalService.open(PopUpCriarEditarColunaComponent, {centered: true});
  }

  adicionarSessao(sessao: SessaoCardapio) {
    const colunasAtuais = this.colunasSubject.getValue();
    colunasAtuais.push(sessao);
    this.colunasSubject.next(colunasAtuais);
  }

  getColunas(): SessaoCardapio[] {
    let columns = [
      {id: 1, nomeColuna: 'Entradas', produtos: []},
      {id: 1, nomeColuna: 'Entradas', produtos: []},
      {id: 1, nomeColuna: 'Entradas', produtos: []},
    ];
    
    this.colunasSubject.next(columns);

    return columns; 
  }
  
}