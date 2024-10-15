import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitialComponent } from "./components/initial/initial.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2-desafio-plataforma-usuario';
}
