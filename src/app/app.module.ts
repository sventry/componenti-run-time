import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { CaricamentoComponenteRuntimeDivSpecificoComponent } from './caricamento-componente-runtime-div-specifico/caricamento-componente-runtime-div-specifico.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentePadreComponent,
    CaricamentoComponenteRuntimeDivSpecificoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
