import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  standalone: false,
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css',
})
export class Temperatura {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;
  calculado: boolean = false;

  converter() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
    this.kelvin = this.celsius + 273.15;
    this.calculado = true;
  }
}
