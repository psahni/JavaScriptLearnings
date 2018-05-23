
* When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.


* Nearly all objects in JavaScript are instances of 'Object' which sits on the top of a prototype chain.


* The [[Prototype]] is accessed using the accessors Object.getPrototypeOf() and Object.setPrototypeOf(). This is equivalent to the JavaScript property __proto__ which is non-standard but de-facto implemented by many browsers.

```javascript
var obj = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};


var p = Object.create(obj);
// p is an object that inherits from o. Means the value of p.__proto__ is obj.

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
// when p.m is called, 'this' refers to p.
```



* [Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

