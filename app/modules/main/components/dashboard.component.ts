/**
 * Created by nnduc on 317//16.
 */
import { Component } from 'angular2/core';
import {HeroService} from "../../heroes/services/hero.service";
import {Hero} from "../../heroes/models/hero";
import {Router} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/modules/main/views/dashboard.component.html',
	styleUrls: ['app/modules/main/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}

	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1,5));
	}

	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}