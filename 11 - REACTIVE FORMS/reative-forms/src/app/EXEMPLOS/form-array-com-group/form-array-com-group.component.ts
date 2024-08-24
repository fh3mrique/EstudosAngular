import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-com-group',
  templateUrl: './form-array-com-group.component.html',
  styleUrls: ['./form-array-com-group.component.css']
})
export class FormArrayComGroupComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        banda: new FormControl('', [Validators.required]),
      })
    ]),
  });

  constructor() {
    console.log(this.musicasForm);
  }


  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionarMusica(){
    this.musicas.push(new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      banda: new FormControl('', [Validators.required]),
    }));
  }

  removerMusica(musicaIndex: number){
    this.musicas.removeAt(musicaIndex);
  }
}
