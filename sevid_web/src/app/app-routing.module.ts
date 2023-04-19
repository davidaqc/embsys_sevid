import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes para manejar las rutas
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  // Rutas Cliente
  {path: '', redirectTo:'login', pathMatch:'full'}, // ruta por defecto
  {path:'login', component:IniciarSesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Exportar todos los componentes que estan en router
export const routingComponents = [IniciarSesionComponent]