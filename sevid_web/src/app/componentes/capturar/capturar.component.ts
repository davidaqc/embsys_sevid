import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-capturar',
  templateUrl: './capturar.component.html',
  styleUrls: ['./capturar.component.css']
})
export class CapturarComponent {

  constructor(public api: ServiciosService) { }

  tomarFoto() {
    //alert("Esperando que la fotografía sea tomada...");

    this.api.TomarFoto()
      .subscribe(response => {


      }, (error: any) => {
        //alert("Error al intentar conectar con el server");
      });
  }



}


