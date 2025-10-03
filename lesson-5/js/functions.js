/* STEP 1: Basic browser functions
There are a number of functions that are included with most modern browsers - the replace() function is just one of many */
let text = 'Functions are awsome';
let newText = text.replace('awsome','amazing');
console.log(newText);


// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.
function makeH1Red(){
    let localVariable = ' I am a local variable';
    const h1 = document.querySelector('h1');
    h1.style.color = 'rgba(0, 50, 9, 0.69)';
}
makeH1Red();
/* STEP 2: Anonymous versus named functions */
const step2Button = document.querySelector('#step2');
// step2Button.onclick = function(){
//     alert('anonymous function is called');
// }
// Anonymous

// Named function
function step2Alert(){
    alert('this is a named function');
}
step2Button.onclick = step2Alert;

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, and others are optional. */

// No parameters needed
let random = Math.random();
console.log(random);
// Two parameters needed
let functionText = ' My random number is X';
let newFunctionText = functionText.replace('X',random);
console.log(newFunctionText);

// Parameters optional
let lunchArray =['spicy','bean','burrito'];
let lunch = lunchArray.join();
console.log(lunch);

let lunch2 = lunchArray.join('-');
console.log(lunch2);

//Traditional function
function add(x,y){
    return x + y
}
let output = add(2,3);
console.log(output);

//Arrow function syntax
/*
const functionName = (param1,param2...) =>{
    //function body
    }

    */

    const addArrow = (x,y) => x + y;
    console.log(addArrow(4,5));


// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions