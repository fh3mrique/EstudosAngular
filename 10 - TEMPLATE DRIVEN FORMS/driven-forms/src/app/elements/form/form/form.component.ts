import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  inputText: string = 'texto inicial'
  textarea: string = 'Descrição inicial'
  select: number = 1;
  radioButton : string = '1'
  checkbox: boolean = true;

  onSubmit(form: NgForm){
    /* ao enciar o form com o  'texto inicial' esse valor será um objto que ficará salvo em na prop value do dom*/
    console.log('Onsubmit: ',  form.value);

  }

  onReset(formState: NgForm){
    console.log('onReset', formState.value);
    
    formState.reset();
    
    console.log('onReset', formState.value);

  }

}
