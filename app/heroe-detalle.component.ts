import { Component, Input } from '@angular/core';

import { Heroe } from './heroe';

@Component({
  selector: 'mi-heroe-detalle',
  template: `
    <div *ngIf="heroe">
        <h2>{{heroe.nombre}} detalles!</h2>
        <div>
            <label>Id: </label>{{heroe.id}}
        </div>
        <div>
            <label>Nombre: </label>
            <input [(ngModel)]="heroe.nombre" placeholder="nombre">
        </div>
    </div>  
    `
})
export class HeroeDetalleComponent {
    @Input()
    heroe: Heroe;
}
