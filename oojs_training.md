OOJS TOPICS:-


http://javascript.info/object
https://github.com/iamshaunjp/object-oriented-js
Understanding the difference between Object.create() and the new operator
https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358
Object literals vs constructors in JavaScript
https://www.internalpointers.com/post/object-literals-vs-constructors-javascript

Methods and properties
Primitive Types null, boolean, number

Creating your own objects
Javascript classes and constructors
Inheritancex
Method chaining
Prototypes and Prototype Inheritance


#--

const user1 = {
  login: 'user1',
  getLogin: function() {
    console.log(this, this.login, " >> login")
  }
}

user1.getLogin()

- Here we have to create objects of the same type

#--

class with constructor

new User('abc', 'abc@gl.com');

#--
Method chaining

userOne.updateScore().updateScore()

#--
Methods chaining

#--

Filter example

#--

Inheritance

class Admin extends User {

}

const admin = new Admin('', '');

#--

classes are the abstraction built on the top javascript prototype concept / under the hood.

function User(email, name) {
	this.name = name;
	this.email = email;
	this.login = function() {
		console.log(this.email, ' has logged in');
	}
} 

#--

1) user.__proto__
2) User.prototype

Both are equal

user.hasOwnProperty --> Why ?
ƒ hasOwnProperty()

---

Inside the proto properties we have methods that we can use on the given object

Every object has a prototype

Define functions on User.prototype and they will be available on the 
instances of User in the __proto__ property

#--
Prototype inheritance

fn admin(...args) {
		User.apply(this, args); // Don't rewrite the properties
}


Admin.prototype = Object.create(User.prototype);

