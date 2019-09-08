What ?
* A zone is an execution context that persists across async tasks, and allows the creator of the zone to observe and control execution of 
the code within the zone.

* Zonejs is to maintain contextual execution for single or multi-leveled asynchronous methods. So, it means it helps to keep track of the 
parent context of currently executing asynchronous method.

https://stackoverflow.com/questions/40902572/what-is-the-use-of-zone-js-in-angular-2



# AngularTO Progressive Web Apps & Zone.js
		
https://www.youtube.com/watch?v=lvF8E5_YSXM
		
* Lighthouse: chrome extension
		- check https
		- check without internet it works or not

* Service Worker
	- Runs behind the scenes in the browser
	
	/* Will learn about service workers later */

	
* What is Zone JS ?
	- Library that helps manage async Javascript Code.
	
	-- JS executes to complete. JS executes all code till it completes.
	-- Therefore all renders happen at parse time or in response to async event
	-- Zone.js makes Angular magic..without $scope/$digest
	
	
Question - Event Queue ?

----------------------------------------------------------------------------------------------------------------
Brian Ford - Zones - NG-Conf 2014

https://www.youtube.com/watch?v=3IqtmUscE_U

Domains - Node
Thread locals  - Java
Dart has Zones
Zone js is a port of Dart Zone to Javascript



* Zonejs Execution Context

a();
setTimeout(b, 0)
setTimeout(c, 0)
d();

Running Order:-
a -> d -> b(async) -> c(async)


* What if we want to calculate the total time spent from start to end. 
	We can not calculate the total time span like this:-

start();                 or Zone Enter
a();
setTimeout(b, 0)
setTimeout(c, 0)
d();
stop();								or Zone Leave


zone.run(function() {
	a();
	setTimeout(b,0); 	// Async
	setTimeout(c,0);  // Async
	d();
});

Means Async tasks run in the same zone as they we registered.

Zonejs can be use to:-

Debugging
Testing/Mocking
Profiling
Or something else crazy stuff

#--

main();

Zone.fork(Zone.longStackTraceZone).run(main);


#--

* Replacement of angular digest/apply

zone.fork({
	onZoneLeave: function() {
		angular.digest();
	}
}).run(function() {
	angular.bootstrap();
});

#--

So Zonejs is used for dirty checking in angular and you wont have to worry about - $rootScope.apply

#--

Just curious if it has any performance implications﻿ 

yes, actually.. it has performance implications.. in angular 2 whenever a change occurs ... it runs this change detection.. i.e zone.js on 
entire dom and changes the dom wherever the changes needs to be done. which kinda gets slow when the application grows.

This is why having good practices is important, such as using immutable object or a good detection strategy depending on your needs.



