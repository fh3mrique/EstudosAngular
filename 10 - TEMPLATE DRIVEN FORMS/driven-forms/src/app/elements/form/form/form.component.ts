import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit{
  /* Acessando a instancia de form group no componente */
  @ViewChild('meuForm')
  form!: NgForm;
  
  ngAfterViewInit(): void {
    console.log(this.form)
  }

}
