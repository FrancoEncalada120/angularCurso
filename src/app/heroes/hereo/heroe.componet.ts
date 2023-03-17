import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.componet.html'
})
export class heroecomponet {
    nombre: string = 'Iroman';
    edad:number = 10;

    obternerNombre(){
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 20;
    }

}


