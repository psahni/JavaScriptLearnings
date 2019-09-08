

Testing the service
Testing the component

- HeroesComponent has a dependency of HeroesService

- We need to mock the service

- mockHeroSvc = jasmine.createSpyObj(['getHeros', 'addHero']);

- component = new HeroesComponent(mockHeroSvc);

- Arrange Act Assert

- Mocking Subscription to a service method that returns observable
    mockHeroSvc.deleteHero.and.returnValue(of(true)) <-- import it from rxjs

- Test the interaction between component and service.
  toHaveBeenCalled
  toHaveBeenCalledWith

4. Shallow Integration Tests
- TestBed
- Ignore child directives
- Testing templates
- Dealing with child directives
- Open the console of the Karma runner browser
- // concept of zone.js

* The Test Bed


* No Error schema
To ignore unknown element or unknown attribute
* so i am updatinfdkln
this is something good
