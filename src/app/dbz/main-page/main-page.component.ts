import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [personaje1, personaje2, personaje3, personaje4, personaje5];

  registrarPersonaje(form: NgForm) {
    
    let nuevoPersonaje: Personaje = {
      nombre: form.value.nombre,
      poder: form.value.poder
    };

    this.personajes.push(nuevoPersonaje);

  }
}

interface Personaje {
  nombre: string,
  poder: number,
};

let personaje1: Personaje = {
  nombre: 'Goku',
  poder: 100
};
let personaje2: Personaje = {
  nombre: 'Vegeta',
  poder: 100
};
let personaje3: Personaje = {
  nombre: 'Freezer',
  poder: 95
};
let personaje4: Personaje = {
  nombre: 'Trunks',
  poder: 85
};
let personaje5: Personaje = {
  nombre: 'Krilin',
  poder: 90
};