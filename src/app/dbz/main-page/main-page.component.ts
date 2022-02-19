import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

// personajes: Personaje[]=[];

//lo único que va a tener el main page es el valor por defecto que van a tener los personajes
 nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000
  }

  //el getter hace lo mismo que haria el constructor de abajo
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento:Personaje){
  
  //   this.personajes.push(argumento);
  // }

  //cuando se crea el componente voy a asignar los personajes el valor que tenga el servicio en la parte de los personajes. Estyo es una inyección de dependencias. Cuando se crea el componente, voy a asignar a los personajes el valor que tenga el servicio
  // constructor(private dbzService: DbzService){
  //   this.personajes=this.dbzService.personajes;
  // }

  constructor(){

  }
}
