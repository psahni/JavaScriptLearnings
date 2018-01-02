var fullName = "Jordan Hudges";
var paidAccount = true;
var versionNumber = 1.3;
function sayHello(f, l) {
    var greeting = "Hello, ";
    console.log(greeting + f + " " + l);
    /*
      This will throw in error, because we can not declare
      block scope variable again. We have to use 'var' in this scenario
    */
    //let greeting: string = "Good Morning, ";
    //console.log(greeting + f + " " + l);
}
var players = ["Prashant", "Ankur", "Anand"];
//console.log(players);
var x = 100;
// if(x == "100") {
//   console.log("We got it!!");
// }
// Here we'll get an error
