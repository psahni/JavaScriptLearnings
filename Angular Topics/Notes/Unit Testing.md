
Testing and unit testing overview
Tools and techniques

Isolated unit tests
Integration tests
Testing DOM interaction and routing components
Advance topics

Why - To increase the quality of the software.

Angular has Isolated and integration tests
No e2e tests

* Integration and functional tests involves testing a component interaction with the services
* Unit testing involves testing a individual component or service.
* Angular integration tests - When we test a component with its template. Now is it a unit test or a integration test, in official terms of angular, this is an integration test.



https://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html



https://codecraft.tv/courses/angular/unit-testing/asynchronous/


async will allow the next test not to start until the async finishes all it's tasks. What async does is wrap the callback in a Zone, where all asynchronous tasks (e.g. setTimeout) are tracked. Once all the asynchronous tasks are complete, then the async completes.

https://stackoverflow.com/questions/40126729/angular-2-testing-async-function-call-when-to-use


You can ignore this section if you only run tests with the CLI ng test command because the CLI compiles the application before running the tests.

* Needed for non cli env
https://angular.io/guide/testing#compile-components

I call fixture.detectChanges(), but if some asynchronous call in progress, then i would use
fixture.whenStable().then(() => {
    // ..
})


```
// IMPORTANT

const heroComponentDes = fixture.debugElement.queryAll(By.Directive(HeroComponent))

heroComponentDes[0].componentInstance.hero

heroComponentDes[0].query(By.css('button')) -> We can apply query on the component handler

heroComponentDes[0].query(By.css('button')).triggerEventHandler('click', { stopPropagation: () => {} })

```

# About compilecomponents
https://angular.io/guide/testing#calling-compilecomponents

#---------------------------------------------------------------------------------------------------------

# How to mock a service ?


let mockMyService;

mockMyService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero'])

In Test Bed configuration
provide: HeroService, useValue: mockMyService

mockMyService.getHeroes.and.returnValue(of(HEROES))

mockMyService.getHeroes returns an observable

Get the handle to service

const mySvc = TestBed.get(MyService);

This is the way we get the instance of a service inside of our testing module.

TestBed is one way to get access to the service. But there is another way. We can use inject.

describe('getHero', () => {
  it('should call get with the correct URL', inject([HeroService], (service: HeroService) => {
    service.getHero();
  }))
});
#---------------------------------------------------------------------------------------------------------

fixture.detectChanges will call ngOnInit automatically
The change detection causes life cycle events to run.

fixture.nativeElement.querySelector('h2').textContext

fixture.nativeElement - Gives the DOM query api
#--------------------------------------------------------------------------------------------------------

Shallow integration tests and Deep integration tests

In Shallow integration tests we test the component and its template. We mock the injected service and the child components.

In Deep Integration tests we test the component along with its child components.
#---------------------------------------------------------------------------------------------------------

For skipping the routerLink, we have to use NO_ERROR_SCHEMA

#---------------------------------------------------------------------------------------------------------


About Jasmine - Testing framework in javascript

① The describe(string, function) function defines what we call a Test Suite, a collection of
individual Test Specs.

② The it(string, function) function defines an individual Test Spec, this contains one or more
Test Expectations.

③ The expect(actual) expression is what we call an Expectation. In conjunction with a Matcher it
describes an expected piece of behaviour in the application.

④ The matcher(expected) expression is what we call a Matcher. It does a boolean comparison with
the expected value passed in vs. the actual value passed to the expect function, if they are false
the spec fails.


Jasmine Spy

it('canLogin returns false when the user is not authenticated', () => {
  spy = spyOn(service, 'isAuthenticated').and.returnValue(false); ③
  expect(component.needsLogin()).toBeTruthy();
  expect(service.isAuthenticated).toHaveBeenCalled(); ④
});


When we use spy, the testing env takes the control over the method being spied.

Matchers:- http://jasmine.github.io/edge/introduction.html#section-Included_Matchers

#---------------------------------------------------------------------------------------------------------


While testing components, a component should not know the inner workings of the Service. It should be completely isolated.

The goal is to test pieces of code in isolation without needing to know about the inner workings of
their dependencies.

We do this by creating Mocks; we can create Mocks using fake classes, extending existing classes or
by using real instances of classes but taking control of them with Spys.
#---------------------------------------------------------------------------------------------------------

Emitting Event from the child:-

spyOn(fixture.componentInstance, 'delete');

mockHeroSvc.getHeroes.and.returnValue(of(HEROES));

fixture.detectChanges();

const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));

(<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined); // Child emits the event.

expect(fixture.componentInstance.delete).toHaveBeenCalled(HEROES[0]);


#---------------------------------------------------------------------------------------------------------

Episode - Interacting with input Boxes [6]

Trigger Event Handler
Handling routing
/hero/1
const mockingSvc = { get: { param : { snapshot => '3'}}} // something on these lines


#---------------------------------------------------------------------------------------------------------
Router Link Testing


- Fake Router Link Directive

```
@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()'}
})

export class RouterLinkDirectiveStub {
  @Input(routerLink) linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
```

- Get the router link instance

let routerLink = fixture.debugElement.query(By.directive(RouterLinkDirectiveStub)).injector.get(RouterLinkDirectiveStub)
fixture.debugElement.query(By.css('a')).triggerEventHandler('click', null)

expect(routerLink.navigatedTo).toBe('/detail/1');

RouterTestingModule:
https://github.com/angular/angular/blob/8dec3811450b0b81a94e91748eeace62a4eb70bf/aio/content/examples/toh-pt6/src/app/hero-search/hero-search.component.spec.ts

#---------------------------------------------------------------------------------------------------------

When test is sync and code is async

- We have 'done' in Jasmine for asynchronous tests.

it('should do something...', (done) => {
  ...
  setTimeout(() => {
    done(); // What it will do, it will wait for the test to finish, until the async code is finished
  }, 300);
});

- We should not use setTimeout in tests, it will make our tests slower.

- To resolve the issue correctly, we have fakeAsync function.

  it('should...', fakeAsync(() => {

  }));

- With fakeAsync function, we can make our aysync function to behave as sync.

- tick(250) -> fast forward 250ms. You are testing an async function that executes after 250ms

- This is controlled by zone.js, so this is controlled by angular, its a utility function

#---------------------------------------------------------------------------------
https://angular.io/guide/testing#detectchanges

You will call fixture.detectChanges() to trigger Angular's change detection. But there is an essential, intermediate step.

Delayed change detection is intentional and useful. It gives the tester an opportunity to inspect and change the state of the component before Angular initiates data binding and calls lifecycle hooks.

https://angular.io/guide/testing#change-an-input-value-with-dispatchevent
#---------------------------------------------------------------------------------
