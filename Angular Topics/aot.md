https://angular.io/guide/aot-compiler


Just-in-Time (JIT), which compiles your app in the browser at runtime.
Ahead-of-Time (AOT), which compiles your app at build time.



ng build --aot

The ng build command with the --prod meta-flag (ng build --prod) compiles with AOT by default.




Why compile with AOT

https://angular.io/guide/aot-compiler#why-compile-with-aot


* Faster rendering
* Fewer asynchronous requests


How AOT works

It helps to think of the AOT compiler as having two phases: a code analysis phase in which it simply records a 
representation of the source; and a code generation phase in which the compiler's StaticReflector handles the interpretation as well 
as places restrictions on what it interprets.


Error setting
https://angular.io/guide/aot-compiler#expression-syntax