ViewChildren & ContentChildren

ViewChildren example covered in the todo app
ViewChildren local template variable access page 190 (angular theory to practice)

ContentChildren are for ng-content

DI
	- A DI is a process through a class dependencies are injected into its constructor
	- No Provider Error if we do not register in the app module
	- Single instance
	- Singleton Pattern
	
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Displaying Data And Handling Events

1) Property Binding
		- <img [src]="imageUrl" />                        -> This syntax is shorter
		- <img src="{{ imageUrl }}"/>									-> Nothing wrong if we use this syntax
		
2) Attribute Binding
		- DOM: A tree of objects in the memory
		- HTML is markup language
		- HTML and DOM have mapping
		- <td [colspan]="colspan"></td> 									-> Now, here colspan is not in the html-dom mapping
		-  <td [attr.colspan]="colspan"></td> 				-> So we have to use this.

3)	Class binding
			<button class="btn" [class.active]="isActive">

			In Component:-
			class MyComponent {
				isActive = true;
			}
			
4) Style Binding
				<button class="btn" [style.backGroundColor]="isActive ? 'blue': 'white'"></button>
				
5) Event Binding
		- Event that are raised from the DOM.
		- Accessing the event object. (onclick)="onSave($event)"
		- Event  Bubbling. <div><btn></btn></div>. Here if div is clicked, then btn is also clicked. First btn click function will be called and then div click function will be called.
		- $event.stopPropagation()
		
6) Event Filtering
	- <input (keyup)="onKeyUp($event)" />
	- onKeyUp($event) {
					if ($event.keyCode === 13) console.log('enter was pressed')
	    }
	- We can do the same thing:- <input (keyup.enter)="onKeyUp($event)" />
	
7) Template Variables
		- $event.target.value
		- <input #email (keyup)="onKeyUp(email.value)" />
		
8) Two Way Binding
		- We should not write our code like procedural programming language.
		- <input [value]="email" (keyup)="onKeyUp()" />
		- class MyComponent {
				email = "prashant@gl.com"
				
				onKeyUp() {
					console.log(this.email);
				}
			}
		- The above is one way binding. ( Component to the view)
		
		- <input [value]="email" (keyup.email)="email =  $event.target.value; onKeyUp()" /> -> Two way binding.
		- Special Syntax for two way binding [()] -> Bananna in the box
		- <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
		- input does not have property called ngModel
		- ngModel defined in the Module called forms
		- import the forms module in app module, FormsModule
		
9) Pipes
	- We use Pipes to format data.
	- Built in pipes
	- {[ title | lowercase | uppercase }}
	- rating = 4.975 {{ rating | number: '1.2-2'}} 2 is min, 2 is max -> 4.98
	- price | currency: 'AUD': true	A$198.95 (Austrailian Doller)
	- date | date: 'shortDate', there is a datepipe class in the angular common module
	- Custom Pipes
		@Pipe({
			name: 'summary'
		})
		export class SummaryPipe implements PipeTransform {
			transform(value: string, limit?: number) {
					if (!value) {
						return null;
					}
					
					let actualLimit = limit || 50
					return str.substr(0, actualLimit) + '...';
			}
		}
	
	Hence, {{ text | summary: 10 }}
	
10) Assignment about creating favorite component.
	- isFavorite component attribute which is boolean
	- onClick function to toggle isFavorite
	- [class.glyficon-star]="isFavorite"
	- [class.glyficon]="!isFavorite"
	
11) Assignment about titlecasing
	toTitleCase(word) {
		return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
	}
	
Building Reusable Components
1) Intro: Pass Data, How to raise custom events, View encapsulation, Shadow DOM

2) Component API
	- To Make the component more reusable, you pass it some data or state.
		In angular we call it input and output properties
	
3) Input Property
4) Input Property alias
	<favorite [isFavorite]="post.isFavorite"></favorite>

	class FavoriteComponent {
		@Input('isFavorite') isSelected: boolean;
	}
	
5) Output Property

6) Passing Event Data
		<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite>
	-The subscriber of the method passed to child component is present in the parent component.
	- this.change.emit(this.isSelected)
	- When we deal with DOM events, the $event represents dom event object while when we deal with custom events, 
		this represents the data we pass.
	
7) Output Property Alias
	@Output('change') onChange = new EventEmitter();

8) Templates
- Inline template and templateUrl
- For small components prefer inline
- More than five lines of code
- All our external templates are bundled into one javascript file, "main.bundle.js", they are not separately loaded.

9) Styles
- Inline styles for external styles
- :styles[
			`color: red;
			`
`]
- The styles do not leak outside the component, they apply only to the component

10) View Encapsulation
- Shadow DOM
		Apply  Scoped Styles to  elements without bleeding out the outerworld
- el = document.querySelector('favorite');
	root = el.createShadowRoot();
	root.innerHTML=  `
		<style>h1 { color:  red}</style>
		<h1>Hello</h1>
	`
-  encapsulation: ViewEncapsulation
- Emulated | Native | None
- Default is Emulated
- Native ( Uses shadow dom of the browser, do not apply global css as well, you have to separately include it )
- None (Apply to other component also. Style Leak)

• Emulated - this is the default option and it will encapsulate the styles using the technique we
just explained above
• Native - with this option, Angular will use the Shadow DOM (more on this below)
• None - with this option set, Angular won’t encapsulate the styles at all, allowing them to leak
to other elements on the page

11) ngContent
Panel heading and panel body example

selector: 'bootstrap-panel'

<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select='.heading'></ng-content>
  </div>
  <div class="panel-body">
    <ng-content select='.body'></ng-content>
  </div>
</div>

<bootstrap-panel>
	<div class="heading">Heading</div>
	<div class="body">
		<h2></h2>
		<p>This is the content body</p>
	</div>
</bootstrap-panel>

12) ngContainer
- When we want to avoid the extra div
	<ng-container class='heading'></ng-container> 
- So if you wan to put something inside other component, using ng-content without extra markup, then you can use ngContainer.

DIRECTIVES

1) ngIf
Structural Directive because this changes the structure of the dom.
if truthy, element is added to the DOM.
if falsy, element is not added to the DOM.



Safe Traversal

const user = {
	task: {
		id: 1
	}
}

{{ user.task.id }}
{{ user.task?.id }}


2) hidden property
3) ngSwitchCase

<ul class="nav nav-pills">
  <li [class.active]="viewMode == 'map'">
    <a (click)="changeViewMode('map')">Map View</a>
  </li>
  <li [class.active]="viewMode == 'list'">
      <a (click)="changeViewMode('list')">List View</a>
  </li>
</ul>

<div [ngSwitchCase]="viewMode">
		<div *ngSwitchCase="'map'">Map Content</div>
		<div *ngSwitchCase="'list'">List Content</div>
		<div *ngSwitchDefault>No View</div>
</div>

4) ngFor
<ul>
		<li *ngFor="let course of courses; index as i">
			{{ course.name}}
		</li>
</ul>

5) ngFor and change detection

Remove an element
let index = this.courses.indexOf(course)
this.courses.splice(index, 1);

6) ngFor and TrackBy

<ul>
		<li *ngFor="let course of courses; trackCourse ">
			{{ course.name}}
		</li>
</ul>

trackCourse(index, course) {
	return course ? course.id : undefined;
}
- use only when you have complex markup.	

7) The leading asterick
*ngIf is compiled into [ngIf] by the angular

8) ngClass

9) ngStyle

<button
	[style.backGroundColor] = "canSave ? 'blue' : 'grey' "
>
  Save
</button>

- To Apply Multiple Styles

<button
	[ngStyle]="{
		'backGroundColor' : canSave ? 'blue' : 'grey',
		'color': canSave ? 'white' : 'black'
	}"
>
  Save
</button>

10. Safe Traversal

const user = {
	task: {
		id: 1
	}
}

{{ user.task.id }}
{{ user.task?.id }}

CUSTOM directives

$ ng g d input-format




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- ng-template is an Angular element, and it works when it is used with a structural directive such as *ngFor and *ngIf

<div *ngIf="true else mytemplate">
  This is div
</div>

<ng-template #mytemplate>
  This is template
</ng-template>

<div *ngIf="true; then mytemplate1 else mytemplate2">
  This is div will not render
</div>

<ng-template #mytemplate1> // [ngIf]="true"
    This is template 1
  </ng-template>

<ng-template #mytemplate2> // [ngIf]="false"
  This is template 2
</ng-template>

* I tried to replace div/ng-template, but it was not working.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------