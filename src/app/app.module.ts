import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import { HeroesComponent  } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroFormComponent} from './hero-form.component';
import {HeroBirthdayComponent} from './hero-birthday1.component';
import {PowerBoosterComponent} from './pipe-test.component';

import {HeroService} from './hero.service';

import {ExponentialStrengthPipe} from './exponential-strength.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent ,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    HeroBirthdayComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
