REDUX


What and Why:-
- Whole State of an application is contained in Single JS object
- 



SETUP

- yarn add @ngrx/store


Reducer

Let’s talk about the reducer first. Here’s the idea of a reducer: it takes the old state and an action
and returns a new state.
A reducer must be a pure function100. That is:
1. It must not mutate the current state directly
2. It must not use any data outside of its arguments


Pure Function

a pure function will always return the same value, given the same set of
arguments. And a pure function won’t call any functions which have an effect on the outside world,
e.g. no database calls, no HTTP calls, and no mutating outside data structures


About Switch Statements in reducers:-

1. Having your state changes centralized in one place can help a ton in maintaining
your program, particularly because it’s easy to track down where the changes are
happening when they’re all together. (Furthermore, you can easily locate what state
changes as the result of any action because you can search your code for the token
specified for that action’s type)
2. You can (and often do) break your reducers down into several sub-reducers which
each manage a different branch of the state tree. We’ll talk about this later



Action						Reducer

Type							Action
Payload						State


If you’re the type of person who likes RxJS and Observables, you might notice that
implementing our own subscription listeners could also be implemented using RxJS. You
could rewrite our Store to use Observables instead of our own subscriptions

Using RxJS for the Store is an interesting and powerful pattern if you’re willing to use
RxJS for the backbone of our application data.

TODO:-
- State, Dispatcher, Reducer, Actions


Questions:-

What is RxJS
What is Observable
What is subscribe





