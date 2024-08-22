import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './services/user-validator.service';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrls: ['./validador-assincrono.component.css']
})
export class ValidadorAssincronoComponent {
  nome = new FormControl('', {
    asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)],
    updateOn:'blur'
  })


  constructor(private readonly _userValidatorService: UserValidatorService){};


}
