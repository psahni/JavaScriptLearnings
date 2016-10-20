
Source:-
https://www.youtube.com/watch?v=XxVg_s8xAms


Mutation

Components

No explicit data binding

Initial Render

render: function(){
  ..                              It returns representation of view.
}



- Two Pass Rendering
  * Generate Markup
  * Attach Events

- Instead of update use Reconcile


https://www.youtube.com/watch?v=fZKaq623y38

* In earlier frameworks, view is tied to the html. When the model is updated view is also updated.

* Model is tied to the view. When view is updated, model is also updated and viceversa.

* Model -> View -> HTML. In small app, its easy. In bigger app, this becomes complicated.

* We are updating the dom, which is expensive. Bug is very difficult to track down.

* React is different than typical model view paradigm.

* Dom manipulation becomes easy.

* It abstracts away HTML.

It has algorithms that calculates the dom difference and updates it automatically, we don't need to do anything.

There is not bidirectional data flow, there is bidirectional data flow.

Imperative Programming:
  Example: You pull out users from database, and then you filter those users using some condition.
Declarative Programming
  Example: You fire sql query into database with where clause smartly.

Another example, when you transform an array through looping is Imperative, but using ."\_".each of underscore library is Declarative. Declarative tends to be more abstractive. Focus on what to be done.

* React re renders the components below the component that has been changed, not the entire application.

* Every component in React has a state or state object.
