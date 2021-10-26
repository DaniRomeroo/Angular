import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  personaje1: Personaje = {
    nombre: 'Goku',
    poder: 100
  }
  personaje2: Personaje = {
    nombre: 'Vegeta',
    poder: 100
  }
  personaje3: Personaje = {
    nombre: 'Freezer',
    poder: 95
  }
  personaje4: Personaje = {
    nombre: 'Trunks',
    poder: 85
  }
  personaje5: Personaje = {
    nombre: 'Krilin',
    poder: 90
  }

  personajes: Personaje[] = [this.personaje1, this.personaje2, this.personaje3, this.personaje4, this.personaje5];


  agregarPersonaje(data: Personaje){
    this.personajes.push(data);
  }

}