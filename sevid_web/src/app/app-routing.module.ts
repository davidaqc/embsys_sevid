import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes para manejar las rutas
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CapturarComponent } from './componentes/capturar/capturar.component';

const routes: Routes = [
  // Rutas
  {path: '', redirectTo:'login', pathMatch:'full'}, // ruta por defecto
  {path:'login', component:IniciarSesionComponent},
  {path:'menu', component:MenuComponent},
  {path:'capturar', component:CapturarComponent},
  {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exportar todos los componentes que estan en router
export const routingComponents = [IniciarSesionComponent, NavbarComponent, MenuComponent, CapturarComponent]