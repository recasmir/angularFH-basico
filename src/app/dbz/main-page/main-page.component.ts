import { DbzService } from './../services/dbz.service';
import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

personajes: Personaje[]=[];

//este es el valor por defecto que va a tener la main page
 nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:1000
  }

  //el getter hace lo mismo que haria el constructor de abajo
// get personajes():Personaje[]{
//   return this.dbzService.personajes;
// }

  agregarNuevoPersonaje(argumento:Personaje){
  
    this.personajes.push(argumento);
  }

  //cuando se crea el componente voy a asignar los personajes el valor que tenga el servicio en la parte de los personajes
  constructor(private dbzService: DbzService){
    this.personajes=this.dbzService.personajes;
  }
}
