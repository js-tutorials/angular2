/**
 * Created by nnduc on 316//16.
 */
import {Component} from 'angular2/core';
import {Hero} from "../models/hero";
import {RouteParams} from "angular2/router";
import {HeroService} from "../services/hero.service";
import {OnInit} from "angular2/core";


@Component({
	selector: 'my-hero-detail',
	templateUrl:'app/modules/heroes/views/hero-detail.component.html',
	styleUrls: ['app/modules/heroes/css/hero-detail.component.css'],
	inputs: ['hero']
})


export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}
