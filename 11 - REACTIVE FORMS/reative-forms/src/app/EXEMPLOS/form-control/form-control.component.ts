import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { invalidTextValidator } from './invalid-text-validator';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
    
    //nome = new FormControl({value: '', disabled: true}, [Validators.required, Validators.minLength(6)])
    //nome = new FormControl('Inicial', {nonNullable: true, validators: [Validators.required], updateOn: 'blur' })
    nome = new FormControl('Inicial', [invalidTextValidator('Filipe')])

    ngOnInit(): void {
      console.log(this.nome)

      this.nome.valueChanges.subscribe(result => console.log('ValueChanges: ', result))

      this.nome.statusChanges.subscribe(result => console.log('statusChanges: ', result))
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

    desabilitar(){
      this.nome.enable()
    }
    habilitar(){
      this.nome.disable()
    }

    reset(){
      this.nome.reset('Valor reset')
    }

    setValidators(){
      //O setValidators sobreescreve os validadores pre-configurados
      this.nome.setValidators(Validators.minLength(6));
    }

    addValidator(){
      this.nome.setValidators(Validators.minLength(7));
      this.nome.updateValueAndValidity();
    }
}
