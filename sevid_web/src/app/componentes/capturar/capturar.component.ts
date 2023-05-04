import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-capturar',
  templateUrl: './capturar.component.html',
  styleUrls: ['./capturar.component.css']
})
export class CapturarComponent {

  constructor(public api: ServiciosService) { }

  public imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Grib_skov.jpg";

  tomarFoto() {
    this.api.TomarFoto()
      .subscribe((response: any) => {

        alert("Esperando que la fotografía sea tomada...");
        if (response.Imagen){
          alert("Imagen guardada correctamente");
        }else{
          alert("Error al guardar la imagen");
        }

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }

  visualizarFoto() {
    this.api.VisualizarFoto()
      .subscribe((response: Blob) => {
      
        alert("Esperando recibir la fotografía...");
        if (response.type == 'image/jpg'){
          const blob = new Blob([response], { type: 'image/jpg' });
          this.imgUrl = URL.createObjectURL(blob);
          window.open(this.imgUrl);
        }else{
          alert("La imagen no existe");
        }

      }, (error: any) => {
        alert("Error al intentar conectar con el server: " + error.message)
      });
  }

}


