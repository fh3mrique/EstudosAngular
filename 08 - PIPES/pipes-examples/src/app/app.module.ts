import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserStatusPipe } from './pipes/user-status-pipe';
import { TrucantePipe } from './pipes/truncate.pipe';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TrucantePipe,
    ObsComObjetoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
