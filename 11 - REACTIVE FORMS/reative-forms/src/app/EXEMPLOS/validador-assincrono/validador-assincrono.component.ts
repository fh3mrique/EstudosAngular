import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrls: ['./validador-assincrono.component.css']
})
export class ValidadorAssincronoComponent {
  nome = new FormControl('')
}
