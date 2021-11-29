import { Component, } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'Luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'Luis aBraham';
  fecha: Date = new Date(); // Fecha del dia
}
