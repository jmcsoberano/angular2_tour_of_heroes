import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  selector: 'mi-heroe-detalle',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroeDetalleComponent implements OnInit {
    
    heroe: Heroe;
    
    constructor(
    private heroService: HeroeService,
    private routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHeroe(id)
        .then(hero => this.heroe = hero);
    }
    
    goBack() {
    window.history.back();
    }    
        
}
