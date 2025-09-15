/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myAge;
        let string;
        let para = document.querySelector('body p');
        console.log(para);

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = 'Shivali';
        myAge = 30;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName = 'Shivi Dhaka';
        console.log(myName);
        myAge = 31;
        string = myName + ', ' + myAge;
       
        para.textContent = string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse = 6;
        para.textContent = numCourse;

		// Strings (use '' or "")

        let stringCourse = 'ClientSide JS';
         para.textContent = stringCourse;
		// Booleans
        let iAmLive = true;
        console.log(iAmLive);
        let compare = 6 > 3;
        para.textContent = 'The value of comparison is: ' + compare;

		// Arrays
        let myArrays =['John','Bob','Lisa'];
        console.log(myArrays[2]);

        let myArrays2 =[20,50,70];
         console.log(myArrays2[1]);

		
		// Objects
        let dog = {
            fName : 'Simba',
            breed: 'Staffy Mix',
            color:'Brown'
        }
        console.log(dog.fName);
		// STEP 5: Typing (JavaScript is a loosely-typed language)
        var myNumber = 500;
        console.log(typeof(myNumber));
        myNumber = 'shivi';
         console.log(typeof(myNumber));

        let x;
        console.log(x == null);
        console.log(x === null);
