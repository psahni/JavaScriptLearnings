## Useful functions

* _.map

-> Transformation:
  - The map() method creates a new array with the results of calling a function for every array element.
  - Transform one array into another.
-> map() does not change the original array.

```javascript
var fruits = [
  {
    name: 'apple',
    price: 1.99,
    onSale: true
  },
  {
    name: 'orange',
    price: 0.99,
    onSale: true
  }
];

array = _.map(fruits, function(fruit){
  return "I eat" + " " + fruit.name
})
console.log(fruits);
```

* _.pluck
```javascript
var fruits = [
  {
    name: 'apple',
    price: 1.99,
    onSale: true
  },
  {
    name: 'orange',
    price: 0.99,
    onSale: true
  }
];

_.pluck(fruits, 'name');
// -> ['apple', 'orange']
```

* _.extend or _.assign
  ```javascript
      var objA = {"name": "colin", "car": "suzuki"};

      var objB = {"name": "james", "age": 17, "city": "Delhi"};

    _.assign(objA, objB)
  ```

* _.fromPairs
```javascript
  _.fromPairs([['a', 1], ['b', 2]]);
     ➜ { 'a': 1, 'b': 2 }
```

* _.flatten

* _.indexOf
```javascript
 _.indexOf([1, 2, 1, 2], 2);
   ➜ 1
```   

* _.nth element of array
```javascript
_.nth(array, [n=0])
     var array = ['a', 'b', 'c', 'd'];

    _.nth(array, 1);
    ➜ 'b'
```
* _.concat

```javascript
   .concat([1], 2, [3], [[4]]);  => [1, 2, 3, [4]]
```

* _.remove [https://lodash.com/docs#remove]


*  _.take
```javascript
  _.take([1, 2, 3]); -> 1
   _.take([1, 2, 3], 2); -> [1,2]
```  

* _takeWhile (https://lodash.com/docs#takeWhile)

### Lodash Console
* https://jsfiddle.net/psahni/sr8dxdr0/
## Refs
* https://leanpub.com/lodashcookbook/read#leanpub-auto-map
* http://elijahmanor.com/reducing-filter-and-map-down-to-reduce/
