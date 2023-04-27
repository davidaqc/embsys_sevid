import { Component } from '@angular/core';

@Component({
  selector: 'app-capturar',
  templateUrl: './capturar.component.html',
  styleUrls: ['./capturar.component.css']
})
export class CapturarComponent {

  tomarFoto() {
    alert("Esperando que la fotografía sea tomada...");
  }

}
