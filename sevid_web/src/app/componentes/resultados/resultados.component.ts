import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(public api: ServiciosService) { }

  nombre: string = "";
  apellido1: string = "";
  apellido2: string = "";
  cedula: string = "";
  datosValidos: string = "";

  solicitarDatos() {
    this.api.SolicitarDatos()
      .subscribe((response: any) => {

        alert("Esperando que los datos sean recibidos...");
        this.nombre = response.Datos[0]
        this.apellido1 = response.Datos[1]
        this.apellido2 = response.Datos[2]
        this.cedula = response.Datos[3]
        this.datosValidos = response.Datos[4]

        /*if (response.Imagen){
          alert("Imagen guardada correctamente");
        }else{
          alert("Error al guardar la imagen");
        }*/

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }
  
}
