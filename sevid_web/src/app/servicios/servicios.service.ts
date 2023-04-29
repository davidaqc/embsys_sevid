import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  
  url: string = "https://192.168.1.155:4443/";

  TomarFoto() {
    let direccion = this.url + "tomar_foto";
    console.log("TomarFotoServicio");
    return this.http.get(direccion);
  }

}
