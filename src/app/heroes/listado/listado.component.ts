import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent{

  heroes: string[] = ['Spider-man', 'Superman', 'IronMan', 'Capitan America', 'Thor'];
  borrado: string = "";
  seleccionado: string = "";

  borrarHeroe(){
    if(this.heroes.length == 0){
      this.borrado = "";
    }else {
      this.borrado = this.heroes[0];
    }
    this.heroes.splice(0, 1);
  }

  seleccionarHeroe(heroe: string){
    this.seleccionado = heroe;
  }

  reset(){
    this.heroes = ['Spider-man', 'Superman', 'IronMan', 'Capitan America', 'Thor'];
    this.borrado = "";
    this.seleccionado = "";
  }

}
