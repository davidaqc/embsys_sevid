import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-capturar',
  templateUrl: './capturar.component.html',
  styleUrls: ['./capturar.component.css']
})
export class CapturarComponent {

  constructor(public api: ServiciosService) { }

  imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Grib_skov.jpg";
  mostrarCarga: boolean = false;

  tomarFoto() {

    this.mostrarCarga = true; // variable booleana para mostrar la vista de espera
    this.api.TomarFoto()
      .subscribe((response: any) => {

        this.mostrarCarga = false; // Ocultar la vista de espera cuando se reciba la respuesta
        if (response.Imagen){
          alert("Imagen guardada correctamente");
        }else{
          alert("Error al guardar la imagen");
        }

      }, (error: any) => {
        this.mostrarCarga = false; // Ocultar la vista de espera en caso de error
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }

  visualizarFoto() {

    this.mostrarCarga = true;
    this.api.VisualizarFoto()
      .subscribe((response: Blob) => {
      
        this.mostrarCarga = false;
        if (response.type == 'image/jpg'){
          const blob = new Blob([response], { type: 'image/jpg' });
          this.imgUrl = URL.createObjectURL(blob);
          window.open(this.imgUrl);
        }else{
          alert("La imagen no existe");
        }

      }, (error: any) => {
        this.mostrarCarga = false;
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }

}


