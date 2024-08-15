import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]', // Indica que a diretiva será aplicada a elementos com o seletor 'appInvalidTextValidator'
  providers:[
    {
      provide: NG_VALIDATORS, // Define que a diretiva faz parte do grupo de validadores do Angular
      useExisting: InvalidTextValidatorDirective, // Faz referência à própria classe do validador
      multi: true // Permite que vários validadores sejam aplicados ao mesmo controle
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator{

  // Método que realiza a validação
  validate(control: AbstractControl): ValidationErrors | null {
    // Verifica se o valor do controle contém a palavra "Filipe"
    const isValid = !control.value.includes('Filipe');

    // Retorna null se o valor for válido, ou um objeto de erro se for inválido
    return isValid ? null : {'InvalidText': true};
  }
}
