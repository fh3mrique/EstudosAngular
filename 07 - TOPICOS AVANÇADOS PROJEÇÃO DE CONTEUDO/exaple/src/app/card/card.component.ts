import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',  // Define o seletor que será usado para inserir este componente no HTML
  templateUrl: './card.component.html',  // Referencia o arquivo HTML que define o layout do componente
  styleUrls: ['./card.component.scss']  // Referencia o arquivo de estilo que define a aparência do componente
})
export class CardComponent {
    // Define uma propriedade de entrada chamada 'header' que recebe um template (obrigatório)
    @Input({required: true})
    header!: TemplateRef<any>;

    // Define uma propriedade de entrada chamada 'content' que recebe um template (obrigatório)
    @Input({required: true})
    content!: TemplateRef<any>;

    // Define uma propriedade de entrada chamada 'footer' que recebe um template (obrigatório)
    @Input({required: true})
    footer!: TemplateRef<any>;
}
