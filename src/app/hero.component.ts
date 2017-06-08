import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],

})

export class HeroesComponent  implements OnInit {
  title = 'Tour of heros!';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroesSlow().then(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }
}
