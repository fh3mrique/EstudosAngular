import { Component } from '@angular/core';
import { IFilterOptios } from '../../interfaces/filter-optios.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOptions: IFilterOptios = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  statusList = [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false},
  ]

  onFilter(){
    console.log(this.filterOptions)
  }

  
  /* dataSelected(date: Date){
    console.log(date);
  } */
}
