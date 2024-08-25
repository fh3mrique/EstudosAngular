import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comp-filhos',
  templateUrl: './form-comp-filhos.component.html',
  styleUrls: ['./form-comp-filhos.component.css']
})
export class FormCompFilhosComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
    })
  })

  enviar(){
    console.log(this.pessoaForm.value);
  }
}
