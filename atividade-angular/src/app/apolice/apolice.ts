import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css',
})
export class Apolice {
  nome: string = '';
  sexo: string = 'M';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number = 0;
  calculado: boolean = false;

  calcular() {
    let percentual = 0;

    if (this.sexo === 'M' && this.idade <= 25) {
      percentual = 0.15;
    } else if (this.sexo === 'M' && this.idade > 25) {
      percentual = 0.10;
    } else if (this.sexo === 'F') {
      percentual = 0.08;
    }

    this.valorApolice = this.valorAutomovel * percentual;
    this.calculado = true;
  }
}