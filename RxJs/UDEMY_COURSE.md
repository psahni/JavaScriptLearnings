git checkout -b 1-operators origin/1-operators


Observable Pattern
Stream of values

Example:-


let c = 1;
setTimeInterval(() => {
	c+=1;
}, 1000);


Repo:- angular-university/rxjs-course

    RxJS Subjects
--------------------------

const subject = new Subject();
// subject is both the observable and observer

const series$ = subject.asObservable();

series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();


Behaviour Subject

Normally we subscribe earlier than emitting a value, sometimes we subscribe after the subject emits values, in that case
the subject that is after created will not be able to receive that emitted value.
So we use BehaviourSubject in this case, but we dont complete the subject. That we dont call subject.complete()
So even subscription call is made after the value is emitted, it is going to receive the value.
It will give us the last value. or the current value

const subject = new BehaviourSubject();
// subject is both the observable and observer

const series$ = subject.asObservable();

series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);


series$.subscribe(val => console.log('val:' + val)); // val: 3 
---> Here only the last emitted value will be received.

#---

AsyncSubject 

const subject = new AsyncSubject();
const series$ = subject.asObservable();

series$.subscribe(val => console.log('first sub:', val));

subject.next(1);
subject.next(2);
subject.next(3);

subject.complete();

* Here only the last emitted value will be printed.

series$.subscribe(val => console.log('second sub:', val));

* Both first and second subscription will catch the values, but only the last emitted one value will be consumed and printed to the console.

#---

ReplaySubject
It will consume all the emitted values whether the subscription is made early 
or later.


#---

What Subjects to use ?

Design a centralize data store
Service
@Injectable({
	providedIn: 'root'
})

export class Store {

	
	private subject = new BehaviourSubject<Course[]>([]);
	
	courses: Observable<Course[]> = this.subject.asObservable();
	
}

* How are we going to find these observables ?
	- This is one of those situations, where is not advisable to use Observable.create, a good situation for using Subject.
	
* We want the late subscribers of the observables also consume the emitted value.
So we will use the BehaviourSubject

#---

DIFFERENCE BETWEEN SUBJECT AND OBSERVABLE

* One very very important difference. Since Observable is just a function, it does not have any state, so for every new Observer, it executes the observable create code again and again. This results in:

	The code is run for each observer . If its a HTTP call, it gets called for each observer.
	
	BehaviorSubject (or Subject ) stores observer details, runs the code only once and gives the result to all observers .
	
	http://jsbin.com/qowulet/edit?js,console
	
	
	** Observe how using Observable.create created different output for each observer, but BehaviorSubject gave the same output for all 
	observers. This is important.

	** BehaviorSubject Has state. Stores data in memory
	
	Observable: subscribe method will always trigger the onNext method associated with the observer and bring the return value. 
	BehaviourSubject/Subject: Will always return the latest value in the stream. here subscribe method with the subject will not trigger 
	onNext method of its Observer untill it finds the latest value in the stream

	https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
	
#---

