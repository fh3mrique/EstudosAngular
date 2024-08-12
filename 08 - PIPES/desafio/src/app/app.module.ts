import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIconPipe } from './pipes/status-icon.pipe';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR')

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIconPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:  LOCALE_ID,
    useValue: "pt-BR"
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
