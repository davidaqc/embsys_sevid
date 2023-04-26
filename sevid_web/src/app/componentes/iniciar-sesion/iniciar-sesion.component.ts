import { Component } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  constructor(private router:Router) { }

  public datosUsuario = {
    Email : "",
    Password : ""
  }

  verificarCredenciales():void {

    //if (this.datosUsuario.Email === "david" && this.datosUsuario.Password === "0123"){
    //  alert(this.datosUsuario.Email);
    //}
    this.router.navigate(["/menu"]);
    
  }

}
