import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-odenar',
  templateUrl: './odenar.component.html',
  styles: [
  ]
})
export class OdenarComponent  {


  enMayusculas:boolean = false
  ordenarPor:string = ''
  heroes:Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: false,
      color: Color.verde
    }

  ]


  cambiar(){
    //if(this.enMayusculas)
    //console.log(this.enMayusculas)
    //this.enMayusculas = true
    this.enMayusculas = !this.enMayusculas
   }
   cambiarOrden(valor:string){
     this.ordenarPor = valor
   }
}

