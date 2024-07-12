import { outputAst } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
 
  @ViewChild('minhaDiv')
  divEl!: ElementRef<HTMLDivElement> 

  /* _elRef é uma injeção de depedencia para todo html do componente*/
  constructor(private readonly _elRef: ElementRef){}

  ngOnInit() {
    console.log(this._elRef);
    const outraDiv = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    outraDiv.textContent = 'Sou a outra div';
    outraDiv.style.backgroundColor = 'blue';
    outraDiv.style.color= 'white';

    outraDiv.addEventListener('click', ()=>{
      console.log('cliquei na div');
    })

    console.log(outraDiv);
  }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'sou uma div';
    this.divEl.nativeElement.classList.add('minha-classe')
  }

  createElement(){
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou uma nova div';
    //esse estilo só vai funcinar em css global
    //pq a api do dom tem acesso golbal é o _elRef não
    novaDiv.classList.add('bg-red');

    this._elRef.nativeElement.appendChild(novaDiv)
  }
}
