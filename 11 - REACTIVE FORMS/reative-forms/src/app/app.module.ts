import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './EXEMPLOS/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorAssincronoComponent } from './EXEMPLOS/validador-assincrono/validador-assincrono.component';
import {HttpClientModule} from '@angular/common/http';
import { FormGroupComponent } from './EXEMPLOS/form-group/form-group.component';
import { FormArrayComponent } from './EXEMPLOS/form-array/form-array.component';
import { FormArrayComGroupComponent } from './EXEMPLOS/form-array-com-group/form-array-com-group.component';
import { FormBuilderComponent } from './EXEMPLOS/form-builder/form-builder.component';
import { FormBuildExternoComponent } from './EXEMPLOS/form-build-externo/form-build-externo.component';
import { FormBuildExternoComServiceComponent } from './EXEMPLOS/form-build-externo-com-service/form-build-externo-com-service.component';
import { FormCompFilhosComponent } from './EXEMPLOS/form-comp-filhos/form-comp-filhos.component';
import { EnderecoComponent } from './EXEMPLOS/form-comp-filhos/components/endereco/endereco.component';
import { MarkAsTouchedComponent } from './EXEMPLOS/mark-as-touched/mark-as-touched.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroupComponent,
    FormBuilderComponent,
    FormBuildExternoComponent,
    FormBuildExternoComServiceComponent,
    FormBuildExternoComponent,
    FormCompFilhosComponent,
    EnderecoComponent,
    MarkAsTouchedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Precisa ter o modulo de ReactiveFormsModule para
    as diretivass do reactive forms funcionarem */
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
