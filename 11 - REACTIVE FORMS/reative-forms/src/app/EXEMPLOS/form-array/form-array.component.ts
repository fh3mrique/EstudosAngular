import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ])
  })

  constructor(){
    console.log(this.musicasForm);
  }

  get musicas(): FormArray{
    return this.musicasForm.get('musicas') as FormArray;
  }

  addMusica(){
    
  }
}
