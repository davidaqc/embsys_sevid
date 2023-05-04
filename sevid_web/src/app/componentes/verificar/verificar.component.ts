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

  cargarImagen() {

    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('image', this.selectedFile, this.selectedFile.name);

      // Lógica para enviar el archivo al API
      this.api.EnviarImagen(uploadData)
      .subscribe(response => {

        alert("Imagen enviada");

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
      
    } else {
      alert("No se ha seleccionado ningún archivo.");
    }
    console.log("a")

  }

  utilizarPrecargada() {
    this.api.GenerarDatos()
      .subscribe((response: any) => {

        alert("Esperando que se generen los datos...");
        if (response.Datos != "Error") {
          alert("Datos generados exitosamente");
        } else {
          alert("Error: No se pudo abrir la imagen");
        }

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }


}
