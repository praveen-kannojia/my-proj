import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

export class Hero{
    id: number;
    name: string;
}

const listHeroes : Hero[] = [
    {"id":1, "name": "Rockey"},
    {"id":2, "name": "Arnold"},
    {"id":3, "name": "Brown"},
    {"id":4, "name": "Mendis"},
    {"id":5, "name": "Creek"}
]


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>

        <div *ngIf="selectedHero">
            <div>
                <h2>{{selectedHero.name}} details!</h2>            
            </div>
            <div>
                <label>id: </label>{{selectedHero.id}}            
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name">

            </div>
        </div>
        
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        `,
        styles: [`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .heroes .text {
                position: relative;
                top: -3px;
            }
            .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
            `]
})

export class AppComponent {
  title = 'Tour of Heroes';  
  onSelect(h: Hero){
      this.selectedHero = h;
  }
  heroes = listHeroes;
  selectedHero : Hero = listHeroes[0];
}







