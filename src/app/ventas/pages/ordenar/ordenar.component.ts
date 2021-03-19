import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenador',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayus:boolean = false;
  ordenarPor: string = '';
  heroes:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color:Color.verde
    },
  ]
  cambiarMayus(){
    if(!this.enMayus){
      this.enMayus = true
    }else{
      this.enMayus = false;
    }
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor);
  }

}
