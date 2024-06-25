import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text: string = 'Filipe';
  pessoa = {
    name: 'Theo',
    age: 43
  }

  client = {
    name: 'Joaquin',
    status: 1
  }
  client2 = {
    name: 'Marge',
    status: 2
  }
  client3 = {
    name: 'Pedro',
    status: 3
  }
}
