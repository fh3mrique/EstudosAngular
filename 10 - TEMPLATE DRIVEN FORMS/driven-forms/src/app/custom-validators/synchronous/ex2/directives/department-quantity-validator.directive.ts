import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartmentQuantityValidator]', // O seletor que aplicará a diretiva ao formulário
  providers: [
    {
      provide: NG_VALIDATORS, // Adiciona a diretiva ao conjunto de validadores do Angular
      useExisting: DepartmentQuantityValidatorDirective, // Refere-se à própria classe do validador
      multi: true, // Permite a aplicação de vários validadores no mesmo formulário
    }
  ],
})
export class DepartmentQuantityValidatorDirective implements Validator {

  // Método que realiza a validação
  validate(control: AbstractControl): ValidationErrors | null {
    // Verifica se o departamento é "IT" e se a quantidade excede 10 pessoas
    if(control.value.departamento === 'IT' && +control.value.quantidade > 10) {
      return { 'invalidITQuantity': true }; // Retorna um erro se a quantidade for inválida
    }

    // Verifica se o departamento é "HR" e se a quantidade excede 20 pessoas
    if(control.value.departamento === 'HR' && +control.value.quantidade > 20) {
      return { 'invalidHRQuantity': true }; // Retorna um erro se a quantidade for inválida
    }

    return null; // Retorna null se não houver erros
  }
}
