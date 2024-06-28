import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  @ViewChild("meuInput")
  meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild("minhaDiv")
  minhaDivEL!: ElementRef<HTMLDivElement>;
  
  updateInputText(){
    this.meuInputEl.nativeElement.value = 'Texto atualizado'
  }

  focus(){
    this.meuInputEl.nativeElement.focus()
  }

  updateDivContent(){
    this.minhaDivEL.nativeElement.textContent = "Conteudo atualizado"
  }


}
