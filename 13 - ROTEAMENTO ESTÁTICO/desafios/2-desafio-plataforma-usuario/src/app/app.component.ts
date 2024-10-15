import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InitialComponent } from "./components/initial/initial.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitialComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2-desafio-plataforma-usuario';
}
