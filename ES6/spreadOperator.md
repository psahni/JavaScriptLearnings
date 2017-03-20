var arr = [1,2,3]
[...arr];

//[1, 2, 3];

arr2 = [0, ...arr, 8];

//[0, 1, 2, 3, 8];


[a,b] = arr
// a 1
// b 2


Example:-

let array1 = [ 'Prashant', 'Ankur', 'Naina'];
let array2 = [1,2,3,4];

console.log([ ...array2, ...array1]); //[1, 2, 3, 4, "Prashant", "Ankur", "Naina"]


Check this:-
{
  ...state, all: ['A', 'B', 'C']
}
