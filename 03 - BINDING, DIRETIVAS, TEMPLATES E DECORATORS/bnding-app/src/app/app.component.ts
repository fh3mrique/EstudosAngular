import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  inputTexto = 'TEXTO BINDING';
  isDisabled = true;

  enableInput = () => {
    this.isDisabled = false;
  }

  disableInput = () => {
    this.isDisabled = true;
  }

  showLogInput = () => {
    console.log(this.inputTexto);
  }
}
