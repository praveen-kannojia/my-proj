import {Component, Input,Output, EventEmitter} from '@angular/core'
import {Hero} from './hero';

 
  

@Component({
    selector:'my-hero-detail',
    template: `
    <div>{{title}}</div>
    <div *ngIf="localHero">
            <div>
                <h2>{{localHero.name}} details!</h2>            
            </div>
            <div (click)='onClick()'>
                <label>id: </label>{{localHero.id}}            
                <label>name: </label>
                <input [(ngModel)]="localHero.name" placeholder="name" >

            </div>
        </div>
    `
})

export class HeroDetailComponent{
    title = 'Hero details'; 
    @Input() localHero : Hero;

    @Output() heroClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick() : void {
        this.heroClicked.emit(`this rating is clicked!`);
    }
}