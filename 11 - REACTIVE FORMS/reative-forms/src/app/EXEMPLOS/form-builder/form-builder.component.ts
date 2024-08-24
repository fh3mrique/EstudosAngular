import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit{
  pessoaForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.pessoaForm = this._fb.group({
      nome: ['', [Validators.required]],
      email: this._fb.control('', {validators: [Validators.required]}),

      endereco: this._fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]]
      }),

      musicas: this._fb.array([
        ['', [Validators.required]],
      ])
    })
  }
}
