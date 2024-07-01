import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('meuInput')
  meuInputEL!: ElementRef<HTMLInputElement>;

  constructor(){
    console.log('No ciclo de vida do componente o constructor é iniciado primeiro que o OnInit')
  }

  ngOnInit() {
    console.log('OnInit: elementos do view estão nulos pq o não foram carregados : ' + this.meuInputEL)
  }

  ngAfterViewInit(){
    console.log('AfterViewInit: elementos do view foram carregados : ' + this.meuInputEL)
    this.meuInputEL.nativeElement.focus()
  }


  

}
