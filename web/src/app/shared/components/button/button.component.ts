import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() 
  faIcon: string

  @Input() 
  texto: string

  @Input() 
  tipo: string

  @Input() 
  class: string

}
