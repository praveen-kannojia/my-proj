import { Component,OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import { HeroService } from './hero.service';


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
    styleUrls : ['app/app.component.css'],
    providers: [HeroService]
          
})

export class AppComponent implements OnInit {

    constructor(private heroService: HeroService) { 

    }

    ngOnInit() : void{
        this.getHeroes();
    }

      getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


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







