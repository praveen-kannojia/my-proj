import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component'


const listHeroes : Hero[] = [
    {"id":1, "name": "Rockey"},
    {"id":2, "name": "Arnold"},
    {"id":3, "name": "Brown"},
    {"id":4, "name": "Mendis"},
    {"id":5, "name": "Creek"}
]


@Component({
    selector: 'my-app',    
    templateUrl: 'app/app.component.html',
    styleUrls : ['app/app.component.css']
    
          
})

export class AppComponent {
  title = 'Tour of Heroes';  
  onSelect(h: Hero){
      this.selectedHero = h;
      this.title = 'Tour of Heroes';  
  }
  heroes = listHeroes;
  selectedHero : Hero = listHeroes[0];

  onHeroClicked(message: string): void {
        this.title = 'Product List: ' + message;
    }
}







