import { Injectable } from '@angular/core';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroeService {
    getHeroes() {
        return Promise.resolve(HEROES);
        // return HEROES;
    }

    getHeroe(id: number) {
    return Promise.resolve(HEROES).then(
        heroes => heroes.filter(hero => hero.id === id)[0]
    );
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Heroe[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );

    }
    
    
    
}    
