import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({required:true}) planPrice: number = 0;
  
  private _plantype: string = '';

  @Input('plantypeAlias') 
  set plantype(value: string){
    this._plantype = value.toUpperCase();
  }

  get plantype(): string{
    return this._plantype;
  }


  buttonCliked = (valueEmitted: boolean) =>{
    console.log('buttonCliked ', valueEmitted);
    console.log('planType', this.plantype);
  }
}
