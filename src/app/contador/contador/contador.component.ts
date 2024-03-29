import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    
    <h1>Hola mundo - contadores</h1>

    <h1>{{titulo}}</h1>
    
    <h3>La base es {{base}}</h3>
    
    <button (click)="acumular(base)" >+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>`
})
export class ContadorComponet {
  titulo: string = 'Contador app';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += this.base;
  }

}  