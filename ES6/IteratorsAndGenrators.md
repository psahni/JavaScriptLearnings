* Genertors Example

```Javascript
function *naturalNumbers(){
  var n = 0
  while (true){
    yield n++
  }
}
```

````
> var gen = naturalNumbers()
{}
> gen.next()
{ value: 0, done: false }
> gen.next()
{ value: 1, done: false }
````
