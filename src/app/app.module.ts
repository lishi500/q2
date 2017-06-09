import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HeroService} from './hero.service';

import {AppComponent} from './app.component';
import { HeroesComponent  } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent ,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
