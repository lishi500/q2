/**
 * Created by t5236496 on 8/06/2017.
 */
import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-type':'application/json'});

  constructor(private http: Http){}
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    // return Promise.resolve(HEROES);
  }
  getHeroesSlow(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Hero)
          .catch(this.handleError);
    // return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
  update(hero: Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
  }  
  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
