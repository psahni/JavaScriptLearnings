Angular 2
https://angular.io/guide/quickstart


Points:-
* You always import the Component symbol from the Angular core library and annotate the component class with @Component.
* @Component is a decorator function that specifies the Angular metadata for the component.
* The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
	
	ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been
	checked. It is invoked only once when the directive is instantiated.

* To generate a component:-

----------------------------------------------
$$ ng generate component heroes
----------------------------------------------

The CLI creates a new folder, src/app/heroes/ and generates the three files of 
the HeroesComponent.

[ Refer: https://angular.io/tutorial/toh-pt0 ]

Although ngModel is a valid Angular directive, it isn't available by default.
[(ngModel)] is Angular's two-way data binding syntax. It belongs to FormsModule.


It belongs to the optional FormsModule and you must opt-in to using it.

Two Decorators: - @Component, @NgModule.

Some of the metadata is in the @Component decorators that you added to your component classes. Other critical
metadata is in @NgModule decorators.The most important @NgModuledecorator annotates the top-level AppModule 
class.



AppModule:

Angular needs to know how the pieces of your application fit together and what other files and 
libraries the app requires. This information is called metadata.

Some of the metadata is in the @Component decorators that you added to your component classes. Other critical metadata is in @NgModule decorators.

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})

*ngFor:-

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

#-

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

Styles and stylesheets identified in @Component metadata are scoped to that specific component. The heroes.component.css styles apply only to the 
HeroesComponent and don't affect the outer HTML or the HTML in any other component.

<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
	 <span class="badge">{{hero.id}}</span> {{hero.name}}


*ngIf

<div *ngIf="selectedHero">

#-

The Angular class binding makes it easy to add and remove a CSS class conditionally. Just add [class.some-css-class]="some-condition" to the element you
want to style.

<li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>


# Bind the component to object like this:-

<app-hero-detail [hero]="selectedHero"></app-hero-detail>

[hero]="selectedHero" is an Angular property binding.


import { Component, OnInit, Input } from '@angular/core';

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
}


@Input is for the binding. HeroesComponent binds hero property to HeroDetailComponent.

#

Services
Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. 
They should focus on presenting data and delegate data access to a service.

Using the Angular CLI, create a service called hero

-------------------------------------------------------
$$ ng generate service hero --module=app
-------------------------------------------------------
* The --module=app option tells the CLI to provide this service in the AppModule,

@Injectable() services

The @Injectable() decorator tells Angular that this service might itself have injected dependencies. It doesn't have dependencies now but it will soon. Whether it does or it 
doesn't, it'sgood practice to keep the decorator.


# 

Inject the HeroService

There are several ways to provide the HeroService: in the HeroesComponent, in the AppComponent, in the AppModule.
Inside the providers array.

Add a private heroService parameter of type HeroService to the constructor.

.. 
import { HeroService } from '../hero.service';
..
constructor(private heroService: HeroService) { }

..
ngOnInit() {
  this.getHeroes(); // http call
}

#

HeroService.getHeroes() must have an asynchronous signature of some kind.

It can take a callback. It could return a Promise. It could return an Observable.


Observable is one of the key classes in the RxJS library.
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}


of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

#----------------------------------------------------------------------------------------------------

$$ Subscribe in HeroesComponent

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

HttpClient.get() returns an Observable. Observable is one of the key classes in the RxJS library.


constructor(public messageService: MessageService) {}
The messageService property must be public because you're about to bind to it in the template.
Angular only binds to public component properties.

#----------------------------------------------------------------------------------------------------


		ROUTING

		ng generate module app-routing --flat --module=app