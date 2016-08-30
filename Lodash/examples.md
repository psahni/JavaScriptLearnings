# Useful functions

1. _.map

2. _.extend or _.assign

    var objA = {"name": "colin", "car": "suzuki"};
    var objB = {"name": "james", "age": 17, "city": "Delhi"};
    document.write(JSON.stringify(_.assign(objA, objB)));

3. _.fromPairs([['a', 1], ['b', 2]]);
   ➜ { 'a': 1, 'b': 2 }

4. _.flatten

5. _.indexOf([1, 2, 1, 2], 2);
   ➜ 1

6. _.nth(array, [n=0])
     var array = ['a', 'b', 'c', 'd'];

    _.nth(array, 1);
    ➜ 'b'

7. _.concat
   .concat([1], 2, [3], [[4]]);  => [1, 2, 3, [4]]

8. _.remove [https://lodash.com/docs#remove]


9. 

### Lodash Console
* https://jsfiddle.net/psahni/sr8dxdr0/
