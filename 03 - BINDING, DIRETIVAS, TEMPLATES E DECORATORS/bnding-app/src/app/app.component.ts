import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  inputTexto = 'TEXTO BINDING';
  isDisabled = true;

  buttonTitle = "Atributo botão binding"

  enableInput = () => {
    this.isDisabled = false;
  }

  disableInput = () => {
    this.isDisabled = true;
  }

  showLogInput = () => {
    console.log(this.inputTexto);
  }

  handleInputKeyup = (event: KeyboardEvent) =>{
      const currentText = (event.target as HTMLInputElement).value;
      console.log(currentText);
  }

  handleInputEvent = (event: Event) =>{
      const currentText = (event.target as HTMLInputElement).value;
      console.log(currentText);
  }
}
