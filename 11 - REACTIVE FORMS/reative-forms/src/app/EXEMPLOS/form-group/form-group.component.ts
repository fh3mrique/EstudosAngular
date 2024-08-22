import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])
    })
  })

  constructor(){
    console.log(this.pessoaForm);

    console.log(this.pessoaForm.get('nome'));

    this.pessoaForm.valueChanges.subscribe((value) => {
      console.log('Pessoa form', value)
    })
  }

  get nome(): FormControl{
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl{
    return this.pessoaForm.get('email') as FormControl;
  }

  onFormSubmit(){
    console.log('onFormSubmit')
    console.log(this.pessoaForm.value)
  }

  alteracaoTotal(){
    console.log('alteracaoTotal')
    this.pessoaForm.setValue({
      nome: 'Nome alt',
      email: 'Email alt',
      endereco: {
        rua: 'Rua alt',
        numero: 'Numero alt',
      }
    })
  }

  alteracaoParcial(){
    this.pessoaForm.patchValue({
      nome: 'Nome alt',
      endereco: {
        rua: 'Rua alt'
      }
    })
  }
}
