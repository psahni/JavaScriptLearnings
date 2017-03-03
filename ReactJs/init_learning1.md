
* Separation of concerns

* Components (Reusable)

* Components separate concerns

* Loosely coupled, Highly cohesive

* Abstraction, Composition, Expressivity

  handleSubmit: function(e){
   ....                             // <-- Abstraction
  }


  <TodoList items={this.state}>                       // <-- Composition

  <a> "Add # " + {this.state.items.length + 1} </a>   // <-- Expressivity ( Expressing intent of the developer)


* Reusable Components

* Isolate complexity

* Unit test some piece of code

* Keep your components small

* Put display logic in your components

* JSX - optional preprocessor to let you use HTML like syntax

* Re render your whole app on single data change.

* In 90s Refresh the page when data changes. It was simple.

* Re rendering is expensive. That gives rise to VIRTUAL DOM.

* On every update, we build a new virtual dom subtree, take the diff with the old one, computes the minimal set of DOM mutations and puts them in the queue and batch executes all updates.

* Doom 3 engine

* Manual Update dom operations is slow.

* Virtual dom is fast.

* Automatic top level event delegation.

* Virtual DOM can run in Node.js

* Virtual DOM is not tied the browser. It can be run web worker.

* Components not templates.

* Reload the parts that has been changed.
