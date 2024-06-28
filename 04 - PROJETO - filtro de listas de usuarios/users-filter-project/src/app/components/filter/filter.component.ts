import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output('onFilter')
  onFilterEmitt = new EventEmitter<IFilterOptios>();

  onFilter(){
    console.log(this.filterOptions)
    this.onFilterEmitt.emit(this.filterOptions)
  }

  
  /* dataSelected(date: Date){
    console.log(date);
  } */
}
