import { Personaje } from './../interfaces/dbz.interface';
import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  @Input() personajes: Personaje[]=[];

  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }

  constructor(private DbzService: DbzService){}
}
