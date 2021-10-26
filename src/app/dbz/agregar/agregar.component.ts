import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input() personajesComponenteAgregar: Personaje[] = [];

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  registrarPersonaje() {
    

    if(this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    this.nuevoPersonaje  = {
      nombre: '',
      poder: 0
    }
  }
}
