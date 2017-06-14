/**
 * Created by t5236496 on 14/06/2017.
 */
import {Component} from '@angular/core';
import {Hero} from './hero';
import {FormsModule} from '@angular/forms';


@Component({
  templateUrl: 'hero-form.component.html',
  styleUrls: ['hero-form.component.css']
})


export class HeroFormComponent {
  heroId = 33;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  preselectedPower = this.powers[3];
  model = new Hero(this.heroId++, 'Dr IQ', this.powers[1], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  newHero() {
    this.model = new Hero(this.heroId++, '', '');
  }
}
