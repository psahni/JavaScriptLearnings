# Useful functions

* _.map

* _.extend or _.assign
```javascript
    var objA = {"name": "colin", "car": "suzuki"};
    
    var objB = {"name": "james", "age": 17, "city": "Delhi"};
    
    document.write(JSON.stringify(_.assign(objA, objB))); 
```

* _.fromPairs
```javscript
_.fromPairs([['a', 1], ['b', 2]]);
   ➜ { 'a': 1, 'b': 2 }
```

* _.flatten

* _.indexOf([1, 2, 1, 2], 2);
   ➜ 1

* _.nth(array, [n=0])
     var array = ['a', 'b', 'c', 'd'];

    _.nth(array, 1);
    ➜ 'b'

* _.concat
   .concat([1], 2, [3], [[4]]);  => [1, 2, 3, [4]]

* _.remove [https://lodash.com/docs#remove]


*  
```javascript
  _.take([1, 2, 3]); -> 1
   _.take([1, 2, 3], 2); -> [1,2]
```  

* _takeWhile (https://lodash.com/docs#takeWhile)

### Lodash Console
* https://jsfiddle.net/psahni/sr8dxdr0/
