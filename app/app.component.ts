import { Component } from '@angular/core';

import { Heroe } from './heroe';
import { HeroeDetalleComponent } from './heroe-detalle.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>Mis Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let heroe of heroes" 
            [class.selected]="heroe === heroeSeleccionado"
            (click)="onSelect(heroe)">
            <span class="badge">{{heroe.id}}</span> {{heroe.nombre}}
        </li>
    </ul>    
    <mi-heroe-detalle [heroe]="heroeSeleccionado"></mi-heroe-detalle>
  `,
styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
directives: [HeroeDetalleComponent]
})
export class AppComponent {
    title = 'Tour de heroes';
    public heroes = HEROES;
    
    heroeSeleccionado: Heroe;
    
    onSelect(heroe: Heroe) { this.heroeSeleccionado = heroe; }
    

}

var HEROES: Heroe[] = [
  { "id": 11, "nombre": "Mr. Nice" },
  { "id": 12, "nombre": "Narco" },
  { "id": 13, "nombre": "Bombasto" },
  { "id": 14, "nombre": "Celeritas" },
  { "id": 15, "nombre": "Magneta" },
  { "id": 16, "nombre": "RubberMan" },
  { "id": 17, "nombre": "Dynama" },
  { "id": 18, "nombre": "Dr IQ" },
  { "id": 19, "nombre": "Magma" },
  { "id": 20, "nombre": "Batman" }
];  
