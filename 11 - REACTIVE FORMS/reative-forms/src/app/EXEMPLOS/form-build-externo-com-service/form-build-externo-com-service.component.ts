import { Component, EventEmitter, Output } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';

@Component({
  selector: 'app-form-build-externo-com-service',
  templateUrl: './form-build-externo-com-service.component.html',
  styleUrls: ['./form-build-externo-com-service.component.css']
})
export class FormBuildExternoComServiceComponent {

  @Output('OnFormSubmit') onFormSubmitEmit = new EventEmitter();

  constructor(public readonly _pessoaFormControllerService: PessoaFormControllerService) 
  { }

  onFormSubmit(){
    console.log('onFormSubmit => ', this._pessoaFormControllerService.pessoaForm.value);

    this.onFormSubmitEmit.emit(this._pessoaFormControllerService.pessoaForm.value)
  }

}
