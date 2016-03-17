import { Component } from 'angular2/core';
import {HeroesComponent} from "../heroes/components/heroes.component";
import {HeroService} from "../heroes/services/hero.service";

@Component({
	selector   : 'my-app',
	templateUrl: 'app/modules/main/views/main.html',
	directives : [HeroesComponent],
	providers  : [HeroService]
})

export class AppComponent {
	title = 'Tour of Heroes';
}