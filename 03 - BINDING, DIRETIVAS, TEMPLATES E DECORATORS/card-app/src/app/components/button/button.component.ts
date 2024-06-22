import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({alias: 'text', required: true}) buttonText: string = '';
  @Input({alias: 'style', required: true}) buttonStyle: 'white' | 'purple' = 'white';

  @Input('disabled') isDisabled: boolean = false;

  @Output('cliked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked = () =>{
    this.buttonClickedEmitt.emit()
  }
}
