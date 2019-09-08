Mocking test cases
https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/
https://medium.com/@paynoattn/angular2-formbuilder-unit-tests-9da5ef5dbbe5
https://github.com/gothinkster/angular-realworld-example-app


Call a fake function using spyOn


spyOn($cookieStore,'get').and.callFake(function(arg) {
    if (arg === 'someValue'){
        return 'someabc';
    } else if(arg === 'anotherValue') {
        return 'anotherabc';
    }
}


---------------------------------------------------------------------------------------

Http requests mocking:-

1- Subscribe to the results of a request

2- Mock the request using expectOne, expectNone or match

3- flush the request passing dummy values (in case of expectNone this step isn't necessary)

https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
