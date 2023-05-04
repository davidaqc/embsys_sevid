import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CapturarComponent } from './componentes/capturar/capturar.component';
import { VerificarComponent } from './componentes/verificar/verificar.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    NavbarComponent,
    MenuComponent,
    CapturarComponent,
    VerificarComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
