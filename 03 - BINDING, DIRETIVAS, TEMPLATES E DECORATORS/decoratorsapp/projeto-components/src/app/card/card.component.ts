import { Component, Input } from '@angular/core';


function handlePlanType(value: string){
  console.log('Chamou')
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({required:true}) planPrice: number = 0;
  
  private _plantype: string = '';

  @Input({
    alias:'plantypeAlias', 
    transform: (value: string)=> handlePlanType(value)})  
  plantype: string = '';

  buttonCliked = (valueEmitted: boolean) =>{
    console.log('buttonCliked ', valueEmitted);
    console.log('planType', this.plantype);
  }
}
