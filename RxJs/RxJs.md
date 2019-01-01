What is RxJs:-

Reactive Programming Using Observables

What are Observables:-

- JS is single threaded, so we event loops if we have to process something after the event happens.

- We always have something to process on some event, so we can use callbacks or we can use promises.

- Observables are for the similar job

- Manage Asynchronous Data (which will be updated later)

- RxJS offers a clean way to leverage the power of observables to work with complex data, 
to be cancellable and to clean up after themselves.

- To use observables, Angular uses a third-party library called Reactive Extensions (RxJS). 

#

https://www.youtube.com/watch?v=PhggNGsSQyg


Installing:-

- mkdir rxjs & cd rxjs
- yarn init -y
- yarn add rxjs webpack webpack-dev-server typescript ts-loader
- yarn add webpack-cli --dev

Importing the lib:-

import * as Rx from "rxjs/Observable"

or

import { Observable } from 'rxjs/Observable'

var observable = Observable.create((observer: any) => {
	observer.next('Hey Guys!')
});


#--
import { fromEvent } from 'rxjs/Observable/fromEvent'
fromEvent(document, 'mousemove')
#--

Subjects:-
import { Subject } from 'rxjs/Subject';


Rx JS and Angular

* Subscribe form

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
        .filter(data => this.form.valid)
        .subscribe( data => console.log(JSON.stringify(data)));
		}
		
this.form.valid is true when the whole form is valid. So while the form is invalid .filter(data ⇒ this.form.valid) doesn’t push items to the output stream, when the form is 
valid it does start pushing items to the output stream.


https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/rxjs-and-angular/


Angular has a few public facing APIs that use Observables, the EventEmitter, Forms and HTTP.
You are not forced to use observables in Angular, you can use as much RxJS or as little as you want.

#----------------------------------------------------------------------------------------
reactivex.io

- reactivex api implementation
- async programming. A program that does something and wait for something to happen and then react to it.

- We wait for the response to come from the server and do something. So something will happen in the future.
- Some event will occur in the future and we need some code that will handle that event.


- Observable streams



- Programming paradigm that works with Asynchronous data streams.

* STREAM
- A stream is a sequence of ongoing events ordered in time.

* OBSERVABLES 
- Observables are used to watch these streams and emit functions when value, error or complete signal is returned.
- Observables can be subscribed to by an observer.

* REACTIVE EXTENSIONS/ ReactiveX
- This is a library

* Observable from events

=========================================================================================

'of' operator


Detail Description Of RxJs/Observable Intro
	https://developer.telerik.com/topics/web-development/introduction-observables-angular-developers/