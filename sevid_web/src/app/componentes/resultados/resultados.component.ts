import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(public api: ServiciosService) { }

  nombre: string = "Sin datos aún";
  apellido1: string = "Sin datos aún";
  apellido2: string = "Sin datos aún";
  cedula: string = "Sin datos aún";
  datosValidos: string = "Sin datos aún";
  mostrarCarga: boolean = false;

  solicitarDatos() {

    this.mostrarCarga = true;
    this.api.SolicitarDatos()
      .subscribe((response: any) => {

        this.mostrarCarga = false;
        if (response.Datos.length == 5){
          this.nombre = response.Datos[0]
          this.apellido1 = response.Datos[1]
          this.apellido2 = response.Datos[2]
          this.cedula = response.Datos[3]
          this.datosValidos = response.Datos[4]
          alert("Datos obtenidos correctamente");
        }else{
          alert("No hay datos precargados");
        }

      }, (error: any) => {
        this.mostrarCarga = false;
        alert("Error al intentar conectar con el server: " + error.message)
      });
      
  }
  
}
