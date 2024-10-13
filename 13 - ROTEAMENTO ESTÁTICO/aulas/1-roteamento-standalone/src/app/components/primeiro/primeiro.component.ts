import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss'
})
export class PrimeiroComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('PrimeiroComponent OnInit');
  }
  
  ngOnDestroy(){
    console.log('PrimeiroComponent Destroy');
  }
}
