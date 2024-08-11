import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status-pipe';
import { TrucantePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TrucantePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
