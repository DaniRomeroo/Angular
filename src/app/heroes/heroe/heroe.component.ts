import { Component } from '@angular/core';

@Component({
    selector: 'heroe-component',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'IronMan';
    edad: number = 19;

    cambiarNombre(){
        this.nombre = 'Tony Stark';
    }

    cambiarEdad(){
        this.edad = 22;
    }

    reset(){
        this.nombre = 'IronMan';
        this.edad = 19;
    }

    infoConcatenado(){
        return "El nombre es: "+this.nombre+" y su edad: "+this.edad;
    }

    nombreUpper(){
        return this.nombre.toUpperCase();
    }
}