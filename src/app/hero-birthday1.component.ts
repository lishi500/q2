/**
 * Created by t5236496 on 14/06/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date:'fullDate' | uppercase }}</p>`
})

export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15);
}
