import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';
import {PowerBoosterComponent} from './pipe-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'form', component: HeroFormComponent},
  { path: 'pipe', component: PowerBoosterComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
