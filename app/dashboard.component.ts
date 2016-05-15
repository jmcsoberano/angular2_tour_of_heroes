import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Heroe } from './heroe';
import { HeroeService } from './heroe.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Heroe[] = [];
  
constructor(
  private router: Router,
  private heroService: HeroeService) {
}
  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
  
  gotoDetail(hero: Heroe) {
  let link = ['HeroDetail', { id: hero.id }];
  this.router.navigate(link);
}

  
}

