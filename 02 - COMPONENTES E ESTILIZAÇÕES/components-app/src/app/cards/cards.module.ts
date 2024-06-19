import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxButtonComponent } from '../card-rox-button/card-rox-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxButtonComponent,
  ]
})
export class CardsModule { }
