import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrls: ['./mark-as-touched.component.css']
})
export class MarkAsTouchedComponent implements OnInit {

  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Touched PessoaForm', this.pessoaForm.touched)
      console.log('Touched NomeControl', this.pessoaForm.get('nome')?.touched)
      console.log('Touched EmailControl', this.pessoaForm.get('email')?.touched)
    }, 4000)
  }


  markNomeAsTouched() {
    console.log('markNomeAsTouched')
    /* onlySelf: true => o Campo será marcado no tocado, porem o o formulario não.  */
    /* this.pessoaForm.get('nome')?.markAsTouched({ onlySelf: true }) */
    this.pessoaForm.get('nome')?.markAsTouched()
  }
}
