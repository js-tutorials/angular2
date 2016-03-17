import {Injectable} from 'angular2/core';
import {HEROES} from "../models/mock-heroes";
import {Hero} from "../models/hero";

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	// See the "Take it slow" appendix
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
		);
	}

}