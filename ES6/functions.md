* Arrow functions

```Javascript
var squared = function(x){
  return x*x;
}
```
Similar function in ES6 can be written as:-

```Javascript
squared = x => x*x
```


* Callback Example with arrow function

```Javascript
let handleMessage = (message, handler) => handler("Prashant Says " + message);

handleMessage("Hello", (finalMessage) => console.log(finalMessage));
```

* Object enhancement

```Javascript

var name = "Prashant";
var city = "Agra";

var car = {
  		   name,
           city,
  		   go() {
             console.log("Yay!");
           }
}
console.log(car.go());
```


* I read about MAP, SET, Genertors.

* Generators Example

```Javascript
function *naturalNumbers(){
  var n = 0
  while (true){
    yield n++
  }
}
```

```
  > var gen = naturalNumbers()
  {}
  > gen.next()
  { value: 0, done: false }
  > gen.next()
  { value: 1, done: false }
```
