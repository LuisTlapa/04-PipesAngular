import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{


  // i18nSelect
  nombre: string = 'Luis';
  nombreMujer: string = 'Lesli'
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  borrados: any
  hombre:boolean = true
  // i18nplural
  clientes: string [] =['Luis', 'Maria', 'Lesli', 'Andres']
  clientasMapa ={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'

  }
  borrarCliente(){
    this.borrados = this.clientes.pop()
    console.log(this.borrados)
  }

  cambiarPersona(){
    this.nombre = 'Lesli'
    this.genero = 'femenino';
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Abraham',
    edad: 35,
    direccion:'Xalapa, Veracruz'
  }

  // JsonPipe

  heroes = [
    {
    nombre: 'Superman',
    vuela: true
    },
    {
    nombre:'Robin',
    vuela: false
    },
    {
    nombre:'Spiderman',
    vuela: true
    }
  ]

  //Async pipe
  miObservable = interval(5000)

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
    resolve("Tenemos Datos de promesa");
  },3500);
})
}
