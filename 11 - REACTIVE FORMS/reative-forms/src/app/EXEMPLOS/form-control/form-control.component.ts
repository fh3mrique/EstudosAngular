import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
    
    nome = new FormControl('Valor inicial', [Validators.required])

    ngOnInit(): void {
      console.log(this.nome)
    }

    mostrarStatus(){
      console.log(this.nome)
    }

    alterarValor(){
      this.nome.setValue('Alterado!!!');
    }

    inputAlterado(){   
      console.log(this.nome.value)
    }
}