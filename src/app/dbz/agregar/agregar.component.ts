
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }

  //inyectamos el servicio que nos agregará el personaje. ahora podemos usar el servicio donde queramos de este componente
constructor(private DbzService: DbzService){}



  //Ya no hace falta el EventEmitter porque agregamos el nuevo personaje a través del servicio
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    // si nombre no tiene nada, .trim() para borrar espacios en blanco, .length para ver la cantidad de carácteres que tiene. Si es igual a 0 salta el método.

    if(this.nuevo.nombre.trim().length===0){
      return;
    }

    this.DbzService.agregarPersonaje(this.nuevo);

    // console.log(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo)
   
    this.nuevo={
      nombre:'',
      poder:0
    }

    
  }

}
