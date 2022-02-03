import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    // si nombre no tiene nada, .trim() para borrar espacios en blanco, .length para ver la cantidad de carácteres que tiene. Si es igual a 0 salta el método.

    if(this.nuevo.nombre.trim().length===0){
      return;
    }

    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo)
   
    this.nuevo={
      nombre:'',
      poder:0
    }

    
  }

}
