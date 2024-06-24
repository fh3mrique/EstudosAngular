import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Filipe'

  handleInputChange = (event: any) =>{

    this.name = event
  }
}
