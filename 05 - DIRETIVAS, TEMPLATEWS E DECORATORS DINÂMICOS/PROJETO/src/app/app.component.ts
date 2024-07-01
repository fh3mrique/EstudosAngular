import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewInit {
  buttonList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ]

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(){
    console.log(this.buttonsEl);
    console.log(this.buttonsEl.toArray());

    const primeiroBtn = this.buttonsEl.toArray()[0];

    primeiroBtn.nativeElement.style.backgroundColor = 'blue';

    //obersevable: toda vez que um evento de remoção é disparado ele imprimi na tela os buttonsEl
    this.buttonsEl.changes.subscribe((result) =>{
      console.log(result)
    })
  }

  chargeColor(event: Event){
    console.log(event); //retorna a refeencia para o elemento que tenha o evento de (click)

    const btnElement = event.target as HTMLButtonElement

    btnElement.style.backgroundColor = 'black';
    btnElement.style.color = 'white';
  }

  resetButtons(){
    this.buttonsEl.forEach((btnEl) =>{
      console.log(btnEl);
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = '';
    })
  }

  first(){
    // const primeiro = this.buttonsEl.get(0);

    // const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');

    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro);
  }

  remove() {
    this.buttonList.shift();
  }
}
