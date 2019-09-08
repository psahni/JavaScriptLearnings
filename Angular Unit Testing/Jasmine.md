* Jasmine is a javascript testing framework that supports a software development practice called
Behaviour Driven Development, or BDD for short.


* In angular the default test framework is Jasmine.

* It is used for testing javascript apps.

* The testing of javascript is bit different than testing in other languages like java.

* In Javascript you not only have a javascript  code, but you also have a DOM.

*  TDD vs BDD 

*  TDD - You test the unit of code, test against the specification, write your code, repeat, test

*  BDD - Testing at higher level, behaviour driver, "should do this"

*  TDD - one test per method

*  BDD - one test per group

* tobeTruthy()

* tobeFalsy()


* Jasmine, and BDD in general, attempts to describe tests in a human readable format so that nontechnical
people can understand what is being tested

* So Jasmine provides the syntax to do BDD.

* Provides a direct link between the requirement and actual implemenation.

```
  function helloWorld() {
    return 'Hello world!';
  }
```

```
describe('Hello world', () => {
  it('says hello', () => {
    expect(helloWorld()).toEqual('Hello world!'); ④
  });
});
```


- The describe(string, function) function defines what we call a Test Suite

- The it(string, function) function defines an individual Test Spec

- The expect(actual) expression is what we call an Expectation

- The matcher(expected) expression is what we call a Matcher. It does a boolean comparison with
the expected value passed in vs. the actual value passed to the expect function, if they are false
the spec fails.


# Matchers

expect(array).toContain(member);
expect(fn).toThrow(string);
expect(fn).toThrowError(string);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);
expect(number).toBeCloseTo(number, decimalPlaces);
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(number).toBeNaN();
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledTimes(number);
expect(spy).toHaveBeenCalledWith(...arguments);


http://jasmine.github.io/edge/introduction.html#section-Included_Matchers

Video on BDD
https://www.youtube.com/watch?v=BwXuu0gnIoE