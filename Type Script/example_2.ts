var fullName: string = "Jordan Hudges";
let paidAccount: boolean = true;

const versionNumber: number = 1.3;


function sayHello(f, l) {
  let greeting: string = "Hello, ";
  console.log(greeting + f + " " + l);

  /*
    This will throw in error, because we can not declare
    block scope variable again. We have to use 'var' in this scenario
  */
  //let greeting: string = "Good Morning, ";
  //console.log(greeting + f + " " + l);
}

//sayHello("Prashant", "Sahni");


type PlayerArray =  Array<string>
let players : PlayerArray = ["Prashant", "Ankur", "Anand"];
//console.log(players);

let x : number = 100;

// if(x == "100") {
//   console.log("We got it!!");
// }

// Here we'll get an error
