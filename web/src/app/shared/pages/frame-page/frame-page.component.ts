import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-frame-page',
  templateUrl: './frame-page.component.html',
  styleUrls: ['./frame-page.component.css']
})
export class FramePageComponent {
  menus: MenuItem[] = [
    { nome: "Detalhes", route: "detalhes", faIcon: "fa-solid fa-gauge", novaAba: false },
    { nome: "Painel de pedidos", route: "painel-pedidos", faIcon: "fa-solid fa-table-columns", novaAba: true },
    { nome: "Cardápio", route: "cardapio", faIcon: "fa-solid fa-book-open", novaAba: false },
  ]

  constructor(config: NgbTooltipConfig) {
    config.placement = 'right'; // Defina a posição padrão dos tooltips
  }
}
