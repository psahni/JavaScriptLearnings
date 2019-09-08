- Functions
  - Two ways to define. Function is also an object.
  - Basic Building blocks, fundamental things.
  - Execution contexts
  - arguments and parameters.
  - IIFE

- Concept of 'this'
  - console.log(this) // window object
  - Object example

- Call, Apply, Bind

- Closures
  - Closures have access to the outside variables in which it is defined.
  - function sayHello(name) {
     var text = "Hello " + name;
      return function() {
        console.log(text);
      }
    }



- Variable Hoisting

  - b();
    //c(); // will throw an error
    console.log(a);

    var a = 10;
    function b() {
      console.log("test");
    }

    var c = function() {

    }

- Objects
  - Key value pairs
  - finding property in an object.
  - Searches in prototype if not found


Constructors and Prototypes

 - var person1 = new Person(); var person2 = new Person();
    If you want to create multiple similar objects, you can create your own constructors and therefore your own reference types.

    console.log(person1 instanceof Person); // true
    console.log(person1.constructor === Person); // true

    "When you create a new object using new, the constructor’s prototype property
    is assigned to the [[Prototype]] property of that new object. "


Inheritance


  - Give This example
    Manager.prototype = Object.create(Person.prototype);
    The functions you define on the prototype of Person will be avaiable to objects of manager.



# DIFF BETWEEN OBJECT.CREATE AND using new operator in inheitance.

- new Computer() will invoke the constructor function Computer(){} for one time, while Object.create(Computer.prototype) won't

``
  // Version#1

  function Animal() {
      this.traits = {};
  }

  - Object the diff by executing this code

  function Lion() { 

  }

  Lion.prototype = Object.create(Animal.prototype);

  function Bird() { 

  }

  Bird.prototype = Object.create(Animal.prototype);

``
  // Version#2

  function Animal() {
    this.traits = {};
  }

  function Lion() { 

  }

  Lion.prototype = new Animal();

  function Bird() { 

  }

  Bird.prototype = new Animal();

``

In the version 1, objects of bird and lion will not have traits object available.
In the version 2, objects of bird and lion will have traits object available.

https://stackoverflow.com/questions/29265806/difference-between-creating-inheritance-using-object-create-and-new-operator