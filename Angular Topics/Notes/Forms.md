https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/

#-----------------------------------------------------
		HOW TO WATCH FORM CHANGES
#-----------------------------------------------------

		this.form.valueChanges
        .map((value) => {
            value.firstName = value.firstName.toUpperCase();
            return value;
        })
        .filter((value) => this.form.valid)
        .subscribe((value) => {
           console.log("Model Driven Form valid value: vm = ",
                       JSON.stringify(value));
        });
        
				
#-----------------------------------------------------
				
				
		form: FormGroup;
    firstName = new FormControl("", Validators.required);		
				
	 constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });
    }
		
#-----------------------------------------------------