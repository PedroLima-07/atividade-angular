import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: false,
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  calculado: boolean = false;

  calcular() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    this.calculado = true;
  }
}