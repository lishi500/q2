/**
 * Created by t5236496 on 9/06/2017.
 */
import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements  OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
      });
  }

}
