import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import { HeroesComponent  } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent ,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeroesComponent ]
})
export class AppModule { }
