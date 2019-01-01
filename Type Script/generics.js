function identity<T>(arg: T): T {
    return arg;
}

/*
We’ve now added a type variable T to the identity function. This T allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use 
again as the return type.
*/

let output = identity<string>("myString");  // type of output will be 'string'

Or

let output = identity("myString");  // type of output will be 'string'
