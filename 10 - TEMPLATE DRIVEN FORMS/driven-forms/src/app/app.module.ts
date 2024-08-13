import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormComponent } from './elements/form/form/form.component';
import { NgModelGroupComponent } from './elements/ng-model-group/ng-model-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TextareaComponent,
    InputTextComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    NgModelGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
