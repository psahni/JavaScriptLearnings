The key ideas of Redux are this:
• All of your application’s data is in a single data structure called the state which is held in the
store
• Your app reads the state from this store
• This store is never mutated directly
• User interaction (and other code) fires actions which describe what happened
• A new state is created by combining the old state and the action by a function called the
reducer.


A reducer must be a pure function. That is:
1. It must not mutate the current state directly
2. It must not use any data outside of its arguments


a pure function will always return the same value, given the same set of
arguments. And a pure function won’t call any functions which have an effect on the outside world,
e.g. no database calls, no HTTP calls, and no mutating outside data structures.

Remember that in Redux we do not modify the state. Instead, we create actions which instruct the reducer on how to generate a new state.

* Old state and the action is passed to the reducer.

* We pass action to reducer. An action consists of TYPE and payload parameters.

When we dispatch actions, we’re sending off a notification of what happened. If we want to know
what the current state of the system is, we have to check the state of the store.


import {
 Action,
 Reducer,
 Store,
 createStore
} from 'redux';


let initialState: AppState = { messages: [] };

let reducer: Reducer<AppState> =
	(state: AppState = initialState, action: Action) => {

let store: Store<AppState> = createStore<AppState>(reducer);