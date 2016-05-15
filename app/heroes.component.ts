import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Heroe } from './heroe';
import { HeroeDetalleComponent } from './heroe-detalle.component';
import { HeroeService } from './heroe.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: [HeroeDetalleComponent]
})
export class HeroesComponent implements OnInit {
  
    // title = 'Tour de heroes';
    heroes: Heroe[];
    heroeSeleccionado: Heroe;

  constructor(
    private router: Router,
    private heroeService: HeroeService) { }
    
    getHeroes() {
      // this.heroeService.getHeroesSlowly().then(heroes => this.heroes = heroes);
      this.heroeService.getHeroes().then(heroes => this.heroes = heroes);
      // this.heroes = this.heroeService.getHeroes();
    }

    ngOnInit() {
      this.getHeroes();
    }    
    
    onSelect(heroe: Heroe) { this.heroeSeleccionado = heroe; }
    
    gotoDetail() {
      this.router.navigate(['HeroDetail', { id: this.heroeSeleccionado.id }]);
    }    
    
}
