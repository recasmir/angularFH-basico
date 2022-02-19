import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//queremos manipular data mediante el servicio, no mediante los componentes
//Queremos hacer más seguro el acceso a los personajes, no queremos que ningún otro componente los modifique. Añadimos private antes del nombre del arreglo. No se va a ver desde fuera

@Injectable()

export class DbzService{

    private _personajes:Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:9000
        }
      ]
//las llaves porque es un arreglo y el operador spread separa los elementos independientes que tiene el arreglo y retorna uno nuevo. Así no romple los personajes de arriba.
get personajes(): Personaje[]{
  return [...this._personajes];
}

constructor(){
  
}

//tenemos que hacer referencia a la propiedad privada que es donde lo queremos grabar. No referencia al getter
agregarPersonaje(personaje:Personaje){
  this._personajes.push(personaje);
}
}