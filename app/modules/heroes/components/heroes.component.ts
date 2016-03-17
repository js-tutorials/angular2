import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";

@Component({
	selector   : 'my-heroes',
	templateUrl: 'app/modules/heroes/views/heros.html',
	styles     : [],
	directives : [HeroDetailComponent],
	providers: [HeroService]
})
export class HeroesComponent implements OnInit{

	title = 'Tour of Heroes';
	heroes : Hero[];
	selectedHero:Hero;

	constructor(private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	selectHero(hero:Hero) {
		console.log(hero);
		this.selectedHero = hero;
	}
}