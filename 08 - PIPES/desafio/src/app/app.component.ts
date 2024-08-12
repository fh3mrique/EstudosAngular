import { Component, OnInit } from '@angular/core';
import { OperationsService } from './services/operations.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  operationsList: OperationsListResponse = [];
  searchTerm: string = '';

  constructor(private readonly _operationsService: OperationsService) { }


  ngOnInit() {
    this.getOperations();
  }

  getOperations() {
    this._operationsService.getOperations()
    .pipe(take(1)) // simula um unsubscribe
    .subscribe((operationsListRespponse) => {
      this.operationsList = operationsListRespponse;
    });

    //para debugar se valores são chamados
    setTimeout(() =>{
      console.log(this.operationsList)
    }, 3000)
  }

}
