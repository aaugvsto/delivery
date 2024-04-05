import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessaoCardapio } from 'src/app/shared/models/sessao-cardapio.model';
import { PopUpCriarEditarColunaComponent } from '../components/pop-up-criar-editar-coluna/pop-up-criar-editar-coluna.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {

  adicionarSessao$ = new Observable<SessaoCardapio>();
  colunas$ = new Observable<SessaoCardapio[]>((sub) => {
    setTimeout(() => {
      sub.next(this.getColunas());
    }, 1000);
  });


  constructor(
    private modalService: NgbModal
  ){}


  openPopUpCriarEditarSessao() {
    this.modalService.open(PopUpCriarEditarColunaComponent, {centered: true});
  }

  adicionarSessao(sessao: SessaoCardapio) {
    //this.colunas$.next([...this.colunas$.value, sessao]);
  }

  getColunas(): SessaoCardapio[] {
    return [
      {id: 1, nomeColuna: 'Entradas', produtos: []},
      {id: 1, nomeColuna: 'Entradas', produtos: []},
      {id: 1, nomeColuna: 'Entradas', produtos: []},
    ]
  }
  
}