/**
 * Created by nnduc on 316//16.
 */
import {Component} from 'angular2/core';
import {Hero} from "../models/hero";


@Component({
	selector: 'hero-detail',
	templateUrl:'app/modules/heroes/views/hero.html',
	inputs: ['hero']
})
export class HeroDetailComponent {
	hero: Hero;
}