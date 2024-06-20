import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('plantypeAlias') plantype: string =  '';
  @Input({required:true}) planPrice: number = 0;

  buttonCliked = (valueEmitted: boolean) =>{
    console.log('buttonCliked ', valueEmitted);
  }
}
