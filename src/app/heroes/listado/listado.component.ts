import { Component } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Iroman", "Hulk"]
  HeroeBorrado: string = '';
  borrarHeroe(): void {

    this.HeroeBorrado = this.heroes.shift() || '';
    console.log(this.HeroeBorrado);

  }


}
