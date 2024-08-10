import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
   // Captura o template com o identificador 'meuTemplate' que é passado para o componente
   @ContentChild('meuTemplate')
   content!: TemplateRef<any>;
}
