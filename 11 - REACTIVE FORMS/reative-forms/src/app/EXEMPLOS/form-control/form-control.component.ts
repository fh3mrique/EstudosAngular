import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
    
    nome = new FormControl({value: '', disabled: true}, [Validators.required, Validators.minLength(6)])
    //nome = new FormControl('Inicial', {nonNullable: true, validators: [Validators.required], updateOn: 'blur' })

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
}
