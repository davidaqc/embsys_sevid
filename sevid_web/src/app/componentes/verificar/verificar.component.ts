import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent {

  constructor(public api: ServiciosService) { }

  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  mostrarCarga: boolean = false;

  enviarImagen() {

    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('image', this.selectedFile, 'imagen.jpg');

      // Lógica para enviar el archivo al API
      this.mostrarCarga = true;
      this.api.EnviarImagen(uploadData)
      .subscribe((response: any) => {

        this.mostrarCarga = false;
        alert(response.mensaje);

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
      
    } else {
      this.mostrarCarga = false;
      alert("No se ha seleccionado ningún archivo.");
    }

  }

  utilizarPrecargada() {

    this.mostrarCarga = true;
    this.api.GenerarDatos()
      .subscribe((response: any) => {

        this.mostrarCarga = false;
        if (response.Datos != "Error") {
          alert("Datos generados exitosamente");
        } else {
          alert("Error: No se pudo abrir la imagen");
        }

      }, (error: any) => {
        this.mostrarCarga = false;
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }


}
