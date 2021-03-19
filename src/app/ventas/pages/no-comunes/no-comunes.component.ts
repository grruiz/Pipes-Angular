import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect
  nombre:string='Rafael Galvez';
  genero:string = 'masculino';
  persona:boolean = false;
  invitacionMapa = {
    'masculino':'invitarle',
    'femenino':'invitarla'
  }
  // i18nPlural

  clientes:string[]= ['Maria','Pedro','Eduardo','Fernando'];
  clientesMapa={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarPersona(){
    // const change = this.persona ? this.nombre='Rafa' : this.nombre = 'Lula mungula'
    if(this.persona){
      this.nombre = 'Rafael Galvez';
      this.genero = 'masculino';
      this.persona=false;
    }else{
        this.nombre = 'Lula Mungula';
        this.genero = 'femenino';
        this.persona=true;
    }
  }

  borrarPersona(){
    this.clientes.pop();
  }

  //KeyValue Pype
  humano = {
    nombre:'Rafael',
    edad: 23,
    direccion:'Pintor murillo 7'
  }

  //JsonPipe
  heroes=[
    {
      name:'Spidermar',
      value:'Vuela'
    },
    {
      name:'Robin',
      value:'NoVuela'
    },
    {
      name:'Aquaman',
      value:'NoVuela'
    }
  ];


  //AsyncPipe
  miObservable = interval(1000); //Emite valores numericos 0,1,2,3,4,5,6,7,8,9

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  })
}

