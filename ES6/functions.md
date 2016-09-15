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
