import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeroesComponent} from "../../heroes/components/heroes.component";
import {HeroService} from "../../heroes/services/hero.service";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "../../heroes/components/hero-detail.component";

@Component({
	selector: 'my-app',
	templateUrl: 'app/modules/main/views/app.component.html',
	styleUrls: ['app/modules/main/css/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])
export class AppComponent {
	title = 'Tour of Heroes';
}