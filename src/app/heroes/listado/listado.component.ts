import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe() {
    this.heroesBorrados.push( this.heroes.splice(this.heroes.length-1)[0] )
  }

}
