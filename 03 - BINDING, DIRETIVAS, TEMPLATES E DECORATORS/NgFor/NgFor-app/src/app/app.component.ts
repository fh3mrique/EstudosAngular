import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listPeople = [
    {name: 'Filipe Lima', age: 29},
    {name: 'Fulano Lima', age: 23},
    {name: 'Naruto uzumaki', age: 55},
    {name: 'Filipe petrs', age: 87}
  ]

  personIndexSelect: number | undefined;

  selectPerson = (index: number) =>{
      this.personIndexSelect = index;
  }
}
