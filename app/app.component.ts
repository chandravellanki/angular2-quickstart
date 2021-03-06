import {Component} from 'angular2/core';
import { MyComponent } from '../app/components/mycomponent';
var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];


interface Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'my-app',
    template: '<mycomponent></mycomponent>',
    directives: [MyComponent] //This is important otherwise it wont work.

})

export class AppComponent{
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero;
    public onSelect(hero: Hero){
        this.selectedHero = hero;
    }
}