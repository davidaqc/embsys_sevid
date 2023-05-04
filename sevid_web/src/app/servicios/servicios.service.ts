import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  
  url: string = "https://127.0.0.1:4443/";

  TomarFoto() {
    let direccion = this.url + "tomar_foto";
    console.log("TomarFotoServicio");
    return this.http.get(direccion);
  }

  VisualizarFoto() {
    let direccion = this.url + "visualizar_foto";
    console.log("VisualizarFotoServicio");
    return this.http.get(direccion, { responseType: 'blob' });
  }

  GenerarDatos() {
    let direccion = this.url + "generar_datos";
    console.log("GenerarDatosServicio");
    return this.http.get(direccion);
  }

  EnviarImagen(Imagen: FormData) {
    let direccion = this.url + "enviar_imagen";
    return this.http.post(direccion, Imagen);
  }

}